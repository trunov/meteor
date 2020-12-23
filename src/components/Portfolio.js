import React from "react";

import { TranslationContext } from "../context/TranslationContext";

function Portfolio() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="portfolio">
      {/* <div className="warning__wrap">
        <div className="warning__subsection">
          <h1 className="warning__starlight">
            {translation.title_word1}
            <span className="warning__starlight_span">
              {translation.title_word2}
            </span>
            {translation.title_word3}
            <br />
            {translation.title_word4}
            <span className="warning__starlight_span">
              {translation.title_word5}
            </span>
          </h1>
          <button
            aria-label="discuss"
            type="button"
            className="warning__button"
          >
            {translation.warning_button}
          </button>

          <ul className="warning__links">
            <li className="warning__link-item">
              <img src={ul} alt="git" className="warning__social-icon" />
              <a href="#" target="_blank" className="warning__link">
                Git
              </a>
            </li>
            <li className="warning__link-item">
              <img src={ul} alt="telegram" className="warning__social-icon" />
              <a href="#" target="_blank" className="warning__link">
                Telegram
              </a>
            </li>
            <li className="warning__link-item">
              <img src={ul} alt="facebook" className="warning__social-icon" />
              <a href="#" target="_blank" className="warning__link">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      <div>
      <SvgMeteorHeader />
      </div>
      </div>
      <img
        className="warning__main-illustration"
        src={union}
        alt="main-illustration"
      /> */}
    </section>
  );
}

export default Portfolio;
