import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { buildCountryLanding } from "../../../locations/buildCountryLanding";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Евакуатор Австрія — Відень, Грац, Зальцбург 24/7 | Abschleppdienst24",
  description:
    "Замовте евакуатор в Австрії: витягування, перевезення до СТО, допомога на дорозі по всій країні. Ціна відома заздалегідь, без прихованих доплат.",
  canonicalPath: ROUTE_PATH.AUSTRIA,
  ogTitle: "Евакуатор в Австрії 24/7 — Відень, Грац, Зальцбург, Лінц, Інсбрук",
  ogDescription:
    "Евакуація в Австрії 24/7: витягування та перевезення авто, допомога на дорозі. Швидкий виїзд, прозорі тарифи.",
  ogUrlPath: ROUTE_PATH.AUSTRIA,
  twitterTitle: "Евакуатор в Австрії — Abschleppdienst24",
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

const landing = buildCountryLanding("uk", "at");

export default {
  seo,
  evacuation,
  landing,
} as const;
