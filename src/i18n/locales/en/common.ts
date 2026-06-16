import { SITE_ORIGIN } from "../../routeConfig";

/** Shared evacuation hero chrome — `landing` / `austriaLanding` merged in `en/index.ts` (no import cycles). */
export const evacuationBlockShared = {
  titleAccent: "24/7",
  trustNoHidden: "No hidden fees",
  trustFrom: "From €100",
  trustEta: "Dispatch within 40 min",
  ariaPrev: "Previous slide",
  ariaNext: "Next slide",
  tablistAria: "Choose slide",
  slideAriaLabels: ["Slide 1", "Slide 2", "Slide 3"],
  scrollRatesAria: "Go to rates",
  scrollRatesText: "Rates and services",
} as const;

/** Shared: header/footer; `landing` + Austria-only blocks merged in `en/index.ts`. */
export default {
  crumbHome: "Home",
  notFoundTitle: "404",
  notFoundLead: "This route does not exist.",
  backHome: "Back to home",

  siteOrigin: SITE_ORIGIN,
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
  brandName: "Europe-Evakuator",
  logoImgAlt: "Europe-Evakuator Logo",

  phoneTel: "+380939152233",
  phoneDisplay: "+380 (93) 915 22 33",
  email: "info@europe-evakuator.com",
  telegramUrl: "https://t.me/+380939152233",
  whatsappUrl: "https://wa.me/380939152233",

  contactWidgetAria: "Contact us",
  contactWidgetLabel: "Call now",

  ogLocale: "en_GB",
  ogTypeWebsite: "website",
  twitterCard: "summary_large_image",
  ogSiteName: "Europe-Evakuator",

  navMainAria: "Main navigation",
  navTow: "Tow truck",
  navRates: "Rates",
  navLocations: "Where we operate",
  navServices: "Services",
  navBlog: "Blog",

  countryAustria: "Austria",
  countryGermany: "Germany",
  linkTowGraz: "Tow truck in Graz",
  linkTowVienna: "Tow truck in Vienna",
  linkTowBerlin: "Tow truck in Berlin",

  skipToContentMain: "Skip to main content",

  langGroupAria: "Choose language",
  langTitleUk: "Ukrainian",
  langTitleEn: "English",
  langTitleRu: "Russian",
  langTitleDe: "German",
  langAltUk: "UA",
  langAltEn: "EN",
  langAltRu: "RU",
  langAltDe: "DE",

  footerTagline: "24/7 tow truck across Europe",
  footerNavAria: "Links",
  footerLinkHome: "Home",
  footerLinkGallery: "Gallery",
  footerLinkReviews: "Reviews",
  footerLinkHelp: "Help",
  footerCopyright: "© 2025 Europe-Evakuator",

  ariaCall: "Call",
  ariaEmail: "Send email",
  ariaTelegram: "Telegram",
  ariaWhatsapp: "WhatsApp",
  titleCall: "Call",
  titleEmail: "Email",
  titleTelegram: "Telegram",
  titleWhatsapp: "WhatsApp",

  evacuationBlockShared,
} as const;
