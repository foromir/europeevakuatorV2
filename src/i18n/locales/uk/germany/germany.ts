import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const seo: PageSeoBundle = {
  title: "Евакуатор у Німеччині 24/7 — Витягування та перевезення авто",
  description:
    "Евакуація в Німеччині 24/7: витягування, перевезення авто, допомога на дорозі. Швидкий виїзд, фіксована ціна.",
  canonicalPath: ROUTE_PATH.GERMANY,
  ogTitle: "Евакуатор у Німеччині 24/7 — Витягування та перевезення авто",
  ogDescription:
    "Витягування та перевезення авто по Німеччині: допомога на дорозі, доставка на СТО, міжміські та європейські маршрути.",
  ogUrlPath: ROUTE_PATH.GERMANY,
  twitterTitle: "Евакуатор у Німеччині 24/7",
  twitterDescription: "Витягування та перевезення авто в Німеччині. Допомога на дорозі 24/7.",
  ogImagePath: "/assets/images/gallery/gallery-13.jpeg",
};

const landing = {
  cities: {
    title: "Евакуатор у Мюнхені",
    lead: "Виїзд 24/7 у Мюнхені, Баварії та на автомагістралях A8, A9 і A95:",
    list: ["Munich (München)"],
  },
  directions: {
    title: "Популярні маршрути з Мюнхена",
    lead: "Міжміське витягування та перевезення авто з Мюнхена в Австрію та інші країни ЄС:",
    list: [
      "Munich — Vienna",
      "Munich — Salzburg",
      "Munich — Graz",
      "Munich — Innsbruck",
      "Munich — Nuremberg",
      "Munich — Stuttgart",
      "Munich — Prague",
    ],
    more: "та інші маршрути по Німеччині та Європі",
  },
} as const;

export default { seo, landing } as const;
