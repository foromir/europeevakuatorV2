import { messages } from "../locales";
import { absUrl, withLocale } from "../routeConfig";
import type { Locale } from "../types";
import { DEFAULT_LOCALE, INDEXED_LOCALES, LOCALE_HREFLANG, LOCALE_OG, SEO_LOCALES, isIndexedLocale } from "./config";
import { buildHreflangLinks } from "./hreflang";
import { buildJsonLdGraph } from "./jsonLd";
import { resolvePage } from "./resolvePage";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function ogImageForPage(locale: Locale, ogImagePath?: string): string {
  const common = messages[locale].common;
  return absUrl(ogImagePath ?? common.ogImagePath);
}

const LCP_IMAGE = "/assets/images/gallery/gallery-18";
const LCP_PRELOAD = `<link rel="preload" as="image" type="image/webp" href="${LCP_IMAGE}-1120.webp" imagesrcset="${LCP_IMAGE}-560.webp 560w, ${LCP_IMAGE}-1120.webp 1120w" imagesizes="(max-width: 768px) 90vw, 560px" fetchpriority="high" />`;

/** SEO-теги для `<head>` при статической генерации. */
export function buildHeadForUrl(pathname: string): string {
  const page = resolvePage(pathname);
  if (!page) return "";

  const { locale, seo } = page;
  const common = messages[locale].common;
  const canonicalHref = absUrl(withLocale(locale, seo.canonicalPath));
  const ogUrlHref = absUrl(withLocale(locale, seo.ogUrlPath));
  const ogImageHref = ogImageForPage(locale, seo.ogImagePath);
  const hreflang = buildHreflangLinks(pathname);
  const jsonLd = buildJsonLdGraph(pathname);

  const tags: string[] = [
    LCP_PRELOAD,
    `<title>${escapeHtml(seo.title)}</title>`,
    seo.description ? `<meta name="description" content="${escapeHtml(seo.description)}" />` : "",
    !isIndexedLocale(locale) ? `<meta name="robots" content="noindex, follow" />` : "",
    `<link rel="canonical" href="${escapeHtml(canonicalHref)}" />`,
    ...hreflang.map(
      (link) =>
        `<link rel="alternate" hreflang="${escapeHtml(link.hreflang)}" href="${escapeHtml(link.href)}" />`,
    ),
    `<meta property="og:type" content="${escapeHtml(page.kind === "blog" ? "article" : common.ogTypeWebsite)}" />`,
    `<meta property="og:locale" content="${escapeHtml(LOCALE_OG[locale])}" />`,
    ...SEO_LOCALES.filter((l) => l !== locale).map(
      (alt) => `<meta property="og:locale:alternate" content="${escapeHtml(LOCALE_OG[alt])}" />`,
    ),
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
  ];

  if (jsonLd) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
    );
  }

  return tags.filter(Boolean).join("\n");
}

export function htmlLangForUrl(pathname: string): string {
  const page = resolvePage(pathname);
  if (page) return page.locale;
  return DEFAULT_LOCALE;
}

/** Убирает из HTML тела теги, которые React 19 рендерит inline вместо `<head>`. */
export function stripDocumentMetadata(html: string): string {
  return html
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*\/?>/gi, "")
    .replace(/<link\b(?![^>]*rel=["']stylesheet["'])[^>]*\/?>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
}

export { INDEXED_LOCALES, LOCALE_HREFLANG, SEO_LOCALES };
