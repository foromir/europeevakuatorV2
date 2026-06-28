import { requireLocalePack } from "../loadLocale";
import { localizedCityName } from "../locales/transliterate/germanPlaceName";
import { getLocationCityByRouteKey, getLocationCountryByRouteSlug } from "../locations/registry";
import { ROUTE_PATH, SITE_ORIGIN, absUrl, withLocale } from "../routeConfig";
import type { Locale } from "../types";
import { getBreadcrumbs } from "./breadcrumbs";
import { resolvePage, type ResolvedPage } from "./resolvePage";

function schemaId(path: string): string {
  return `${SITE_ORIGIN}${path}#schema`;
}

function areaNameFromRoute(routeKey: string, locale: Locale): string | undefined {
  const country = getLocationCountryByRouteSlug(routeKey);
  if (country && routeKey === country.routeSlug) return country.countryLabel[locale];

  const city = getLocationCityByRouteKey(routeKey);
  if (city) return localizedCityName(city.names, locale);

  if (routeKey === "austria/graz/jakomini") return "Jakomini";

  return undefined;
}

function buildOrganization(locale: Locale) {
  const common = requireLocalePack(locale).common;
  return {
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: common.brandName,
    url: SITE_ORIGIN,
    logo: absUrl("/assets/images/logo.svg"),
    telephone: common.phoneTel,
    email: common.email,
    sameAs: [common.telegramUrl, common.whatsappUrl],
  };
}

function buildWebSite(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: requireLocalePack(locale).common.brandName,
    inLanguage: locale,
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
  };
}

function buildBreadcrumbList(locale: Locale, contentPath: string, pageUrl: string) {
  const crumbs = getBreadcrumbs(locale, contentPath);
  if (crumbs.length <= 1) return null;

  return {
    "@type": "BreadcrumbList",
    "@id": schemaId(pageUrl) + "-breadcrumb",
    itemListElement: crumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.path ? { item: absUrl(withLocale(locale, item.path)) } : {}),
    })),
  };
}

function buildFaqPage(locale: Locale, pageUrl: string) {
  const items = requireLocalePack(locale).common.landing.faq.items;
  return {
    "@type": "FAQPage",
    "@id": schemaId(pageUrl) + "-faq",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.body,
      },
    })),
  };
}

function buildTowingService(locale: Locale, page: Extract<ResolvedPage, { kind: "route" }>, pageUrl: string) {
  const common = requireLocalePack(locale).common;
  const area = areaNameFromRoute(page.routeKey, locale);
  const ogImage = absUrl(page.seo.ogImagePath ?? common.ogImagePath);

  return {
    "@type": "TowingService",
    "@id": schemaId(pageUrl) + "-service",
    name: `${common.brandName}${area ? ` — ${area}` : ""}`,
    url: absUrl(withLocale(locale, page.seo.canonicalPath)),
    image: ogImage,
    telephone: common.phoneTel,
    priceRange: "€€",
    openingHours: "Mo-Su 00:00-24:00",
    ...(area
      ? {
          areaServed: {
            "@type": "Place",
            name: area,
          },
        }
      : {}),
    parentOrganization: { "@id": `${SITE_ORIGIN}/#organization` },
  };
}

function buildArticle(locale: Locale, page: Extract<ResolvedPage, { kind: "blog" }>, pageUrl: string) {
  const common = requireLocalePack(locale).common;
  const article = page.seo;
  const ogImage = absUrl(article.ogImagePath ?? common.ogImagePath);

  return {
    "@type": "Article",
    "@id": schemaId(pageUrl) + "-article",
    headline: article.h1,
    description: article.description,
    datePublished: article.dateIso,
    dateModified: article.dateIso,
    image: ogImage,
    author: {
      "@type": "Organization",
      name: common.brandName,
    },
    publisher: {
      "@type": "Organization",
      name: common.brandName,
      logo: {
        "@type": "ImageObject",
        url: absUrl("/assets/images/logo.svg"),
      },
    },
    mainEntityOfPage: absUrl(withLocale(locale, article.canonicalPath)),
  };
}

export function buildJsonLdGraph(pathname: string): Record<string, unknown> | null {
  const page = resolvePage(pathname);
  if (!page) return null;

  const { locale, contentPath } = page;
  const pageUrl = withLocale(locale, page.seo.canonicalPath);
  const graph: Record<string, unknown>[] = [buildOrganization(locale)];

  if (page.kind === "home") {
    graph.push(buildWebSite(locale));
  }

  const breadcrumbs = buildBreadcrumbList(locale, contentPath, pageUrl);
  if (breadcrumbs) graph.push(breadcrumbs);

  if (page.kind === "route") {
    graph.push(buildTowingService(locale, page, pageUrl));
    graph.push(buildFaqPage(locale, pageUrl));
  }

  if (page.kind === "blog") {
    graph.push(buildArticle(locale, page, pageUrl));
  } else if (page.kind === "home") {
    graph.push(buildFaqPage(locale, pageUrl));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
