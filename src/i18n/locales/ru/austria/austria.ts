import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { buildCountryLanding } from "../../../locations/buildCountryLanding";
import { evacuationBlockShared } from "../common";

/** Мета `<title>`, description, Open Graph — короче и под поиск, не дублирует герой. */
const seo: PageSeoBundle = {
  title: "Эвакуатор в Австрии — Вена, Грац, Зальцбург, круглосуточно | Abschleppdienst24",
  description:
    "Вызов эвакуатора в Австрии: эвакуация, перевозка на СТО, помощь на дороге по всей стране. Цену озвучим до выезда, без скрытых доплат.",
  canonicalPath: ROUTE_PATH.AUSTRIA,
  ogTitle: "Эвакуатор в Австрии 24/7 — Вена, Грац, Зальцбург, Линц, Инсбрук",
  ogDescription:
    "Круглосуточный эвакуатор в Австрии: эвакуация и перевозка авто, помощь на дороге. Быстрый выезд, прозрачные цены.",
  ogUrlPath: ROUTE_PATH.AUSTRIA,
  twitterTitle: "Эвакуатор в Австрии — Abschleppdienst24",
  twitterDescription:
    "Эвакуация и перевозка авто в Австрии 24/7. Вена, Грац, Зальцбург и другие города.",
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
};

/** Тексты блока «Эвакуация» на странице страны (герой). */
const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Работаем по всей Австрии",
  titleRest: "Эвакуатор в Австрии",
  subtitle: "Перевозка авто и помощь на дороге",
  text:
    "Круглосуточный эвакуатор в Австрии: Вена, Грац, Зальцбург, Линц, Инсбрук. Помощь на дороге, эвакуация и перевозка авто. Быстрый выезд, прозрачные цены.",
  slideAlts: [
    "Эвакуатор в Австрии — выезд 24/7",
    "Эвакуация и перевозка авто в Австрии",
    "Погрузка автомобиля на эвакуатор в Австрии",
  ],
};

/** Секции лендинга «только Австрия»: города + направления */
const landing = buildCountryLanding("ru", "at");

export default {
  seo,
  evacuation,
  landing,
} as const;
