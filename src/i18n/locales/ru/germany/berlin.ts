import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

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
};

export default { seo } as const;
