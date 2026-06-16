import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Евакуатор у Берліні 24/7 — Витягування та перевезення",
  description:
    "Евакуатор у Берліні та регіоні: поломка на автобані, витягування після ДТП, доставка на СТО або стоянку. 24/7 у місті та Бранденбурзі.",
  canonicalPath: ROUTE_PATH.GERMANY_BERLIN,
  ogTitle: "Евакуатор у Берліні 24/7 — Витягування та перевезення",
  ogDescription:
    "Евакуація в Берліні 24/7: швидкий виїзд, професійне завантаження, перевезення по Німеччині та ЄС.",
  ogUrlPath: ROUTE_PATH.GERMANY_BERLIN,
  twitterTitle: "Евакуатор у Берліні 24/7",
  twitterDescription: "Витягування та перевезення авто в Берліні. Допомога на дорозі.",
  ogImagePath: "/assets/images/gallery/gallery-20.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Берлін і Бранденбург — 24/7",
  titleRest: "Евакуатор у Берліні",
  subtitle: "Витягування, доставка на СТО та міжміські маршрути",
  text:
    "Евакуатор у Берліні та Бранденбурзі 24/7: поломка на автобані, витягування після ДТП, доставка на СТО або стоянку. Швидкий виїзд, прозорі тарифи.",
  slideAlts: [
    "Евакуатор у Берліні — виїзд 24/7",
    "Витягування авто в Берліні та Бранденбурзі",
    "Завантаження авто на евакуатор у Берліні",
  ],
};

const landing = {
  directions: {
    title: "Популярні маршрути з Берліна",
    lead: "Евакуатор з Берліна — перевезення по Німеччині та сусідніх країнах:",
    list: [
      "Berlin — Hamburg",
      "Berlin — Munich",
      "Berlin — Frankfurt",
      "Berlin — Dresden",
      "Berlin — Prague",
      "Berlin — Warsaw",
      "Berlin — Copenhagen",
    ],
    more: "та інші маршрути за запитом",
  },
} as const;

export default { seo, evacuation, landing } as const;
