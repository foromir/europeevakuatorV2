import { ROUTE_PATH } from "../../../routeConfig";
import { buildCountryLanding } from "../../../locations/buildCountryLanding";
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

const landing = buildCountryLanding("uk", "de");

export default { seo, landing } as const;
