import type { Locale } from "../types";
import { citiesForCountryFromRegistry, countryHrefFor, getLocationRows } from "./landingLinks";
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

export function buildHeaderLocationNav(locale: Locale): HeaderNavCountry[] {
  return getLocationRows(locale).map((row) => ({
    code: row.code as LocationCountryCode,
    label: row.country,
    href: countryHrefFor(row),
    cities: citiesForCountryFromRegistry(locale, row.code as LocationCountryCode),
  }));
}
