import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { BlogArticlePage } from "../../../types";

const page: BlogArticlePage = {
  title: "Autopanne im Ausland — was tun (Tipps zum Abschleppdienst in Europa)",
  description:
    "Schritt-für-Schritt-Anleitung bei einer Autopanne im Ausland: Sicherheit, Abschleppdienst in Europa rufen, Versicherung und Unterlagen.",
  canonicalPath: ROUTE_PATH.BLOG_POST_BREAKDOWN_ABROAD,
  ogTitle: "Autopanne im Ausland — was tun (Tipps zum Abschleppdienst in Europa)",
  ogDescription:
    "Schritt für Schritt: Sicherheit, Abschleppdienst in Europa rufen, Versicherung und Unterlagen nach einer Panne im Ausland.",
  ogUrlPath: ROUTE_PATH.BLOG_POST_BREAKDOWN_ABROAD,
  twitterTitle: "Autopanne im Ausland — was tun",
  twitterDescription:
    "Sicherheit, Abschleppdienst in Europa, Versicherung und Unterlagen bei einer Panne im Ausland.",
  ogImagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
  skipLink: "Zum Artikelinhalt springen",
  dateIso: "2026-06-10",
  dateDisplay: "10. Juni 2026",
  tag: "Tipps für Fahrer",
  imagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
  imageAlt: "Abschleppwagen lädt ein Auto nach einer Panne auf einer europäischen Straße",
  h1: "Was tun, wenn das Auto im Ausland liegen bleibt",
  lead:
    "Eine Panne in einem anderen Land ist stressig. Wenn Sie klare Schritte befolgen, bleiben Sie in Sicherheit, erhalten schnell Hilfe und vermeiden unnötige Kosten.",
  sections: [
    {
      heading: "1. In Sicherheit bleiben",
      body:
        "Halten Sie an einem erlaubten Ort, schalten Sie die Warnblinkanlage ein und stellen Sie das Warndreieck auf. Wechseln Sie auf den Standstreifen oder einen Parkplatz, wenn möglich. Bei Nacht tragen Sie eine Warnweste.",
    },
    {
      heading: "2. Abschleppdienst rufen",
      body:
        "Rufen Sie die Dispositionsleitung an (zum Beispiel uns — wir sind rund um die Uhr in ganz Europa im Einsatz). Nennen Sie die genaue Adresse oder Koordinaten, Marke und Modell sowie die Fehlerbeschreibung. Der Disponent nennt Preis und Ankunftszeit.",
    },
    {
      heading: "3. Unterlagen und Versicherung",
      body:
        "Halten Sie Reisepass, Führerschein und Fahrzeugpapiere bereit. Ein Europäischer Unfallbericht oder die Kontaktdaten der Versicherung helfen nach einem Zusammenstoß. Bei einer einfachen Panne reichen in der Regel Reisepass und Servicevereinbarung.",
    },
    {
      heading: "4. Fahrzeugübergabe",
      body:
        "Der Abschleppwagen kann Ihr Fahrzeug in eine Werkstatt, auf einen Parkplatz oder zu einer anderen Adresse bringen. Der Preis wird vor dem Einsatz vereinbart, ohne versteckte Kosten. Notieren Sie Ankunftszeit und Fahrzeugzustand bei der Übergabe.",
    },
  ],
};

export default page;
