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
  /** путь к og:image (без домена); иначе — common.ogImagePath */
  ogImagePath?: string;
};

export type CountryLandingBlock = {
  cities?: {
    title: string;
    lead: string;
    list: readonly string[];
  };
  directions?: {
    title: string;
    lead: string;
    list: readonly string[];
    more: string;
  };
};

export type BlogArticleSection = {
  heading: string;
  body: string;
};

/** Контент статьи блога + мета */
export type BlogArticlePage = PageSeoBundle & {
  skipLink: string;
  dateIso: string;
  dateDisplay: string;
  tag: string;
  imagePath: string;
  imageAlt: string;
  h1: string;
  lead: string;
  sections: readonly BlogArticleSection[];
};

/** @deprecated используйте BlogArticlePage */
export type BlogBreakdownAbroadPage = BlogArticlePage;

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
  landing?: CountryLandingBlock;
};

/** Статические страницы вне `routes` (главная, статьи блога). SEO стран — в `routes`. */
export type StaticPagesBundle = {
  home: PageSeoBundle;
  blogIndex: PageSeoBundle;
  blogBreakdownAbroad: BlogArticlePage;
  blogAccidentInsurance: BlogArticlePage;
  blogInternationalTransport: BlogArticlePage;
};
