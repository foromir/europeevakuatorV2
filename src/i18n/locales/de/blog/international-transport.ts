import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { BlogArticlePage } from "../../../types";

const page: BlogArticlePage = {
  title: "Fahrzeugtransport zwischen europäischen Ländern — Routen, Zeit und Kosten",
  description:
    "Internationalen Autotransport in der EU organisieren: Abschleppwagen oder Autotransporter, Fristen, Unterlagen und Preisbestandteile.",
  canonicalPath: ROUTE_PATH.BLOG_POST_INTERNATIONAL_TRANSPORT,
  ogTitle: "Fahrzeugtransport zwischen europäischen Ländern — Routen, Zeit und Kosten",
  ogDescription:
    "Internationaler Autotransport in Europa: Methode, Route, Zeitplan, Unterlagen und Kosten.",
  ogUrlPath: ROUTE_PATH.BLOG_POST_INTERNATIONAL_TRANSPORT,
  twitterTitle: "Fahrzeugtransport zwischen europäischen Ländern",
  twitterDescription:
    "Routen, Fristen, Unterlagen und Kosten für internationalen Autotransport in der EU.",
  ogImagePath: BLOG_IMAGE.INTERNATIONAL_TRANSPORT,
  skipLink: "Zum Artikelinhalt springen",
  dateIso: "2026-04-18",
  dateDisplay: "18. April 2026",
  tag: "Fahrzeugtransport",
  imagePath: BLOG_IMAGE.INTERNATIONAL_TRANSPORT,
  imageAlt: "Abschleppwagen transportiert ein Auto auf einer europäischen Strecke",
  h1: "Fahrzeugtransport zwischen europäischen Ländern",
  lead:
    "Nach einer Panne oder einem Kauf im Ausland brauchen Sie manchmal eine Lieferung in ein anderes EU-Land. So wählen Sie die Transportart und was Sie bei Zeit und Unterlagen beachten sollten.",
  sections: [
    {
      heading: "1. Abschleppwagen oder Autotransporter",
      body:
        "Auf kurzen Strecken (bis einige hundert km) ist oft der Abschleppwagen sinnvoll — schneller und einfacher zu beladen. Auf sehr langen grenzüberschreitenden Routen kommt gelegentlich ein Autotransporter zum Einsatz, der Abschleppwagen liefert jedoch direkt von Tür zu Tür ohne Umladung.",
    },
    {
      heading: "2. Route und Zeitplan",
      body:
        "Die Dauer hängt von Entfernung, Grenzen und Verkehr ab. Viele EU-Routen schafft ein Abschleppwagen in 1–3 Tagen. Die Disposition nennt die voraussichtliche Ankunftszeit und plant Pausen bei langen Fahrten.",
    },
    {
      heading: "3. Unterlagen",
      body:
        "Reisepass des Eigentümers, Fahrzeugpapiere und Vollmacht, wenn Sie nicht der Eigentümer sind. Für Schengen-Grenzen reicht meist ein Standardpaket — wir klären die Anforderungen für Ihre Route vorab.",
    },
    {
      heading: "4. Kosten",
      body:
        "Der Preis setzt sich aus Kilometern, Fahrzeugtyp, Dringlichkeit und Beladeaufwand zusammen (Allrad, tiefe Karosserie, kein Rollen). Wir fixieren den Betrag vor Abfahrt. Für ein Angebot genügen Abhol- und Zieladresse.",
    },
  ],
};

export default page;
