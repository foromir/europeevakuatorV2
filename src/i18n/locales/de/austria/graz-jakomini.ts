import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";
import { cityListFromLabels } from "../../../locations/cityListLinks";

const seo: PageSeoBundle = {
  title: "Abschleppdienst 24/7 in Jakomini, Graz — Pannenhilfe",
  description:
    "Abschleppdienst in Jakomini (Graz, Steiermark): Bergung bei Panne und Unfall, Fahrzeugtransport in der Stadt und in ganz Österreich. Klarer Preis vor dem Einsatz.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  ogTitle: "Abschleppdienst 24/7 in Jakomini, Graz — Pannenhilfe",
  ogDescription:
    "Abschleppdienst rund um die Uhr in Jakomini und Graz: Bergung, Transport zur Werkstatt, Pannenhilfe in der Steiermark und in ganz Österreich.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  twitterTitle: "Abschleppdienst in Jakomini, Graz",
  twitterDescription: "Fahrzeugbergung und Transport in Jakomini, Graz. Einsatz rund um die Uhr.",
  ogImagePath: "/assets/images/gallery/gallery-14.jpeg",
};

const landing = {
  cities: {
    title: "Abschleppdienst in Jakomini und Umgebung",
    lead: "Schneller Einsatz in Jakomini und benachbarten Grazer Bezirken:",
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
    title: "Routen ab Jakomini",
    lead: "Bergung ab Jakomini durch Graz und darüber hinaus:",
    list: [
      "Jakomini — Grazer Innenstadt",
      "Jakomini — Wien",
      "Jakomini — Flughafen Graz",
      "Jakomini — Klagenfurt",
      "Jakomini — Ljubljana",
    ],
    more: "Überlandrouten in Österreich und der EU",
  },
} as const;

export default { seo, landing } as const;
