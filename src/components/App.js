import React from "react";
import { Route, Switch, useHistory, matchPath } from "react-router-dom";
import Header from "./Header";
import Starlight from "./Starlight/Starlight";

import Services from "./Services/Services";

import {
  TranslationContext,
  translations,
} from "../context/TranslationContext";

function App() {

  return (
    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <TranslationContext.Provider value={translations["en"]}>
            <Starlight />
          </TranslationContext.Provider>
        </Route>
        <Route path="/ru">
          <TranslationContext.Provider value={translations["ru"]}>
            <Starlight />
          </TranslationContext.Provider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
