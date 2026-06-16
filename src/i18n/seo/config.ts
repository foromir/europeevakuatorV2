import { DEFAULT_LOCALE } from "../routeConfig";
import type { Locale } from "../types";

export { DEFAULT_LOCALE };

export const SEO_LOCALES: Locale[] = ["ru", "en", "de", "uk"];

/** Все поддерживаемые локали индексируются (у каждой свой перевод). */
export const INDEXED_LOCALES: readonly Locale[] = ["ru", "en", "de", "uk"];

export const LOCALE_OG: Record<Locale, string> = {
  ru: "ru_RU",
  en: "en_GB",
  de: "de_DE",
  uk: "uk_UA",
};

export const LOCALE_HREFLANG: Record<Locale, string> = {
  ru: "ru",
  en: "en",
  de: "de",
  uk: "uk",
};

export function isIndexedLocale(locale: Locale): boolean {
  return INDEXED_LOCALES.includes(locale);
}
