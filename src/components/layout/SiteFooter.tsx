import { useI18n } from "../../i18n/I18nContext";
import { ROUTE_PATH } from "../../i18n/routeConfig";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  const { common, localizedPath } = useI18n();
  const home = localizedPath(ROUTE_PATH.HOME);

  return (
    <footer className="site-footer">
      <div className="container footer__container">
        <a href="#top" className="footer__logo">
          <img
            className="footer__logo-icon"
            src="/assets/images/logo.svg"
            alt={common.brandName}
          />
          <span className="footer__logo-text">{common.brandName}</span>
        </a>
        <p className="footer__tagline">{common.footerTagline}</p>
        <a href={`tel:${common.phoneTel}`} className="footer__cta">
          {common.phoneDisplay}
        </a>
        <SocialLinks />
        <nav className="footer__links" aria-label={common.footerNavAria}>
          <a href={home}>{common.footerLinkHome}</a>
          <a href={`${home}#rates`}>{common.navRates}</a>
          <a href={`${home}#services`}>{common.navServices}</a>
          <a href={`${home}#gallery`}>{common.footerLinkGallery}</a>
          <a href={`${home}#reviews`}>{common.footerLinkReviews}</a>
          <a href={`${home}#faq`}>{common.footerLinkHelp}</a>
          <a href={localizedPath(ROUTE_PATH.BLOG)}>{common.navBlog}</a>
        </nav>
        <p className="footer__copy">{common.footerCopyright}</p>
      </div>
    </footer>
  );
}
