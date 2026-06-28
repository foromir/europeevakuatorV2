import { createContext, useContext, type ReactNode } from "react";
import { requireLocalePack } from "./loadLocale";
import type { Locale } from "./types";
import { withLocale } from "./routeConfig";

export type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  localizedPath: (path: string) => string;
  common: ReturnType<typeof requireLocalePack>["common"];
  pages: ReturnType<typeof requireLocalePack>["pages"];
  routes: ReturnType<typeof requireLocalePack>["routes"];
};

const I18nContext = createContext<I18nValue | null>(null);

export function buildI18nValue(
  locale: Locale,
  setLocale: (locale: Locale) => void,
  localizedPath: (path: string) => string,
): I18nValue {
  const pack = requireLocalePack(locale);
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

export function I18nProvider({ value, children }: { value: I18nValue; children: ReactNode }) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return value;
}
