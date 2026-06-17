import type { CountryCityListItem, Locale } from "../types";
import { locationCityPath } from "./buildCityPage";
import { LOCATION_COUNTRIES } from "./countries";
import { normalizeCityLabel } from "./normalize";
import { findLocationCity, getCitiesForCountry } from "./registry";
import type { LocationCountryCode, LocationCityDef } from "./types";

function labelCandidates(label: string): string[] {
  const candidates = [label];
  const beforeParen = label.split("(")[0].trim();
  if (beforeParen && beforeParen !== label) candidates.push(beforeParen);
  const inParen = label.match(/\(([^)]+)\)/)?.[1]?.trim();
  if (inParen) candidates.push(inParen);
  return candidates;
}

function findCityByLabel(countryCode: string, label: string): LocationCityDef | undefined {
  for (const candidate of labelCandidates(label)) {
    const city = findLocationCity(countryCode, candidate);
    if (city) return city;
  }

  const norm = normalizeCityLabel(label);
  return getCitiesForCountry(countryCode).find((city) =>
    (["de", "en", "ru", "uk"] as const).some((locale) => {
      const cityNorm = normalizeCityLabel(city.names[locale]);
      return norm.startsWith(cityNorm) || cityNorm.startsWith(norm);
    }),
  );
}

function toListItem(countryCode: LocationCountryCode, label: string): CountryCityListItem {
  const city = findCityByLabel(countryCode, label);
  if (!city) return { label };

  const country = LOCATION_COUNTRIES[city.country];
  return { label, href: locationCityPath(country, city.slug) };
}

export function cityListFromLabels(
  countryCode: LocationCountryCode,
  labels: readonly string[],
): CountryCityListItem[] {
  return labels.map((label) => toListItem(countryCode, label));
}

export function cityListFromRegistry(
  locale: Locale,
  countryCode: LocationCountryCode,
): CountryCityListItem[] {
  const country = LOCATION_COUNTRIES[countryCode];
  return getCitiesForCountry(countryCode).map((city) => ({
    label: city.names[locale],
    href: locationCityPath(country, city.slug),
  }));
}
