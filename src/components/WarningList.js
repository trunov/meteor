import React from "react";

import ul from "../images/vec.svg";

import { TranslationContext } from "../context/TranslationContext";

function WarningList() {
  const translation = React.useContext(TranslationContext);

  return (
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
  );
}

export default WarningList;
