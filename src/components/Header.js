import React from "react";

import { NavLink, Link } from "react-router-dom";

import logo from "../images/header.png";

function Header({ onEnButton, onRuButton, isEnClicked, isRuClicked }) {
  return (
    <header className="header">
      <Link exact to="/" className="header__wrap_one">
        <img src={logo} alt="логотип" className="header__logo" />
        <h1 className="header__text">METEOR</h1>
      </Link>
      {/* <div className="header__wrap_one">
        <img src={logo} alt="логотип" className="header__logo" />
        <h1 className="header__text">METEOR</h1>
      </div> */}
      <div className="header__wrap_two">
        <a className="header__phone" href="tel:+37256691780">
          +372 5669 1780
        </a>
        <div className="header__language">
          <NavLink
            exact
            to="/"
            activeClassName="header__language__button_active"
            className="header__language__button"
          >
            EN
          </NavLink>
          <NavLink
            to="/ru"
            activeClassName="header__language__button_active"
            className="header__language__button"
          >
            RU
          </NavLink>
        </div>
        <button className="header__menu"></button>
      </div>
    </header>
  );
}

export default Header;
