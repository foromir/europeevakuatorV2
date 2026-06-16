import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Abschleppdienst 24/7 in Berlin — Bergung und Transport",
  description:
    "Abschleppdienst in Berlin und Region: Autobahnpanne, Unfallbergung, Transport zur Werkstatt oder auf einen Parkplatz. Rund um die Uhr in der Stadt und in Brandenburg.",
  canonicalPath: ROUTE_PATH.GERMANY_BERLIN,
  ogTitle: "Abschleppdienst 24/7 in Berlin — Bergung und Transport",
  ogDescription:
    "Abschleppdienst rund um die Uhr in Berlin: schneller Einsatz, professionelles Aufladen, Transport in ganz Deutschland und der EU.",
  ogUrlPath: ROUTE_PATH.GERMANY_BERLIN,
  twitterTitle: "Abschleppdienst 24/7 in Berlin",
  twitterDescription: "Fahrzeugbergung und Transport in Berlin. Pannenhilfe.",
  ogImagePath: "/assets/images/gallery/gallery-20.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Berlin & Brandenburg — 24/7",
  titleRest: "Abschleppdienst in Berlin",
  subtitle: "Bergung, Werkstattlieferung und Überlandrouten",
  text:
    "Abschleppdienst 24/7 in Berlin und Brandenburg: Autobahnpanne, Unfallbergung, Lieferung zur Werkstatt oder auf einen Parkplatz. Schneller Einsatz, transparente Preise.",
  slideAlts: [
    "Abschleppdienst in Berlin — Einsatz rund um die Uhr",
    "Fahrzeugbergung in Berlin und Brandenburg",
    "Aufladen eines Fahrzeugs auf den Abschleppwagen in Berlin",
  ],
};

const landing = {
  directions: {
    title: "Beliebte Routen ab Berlin",
    lead: "Abschleppdienst ab Berlin — Transport in ganz Deutschland und in Nachbarländer:",
    list: [
      "Berlin — Hamburg",
      "Berlin — München",
      "Berlin — Frankfurt",
      "Berlin — Dresden",
      "Berlin — Prag",
      "Berlin — Warschau",
      "Berlin — Kopenhagen",
    ],
    more: "und weitere Routen auf Anfrage",
  },
} as const;

export default { seo, evacuation, landing } as const;
