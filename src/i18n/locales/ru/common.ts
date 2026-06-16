import { SITE_ORIGIN } from "../../routeConfig";

/**
 * Общий «хром» блока эвакуации (доверие, a11y слайдера, ссылка к тарифам).
 * `landing` и `austriaLanding` подмешиваются в `index.ts`, чтобы не было цикла common ↔ austria/landing.
 */
export const evacuationBlockShared = {
  titleAccent: "24/7",
  trustNoHidden: "Без скрытых доплат",
  trustFrom: "От 100 €",
  trustEta: "Выезд до 40 мин",
  ariaPrev: "Предыдущий слайд",
  ariaNext: "Следующий слайд",
  tablistAria: "Выбор слайда",
  slideAriaLabels: ["Слайд 1", "Слайд 2", "Слайд 3"],
  scrollRatesAria: "Перейти к тарифам",
  scrollRatesText: "Тарифы и услуги",
} as const;

/** Общие строки: шапка/подвал; секции `landing` и блок Австрии — в `ru/index.ts`. */
export default {
  crumbHome: "Главная",
  notFoundTitle: "404",
  notFoundLead: "Такого маршрута нет.",
  backHome: "На главную",

  siteOrigin: SITE_ORIGIN,
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
  brandName: "Europe-Evakuator",
  logoImgAlt: "Europe-Evakuator Logo",

  phoneTel: "+380939152233",
  phoneDisplay: "+380 (93) 915 22 33",
  email: "info@europe-evakuator.com",
  telegramUrl: "https://t.me/+380939152233",
  whatsappUrl: "https://wa.me/380939152233",

  contactWidgetAria: "Связаться с нами",
  contactWidgetLabel: "Позвонить",

  ogLocale: "ru_RU",
  ogTypeWebsite: "website",
  twitterCard: "summary_large_image",
  ogSiteName: "Europe-Evakuator",

  navMainAria: "Основная навигация",
  navTow: "Эвакуатор",
  navRates: "Тарифы",
  navLocations: "Где мы работаем",
  navServices: "Услуги",
  navBlog: "Блог",

  countryAustria: "Австрия",
  countryGermany: "Германия",
  linkTowGraz: "Эвакуатор в Граце",
  linkTowVienna: "Эвакуатор в Вене",
  linkTowMunich: "Эвакуатор в Мюнхене",

  skipToContentMain: "Перейти к основному содержанию",

  langGroupAria: "Выбор языка",
  langTitleUk: "Українська",
  langTitleEn: "English",
  langTitleRu: "Русский",
  langTitleDe: "Deutsch",
  langAltUk: "UA",
  langAltEn: "EN",
  langAltRu: "RU",
  langAltDe: "DE",

  footerTagline: "Эвакуатор по Европе 24/7",
  footerNavAria: "Ссылки",
  footerLinkHome: "Главная",
  footerLinkGallery: "Галерея",
  footerLinkReviews: "Отзывы",
  footerLinkHelp: "Помощь",
  footerCopyright: "© 2025 Europe-Evakuator",

  ariaCall: "Позвонить",
  ariaEmail: "Написать на email",
  ariaTelegram: "Telegram",
  ariaWhatsapp: "WhatsApp",
  titleCall: "Позвонить",
  titleEmail: "Email",
  titleTelegram: "Telegram",
  titleWhatsapp: "WhatsApp",

  evacuationBlockShared,
} as const;
