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
    title: "Евакуатор у німецьких містах",
    lead: "Виїзд 24/7 у великих містах та на автомагістралях:",
    list: [
      "Berlin",
      "Munich (München)",
      "Hamburg",
      "Frankfurt",
      "Cologne (Köln)",
      "Stuttgart",
      "Düsseldorf",
      "Dresden",
      "Nuremberg (Nürnberg)",
    ],
  },
  directions: {
    title: "Популярні маршрути перевезення в Німеччині",
    lead: "Міжміське витягування та перевезення авто по Німеччині та ЄС:",
    list: [
      "Berlin — Munich",
      "Munich — Vienna",
      "Berlin — Hamburg",
      "Frankfurt — Cologne",
      "Berlin — Prague",
      "Munich — Salzburg",
      "Hamburg — Copenhagen",
    ],
    more: "та інші маршрути по Німеччині та Європі",
  },
} as const;

export default { seo, landing } as const;
