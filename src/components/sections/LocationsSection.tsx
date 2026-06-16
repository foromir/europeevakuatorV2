import { useI18n } from "../../i18n/I18nContext";

type RowAt = {
  code: string;
  flagAlt: string;
  country: string;
  countryHref: string;
  grazLabel: string;
  grazHref: string;
  citiesRest: string;
};

type RowSimple = {
  code: string;
  flagAlt: string;
  country: string;
  citiesLine: string;
};

function isAustriaRow(row: RowAt | RowSimple): row is RowAt {
  return "grazLabel" in row && Boolean(row.grazLabel);
}

export function LocationsSection() {
  const { common, localizedPath } = useI18n();
  const { title, rows } = common.landing.locations;

  return (
    <section className="locations" id="locations">
      <div className="container">
        <div className="locations__wrapper">
          <h2 className="locations-title">{title}</h2>
          <ul className="locations-list">
            {rows.map((row) => (
              <li key={row.code} className="locations-list__item">
                {isAustriaRow(row) ? (
                  <>
                    <a href={localizedPath(row.countryHref)} className="locations-list__country">
                      <img
                        src={`/assets/images/flags/${row.code}.svg`}
                        alt={row.flagAlt}
                        className="locations-list__flag"
                      />
                      {row.country}
                    </a>
                    <span className="locations-list__cities">
                      <a href={localizedPath(row.grazHref)}>{row.grazLabel}</a>, {row.citiesRest}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="locations-list__country">
                      <img
                        src={`/assets/images/flags/${row.code}.svg`}
                        alt={row.flagAlt}
                        className="locations-list__flag"
                      />
                      {row.country}
                    </span>
                    <span className="locations-list__cities">{row.citiesLine}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
