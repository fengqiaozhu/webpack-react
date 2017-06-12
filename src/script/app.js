// import "../style/index.css";
// import "../style/less/test.less";
import "../style/sass/test.scss";
import React from "react";
import ReactDOM from "react-dom";
import Test from "./components/component1.jsx";
var p = document.querySelector(".p");

ReactDOM.render(
	<Test />,
	p
)
// p.innerHTML="你好，世界!你好";