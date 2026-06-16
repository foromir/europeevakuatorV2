import { SITE_ORIGIN } from "../../routeConfig";

/** Gemeinsamer Evakuierungs-Hero-Chrome — `landing` / `austriaLanding` in `de/index.ts` zusammengeführt (keine Importzyklen). */
export const evacuationBlockShared = {
  titleAccent: "24/7",
  trustNoHidden: "Keine versteckten Kosten",
  trustFrom: "Ab 100 €",
  trustEta: "Einsatz innerhalb von 40 Min.",
  ariaPrev: "Vorheriger Slide",
  ariaNext: "Nächster Slide",
  tablistAria: "Slide auswählen",
  slideAriaLabels: ["Slide 1", "Slide 2", "Slide 3"],
  scrollRatesAria: "Zu den Tarifen",
  scrollRatesText: "Tarife und Leistungen",
} as const;

/** Gemeinsam: Header/Footer; `landing` + Österreich-Blöcke in `de/index.ts` zusammengeführt. */
export default {
  crumbHome: "Startseite",
  notFoundTitle: "404",
  notFoundLead: "Diese Seite existiert nicht.",
  backHome: "Zur Startseite",

  siteOrigin: SITE_ORIGIN,
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
  brandName: "Europe-Evakuator",
  logoImgAlt: "Europe-Evakuator Logo",

  phoneTel: "+380939152233",
  phoneDisplay: "+380 (93) 915 22 33",
  email: "info@europe-evakuator.com",
  telegramUrl: "https://t.me/+380939152233",
  whatsappUrl: "https://wa.me/380939152233",

  contactWidgetAria: "Kontakt",
  contactWidgetLabel: "Jetzt anrufen",

  ogLocale: "de_DE",
  ogTypeWebsite: "website",
  twitterCard: "summary_large_image",
  ogSiteName: "Europe-Evakuator",

  navMainAria: "Hauptnavigation",
  navTow: "Abschleppdienst",
  navRates: "Tarife",
  navLocations: "Einsatzgebiet",
  navServices: "Leistungen",
  navBlog: "Blog",

  countryAustria: "Österreich",
  countryGermany: "Deutschland",
  linkTowGraz: "Abschleppdienst in Graz",
  linkTowVienna: "Abschleppdienst in Wien",
  linkTowMunich: "Abschleppdienst in München",

  skipToContentMain: "Zum Hauptinhalt springen",

  langGroupAria: "Sprache wählen",
  langTitleUk: "Ukrainisch",
  langTitleEn: "Englisch",
  langTitleRu: "Russisch",
  langTitleDe: "Deutsch",
  langAltUk: "UA",
  langAltEn: "EN",
  langAltRu: "RU",
  langAltDe: "DE",

  footerTagline: "Abschleppdienst 24/7 in ganz Europa",
  footerNavAria: "Links",
  footerLinkHome: "Startseite",
  footerLinkGallery: "Galerie",
  footerLinkReviews: "Bewertungen",
  footerLinkHelp: "Hilfe",
  footerCopyright: "© 2025 Europe-Evakuator",

  ariaCall: "Anrufen",
  ariaEmail: "E-Mail senden",
  ariaTelegram: "Telegram",
  ariaWhatsapp: "WhatsApp",
  titleCall: "Anrufen",
  titleEmail: "E-Mail",
  titleTelegram: "Telegram",
  titleWhatsapp: "WhatsApp",

  evacuationBlockShared,
} as const;
