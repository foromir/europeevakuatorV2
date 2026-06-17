import type { Locale, RouteLocaleEntry } from "../types";
import { evacuationBlockShared as deShared } from "../locales/de/common";
import { evacuationBlockShared as enShared } from "../locales/en/common";
import { evacuationBlockShared as ruShared } from "../locales/ru/common";
import { evacuationBlockShared as ukShared } from "../locales/uk/common";
import { buildLocationCityPage, buildLocationCountryPage } from "./buildCityPage";
import { LOCATION_COUNTRIES } from "./countries";
import { ALL_LOCATION_CITIES } from "./registry";

const EVACUATION_SHARED = {
  ru: ruShared,
  en: enShared,
  de: deShared,
  uk: ukShared,
} as const;

const GENERATED_COUNTRY_CODES = ["hr", "hu", "it", "sk", "si"] as const;

export function buildLocationCityRoutes(locale: Locale): Record<string, RouteLocaleEntry> {
  const shared = EVACUATION_SHARED[locale];
  const routes: Record<string, RouteLocaleEntry> = {};

  ALL_LOCATION_CITIES.forEach((city, index) => {
    if (city.customPage) return;
    const country = LOCATION_COUNTRIES[city.country];
    const routeKey = `${country.routeSlug}/${city.slug}`;
    routes[routeKey] = buildLocationCityPage(locale, country, city, shared, index);
  });

  for (const code of GENERATED_COUNTRY_CODES) {
    const country = LOCATION_COUNTRIES[code];
    routes[country.routeSlug] = buildLocationCountryPage(locale, country, shared);
  }

  return routes;
}
