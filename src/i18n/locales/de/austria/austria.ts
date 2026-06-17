import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { buildCountryLanding } from "../../../locations/buildCountryLanding";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Abschleppdienst Österreich — Wien, Graz, Salzburg 24/7 | Abschleppdienst24",
  description:
    "Abschleppdienst in Österreich buchen: Bergung, Transport zur Werkstatt, Pannenhilfe landesweit. Transparente Preise, keine versteckten Kosten.",
  canonicalPath: ROUTE_PATH.AUSTRIA,
  ogTitle: "Abschleppdienst 24/7 in Österreich — Wien, Graz, Salzburg, Linz",
  ogDescription:
    "Abschleppdienst rund um die Uhr in Österreich: Bergung und Fahrzeugtransport, Pannenhilfe. Schneller Einsatz, transparente Preise.",
  ogUrlPath: ROUTE_PATH.AUSTRIA,
  twitterTitle: "Abschleppdienst in Österreich — Abschleppdienst24",
  twitterDescription: "Fahrzeugbergung und Transport in Österreich rund um die Uhr. Wien, Graz, Salzburg und mehr.",
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "In ganz Österreich im Einsatz",
  titleRest: "Abschleppdienst in Österreich",
  subtitle: "Fahrzeugtransport und Pannenhilfe",
  text:
    "Abschleppdienst 24/7 in Österreich: Wien, Graz, Salzburg, Linz. Pannenhilfe, Bergung und Fahrzeugtransport. Schneller Einsatz, transparente Preise.",
  slideAlts: [
    "Abschleppdienst in Österreich — Einsatz rund um die Uhr",
    "Bergung und Fahrzeugtransport in Österreich",
    "Aufladen eines Fahrzeugs auf den Abschleppwagen in Österreich",
  ],
};

const landing = buildCountryLanding("de", "at");

export default {
  seo,
  evacuation,
  landing,
} as const;
