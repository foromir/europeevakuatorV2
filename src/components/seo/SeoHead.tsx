import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { useI18n } from "../../i18n/I18nContext";
import {
  buildHreflangLinks,
  buildJsonLdGraph,
  isIndexedLocale,
  LOCALE_OG,
  SEO_LOCALES,
} from "../../i18n/seo";
import { absUrl, withLocale } from "../../i18n/routeConfig";
import type { PageSeoBundle } from "../../i18n/types";

type SeoHeadProps = {
  seo?: PageSeoBundle;
};

export function SeoHead({ seo }: SeoHeadProps) {
  const { locale, common } = useI18n();
  const { pathname } = useLocation();

  const extras = useMemo(() => {
    if (!seo) return null;
    const contentPath = seo.canonicalPath;
    const localizedPath = withLocale(locale, contentPath);
    return {
      hreflang: buildHreflangLinks(localizedPath),
      jsonLd: buildJsonLdGraph(localizedPath),
      canonical: absUrl(withLocale(locale, seo.canonicalPath)),
      ogUrl: absUrl(withLocale(locale, seo.ogUrlPath)),
      ogImage: absUrl(seo.ogImagePath ?? common.ogImagePath),
    };
  }, [seo, locale, common.ogImagePath, pathname]);

  if (!seo || !extras) return null;

  const isArticle = seo.canonicalPath.includes("/blog/");

  return (
    <Helmet>
      <title>{seo.title}</title>
      {seo.description ? <meta name="description" content={seo.description} /> : null}
      {!isIndexedLocale(locale) ? <meta name="robots" content="noindex, follow" /> : null}
      <link rel="canonical" href={extras.canonical} />
      {extras.hreflang.map((link) => (
        <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} />
      ))}
      <meta property="og:type" content={isArticle ? "article" : common.ogTypeWebsite} />
      <meta property="og:locale" content={LOCALE_OG[locale]} />
      {SEO_LOCALES.filter((l) => l !== locale).map((alt) => (
        <meta key={alt} property="og:locale:alternate" content={LOCALE_OG[alt]} />
      ))}
      <meta property="og:site_name" content={common.ogSiteName} />
      <meta property="og:title" content={seo.ogTitle || seo.title} />
      {seo.ogDescription ? <meta property="og:description" content={seo.ogDescription} /> : null}
      <meta property="og:url" content={extras.ogUrl} />
      <meta property="og:image" content={extras.ogImage} />
      <meta name="twitter:card" content={common.twitterCard} />
      <meta name="twitter:title" content={seo.twitterTitle || seo.title} />
      {seo.twitterDescription ? (
        <meta name="twitter:description" content={seo.twitterDescription} />
      ) : null}
      {extras.jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(extras.jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
