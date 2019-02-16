import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "../components/App";
// import "./meyer-reset.css";
// import "./normalize.css";
// import "./root-css.css";

// Possible smoothscroll solutions:
// - Smooth Scrollbar
//    https://github.com/janpaepke/ScrollMagic/issues/652
// - Bad: Nicescroll, touchpad scroll is not nice.

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
  module.hot.accept("../components/App", () => {
    // eslint-disable-next-line global-require,import/newline-after-import
    const RootComponent = require("../components/App").default;
    mount(RootComponent);
  });
}

mount(App);
