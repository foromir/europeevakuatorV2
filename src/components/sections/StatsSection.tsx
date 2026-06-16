import { useI18n } from "../../i18n/I18nContext";

export function StatsSection() {
  const { common } = useI18n();
  const items = common.landing.stats.items;

  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats__wrapper">
          {items.map((item) => (
            <div key={item.label} className="stats__item">
              <span className="stats__number">{item.number}</span>
              <span className="stats__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
