import React from "react";

import { TranslationContext } from "../context/TranslationContext";

function DiscussButton() {
  const translation = React.useContext(TranslationContext);

  return (
    <button aria-label="discuss" type="button" className="button">
      {translation.warning_button}
    </button>
  );
}

export default DiscussButton;
