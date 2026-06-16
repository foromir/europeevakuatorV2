import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Abschleppdienst 24/7 in Graz — Pannenhilfe in Österreich",
  description:
    "Abschleppdienst rund um die Uhr in Graz und der Steiermark: Pannenhilfe, Bergung und Fahrzeugtransport in ganz Österreich und in die Ukraine. Schneller Einsatz, transparente Preise, keine versteckten Kosten.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ,
  ogTitle: "Abschleppdienst 24/7 in Graz — Pannenhilfe in Österreich",
  ogDescription:
    "Abschleppdienst rund um die Uhr in Graz und der Steiermark: Pannenhilfe, Bergung und Fahrzeugtransport in ganz Österreich und in die Ukraine. Schneller Einsatz, transparente Preise, keine versteckten Kosten.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ,
  twitterTitle: "Abschleppdienst 24/7 in Graz — Pannenhilfe in Österreich",
  twitterDescription:
    "Abschleppdienst in Graz und der Steiermark rund um die Uhr: Bergung und Transport in ganz Österreich. Schneller Service, keine versteckten Kosten.",
  ogImagePath: "/assets/images/gallery/gallery-19.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Graz & Steiermark — Einsatz 24/7",
  titleRest: "Abschleppdienst in Graz",
  subtitle: "Pannenhilfe, Bergung und Fahrzeugtransport",
  text:
    "Abschleppdienst 24/7 in Graz und der Steiermark: Autobahnpanne, Unfallbergung, Transport zur Werkstatt oder in die Ukraine. Pannenhilfe in ganz Österreich — schneller Einsatz, klare Preise, keine versteckten Kosten.",
  slideAlts: [
    "Abschleppdienst in Graz — Einsatz rund um die Uhr",
    "Bergung und Fahrzeugtransport in der Steiermark",
    "Aufladen eines Fahrzeugs auf den Abschleppwagen in Graz",
  ],
};

const landing = {
  cities: {
    title: "Städte in der Steiermark",
    lead: "Wir sind in Graz und der gesamten Steiermark im Einsatz — einschließlich Industriegebiete und Autobahnen A2 und A9:",
    list: [
      "Weiz",
      "Leoben",
      "Gleisdorf",
      "Kapfenberg",
      "Bruck an der Mur",
      "Deutschlandsberg",
      "Feldkirchen bei Graz",
      "Köflach",
      "Hartberg",
      "Mürzzuschlag",
    ],
  },
  directions: {
    title: "Beliebte Routen ab Graz",
    lead: "Abschleppdienst ab Graz — Überlandtransport in ganz Österreich und in Nachbarländer:",
    list: [
      "Graz — Wien",
      "Graz — Salzburg",
      "Graz — Klagenfurt",
      "Graz — Linz",
      "Graz — Ljubljana",
      "Graz — München",
      "Graz — Budapest",
    ],
    more: "und weitere Routen auf Anfrage",
  },
} as const;

export default { seo, evacuation, landing } as const;
