import { useLocation, useNavigate } from "react-router";
import { useI18n } from "../../i18n/I18nContext";
import type { Locale } from "../../i18n/types";
import { persistLocalePreference, ROUTE_PATH, swapLocaleInPathname } from "../../i18n/routeConfig";

type Common = ReturnType<typeof useI18n>["common"];

const LANGUAGE_SWITCHER: readonly {
  locale: Locale;
  flagSrc: string;
  title: (c: Common) => string;
  flagAlt: (c: Common) => string;
}[] = [
  { locale: "ru", flagSrc: "/assets/images/flags/ru.svg", title: (c) => c.langTitleRu, flagAlt: (c) => c.langAltRu },
  { locale: "en", flagSrc: "/assets/images/flags/en.svg", title: (c) => c.langTitleEn, flagAlt: (c) => c.langAltEn },
  { locale: "de", flagSrc: "/assets/images/flags/de.svg", title: (c) => c.langTitleDe, flagAlt: (c) => c.langAltDe },
  { locale: "uk", flagSrc: "/assets/images/flags/uk.svg", title: (c) => c.langTitleUk, flagAlt: (c) => c.langAltUk },
];

export function SiteHeader() {
  const { common, locale, localizedPath } = useI18n();
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  const goLocale = (next: Locale) => {
    if (next === locale) return;
    navigate(`${swapLocaleInPathname(pathname, next)}${search}${hash}`, { replace: true });
    persistLocalePreference(next);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <a href={localizedPath("/")} className="header__logo">
          <img
            className="header__logo-icon"
            src="/assets/images/logo.svg"
            alt={common.logoImgAlt}
          />
          <span className="header__logo-text">{common.brandName}</span>
        </a>
      </div>

      <div className="header__nav-container">
        <nav className="header__nav" aria-label={common.navMainAria}>
          <ul className="header__nav-list">
            <li className="header__nav-item header__nav-item--dropdown">
              <span
                className="header__nav-link header__nav-link--trigger"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {common.navTow}
              </span>
              <div className="header__dropdown">
                <ul className="header__dropdown-list">
                  <li className="header__dropdown-item header__dropdown-item--sub">
                    <span className="header__dropdown-link">{common.countryAustria}</span>
                    <ul className="header__dropdown-sublist">
                      <li>
                        <a href={localizedPath(ROUTE_PATH.AUSTRIA_GRAZ)} className="header__dropdown-sublink">
                          {common.linkTowGraz}
                        </a>
                      </li>
                      <li>
                        <a href={localizedPath(ROUTE_PATH.AUSTRIA)} className="header__dropdown-sublink">
                          {common.linkTowVienna}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header__dropdown-item header__dropdown-item--sub">
                    <span className="header__dropdown-link">{common.countryGermany}</span>
                    <ul className="header__dropdown-sublist">
                      <li>
                        <a href={localizedPath(ROUTE_PATH.GERMANY_BERLIN)} className="header__dropdown-sublink">
                          {common.linkTowBerlin}
                        </a>
                      </li>
                      <li>
                        <a href={localizedPath(ROUTE_PATH.GERMANY)} className="header__dropdown-sublink">
                          {common.countryGermany}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__nav-item">
              <a href="#rates" className="header__nav-link">
                {common.navRates}
              </a>
            </li>
            <li className="header__nav-item">
              <a href={localizedPath(ROUTE_PATH.HOME) + "#locations"} className="header__nav-link">
                {common.navLocations}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#services" className="header__nav-link">
                {common.navServices}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__contact">
        <a href={`tel:${common.phoneTel}`} className="header__contact-item-number">
          <i className="fas fa-phone header__contact-icon" />
          <span className="header__contact-link">{common.phoneDisplay}</span>
        </a>
      </div>

      <div className="header__languages-container">
        <div className="header__languages">
          <div className="header__i18n" role="group" aria-label={common.langGroupAria}>
            {LANGUAGE_SWITCHER.map(({ locale: code, flagSrc, title, flagAlt }) => {
              const label = title(common);
              return (
                <button
                  key={code}
                  type="button"
                  className={`header__language-link${locale === code ? " header__language-link--active" : ""}`}
                  title={label}
                  aria-current={locale === code ? "true" : undefined}
                  aria-label={label}
                  onClick={() => goLocale(code)}
                >
                  <img src={flagSrc} alt={flagAlt(common)} className="header__language-icon" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
