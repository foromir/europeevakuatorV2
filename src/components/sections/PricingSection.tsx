import { useI18n } from "../../i18n/I18nContext";

export function PricingSection() {
  const { common } = useI18n();
  const p = common.landing.pricing;

  return (
    <section className="pricing" id="rates">
      <div className="container">
        <div className="pricing__wrapper">
          <div className="pricing__header">
            <div className="pricing__header-content">
              <h2 className="pricing__title">{p.title}</h2>
              <p className="pricing__subtitle">{p.subtitle}</p>
            </div>
          </div>

          <div className="pricing__content">
            <div className="pricing__column">
              <div className="pricing__item">
                <div className="pricing__item-title-container">
                  <div className="pricing__item-title">{p.itemTitle}</div>
                  <div className="pricing__item-price">{p.itemPrice}</div>
                </div>
                <div className="pricing__item-description">{p.itemDescription}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
