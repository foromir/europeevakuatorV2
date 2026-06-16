export type Locale = "ru" | "en" | "de" | "uk";

/** SEO и соцсети для страниц (мета в `<head>` при необходимости). */
export type PageSeoBundle = {
  title: string;
  description: string;
  /** путь для <link rel="canonical"> (без домена) */
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  /** путь для og:url (без домена) */
  ogUrlPath: string;
  twitterTitle: string;
  twitterDescription: string;
};

export type BlogArticleSection = {
  heading: string;
  body: string;
};

/** Уникальный контент статьи + мета (блог: поломка за границей) */
export type BlogBreakdownAbroadPage = PageSeoBundle & {
  skipLink: string;
  backToBlog: string;
  dateIso: string;
  dateDisplay: string;
  tag: string;
  h1: string;
  lead: string;
  sections: readonly BlogArticleSection[];
};

/** Тексты блока эвакуации (как в `common.landing.evacuation`; строки — для городов/стран). */
export type LandingEvacuationCopy = {
  badge: string;
  titleAccent: string;
  titleRest: string;
  subtitle: string;
  text: string;
  trustNoHidden: string;
  trustFrom: string;
  trustEta: string;
  ariaPrev: string;
  ariaNext: string;
  tablistAria: string;
  slideAriaLabels: readonly string[];
  slideAlts: readonly string[];
  scrollRatesAria: string;
  scrollRatesText: string;
};

/** Маршрут: SEO для `<head>`; опционально свой текст блока эвакуации (иначе — `common.landing.evacuation`). */
export type RouteLocaleEntry = {
  seo: PageSeoBundle;
  evacuation?: LandingEvacuationCopy;
};

/** Статические страницы вне `routes` (главная, статьи блога). SEO стран — в `routes`. */
export type StaticPagesBundle = {
  home: PageSeoBundle;
  blogBreakdownAbroad: BlogBreakdownAbroadPage;
};
