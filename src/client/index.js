import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import Root from "./Root";
import resetStyles from "./meyer-reset.css";
import normalizeStyles from "./normalize.css";
import rootCss from "./root-css.css";

const root = document.querySelector("#root");

const mount = RootComponent => {
  render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    root
  );
};

if (module.hot) {
  module.hot.accept("./Root", () => {
    // eslint-disable-next-line global-require,import/newline-after-import
    const RootComponent = require("./Root").default;
    mount(RootComponent);
  });
}

mount(Root);
