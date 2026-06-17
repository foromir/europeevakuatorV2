import { cityListFromLabels } from "../locations/cityListLinks";
import { findLocationCity } from "../locations/registry";
import type { CountryCityListItem, Locale } from "../types";
import { STYRIA_MUNICIPALITY_NAMES } from "./styriaMunicipalities";

function labelForLocale(locale: Locale, germanName: string): string {
  const city = findLocationCity("at", germanName);
  return city?.names[locale] ?? germanName;
}

export function styriaCityListForGraz(locale: Locale): CountryCityListItem[] {
  return cityListFromLabels(
    "at",
    STYRIA_MUNICIPALITY_NAMES.map((name) => labelForLocale(locale, name)),
  );
}
