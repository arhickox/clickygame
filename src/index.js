//imports
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

//renders to root div in index.html
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
