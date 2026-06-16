import { ROUTE_PATH, SITE_ORIGIN, withLocale, BLOG_POST_PATHS } from "../i18n/routeConfig";
import { SEO_LOCALES } from "../i18n/seo/config";
import { buildHreflangLinks } from "../i18n/seo/hreflang";

const PRERENDER_ROUTE_PATHS = [
  ROUTE_PATH.HOME,
  ROUTE_PATH.AUSTRIA,
  ROUTE_PATH.AUSTRIA_GRAZ,
  ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  ROUTE_PATH.GERMANY,
  ROUTE_PATH.BLOG,
  ...BLOG_POST_PATHS,
] as const;

/** Все pathname для статической генерации: `/ru`, `/en/austria`, … */
export function getPrerenderPaths(): string[] {
  return SEO_LOCALES.flatMap((locale) =>
    PRERENDER_ROUTE_PATHS.map((path) => withLocale(locale, path)),
  );
}

function toAbsoluteUrl(pathname: string): string {
  if (!pathname || pathname === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function generateSitemap(paths: readonly string[]): string {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = paths
    .map((pathname) => {
      const alternates = buildHreflangLinks(pathname)
        .map(
          (link) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(link.hreflang)}" href="${escapeXml(link.href)}" />`,
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(toAbsoluteUrl(pathname))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
${alternates}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;
}
