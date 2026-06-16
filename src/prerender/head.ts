import { messages } from "../i18n/locales";
import { absUrl, isLocale, withLocale } from "../i18n/routeConfig";
import type { Locale, PageSeoBundle } from "../i18n/types";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resolveSeo(pathname: string): { locale: Locale; seo: PageSeoBundle } | null {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const locale = isLocale(parts[0]) ? parts[0] : "ru";
  const pack = messages[locale];

  if (parts.length === 1) {
    return { locale, seo: pack.pages.home };
  }

  const routeKey = parts.slice(1).join("/");
  const seo = pack.routes[routeKey]?.seo;
  if (!seo) return null;

  return { locale, seo };
}

/** SEO-теги для `<head>` при статической генерации (React 19 не поднимает Helmet в head на сервере). */
export function buildHeadForUrl(pathname: string): string {
  const resolved = resolveSeo(pathname);
  if (!resolved) return "";

  const { locale, seo } = resolved;
  const common = messages[locale].common;
  const canonicalHref = absUrl(withLocale(locale, seo.canonicalPath));
  const ogUrlHref = absUrl(withLocale(locale, seo.ogUrlPath));
  const ogImageHref = absUrl(common.ogImagePath);

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    seo.description ? `<meta name="description" content="${escapeHtml(seo.description)}" />` : "",
    `<link rel="canonical" href="${escapeHtml(canonicalHref)}" />`,
    `<meta property="og:type" content="${escapeHtml(common.ogTypeWebsite)}" />`,
    `<meta property="og:locale" content="${escapeHtml(common.ogLocale)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(common.ogSiteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(seo.ogTitle || seo.title)}" />`,
    seo.ogDescription
      ? `<meta property="og:description" content="${escapeHtml(seo.ogDescription)}" />`
      : "",
    `<meta property="og:url" content="${escapeHtml(ogUrlHref)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImageHref)}" />`,
    `<meta name="twitter:card" content="${escapeHtml(common.twitterCard)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(seo.twitterTitle || seo.title)}" />`,
    seo.twitterDescription
      ? `<meta name="twitter:description" content="${escapeHtml(seo.twitterDescription)}" />`
      : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function htmlLangForUrl(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  return isLocale(parts[0] ?? "") ? parts[0] : "ru";
}

/** Убирает из HTML тела теги, которые React 19 рендерит inline вместо `<head>`. */
export function stripDocumentMetadata(html: string): string {
  return html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*\/?>/gi, "")
    .replace(/<link\b[^>]*\/?>/gi, "");
}
