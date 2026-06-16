import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Abschleppdienst Österreich — Wien, Graz, Salzburg 24/7 | Europe-Evakuator",
  description:
    "Abschleppdienst in Österreich buchen: Bergung, Transport zur Werkstatt, Pannenhilfe landesweit. Transparente Preise, keine versteckten Kosten.",
  canonicalPath: ROUTE_PATH.AUSTRIA,
  ogTitle: "Abschleppdienst 24/7 in Österreich — Wien, Graz, Salzburg, Linz, Innsbruck",
  ogDescription:
    "Abschleppdienst rund um die Uhr in Österreich: Bergung und Fahrzeugtransport, Pannenhilfe. Schneller Einsatz, transparente Preise.",
  ogUrlPath: ROUTE_PATH.AUSTRIA,
  twitterTitle: "Abschleppdienst in Österreich — Europe-Evakuator",
  twitterDescription: "Fahrzeugbergung und Transport in Österreich rund um die Uhr. Wien, Graz, Salzburg und mehr.",
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "In ganz Österreich im Einsatz",
  titleRest: "Abschleppdienst in Österreich",
  subtitle: "Fahrzeugtransport und Pannenhilfe",
  text:
    "Abschleppdienst 24/7 in Österreich: Wien, Graz, Salzburg, Linz, Innsbruck. Pannenhilfe, Bergung und Fahrzeugtransport. Schneller Einsatz, transparente Preise.",
  slideAlts: [
    "Abschleppdienst in Österreich — Einsatz rund um die Uhr",
    "Bergung und Fahrzeugtransport in Österreich",
    "Aufladen eines Fahrzeugs auf den Abschleppwagen in Österreich",
  ],
};

const landing = {
  cities: {
    title: "Abschleppdienst in österreichischen Städten",
    lead: "Sie können einen Abschleppdienst für Fahrzeugtransport in Österreich in den unten genannten Städten buchen:",
    list: [
      "Wien",
      "Graz",
      "Linz",
      "Salzburg",
      "Innsbruck",
      "Klagenfurt am Wörthersee",
      "Villach",
      "Wels",
      "Sankt Pölten",
    ],
  },
  directions: {
    title: "Beliebte Fahrzeugtransport-Routen in Österreich",
    lead: "Abschleppdienst zwischen österreichischen und EU-Städten buchen — wir bedienen die folgenden Routen.",
    list: [
      "Wien — Graz",
      "Graz — Wien",
      "Wien — Salzburg",
      "Salzburg — Innsbruck",
      "Wien — Linz",
      "Graz — Klagenfurt",
      "Innsbruck — Salzburg",
      "Linz — Wien",
      "Wien — Innsbruck",
      "Graz — Salzburg",
      "Salzburg — Wien",
      "Linz — Graz",
      "Klagenfurt — Wien",
      "Villach — Graz",
      "Sankt Pölten — Wien",
    ],
    more: "und weitere Routen in Österreich und der EU",
  },
} as const;

export default {
  seo,
  evacuation,
  landing,
} as const;
