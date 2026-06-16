import { SITE_ORIGIN } from "../../routeConfig";

/** Спільний «хром» блоку евакуації — `landing` / `austriaLanding` підмішуються в `uk/index.ts` (без циклів імпорту). */
export const evacuationBlockShared = {
  titleAccent: "24/7",
  trustNoHidden: "Без прихованих доплат",
  trustFrom: "Від 100 €",
  trustEta: "Виїзд до 40 хв",
  ariaPrev: "Попередній слайд",
  ariaNext: "Наступний слайд",
  tablistAria: "Вибір слайда",
  slideAriaLabels: ["Слайд 1", "Слайд 2", "Слайд 3"],
  scrollRatesAria: "Перейти до тарифів",
  scrollRatesText: "Тарифи та послуги",
} as const;

/** Спільне: шапка/підвал; `landing` + блоки Австрії — в `uk/index.ts`. */
export default {
  crumbHome: "Головна",
  notFoundTitle: "404",
  notFoundLead: "Такого маршруту не існує.",
  backHome: "На головну",

  siteOrigin: SITE_ORIGIN,
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
  brandName: "Europe-Evakuator",
  logoImgAlt: "Europe-Evakuator Logo",

  phoneTel: "+380939152233",
  phoneDisplay: "+380 (93) 915 22 33",
  email: "info@europe-evakuator.com",
  telegramUrl: "https://t.me/+380939152233",
  whatsappUrl: "https://wa.me/380939152233",

  contactWidgetAria: "Зв'язатися з нами",
  contactWidgetLabel: "Зателефонувати",

  ogLocale: "uk_UA",
  ogTypeWebsite: "website",
  twitterCard: "summary_large_image",
  ogSiteName: "Europe-Evakuator",

  navMainAria: "Основна навігація",
  navTow: "Евакуатор",
  navRates: "Тарифи",
  navLocations: "Де ми працюємо",
  navServices: "Послуги",
  navBlog: "Блог",

  countryAustria: "Австрія",
  countryGermany: "Німеччина",
  linkTowGraz: "Евакуатор у Граці",
  linkTowVienna: "Евакуатор у Відні",
  linkTowBerlin: "Евакуатор у Берліні",

  skipToContentMain: "Перейти до основного вмісту",

  langGroupAria: "Вибір мови",
  langTitleUk: "Українська",
  langTitleEn: "English",
  langTitleRu: "Русский",
  langTitleDe: "Deutsch",
  langAltUk: "UA",
  langAltEn: "EN",
  langAltRu: "RU",
  langAltDe: "DE",

  footerTagline: "Евакуатор по Європі 24/7",
  footerNavAria: "Посилання",
  footerLinkHome: "Головна",
  footerLinkGallery: "Галерея",
  footerLinkReviews: "Відгуки",
  footerLinkHelp: "Допомога",
  footerCopyright: "© 2025 Europe-Evakuator",

  ariaCall: "Зателефонувати",
  ariaEmail: "Написати на email",
  ariaTelegram: "Telegram",
  ariaWhatsapp: "WhatsApp",
  titleCall: "Зателефонувати",
  titleEmail: "Email",
  titleTelegram: "Telegram",
  titleWhatsapp: "WhatsApp",

  evacuationBlockShared,
} as const;
