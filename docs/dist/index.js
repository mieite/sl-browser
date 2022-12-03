import * as __SNOWPACK_ENV__ from '../snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../snowpack/pkg/react.js";
import ReactDOM from "../snowpack/pkg/react-dom.js";
import Main from "./Main/index.js";
import "./index.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "VERY NIFTY STREAMER SONG LIST HISTORY BROWSING TOOL"), /* @__PURE__ */ React.createElement("h4", null, "coded (poorly) by pirate_patch"), /* @__PURE__ */ React.createElement(Main, null)), ","), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
