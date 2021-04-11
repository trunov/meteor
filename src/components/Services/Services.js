import React from "react";

import { TranslationContext } from "../../context/TranslationContext";

function Services() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="services">
      <h2 className="services__header">{translation.services__header}</h2>
      <h3 className="services__info">{translation.services__info}</h3>
      <p className="services__paragraph">
      {translation.services__paragraph}
      </p>
      <ul className="services__wrap">
        <li className="services__package">
          <h3 className="services__package__info">{translation.services__package__info1}</h3>
          <p className="services__package__paragraph">{translation.services__package__p1}</p>
          <p className="services__package__paragraph">{translation.services__package__p2}</p>
          <p className="services__package__paragraph">{translation.services__package__p3}</p>
          <p className="services__package__paragraph">{translation.services__package__p4}</p>
          <p className="services__package__paragraph">{translation.services__package__p5}</p>
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
