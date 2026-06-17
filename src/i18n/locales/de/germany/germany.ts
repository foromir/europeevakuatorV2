import { ROUTE_PATH } from "../../../routeConfig";
import { buildCountryLanding } from "../../../locations/buildCountryLanding";
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

const landing = buildCountryLanding("de", "de");

export default { seo, landing } as const;
