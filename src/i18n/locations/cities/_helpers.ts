import type { Locale } from "../types";
import type { LocationCityDef } from "./types";

type Names = Record<Locale, string>;

export function city(
  country: LocationCityDef["country"],
  slug: string,
  names: Names,
  options?: { customPage?: boolean },
): LocationCityDef {
  return { country, slug, names, ...options };
}
