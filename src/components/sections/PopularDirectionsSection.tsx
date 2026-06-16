import { useI18n } from "../../i18n/I18nContext";
import type { CountryLandingBlock } from "../../i18n/types";

type PopularDirectionsSectionProps = {
  block?: CountryLandingBlock["directions"];
};

export function PopularDirectionsSection({ block }: PopularDirectionsSectionProps) {
  if (!block) return null;

  return (
    <section className="popular-directions" id="directions">
      <div className="container">
        <h2 className="popular-directions__title">{block.title}</h2>
        <p className="popular-directions__lead">{block.lead}</p>
        <ul className="popular-directions__list">
          {block.list.map((line) => (
            <li key={line}>{line}</li>
          ))}
          <li className="popular-directions__list-more">{block.more}</li>
        </ul>
      </div>
    </section>
  );
}
