import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./index";
import './index.scss';

let a = 'haha';

ReactDOM.render(<HelloMessage name={a} />, document.getElementById("app"));
ReactDOM.render(<HelloMessage name={a} />, document.getElementById("app2"));