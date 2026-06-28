import { useI18n } from "../../i18n/I18nContext";
import { ResponsiveImage, SERVICE_IMAGE_SIZES, SERVICE_IMAGE_WIDTHS } from "../ui/ResponsiveImage";

const CARD_IMAGES = [
  "/assets/images/gallery/gallery-18.jpeg",
  "/assets/images/gallery/gallery-34.jpeg",
  "/assets/images/gallery/gallery-28.jpeg",
  "/assets/images/gallery/gallery-20.jpeg",
];

export function ServicesSection() {
  const { common } = useI18n();
  const s = common.landing.services;

  return (
    <section className="services" id="services">
      <div className="container">
        <header className="services__header">
          <h2 className="services__title">{s.title}</h2>
          <p className="services__subtitle">{s.subtitle}</p>
        </header>
        <div className="services__wrapper">
          {s.cards.map((card, i) => (
            <article
              key={card.title}
              className={`service-card service-card--image-${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="service-card__media">
                <ResponsiveImage
                  src={CARD_IMAGES[i]}
                  alt={card.imgAlt}
                  sizes={SERVICE_IMAGE_SIZES}
                  widths={SERVICE_IMAGE_WIDTHS}
                  width={486}
                  height={304}
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{card.title}</h3>
                <div className="service-card__text">
                  {card.paragraphs.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
