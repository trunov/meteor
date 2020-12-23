import React from "react";

import { TranslationContext } from "../../context/TranslationContext";

import about from "../../images/laptop.svg";

function About() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="about">
      <div className="about__wrap">
        <h2 className="about__info">{translation.about__info}</h2>
        <p className="about__paragraph">{translation.about__paragraph}</p>
      </div>
      <img  src={about} alt="laptop" />
    </section>
  );
}

export default About;
