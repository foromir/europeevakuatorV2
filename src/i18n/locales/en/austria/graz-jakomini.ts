import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";
import { cityListFromLabels } from "../../../locations/cityListLinks";

const seo: PageSeoBundle = {
  title: "24/7 Tow truck in Jakomini, Graz — Roadside assistance",
  description:
    "Tow truck in Jakomini (Graz, Styria): breakdown and accident recovery, vehicle transport across the city and Austria. Clear pricing before dispatch.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  ogTitle: "24/7 Tow truck in Jakomini, Graz — Roadside assistance",
  ogDescription:
    "24/7 towing in Jakomini and Graz: recovery, transport to workshops, roadside help in Styria and Austria.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  twitterTitle: "Tow truck in Jakomini, Graz",
  twitterDescription: "Car recovery and transport in Jakomini, Graz. 24/7 dispatch.",
  ogImagePath: "/assets/images/gallery/gallery-14.jpeg",
};

const landing = {
  cities: {
    title: "Tow truck in Jakomini and nearby",
    lead: "Fast dispatch in Jakomini and neighbouring Graz districts:",
    list: cityListFromLabels("at", [
      "Jakomini",
      "Gries",
      "St. Leonhard",
      "Innere Stadt",
      "Murvorstadt",
      "Puntigam",
    ]),
  },
  directions: {
    title: "Routes from Jakomini",
    lead: "Recovery from Jakomini across Graz and beyond:",
    list: [
      "Jakomini — Graz city centre",
      "Jakomini — Vienna",
      "Jakomini — Graz Airport",
      "Jakomini — Klagenfurt",
      "Jakomini — Ljubljana",
    ],
    more: "intercity routes across Austria and the EU",
  },
} as const;

export default { seo, landing } as const;
