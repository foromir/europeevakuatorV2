import { useI18n } from "../../i18n/I18nContext";

export function SiteFooter() {
  const { common } = useI18n();

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
        <div className="footer__social">
          <a
            href={`tel:${common.phoneTel}`}
            className="footer__social-link"
            title={common.titleCall}
            aria-label={common.ariaCall}
          >
            <i className="fas fa-phone" />
          </a>
          <a
            href={common.telegramUrl}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title={common.titleTelegram}
            aria-label={common.ariaTelegram}
          >
            <i className="fab fa-telegram" />
          </a>
          <a
            href={common.whatsappUrl}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            title={common.titleWhatsapp}
            aria-label={common.ariaWhatsapp}
          >
            <i className="fab fa-whatsapp" />
          </a>
        </div>
        <nav className="footer__links" aria-label={common.footerNavAria}>
          <a href="#top">{common.footerLinkHome}</a>
          <a href="#rates">{common.navRates}</a>
          <a href="#services">{common.navServices}</a>
          <a href="#gallery">{common.footerLinkGallery}</a>
          <a href="#reviews">{common.footerLinkReviews}</a>
          <a href="#faq">{common.footerLinkHelp}</a>
          <a href="#blog">{common.navBlog}</a>
        </nav>
        <p className="footer__copy">{common.footerCopyright}</p>
      </div>
    </footer>
  );
}
