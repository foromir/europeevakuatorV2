/**
 * Публичные пути, ключи маршрутов, абсолютные URL и префикс локали в pathname (`/ru/...`).
 */

import type { Locale } from "./types";

export const SITE_ORIGIN =
  (import.meta.env.VITE_SITE_ORIGIN as string | undefined)?.replace(/\/$/, "") ||
  "https://europe-evakuator.com";

export const LOCALE_STORAGE_KEY = "locale";

const SUPPORTED_LOCALES = new Set<Locale>(["ru", "en", "de", "uk"]);

export const DEFAULT_LOCALE: Locale = "de";

export function readStoredLocalePreference(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const s = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return SUPPORTED_LOCALES.has(s as Locale) ? (s as Locale) : DEFAULT_LOCALE;
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
  BLOG: "/blog",
  /** Канонический URL статьи (SEO) */
  BLOG_POST_BREAKDOWN_ABROAD: "/blog/polomka-avto-za-granicey.html",
  BLOG_POST_ACCIDENT_INSURANCE: "/blog/evakuaciya-posle-dtp.html",
  BLOG_POST_INTERNATIONAL_TRANSPORT: "/blog/perevozka-avto-mezhdu-stranami.html",
} as const;

export const BLOG_IMAGE = {
  BREAKDOWN_ABROAD: "/assets/images/blog/breakdown-abroad.jpeg",
  ACCIDENT_INSURANCE: "/assets/images/blog/accident-insurance.jpeg",
  INTERNATIONAL_TRANSPORT: "/assets/images/blog/international-transport.jpeg",
} as const;

export const BLOG_POST_PATHS = [
  ROUTE_PATH.BLOG_POST_BREAKDOWN_ABROAD,
  ROUTE_PATH.BLOG_POST_ACCIDENT_INSURANCE,
  ROUTE_PATH.BLOG_POST_INTERNATIONAL_TRANSPORT,
] as const;

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

/** iframe src из Google Maps → Поделиться → Встроить карту */
export const GOOGLE_MAPS_EMBED_SRC =
  (import.meta.env.VITE_GOOGLE_MAPS_EMBED_SRC as string | undefined)?.trim() || "";

/** Ссылка на карточку компании в Google (все отзывы) */
export const GOOGLE_MAPS_PLACE_URL =
  (import.meta.env.VITE_GOOGLE_MAPS_PLACE_URL as string | undefined)?.trim() || "";
