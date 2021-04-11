import React from "react";

import Meteor from "../Meteor";

import DiscussButton from "../DiscussButton";

import SvgFooter from "../SvgFooter/SvgFooter";

import WarningList from "../WarningList";

import footer from "../../images/footer.svg";

import { TranslationContext } from "../../context/TranslationContext";

function Contacts() {
  const translation = React.useContext(TranslationContext);

  return (
    <footer className="contacts">
      <img className="contacts__image" src={footer} alt="main-illustration" />
      <div className="contacts__main">
        <h1 className="contacts__header">Contacts</h1>
        <div className="contacts__wraper">
          <Meteor />
          <DiscussButton />
          <div className="link__wraper">
            <WarningList />
            <p>email: <a className="contacts__mail" href="mailto:info@meteor.ee">info@meteor.ee</a></p>
          </div>
        </div>
        <p>all rights reserved</p>
      </div>
    </footer>
  );
}

export default Contacts;
