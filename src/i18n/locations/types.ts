import type { Locale } from "../types";

export type LocationCountryCode = "at" | "de" | "hr" | "hu" | "it" | "sk" | "si";

export type CityPageMeta = {
  region?: Partial<Record<Locale, string>>;
};

export type LocationCityDef = {
  country: LocationCountryCode;
  slug: string;
  names: Record<Locale, string>;
  customPage?: boolean;
  meta?: CityPageMeta;
};

export type LocationCountryDef = {
  code: LocationCountryCode;
  routeSlug: string;
  countryPath: string;
  countryLabel: Record<Locale, string>;
  /** Родительный падеж для «в городах …» (ru/uk) */
  countryGenitive: Record<Locale, string>;
  seoInCountry: Record<Locale, string>;
  directionHubs: Record<Locale, readonly string[]>;
};
