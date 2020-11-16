import React, { useRef, useEffect } from "react";
import Header from "./Header";
import Starlight from "./Starlight/Starlight";

import useWindowSize from "../hooks/useWindowSize";

import {
  TranslationContext,
  translations,
} from "../context/TranslationContext";

function App() {
  const app = useRef();
  const scrollContainer = useRef();

  const size = useWindowSize();

  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // variables

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;

    const velocity = +acceleration;
    // const skew = velocity * 10.5;

    //
    scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px)`;

    requestAnimationFrame(() => skewScrolling());
  };

  const [lang, setLang] = React.useState("en");

  const [
    isLanguageEnButtonPressed,
    setLanguageEnButtonPressed,
  ] = React.useState(true);
  const [
    isLanguageRuButtonPressed,
    setLanguageRuButtonPressed,
  ] = React.useState(false);

  function handleEnButton() {
    setLanguageRuButtonPressed(false);
    setLanguageEnButtonPressed(true);
    setLang("en");
  }

  function handleRuButton() {
    setLanguageEnButtonPressed(false);
    setLanguageRuButtonPressed(true);
    setLang("ru");
  }

  return (
    <TranslationContext.Provider value={translations[lang]}>
      <div ref={app} className="page">
        <div ref={scrollContainer} className="scroll">
          <Header
            onEnButton={handleEnButton}
            onRuButton={handleRuButton}
            isEnClicked={isLanguageEnButtonPressed}
            isRuClicked={isLanguageRuButtonPressed}
          />
          <Starlight />
        </div>
      </div>
    </TranslationContext.Provider>
  );
}

export default App;
