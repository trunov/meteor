import React from "react";

import { TranslationContext } from "../../context/TranslationContext";

function Portfolio() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
    </section>
  );
}

export default Portfolio;
