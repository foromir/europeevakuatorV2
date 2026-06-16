import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { BlogArticlePage } from "../../../types";

const page: BlogArticlePage = {
  title: "Bergung nach einem Unfall in Europa — Rechte, Versicherung und Unterlagen",
  description:
    "Was nach einem Unfall in der EU zu tun ist: Abschleppdienst rufen, Unfallbericht, Versicherung und Bezahlung der Bergung.",
  canonicalPath: ROUTE_PATH.BLOG_POST_ACCIDENT_INSURANCE,
  ogTitle: "Bergung nach einem Unfall in Europa — Rechte, Versicherung und Unterlagen",
  ogDescription:
    "Schritt für Schritt nach einem Unfall in der EU: Sicherheit, Polizei, Versicherung, Abschleppdienst und Erstattung.",
  ogUrlPath: ROUTE_PATH.BLOG_POST_ACCIDENT_INSURANCE,
  twitterTitle: "Bergung nach einem Unfall in Europa",
  twitterDescription:
    "Fahrerrechte, Versicherung und Unterlagen bei Bergung nach einem Unfall in Europa.",
  ogImagePath: BLOG_IMAGE.ACCIDENT_INSURANCE,
  skipLink: "Zum Artikelinhalt springen",
  dateIso: "2026-05-22",
  dateDisplay: "22. Mai 2026",
  tag: "Unfall & Versicherung",
  imagePath: BLOG_IMAGE.ACCIDENT_INSURANCE,
  imageAlt: "Abschleppwagen am Unfallort in Europa",
  h1: "Bergung nach einem Unfall: Rechte und Versicherung",
  lead:
    "Nach einem Unfall im Ausland zählen Sicherheit und korrekte Unterlagen — davon hängt ab, ob Bergung und Reparatur erstattet werden.",
  sections: [
    {
      heading: "1. Sicherheit und Hilfe rufen",
      body:
        "Warnblinkanlage einschalten, Warndreieck aufstellen, Warnweste tragen. Bei Verletzten 112 rufen. Auch bei leichtem Schaden die Stelle dokumentieren und das Fahrzeug nicht bewegen, bis Sie sich mit dem anderen Beteiligten geeinigt haben oder die Polizei eintrifft — in manchen Ländern ist das Pflicht.",
    },
    {
      heading: "2. Unfallbericht und Beweise",
      body:
        "Europäischen Unfallbericht ausfüllen, Schäden, Kennzeichen, Versicherungsdaten und die Gesamtansicht fotografieren. Zeugen notieren. Diese Unterlagen brauchen Sie für die Versicherung bei Erstattung von Bergung und Reparatur.",
    },
    {
      heading: "3. Versicherung kontaktieren",
      body:
        "Eigene und gegnerische Versicherung informieren. Klären Sie, ob die Police Bergung abdeckt (oft über Assistance). Schadennummer und schriftliche Bestätigung der Leistungsgrenzen aufbewahren.",
    },
    {
      heading: "4. Abschleppdienst und Bezahlung",
      body:
        "Wenn das Fahrzeug nicht fahrbereit ist, Abschleppdienst rufen und mitteilen, dass es nach einem Unfall ist. Preis vor Abfahrt vereinbaren, Rechnung und Übergabeprotokoll sichern. Bei Versicherungsschutz Unterlagen zur Erstattung einreichen.",
    },
  ],
};

export default page;
