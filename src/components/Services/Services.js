import React from "react";

import { TranslationContext } from "../../context/TranslationContext";

function Services() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="services">
      <h2 className="services__header">Services</h2>
      <h3 className="services__info">Single Page Development</h3>
      <p className="services__paragraph">
        Single Page Development is a one-page website adapted to promote a
        specific product or service. The special structure of the landing page
        stimulates the user to perceive the given information faster and make
        purchases.
      </p>
      <ul className="services__wrap">
        <li className="services__package">
          <h3 className="services__package__info">Minimum</h3>
          <p className="services__package__paragraph">- Selling prototype</p>
          <p className="services__package__paragraph">- Copywriting - text</p>
          <p className="services__package__paragraph">- Selling prototype</p>
          <p className="services__package__paragraph">- Copywriting - text</p>
          <p className="services__package__paragraph">220&euro;</p>
        </li>
        <li className="services__package">
          <h3 className="services__package__info">Standard</h3>
          <p className="services__package__paragraph">- Selling prototype</p>
          <p className="services__package__paragraph">- Copywriting - text</p>
          <p className="services__package__paragraph">- Selling prototype</p>
          <p className="services__package__paragraph">- Copywriting - text</p>
          <p className="services__package__paragraph">220&euro;</p>
        </li>
        <li className="services__package">
          <h3 className="services__package__info">Maximum</h3>
          <p className="services__package__paragraph">- Selling prototype</p>
          <p className="services__package__paragraph">- Copywriting - text</p>
          <p className="services__package__paragraph">- Selling prototype</p>
          <p className="services__package__paragraph">- Copywriting - text</p>
          <p className="services__package__paragraph">220&euro;</p>
        </li>
      </ul>
    </section>
  );
}

export default Services;
