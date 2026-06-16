import { EvacuationBlockSlider } from "../EvacuationBlockSlider";
import { useI18n } from "../../i18n/I18nContext";
import type { LandingEvacuationCopy } from "../../i18n/types";

const EVACUATION_SLIDE_SRC = "/assets/images/gallery/gallery-18.jpeg";

type EvacuationBlockSectionProps = {
  /** Если не задано — берётся из `common.landing.evacuation`. */
  content?: LandingEvacuationCopy;
};

export function EvacuationBlockSection({ content }: EvacuationBlockSectionProps) {
  const { common } = useI18n();
  const e = content ?? common.landing.evacuation;

  const slides = e.slideAlts.map((alt) => ({
    src: EVACUATION_SLIDE_SRC,
    alt,
    width: 560,
    height: 400,
  }));

  return (
    <section className="evacuation-block">
      <div className="evacuation-block__bg" />
      <div className="container evacuation-block__container">
        <div className="evacuation-block__wrapper">
          <div className="evacuation-block__content">
            <span className="evacuation-block__badge">{e.badge}</span>
            <h1 className="evacuation-block__title">
              <span className="evacuation-block__title-accent">{e.titleAccent}</span>
              {e.titleRest}
            </h1>
            <p className="evacuation-block__subtitle">{e.subtitle}</p>
            <p className="evacuation-block__text">{e.text}</p>
            <a href={`tel:${common.phoneTel}`} className="evacuation-block__info-contact-phone">
              <i className="fas fa-phone" />
              <span>{common.phoneDisplay}</span>
            </a>
            <div className="evacuation-block__trust">
              <span className="evacuation-block__trust-item">
                <i className="fas fa-shield-alt" /> {e.trustNoHidden}
              </span>
              <span className="evacuation-block__trust-item">
                <i className="fas fa-euro-sign" /> {e.trustFrom}
              </span>
              <span className="evacuation-block__trust-item">
                <i className="fas fa-clock" /> {e.trustEta}
              </span>
            </div>
          </div>
          <div className="evacuation-block__media">
            <EvacuationBlockSlider
              slides={slides}
              ariaPrev={e.ariaPrev}
              ariaNext={e.ariaNext}
              slideAriaLabels={e.slideAriaLabels}
              tablistAria={e.tablistAria}
            />
          </div>
        </div>
        <div className="evacuation-block__bottom">
          <a href="#rates" className="evacuation-block__scroll-hint" aria-label={e.scrollRatesAria}>
            <span className="evacuation-block__scroll-hint-text">{e.scrollRatesText}</span>
            <i className="fas fa-chevron-down" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
