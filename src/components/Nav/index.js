//imports
import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

//Navbar Component
function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Memory Game</a>
        </li>
        <NavMessage score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

//export
export default Nav;
