import React from "react";

export const TranslationContext = React.createContext();

export const translations = {
  ru: {
    title_word1: "мы ",
    title_word2: "занимаемся ",
    title_word3: "разработкой ",
    title_word5: "сайтов ",
    warning_button: "обсудить",
    about__info: "о нас",
    about__paragraph: `Наше агенство состоит из людей, которые любят создавать,
     проектировать и разрабатывать проекты, в тоже время мы больше, чем коллектив,
     мы учимся и растем, побеждаем и празднуем вместе.`,
  },
  en: {
    title_word1: "we ",
    title_word2: "specialize ",
    title_word3: "in",
    title_word4: "website ",
    title_word5: "development",
    warning_button: "discuss",
    about__info: "about us",
    about__paragraph: `Our agency is about people who love creating, designing and developing
    wow projects. In the same time we are more than the collective. We
    learn and grow, win and celebrate together.`,
  },
};
