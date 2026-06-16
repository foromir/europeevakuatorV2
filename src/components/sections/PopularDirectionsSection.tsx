import { useI18n } from "../../i18n/I18nContext";

export function PopularDirectionsSection() {
  const { common } = useI18n();
  const d = common.austriaLanding.directions;

  return (
    <section className="popular-directions" id="directions">
      <div className="container">
        <h2 className="popular-directions__title">{d.title}</h2>
        <p className="popular-directions__lead">{d.lead}</p>
        <ul className="popular-directions__list">
          {d.list.map((line) => (
            <li key={line}>{line}</li>
          ))}
          <li className="popular-directions__list-more">{d.more}</li>
        </ul>
      </div>
    </section>
  );
}
