import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// JSXは一つのAppに一つのタグしか作ることができないので、<>もしくは<React.Fragmentで囲うこと。>

ReactDom.render(<App />, document.querySelector("#root"));
