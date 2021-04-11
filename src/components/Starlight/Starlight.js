import React from "react";

import Warning from "../Warning/Warning";

import About from "../About/About";

import Services from "../Services/Services";

import Portfolio from "../Portfolio/Portfolio";

import Contacts from "../Contacts/Contacts";

function Starlight() {
  return (
    <main className="content">
      <Warning />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
    </main>
  );
}

export default Starlight;
