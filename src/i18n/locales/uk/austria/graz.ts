import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { styriaCitiesLandingBlock } from "../../../austria/styriaCityList";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Евакуатор з Граца 24/7 — Допомога на дорозі в Австрії",
  description:
    "Цілодобовий евакуатор з Граца і в Граці, земля Штирія: допомога на дорозі, витягування та перевезення авто по Австрії та в Україну. Швидкий виїзд, прозорі тарифи, без прихованих доплат.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ,
  ogTitle: "Евакуатор з Граца 24/7 — Допомога на дорозі в Австрії",
  ogDescription:
    "Евакуатор з Граца і в Граці, земля Штирія: допомога на дорозі, витягування та перевезення авто по Австрії та в Україну. Швидкий виїзд, прозорі тарифи.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ,
  twitterTitle: "Евакуатор з Граца 24/7 — Допомога на дорозі в Австрії",
  twitterDescription:
    "Евакуатор з Граца і в Граці: витягування та перевезення по Австрії. Швидкий сервіс, без прихованих доплат.",
  ogImagePath: "/assets/images/gallery/gallery-19.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Грац і Штирія — виїзд 24/7",
  titleRest: "Евакуатор з Граца",
  subtitle: "Допомога на дорозі, витягування та перевезення авто",
  text:
    "Евакуатор у Граці та Штирії 24/7: поломка на трасі, витягування після ДТП, доставка на СТО або перевезення в Україну. Допомога на дорозі по всій Австрії — швидкий виїзд, зрозумілі ціни, без прихованих доплат.",
  slideAlts: [
    "Евакуатор з Граца — виїзд 24/7",
    "Витягування та перевезення авто в Штирії",
    "Завантаження авто на евакуатор в Граці",
  ],
};

const landing = {
  cities: styriaCitiesLandingBlock("uk"),
  directions: {
    title: "Популярні маршрути з Граца",
    lead: "Евакуатор з Граца — міжміське перевезення по Австрії та сусідніх країнах:",
    list: [
      "Graz — Vienna",
      "Graz — Salzburg",
      "Graz — Klagenfurt",
      "Graz — Linz",
      "Graz — Ljubljana",
      "Graz — Munich",
      "Graz — Budapest",
    ],
    more: "та інші маршрути за запитом",
  },
} as const;

export default { seo, evacuation, landing } as const;
