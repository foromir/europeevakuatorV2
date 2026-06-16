import { createContext, useContext, type ReactNode } from "react";
import { messages } from "./locales";
import type { Locale } from "./types";
import { withLocale } from "./routeConfig";

export type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  localizedPath: (path: string) => string;
  common: (typeof messages)["ru"]["common"];
  pages: (typeof messages)["ru"]["pages"];
  routes: (typeof messages)["ru"]["routes"];
};

const I18nContext = createContext<I18nValue | null>(null);

export function buildI18nValue(
  locale: Locale,
  setLocale: (locale: Locale) => void,
  localizedPath: (path: string) => string,
): I18nValue {
  const pack = messages[locale];
  const { common, pages, routes } = pack;
  return {
    locale,
    setLocale,
    localizedPath,
    common,
    pages,
    routes,
  };
}

const FALLBACK_RU: I18nValue = buildI18nValue(
  "ru",
  () => {},
  (path) => withLocale("ru", path),
);

export function I18nProvider({ value, children }: { value: I18nValue; children: ReactNode }) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** В SPA — значение с `LocaleGate`; без провайдера — русский снимок (например тесты). */
export function useI18n(): I18nValue {
  return useContext(I18nContext) ?? FALLBACK_RU;
}
