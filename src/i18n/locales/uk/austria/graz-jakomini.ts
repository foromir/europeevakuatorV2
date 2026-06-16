import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const seo: PageSeoBundle = {
  title: "Евакуатор у Jakomini, Грац 24/7 — Допомога на дорозі",
  description:
    "Евакуатор у Jakomini (Грац, Штирія): витягування після поломки та ДТП, перевезення авто містом і по Австрії. Ціна відома до виїзду.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  ogTitle: "Евакуатор у Jakomini, Грац 24/7 — Допомога на дорозі",
  ogDescription:
    "Евакуація в Jakomini та Граці 24/7: витягування, доставка на СТО, допомога на дорозі в Штирії та по Австрії.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  twitterTitle: "Евакуатор у Jakomini, Грац",
  twitterDescription: "Витягування та перевезення авто в Jakomini, Грац. Виїзд 24/7.",
  ogImagePath: "/assets/images/gallery/gallery-14.jpeg",
};

const landing = {
  cities: {
    title: "Евакуатор у Jakomini та поблизу",
    lead: "Швидкий виїзд у Jakomini та сусідніх районах Граца:",
    list: [
      "Jakomini",
      "Gries",
      "St. Leonhard",
      "Innere Stadt",
      "Murvorstadt",
      "Puntigam",
    ],
  },
  directions: {
    title: "Маршрути з Jakomini",
    lead: "Витягування з Jakomini по Грацю та далі:",
    list: [
      "Jakomini — Graz city centre",
      "Jakomini — Vienna",
      "Jakomini — Graz Airport",
      "Jakomini — Klagenfurt",
      "Jakomini — Ljubljana",
    ],
    more: "міжміські маршрути по Австрії та ЄС",
  },
} as const;

export default { seo, landing } as const;
