import React from "react";

import logo from "../images/header.png";


function Header({ onEnButton, onRuButton, isEnClicked, isRuClicked }) {
  
  return (
    <header className="header">
      <div className="header__wrap_one">
        <img src={logo} alt="логотип" className="header__logo" />
        <h1 className="header__text">METEOR</h1>
      </div>
      <div className="header__wrap_two">
        <a className="header__phone" href="tel:+37256691780">+372 5669 1780</a>
        <div className="header__language">
          <button
            onClick = {onEnButton}
            aria-label="EN"
            type="button"
            className={`header__language__button ${isEnClicked && "header__language__button_active"}`}
          >EN</button>
          <button
            onClick = {onRuButton}
            aria-label="RU"
            type="button"
            className={`header__language__button ${isRuClicked && "header__language__button_active"}`}
          >RU</button>
        </div>
        <button className="header__menu"></button>
      </div>
    </header>
  );
}

export default Header;
