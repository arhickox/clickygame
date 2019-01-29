//imports
import React from "react";
import "./style.css";

//main container
function Container(props) {
  return <main className="container">{props.children}</main>;
}

//export
export default Container;
