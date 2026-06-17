import { AUSTRIA_CITIES } from "../austria/cityRegistry";
import { normalizeCityLabel } from "./normalize";
import { CROATIA_CITIES } from "./cities/croatia";
import { GERMANY_CITIES } from "./cities/germany";
import { HUNGARY_CITIES } from "./cities/hungary";
import { ITALY_CITIES } from "./cities/italy";
import { SLOVAKIA_CITIES } from "./cities/slovakia";
import { SLOVENIA_CITIES } from "./cities/slovenia";
import { LOCATION_COUNTRIES } from "./countries";
import type { LocationCityDef } from "./types";

export const ALL_LOCATION_CITIES: readonly LocationCityDef[] = [
  ...AUSTRIA_CITIES,
  ...GERMANY_CITIES,
  ...CROATIA_CITIES,
  ...HUNGARY_CITIES,
  ...ITALY_CITIES,
  ...SLOVAKIA_CITIES,
  ...SLOVENIA_CITIES,
];

export const AUTO_LOCATION_CITY_SLUGS = ALL_LOCATION_CITIES.filter((city) => !city.customPage).map(
  (city) => `${LOCATION_COUNTRIES[city.country].routeSlug}/${city.slug}`,
);

const slugIndex = new Map<string, LocationCityDef>();
const labelIndex = new Map<string, LocationCityDef>();

for (const city of ALL_LOCATION_CITIES) {
  const routeKey = `${LOCATION_COUNTRIES[city.country].routeSlug}/${city.slug}`;
  slugIndex.set(routeKey, city);

  for (const locale of ["de", "en", "ru", "uk"] as const) {
    labelIndex.set(normalizeCityLabel(city.names[locale]), city);
  }
  labelIndex.set(normalizeCityLabel(city.slug.replaceAll("-", " ")), city);
}

export function findLocationCity(countryCode: string, label: string): LocationCityDef | undefined {
  const byLabel = labelIndex.get(normalizeCityLabel(label));
  if (byLabel && byLabel.country === countryCode) return byLabel;
  return undefined;
}

export function getLocationCityByRouteKey(routeKey: string): LocationCityDef | undefined {
  const city = slugIndex.get(routeKey);
  if (city) return city;

  if (!routeKey.includes("/")) return undefined;
  const slug = routeKey.split("/").pop();
  if (!slug) return undefined;

  return ALL_LOCATION_CITIES.find(
    (entry) =>
      entry.slug === slug && LOCATION_COUNTRIES[entry.country].routeSlug === routeKey.split("/")[0],
  );
}

export function getLocationCountryByRouteSlug(routeSlug: string) {
  return Object.values(LOCATION_COUNTRIES).find((entry) => entry.routeSlug === routeSlug);
}

export function getCitiesForCountry(countryCode: string) {
  return ALL_LOCATION_CITIES.filter((city) => city.country === countryCode);
}
