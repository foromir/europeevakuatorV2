import { useI18n } from "../../i18n/I18nContext";
import type { CountryLandingBlock } from "../../i18n/types";
import { ExpandableCityList } from "./ExpandableCityList";

type CitiesListSectionProps = {
  block?: CountryLandingBlock["cities"];
};

export function CitiesListSection({ block }: CitiesListSectionProps) {
  const { common, localizedPath } = useI18n();
  if (!block) return null;

  return (
    <section className="cities-austria" id="cities">
      <div className="container">
        <h2 className="cities-austria__title">{block.title}</h2>
        <p className="cities-austria__lead">{block.lead}</p>
        <ExpandableCityList
          cities={block.list}
          localizedPath={localizedPath}
          showAllLabel={common.locationsShowAll}
          showLessLabel={common.locationsShowLess}
          variant="grid"
          itemKey={(item, index) => item.href ?? `${item.label}-${index}`}
        />
      </div>
    </section>
  );
}

/** @deprecated используйте CitiesListSection */
export function CitiesAustriaSection() {
  const { common } = useI18n();
  return <CitiesListSection block={common.austriaLanding.cities} />;
}
