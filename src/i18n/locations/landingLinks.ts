import type { Locale } from "../types";
import { cityListFromRegistry } from "./cityListLinks";
import { locationCityPath } from "./buildCityPage";
import { LOCATION_COUNTRIES, getLocationCountry } from "./countries";
import {
  isLinkedLocationRow,
  type LocationCityLink,
  type LocationRowInput,
} from "./locationRowTypes";
import { LOCATION_ROWS_BY_LOCALE } from "./rows";
import { findLocationCity } from "./registry";
import { ROUTE_PATH } from "../routeConfig";
import type { LocationCountryCode } from "./types";

export type { LocationCityLink, LocationRowInput } from "./locationRowTypes";

const COUNTRY_HREF: Record<string, string> = {
  at: ROUTE_PATH.AUSTRIA,
  de: ROUTE_PATH.GERMANY,
  hr: ROUTE_PATH.CROATIA,
  hu: ROUTE_PATH.HUNGARY,
  it: ROUTE_PATH.ITALY,
  sk: ROUTE_PATH.SLOVAKIA,
  si: ROUTE_PATH.SLOVENIA,
};

function cityHref(countryCode: string, label: string): string {
  const city = findLocationCity(countryCode, label);
  if (city) {
    const country = LOCATION_COUNTRIES[city.country];
    return locationCityPath(country, city.slug);
  }

  const country = getLocationCountry(countryCode);
  if (country) return country.countryPath;

  return ROUTE_PATH.HOME;
}

export function countryHrefFor(row: LocationRowInput): string {
  if (isLinkedLocationRow(row)) return row.countryHref;
  if ("countryHref" in row && row.countryHref) return row.countryHref;
  return COUNTRY_HREF[row.code] ?? ROUTE_PATH.HOME;
}

export function citiesForCountryFromRegistry(
  locale: Locale,
  countryCode: LocationCountryCode,
): LocationCityLink[] {
  return cityListFromRegistry(locale, countryCode)
    .filter((city): city is LocationCityLink => Boolean(city.href))
    .map((city) => ({ label: city.label, href: city.href! }))
    .sort((a, b) => a.label.localeCompare(b.label, locale));
}

export function citiesForRow(row: LocationRowInput): LocationCityLink[] {
  if (isLinkedLocationRow(row)) {
    const rest = row.citiesRest.split(",").map((part) => part.trim()).filter(Boolean);
    return [
      { label: row.featuredCityLabel, href: row.featuredCityHref },
      ...rest.map((label) => ({ label, href: cityHref(row.code, label) })),
    ];
  }

  return row.citiesLine
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((label) => ({ label, href: cityHref(row.code, label) }));
}

export function getLocationRows(locale: Locale): readonly LocationRowInput[] {
  return LOCATION_ROWS_BY_LOCALE[locale];
}

export function getLocationRow(locale: Locale, countryCode: LocationCountryCode): LocationRowInput | undefined {
  return getLocationRows(locale).find((row) => row.code === countryCode);
}

export function cityLabelsForCountryFromLanding(locale: Locale, countryCode: LocationCountryCode): string[] {
  return citiesForCountryFromRegistry(locale, countryCode).map((city) => city.label);
}
