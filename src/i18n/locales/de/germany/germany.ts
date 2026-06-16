import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const seo: PageSeoBundle = {
  title: "Abschleppdienst 24/7 in Deutschland — Fahrzeugbergung und Transport",
  description:
    "Abschleppdienst rund um die Uhr in Deutschland: Bergung, Fahrzeugtransport, Pannenhilfe. Schneller Einsatz, Festpreis-Angebote.",
  canonicalPath: ROUTE_PATH.GERMANY,
  ogTitle: "Abschleppdienst 24/7 in Deutschland — Fahrzeugbergung und Transport",
  ogDescription:
    "Bergung und Fahrzeugtransport in ganz Deutschland: Pannenhilfe, Lieferung zur Werkstatt, Überland- und EU-Routen.",
  ogUrlPath: ROUTE_PATH.GERMANY,
  twitterTitle: "Abschleppdienst 24/7 in Deutschland",
  twitterDescription: "Fahrzeugbergung und Transport in Deutschland. Pannenhilfe rund um die Uhr.",
  ogImagePath: "/assets/images/gallery/gallery-13.jpeg",
};

const landing = {
  cities: {
    title: "Abschleppdienst in deutschen Städten",
    lead: "Einsatz rund um die Uhr in Großstädten und auf Autobahnen:",
    list: [
      "Berlin",
      "München",
      "Hamburg",
      "Frankfurt",
      "Köln",
      "Stuttgart",
      "Düsseldorf",
      "Dresden",
      "Nürnberg",
    ],
  },
  directions: {
    title: "Beliebte Transportrouten in Deutschland",
    lead: "Überland-Bergung und Fahrzeugtransport in ganz Deutschland und der EU:",
    list: [
      "Berlin — München",
      "München — Wien",
      "Berlin — Hamburg",
      "Frankfurt — Köln",
      "Berlin — Prag",
      "München — Salzburg",
      "Hamburg — Kopenhagen",
    ],
    more: "und weitere Routen in Deutschland und Europa",
  },
} as const;

export default { seo, landing } as const;
