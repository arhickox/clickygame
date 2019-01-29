//imports
import React from "react";
import "./style.css";

//jumbotron
//seperate from navbar header
function Header() {
  return (
    <header className="header">
      <h1>Memory Game</h1>
      <h2>Click a character to earn points, but don't click any more than once.</h2>
    </header>
  );
}

//export
export default Header;
