import { useI18n } from "../../i18n/I18nContext";
import type { CountryLandingBlock } from "../../i18n/types";

type CitiesListSectionProps = {
  block?: CountryLandingBlock["cities"];
};

export function CitiesListSection({ block }: CitiesListSectionProps) {
  if (!block) return null;

  return (
    <section className="cities-austria" id="cities">
      <div className="container">
        <h2 className="cities-austria__title">{block.title}</h2>
        <p className="cities-austria__lead">{block.lead}</p>
        <ul className="cities-austria__list">
          {block.list.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** @deprecated используйте CitiesListSection */
export function CitiesAustriaSection() {
  const { common } = useI18n();
  return <CitiesListSection block={common.austriaLanding.cities} />;
}
