import React from "react";

import { TranslationContext } from "../../context/TranslationContext";

import SvgMeteorHeader from "../SvgMeteorHeader/SvgMeteorHeader";

import WarningList from "../WarningList";

// import logo from "../../images/meteor_header.svg";
import union from "../../images/union.svg";

function Warning() {
  const translation = React.useContext(TranslationContext);

  return (
    <section className="warning">
      <div className="warning__wrap">
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

          <WarningList />
        </div>
      <div>
      <SvgMeteorHeader />
      </div>
      </div>
      <img
        className="warning__main-illustration"
        src={union}
        alt="main-illustration"
      />
    </section>
  );
}

export default Warning;
