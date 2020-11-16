import React from "react";
import Header from "./Header";
import Starlight from "./Starlight/Starlight";
import { TranslationContext, translations } from '../context/TranslationContext';

function App() {

  const [lang, setLang] = React.useState('en');

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
    setLang('en');
  }

  function handleRuButton() {
    setLanguageEnButtonPressed(false);
    setLanguageRuButtonPressed(true);
    setLang('ru');
  }

  return (
    <TranslationContext.Provider value={translations[lang]}>
    <div className="page">
      <Header
        onEnButton={handleEnButton}
        onRuButton={handleRuButton}
        isEnClicked={isLanguageEnButtonPressed}
        isRuClicked={isLanguageRuButtonPressed}
      />
      <Starlight />
    </div>
    </TranslationContext.Provider>
  );
}

export default App;
