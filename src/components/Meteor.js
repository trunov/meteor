import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/header.png";

function Meteor() {
  return (
    <Link exact to="/" className="header__wrap_one">
      <img src={logo} alt="логотип" className="header__logo" />
      <h1 className="header__text">METEOR</h1>
    </Link>
  );
}

export default Meteor;
