import { Fragment } from "react";
import { useI18n } from "../../i18n/I18nContext";
import { citiesForRow, countryHrefFor, type LocationRowInput } from "./locationsLinks";

export function LocationsSection() {
  const { common, localizedPath } = useI18n();
  const { title, rows } = common.landing.locations;

  return (
    <section className="locations" id="locations">
      <div className="container">
        <div className="locations__wrapper">
          <h2 className="locations-title">{title}</h2>
          <ul className="locations-list">
            {(rows as readonly LocationRowInput[]).map((row) => {
              const cities = citiesForRow(row);

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
                  <span className="locations-list__cities">
                    {cities.map((city, index) => (
                      <Fragment key={`${row.code}-${city.label}`}>
                        {index > 0 ? ", " : null}
                        <a href={localizedPath(city.href)} className="locations-list__city-link">
                          {city.label}
                        </a>
                      </Fragment>
                    ))}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
