import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Евакуатор Австрія — Відень, Грац, Зальцбург 24/7 | Europe-Evakuator",
  description:
    "Замовте евакуатор в Австрії: витягування, перевезення до СТО, допомога на дорозі по всій країні. Ціна відома заздалегідь, без прихованих доплат.",
  canonicalPath: ROUTE_PATH.AUSTRIA,
  ogTitle: "Евакуатор в Австрії 24/7 — Відень, Грац, Зальцбург, Лінц, Інсбрук",
  ogDescription:
    "Евакуація в Австрії 24/7: витягування та перевезення авто, допомога на дорозі. Швидкий виїзд, прозорі тарифи.",
  ogUrlPath: ROUTE_PATH.AUSTRIA,
  twitterTitle: "Евакуатор в Австрії — Europe-Evakuator",
  twitterDescription: "Витягування та перевезення авто в Австрії 24/7. Відень, Грац, Зальцбург та інші міста.",
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Працюємо по всій Австрії",
  titleRest: "Евакуатор в Австрії",
  subtitle: "Перевезення авто та допомога на дорозі",
  text:
    "Евакуація в Австрії 24/7: Відень, Грац, Зальцбург, Лінц, Інсбрук. Допомога на дорозі, витягування та перевезення авто. Швидкий виїзд, прозорі тарифи.",
  slideAlts: [
    "Евакуатор в Австрії — виїзд 24/7",
    "Витягування та перевезення авто в Австрії",
    "Завантаження авто на евакуатор в Австрії",
  ],
};

const landing = {
  cities: {
    title: "Евакуатор в австрійських містах",
    lead: "Ви можете замовити евакуатор для перевезення авто в Австрії з міст, зазначених нижче:",
    list: [
      "Vienna (Wien)",
      "Graz",
      "Linz",
      "Salzburg",
      "Innsbruck",
      "Klagenfurt am Wörthersee",
      "Villach",
      "Wels",
      "Sankt Pölten",
    ],
  },
  directions: {
    title: "Популярні маршрути перевезення авто в Австрії",
    lead: "Замовте евакуатор між австрійськими та європейськими містами — обслуговуємо маршрути нижче.",
    list: [
      "Vienna — Graz",
      "Graz — Vienna",
      "Vienna — Salzburg",
      "Salzburg — Innsbruck",
      "Vienna — Linz",
      "Graz — Klagenfurt",
      "Innsbruck — Salzburg",
      "Linz — Vienna",
      "Vienna — Innsbruck",
      "Graz — Salzburg",
      "Salzburg — Vienna",
      "Linz — Graz",
      "Klagenfurt — Vienna",
      "Villach — Graz",
      "Sankt Pölten — Vienna",
    ],
    more: "та інші маршрути по Австрії та ЄС",
  },
} as const;

export default {
  seo,
  evacuation,
  landing,
} as const;
