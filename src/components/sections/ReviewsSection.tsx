import { Icon } from "../icons";
import { useI18n } from "../../i18n/I18nContext";
import { GOOGLE_MAPS_EMBED_SRC, GOOGLE_MAPS_PLACE_URL } from "../../i18n/routeConfig";

export function ReviewsSection() {
  const { common } = useI18n();
  const r = common.landing.reviews;

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <header className="reviews__header">
          <h2 className="reviews__title">{r.title}</h2>
          {r.subtitle ? <p className="reviews__subtitle">{r.subtitle}</p> : null}
        </header>

        {GOOGLE_MAPS_EMBED_SRC ? (
          <div className="reviews__widget">
            <iframe
              title={r.widgetTitle}
              src={GOOGLE_MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="reviews__placeholder">{ }</p>
        )}

        {GOOGLE_MAPS_PLACE_URL ? (
          <div className="reviews__footer">
            <a
              href={GOOGLE_MAPS_PLACE_URL}
              className="reviews__google-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="google" />
              {r.viewOnGoogle}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
