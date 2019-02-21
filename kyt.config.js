const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  reactHotLoader: true,
  // clientURL: "http://172.22.22.54:3001",
  // clientURL: "http://localhost:3001",
  clientURL: "http://192.168.1.129:3001",
  debug: false,
  hasServer: false,
  modifyWebpackConfig: (config, options) => {
    if (options.type === "client") {
      config.plugins.push(
        new HtmlWebpackPlugin({
          template: "src/index.ejs",
          // Sort the chunks so that the scripts are added in the correct order.
          chunksSortMode: (chunk1, chunk2) => {
            const orders = ["manifest", "vendor", "main"];
            const order1 = orders.indexOf(chunk1.names[0]);
            const order2 = orders.indexOf(chunk2.names[0]);
            return order1 - order2;
          },
        })
      );
    }

    // console.log(config);
    // console.log("===================");
    // console.log("===================");
    // console.log("===================");
    // console.log(options);

    config.resolve.alias = {
      TweenLite: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TweenLite.js"
      ),
      TweenMax: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TweenMax.js"
      ),
      TimelineLite: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TimelineLite.js"
      ),
      TimelineMax: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TimelineMax.js"
      ),
      ScrollMagic: path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
      ),
      "animation.gsap": path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
      ),
      "debug.addIndicators": path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
      ),
    };

    // Keep CSS class (but still segment SASS classes)
    const rules = config.module.rules;
    const cssRule = rules.find(rule => String(rule.test) === String(/\.css$/));
    Reflect.deleteProperty(cssRule, "loader");
    cssRule.use = ["style-loader", "css-loader"];

    // Inline SVG support found here:
    // https://github.com/NYTimes/kyt/issues/432#issuecomment-285034437
    // Config copied from here:
    // https://github.com/cleverfranke/cf-kyt-starter-universal-redux/blob/master/kyt.config.js
    const appConfig = Object.assign({}, config);
    const babelLoader = appConfig.module.rules.find(
      loader => loader.loader === "babel-loader"
    );

    // Exclude inline.svg from url-loader
    const urlLoader = appConfig.module.rules.find(
      loader => loader.loader === "file-loader"
    );
    urlLoader.test = /\.jpe?g$|\.gif$|\.png$|\.eot$|\.ttf$|\.woff$|\.woff2$|^(?!.*\.inline\.svg$).*\.svg$/; // eslint-disable-line max-len

    // Create a new loader to handle inline.svg files and pass the same options
    // as used for BabelLoader
    const svgRules = {
      test: /inline\.svg$/,
      use: [
        {
          loader: "babel-loader",
          options: babelLoader.options,
        },
        {
          loader: "react-svg-loader",
          options: {
            svgo: {
              pretty: true,
              plugins: [
                { cleanupIDs: false },
                { convertPathData: false },
                { convertShapeToPath: { convertArcs: true } },
              ],
            },
          },
        },
      ],
    };
    appConfig.module.rules.unshift(svgRules);

    return appConfig;
  },
};
