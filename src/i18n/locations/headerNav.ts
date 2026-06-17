import type { Locale } from "../types";
import { cityListFromRegistry } from "./cityListLinks";
import { countryHrefFor, getLocationRows } from "./landingLinks";
import type { LocationCountryCode } from "./types";

export type HeaderNavCity = {
  label: string;
  href: string;
};

export type HeaderNavCountry = {
  code: LocationCountryCode;
  label: string;
  href: string;
  cities: HeaderNavCity[];
};

function sortCities(locale: Locale, cities: HeaderNavCity[]): HeaderNavCity[] {
  return [...cities].sort((a, b) => a.label.localeCompare(b.label, locale));
}

export function buildHeaderLocationNav(locale: Locale): HeaderNavCountry[] {
  return getLocationRows(locale).map((row) => {
    const code = row.code as LocationCountryCode;
    const cities = cityListFromRegistry(locale, code)
      .filter((city): city is HeaderNavCity => Boolean(city.href))
      .map((city) => ({ label: city.label, href: city.href! }));

    return {
      code,
      label: row.country,
      href: countryHrefFor(row),
      cities: sortCities(locale, cities),
    };
  });
}
