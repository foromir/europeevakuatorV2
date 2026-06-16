/**
 * Публичные пути, ключи маршрутов, абсолютные URL и префикс локали в pathname (`/ru/...`).
 */

import type { Locale } from "./types";

export const SITE_ORIGIN = "https://europe-evakuator.com" as const;

export const LOCALE_STORAGE_KEY = "locale";

const SUPPORTED_LOCALES = new Set<Locale>(["ru", "en", "de", "uk"]);

export function readStoredLocalePreference(): Locale {
  if (typeof window === "undefined") return "ru";
  const s = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return SUPPORTED_LOCALES.has(s as Locale) ? (s as Locale) : "ru";
}

export function persistLocalePreference(locale: Locale): void {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
}

export function isLocale(s: string): s is Locale {
  return SUPPORTED_LOCALES.has(s as Locale);
}

/** `/` или пусто → `/${locale}`; иначе `/${locale}${path}`. */
export function withLocale(locale: Locale, path: string): string {
  if (path === "/" || path === "") return `/${locale}`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

/** Заменить первый сегмент pathname на другую локаль. */
export function swapLocaleInPathname(pathname: string, next: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${next}`;
  if (isLocale(parts[0])) parts[0] = next;
  else parts.unshift(next);
  return `/${parts.join("/")}`;
}

/** Pathname с ведущим слешем: canonical, og:url, ссылки */
export const ROUTE_PATH = {
  HOME: "/",
  AUSTRIA: "/austria",
  AUSTRIA_GRAZ: "/austria/graz",
  GERMANY: "/germany",
  GERMANY_BERLIN: "/germany/berlin",
  AUSTRIA_GRAZ_JAKOMINI: "/austria/graz/jakomini",
  /** Канонический URL статьи (SEO) */
  BLOG_POST_BREAKDOWN_ABROAD: "/blog/polomka-avto-za-granicey.html",
} as const;

export type RoutePath = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

/**
 * Ключ в `locales[locale].routes` и сегменты после `/:lang` в SPA — тот же путь, что в `ROUTE_PATH`, без ведущего `/`.
 * Единственный источник путей: `ROUTE_PATH`; дублировать строки `austria` / `austria/graz` не нужно.
 */
export function routeSlug(path: RoutePath): string {
  return path.replace(/^\//, "");
}

export function absUrl(path: string): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
