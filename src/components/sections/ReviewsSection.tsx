import { useI18n } from "../../i18n/I18nContext";

export function ReviewsSection() {
  const { common } = useI18n();
  const r = common.landing.reviews;

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2 className="reviews__title">{r.title}</h2>
        <div className="reviews__grid">
          {r.cards.map((card) => (
            <article key={card.name} className="reviews__card">
              <div className="reviews__card-header">
                <div className="reviews__avatar" aria-hidden="true">
                  {card.initials}
                </div>
                <div>
                  <div className="reviews__name">{card.name}</div>
                  <div className="reviews__city">{card.city}</div>
                </div>
              </div>
              <p className="reviews__text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
