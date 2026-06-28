import { EvacuationBlockSlider } from "../EvacuationBlockSlider";
import { Icon } from "../icons";
import { useI18n } from "../../i18n/I18nContext";
import type { LandingEvacuationCopy } from "../../i18n/types";

const EVACUATION_SLIDE_SRCS = [
  "/assets/images/gallery/gallery-18.jpeg",
  "/assets/images/gallery/gallery-2.jpeg",
  "/assets/images/gallery/gallery-1.jpeg",
] as const;

type EvacuationBlockSectionProps = {
  /** Если не задано — берётся из `common.landing.evacuation`. */
  content?: LandingEvacuationCopy;
};

export function EvacuationBlockSection({ content }: EvacuationBlockSectionProps) {
  const { common } = useI18n();
  const e = content ?? common.landing.evacuation;

  const slides = e.slideAlts.map((alt, i) => ({
    src: EVACUATION_SLIDE_SRCS[i] ?? EVACUATION_SLIDE_SRCS[0],
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
              <Icon name="phone" />
              <span>{common.phoneDisplay}</span>
            </a>
            <div className="evacuation-block__trust">
              <span className="evacuation-block__trust-item">
                <Icon name="shield" />
                <span>{e.trustNoHidden}</span>
              </span>
              <span className="evacuation-block__trust-item">
                <Icon name="euro" />
                <span>{e.trustFrom}</span>
              </span>
              <span className="evacuation-block__trust-item">
                <Icon name="clock" />
                <span>{e.trustEta}</span>
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
          <a href="#rates" className="evacuation-block__scroll-hint">
            <span className="evacuation-block__scroll-hint-text">{e.scrollRatesText}</span>
            <Icon name="chevron-down" />
          </a>
        </div>
      </div>
    </section>
  );
}
