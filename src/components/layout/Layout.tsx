import type { ReactNode } from "react";
import { useEffect } from "react";
import { SeoHead } from "../seo/SeoHead";
import { useI18n } from "../../i18n/I18nContext";
import type { PageSeoBundle } from "../../i18n/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContactWidget } from "./ContactWidget";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LayoutProps = {
  children: ReactNode;
  seo?: PageSeoBundle;
  showBreadcrumbs?: boolean;
};

export function Layout({ children, seo, showBreadcrumbs = true }: LayoutProps) {
  const { common } = useI18n();

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

  return (
    <>
      <SeoHead seo={seo} />
      <a href="#top" className="skip-link">
        {common.skipToContentMain}
      </a>
      <SiteHeader />
      <main id="top" className={showBreadcrumbs && seo ? "main--with-breadcrumbs" : undefined}>
        {showBreadcrumbs && seo ? <Breadcrumbs seo={seo} /> : null}
        {children}
      </main>
      <SiteFooter />
      <ContactWidget />
    </>
  );
}
