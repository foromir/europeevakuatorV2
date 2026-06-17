import { useI18n } from "../../i18n/I18nContext";
import { citiesForCountryFromRegistry, countryHrefFor } from "../../i18n/locations/landingLinks";
import type { LocationCountryCode } from "../../i18n/locations/types";
import { ExpandableCityList } from "./ExpandableCityList";
import type { LocationRowInput } from "./locationsLinks";

export function LocationsSection() {
  const { common, locale, localizedPath } = useI18n();
  const { title, rows } = common.landing.locations;

  return (
    <section className="locations" id="locations">
      <div className="container">
        <div className="locations__wrapper">
          <h2 className="locations-title">{title}</h2>
          <ul className="locations-list">
            {(rows as readonly LocationRowInput[]).map((row) => {
              const cities = citiesForCountryFromRegistry(locale, row.code as LocationCountryCode);

              return (
                <li key={row.code} className="locations-list__item">
                  <a href={localizedPath(countryHrefFor(row))} className="locations-list__country">
                    <img
                      src={`/assets/images/flags/${row.code}.svg`}
                      alt={row.flagAlt}
                      className="locations-list__flag"
                    />
                    {row.country}
                  </a>
                  <ExpandableCityList
                    cities={cities}
                    localizedPath={localizedPath}
                    showAllLabel={common.locationsShowAll}
                    showLessLabel={common.locationsShowLess}
                    variant="tags"
                    itemKey={(city) => `${row.code}-${city.label}`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
