import type { ReactNode } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useI18n } from "../../i18n/I18nContext";
import { absUrl } from "../../i18n/routeConfig";
import type { PageSeoBundle } from "../../i18n/types";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LayoutProps = {
  children: ReactNode;
  /** Мета для `<head>` (title, description, canonical, Open Graph, Twitter). */
  seo?: PageSeoBundle;
};

export function Layout({ children, seo }: LayoutProps) {
  const { common, localizedPath } = useI18n();

  useEffect(() => {
    const found = document.querySelector(".header");
    if (!(found instanceof HTMLElement)) return;
    const header: HTMLElement = found;
    function updateHeader() {
      header.classList.toggle("header--scrolled", window.scrollY > 60);
    }
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const canonicalHref = seo?.canonicalPath ? absUrl(localizedPath(seo.canonicalPath)) : undefined;
  const ogUrlHref = seo?.ogUrlPath ? absUrl(localizedPath(seo.ogUrlPath)) : undefined;
  const ogImageHref = absUrl(common.ogImagePath);

  return (
    <>
      {seo ? (
        <Helmet>
          <title>{seo.title}</title>
          {seo.description ? <meta name="description" content={seo.description} /> : null}
          {canonicalHref ? <link rel="canonical" href={canonicalHref} /> : null}
          <meta property="og:type" content={common.ogTypeWebsite} />
          <meta property="og:locale" content={common.ogLocale} />
          <meta property="og:site_name" content={common.ogSiteName} />
          <meta property="og:title" content={seo.ogTitle || seo.title} />
          {seo.ogDescription ? <meta property="og:description" content={seo.ogDescription} /> : null}
          {ogUrlHref ? <meta property="og:url" content={ogUrlHref} /> : null}
          <meta property="og:image" content={ogImageHref} />
          <meta name="twitter:card" content={common.twitterCard} />
          <meta name="twitter:title" content={seo.twitterTitle || seo.title} />
          {seo.twitterDescription ? (
            <meta name="twitter:description" content={seo.twitterDescription} />
          ) : null}
        </Helmet>
      ) : null}
      <a href="#top" className="skip-link">
        {common.skipToContentMain}
      </a>
      <SiteHeader />
      <main id="top">{children}</main>
      <SiteFooter />
    </>
  );
}
