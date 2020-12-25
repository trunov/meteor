import React from "react";

import { TranslationContext } from "../../context/TranslationContext";

import portfolio from "../../images/portfolio.png";

function Portfolio() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Portfolio</h2>
      <ul className="portfolio__wrap">
        <li className="portfolio__package">
          <img
            alt="A comfortable bed"
            src={portfolio}
            className="portfolio__image"
          />
          <h3 className="portfolio__package__info">Project Name</h3>
          <p className="portfolio__package__paragraph">
            Planning for the future, our SEO agency opens up a full range of
            opportunities for managing and increasing
          </p>
        </li>
        <li className="portfolio__package">
          <img
            alt="A comfortable bed"
            src={portfolio}
            className="portfolio__image"
          />
          <h3 className="portfolio__package__info">Project Name</h3>
          <p className="portfolio__package__paragraph">
            Planning for the future, our SEO agency opens up a full range of
            opportunities for managing and increasing
          </p>
        </li>
        <li className="portfolio__package">
          <img
            alt="A comfortable bed"
            src={portfolio}
            className="portfolio__image"
          />
          <h3 className="portfolio__package__info">Project Name</h3>
          <p className="portfolio__package__paragraph">
            Planning for the future, our SEO agency opens up a full range of
            opportunities for managing and increasing
          </p>
        </li>
        <li className="portfolio__package">
          <img
            alt="A comfortable bed"
            src={portfolio}
            className="portfolio__image"
          />
          <h3 className="portfolio__package__info">Project Name</h3>
          <p className="portfolio__package__paragraph">
            Planning for the future, our SEO agency opens up a full range of
            opportunities for managing and increasing
          </p>
        </li>
      </ul>
      <div className="portfolio__button__wraper">
        {" "}
        <button
          aria-label="portfolio__button"
          type="button"
          className="portfolio__button"
        >
          more projects
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
