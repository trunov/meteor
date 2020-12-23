import React from "react";

import Warning from "../Warning/Warning";

import About from "../About/About";

import Services from "../Services/Services";

import Portfolio from "../Portfolio/Portfolio";

function Starlight() {
  return (
    <main className="content">
      <Warning />
      <About />
      <Services />
      <Portfolio />
    </main>
  );
}

export default Starlight;
