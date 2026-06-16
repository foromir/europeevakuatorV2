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
    title: "Abschleppdienst in München",
    lead: "Einsatz rund um die Uhr in München, Bayern und auf den Autobahnen A8, A9 und A95:",
    list: ["München"],
  },
  directions: {
    title: "Beliebte Routen ab München",
    lead: "Überland-Bergung und Fahrzeugtransport ab München nach Österreich und in andere EU-Länder:",
    list: [
      "München — Wien",
      "München — Salzburg",
      "München — Graz",
      "München — Innsbruck",
      "München — Nürnberg",
      "München — Stuttgart",
      "München — Prag",
    ],
    more: "und weitere Routen in Deutschland und Europa",
  },
} as const;

export default { seo, landing } as const;
