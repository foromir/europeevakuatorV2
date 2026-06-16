import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Евакуатор у Граці 24/7 — Допомога на дорозі в Австрії",
  description:
    "Евакуатор у Граці та Штирії 24/7: допомога на дорозі, витягування та перевезення авто по Австрії та в Україну. Швидкий виїзд, прозорі тарифи, без прихованих доплат.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ,
  ogTitle: "Евакуатор у Граці 24/7 — Допомога на дорозі в Австрії",
  ogDescription:
    "Евакуатор у Граці та Штирії 24/7: допомога на дорозі, витягування та перевезення авто по Австрії та в Україну. Швидкий виїзд, прозорі тарифи, без прихованих доплат.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ,
  twitterTitle: "Евакуатор у Граці 24/7 — Допомога на дорозі в Австрії",
  twitterDescription:
    "Евакуація в Граці та Штирії 24/7: витягування та перевезення по Австрії. Швидкий сервіс, без прихованих доплат.",
  ogImagePath: "/assets/images/gallery/gallery-19.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Грац і Штирія — виїзд 24/7",
  titleRest: "Евакуатор у Граці",
  subtitle: "Допомога на дорозі, витягування та перевезення авто",
  text:
    "Евакуатор у Граці та Штирії 24/7: поломка на трасі, витягування після ДТП, доставка на СТО або перевезення в Україну. Допомога на дорозі по всій Австрії — швидкий виїзд, зрозумілі ціни, без прихованих доплат.",
  slideAlts: [
    "Евакуатор у Граці — виїзд 24/7",
    "Витягування та перевезення авто в Штирії",
    "Завантаження авто на евакуатор у Граці",
  ],
};

const landing = {
  cities: {
    title: "Райони Граца та Штирія",
    lead: "Працюємо в Граці та Штирії — включно з промзонами та автомагістралями A2 і A9:",
    list: [
      "Jakomini",
      "Gries",
      "Lend",
      "Waltendorf",
      "Mariatrost",
      "Andritz",
      "Eggenberg",
      "Puntigam",
      "Feldkirchen bei Graz",
      "Deutschlandsberg",
    ],
  },
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
