import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Эвакуатор в Берлине 24/7 — эвакуация и перевозка авто",
  description:
    "Эвакуатор в Берлине и области: поломка на трассе, ДТП, перевозка на СТО или парковку. Работаем круглосуточно по городу и Бранденбургу.",
  canonicalPath: ROUTE_PATH.GERMANY_BERLIN,
  ogTitle: "Эвакуатор в Берлине 24/7 — эвакуация и перевозка авто",
  ogDescription:
    "Круглосуточная эвакуация в Берлине: быстрый выезд, профессиональная погрузка, перевозка по Германии и ЕС.",
  ogUrlPath: ROUTE_PATH.GERMANY_BERLIN,
  twitterTitle: "Эвакуатор в Берлине 24/7",
  twitterDescription: "Эвакуация и перевозка авто в Берлине. Помощь на дороге.",
  ogImagePath: "/assets/images/gallery/gallery-20.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Берлин и Бранденбург — 24/7",
  titleRest: "Эвакуатор в Берлине",
  subtitle: "Эвакуация, перевозка на СТО и междугородние маршруты",
  text:
    "Круглосуточный эвакуатор в Берлине и земле Бранденбург: поломка на автобане, ДТП, доставка в сервис или на стоянку. Быстрый выезд, прозрачные цены.",
  slideAlts: [
    "Эвакуатор в Берлине — выезд 24/7",
    "Эвакуация авто в Берлине и Бранденбурге",
    "Погрузка автомобиля на эвакуатор в Берлине",
  ],
};

const landing = {
  directions: {
    title: "Популярные направления из Берлина",
    lead: "Эвакуатор из Берлина — перевозка по Германии и в соседние страны:",
    list: [
      "Берлин — Гамбург",
      "Берлин — Мюнхен",
      "Берлин — Франкфурт",
      "Берлин — Дрезден",
      "Берлин — Прага",
      "Берлин — Варшава",
      "Берлин — Копенгаген",
    ],
    more: "и другие маршруты по запросу",
  },
} as const;

export default { seo, evacuation, landing } as const;
