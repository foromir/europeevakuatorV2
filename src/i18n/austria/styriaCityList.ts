import { cityListFromLabels } from "../locations/cityListLinks";
import { findLocationCity } from "../locations/registry";
import type { CountryCityListItem, CountryLandingBlock, Locale } from "../types";
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

export const STYRIA_CITIES_BLOCK_COPY: Record<Locale, { title: string; lead: string }> = {
  ru: {
    title: "Города Штирии",
    lead: "Выезжаем по Грацу и всей земле Штирия — в том числе в промышленные зоны и на автобаны A2 и A9:",
  },
  uk: {
    title: "Міста Штирії",
    lead: "Працюємо в Граці та всій Штирії — включно з промзонами та автомагістралями A2 і A9:",
  },
  en: {
    title: "Cities in Styria",
    lead: "We cover Graz and all of Styria — including industrial zones and motorways A2 and A9:",
  },
  de: {
    title: "Städte in der Steiermark",
    lead: "Wir sind in Graz und der gesamten Steiermark im Einsatz — einschließlich Industriegebiete und Autobahnen A2 und A9:",
  },
};

export function styriaCitiesLandingBlock(locale: Locale): NonNullable<CountryLandingBlock["cities"]> {
  const copy = STYRIA_CITIES_BLOCK_COPY[locale];
  return {
    title: copy.title,
    lead: copy.lead,
    list: styriaCityListForGraz(locale),
  };
}
