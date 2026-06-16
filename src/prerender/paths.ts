import { ROUTE_PATH, SITE_ORIGIN, withLocale } from "../i18n/routeConfig";
import type { Locale } from "../i18n/types";

export const PRERENDER_LOCALES: Locale[] = ["ru", "en", "de", "uk"];

const PRERENDER_ROUTE_PATHS = [
  ROUTE_PATH.HOME,
  ROUTE_PATH.AUSTRIA,
  ROUTE_PATH.AUSTRIA_GRAZ,
  ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  ROUTE_PATH.GERMANY,
  ROUTE_PATH.GERMANY_BERLIN,
] as const;

/** Все pathname для статической генерации: `/ru`, `/en/austria`, … */
export function getPrerenderPaths(): string[] {
  return PRERENDER_LOCALES.flatMap((locale) =>
    PRERENDER_ROUTE_PATHS.map((path) => withLocale(locale, path)),
  );
}

function toAbsoluteUrl(pathname: string): string {
  if (!pathname || pathname === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function generateSitemap(paths: readonly string[]): string {
  const urls = paths
    .map(
      (pathname) =>
        `  <url>\n    <loc>${toAbsoluteUrl(pathname)}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function generateRobotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
}
