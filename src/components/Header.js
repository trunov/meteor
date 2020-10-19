import React from "react";
import logo from "../images/header.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
      <h1 className="header__text">METEOR</h1>
    </header>
  );
}

export default Header;