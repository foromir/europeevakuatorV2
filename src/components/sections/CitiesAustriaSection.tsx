import { useI18n } from "../../i18n/I18nContext";

export function CitiesAustriaSection() {
  const { common } = useI18n();
  const c = common.austriaLanding.cities;

  return (
    <section className="cities-austria" id="cities">
      <div className="container">
        <h2 className="cities-austria__title">{c.title}</h2>
        <p className="cities-austria__lead">{c.lead}</p>
        <ul className="cities-austria__list">
          {c.list.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
