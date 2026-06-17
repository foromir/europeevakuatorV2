import type { LocationCityDef } from "../locations/types";
import { transliterateGermanPlaceName } from "../locales/transliterate/germanPlaceName";
import { austriaSlugFromName } from "./slugFromName";
import { styriaMetaToCityPageMeta } from "./styriaMetaLabels";
import { STYRIA_MUNICIPALITY_META } from "./styriaMunicipalityMeta";
import { STYRIA_MUNICIPALITY_NAMES } from "./styriaMunicipalities";

type AustriaCityDef = LocationCityDef & { country: "at" };

/** Curated entries for Styria municipalities already in the main registry. */
export const STYRIA_CITY_OVERRIDES: Record<string, AustriaCityDef> = {
  graz: {
    country: "at",
    slug: "graz",
    names: { de: "Graz", en: "Graz", ru: "Грац", uk: "Грац" },
    customPage: true,
  },
  weiz: {
    country: "at",
    slug: "weiz",
    names: { de: "Weiz", en: "Weiz", ru: "Вайц", uk: "Вайц" },
  },
  gleisdorf: {
    country: "at",
    slug: "gleisdorf",
    names: { de: "Gleisdorf", en: "Gleisdorf", ru: "Глайсдорф", uk: "Глайсдорф" },
  },
  kapfenberg: {
    country: "at",
    slug: "kapfenberg",
    names: { de: "Kapfenberg", en: "Kapfenberg", ru: "Капфенберг", uk: "Капфенберг" },
  },
  deutschlandsberg: {
    country: "at",
    slug: "deutschlandsberg",
    names: {
      de: "Deutschlandsberg",
      en: "Deutschlandsberg",
      ru: "Дойчландсберг",
      uk: "Дойчландсберг",
    },
  },
  "feldkirchen-bei-graz": {
    country: "at",
    slug: "feldkirchen-bei-graz",
    names: {
      de: "Feldkirchen bei Graz",
      en: "Feldkirchen bei Graz",
      ru: "Фельдкирхен-бай-Грац",
      uk: "Фельдкірхен-бай-Грац",
    },
  },
  "bad-radkersburg": {
    country: "at",
    slug: "bad-radkersburg",
    names: {
      de: "Bad Radkersburg",
      en: "Bad Radkersburg",
      ru: "Бад-Радкерсбург",
      uk: "Бад-Радкерсбург",
    },
  },
  fuerstenfeld: {
    country: "at",
    slug: "fuerstenfeld",
    names: { de: "Fürstenfeld", en: "Fürstenfeld", ru: "Фюрстенфельд", uk: "Фюрстенфельд" },
  },
  spielberg: {
    country: "at",
    slug: "spielberg",
    names: { de: "Spielberg", en: "Spielberg", ru: "Шпильберг", uk: "Шпільберг" },
  },
  leoben: {
    country: "at",
    slug: "leoben",
    names: { de: "Leoben", en: "Leoben", ru: "Леобен", uk: "Леобен" },
  },
};

function attachStyriaMeta(city: AustriaCityDef): AustriaCityDef {
  const raw = STYRIA_MUNICIPALITY_META[city.slug];
  if (!raw) return city;
  return { ...city, meta: styriaMetaToCityPageMeta(raw) };
}

function defaultStyriaCity(deName: string, slug: string): AustriaCityDef {
  return attachStyriaMeta({
    country: "at",
    slug,
    names: {
      de: deName,
      en: deName,
      ru: transliterateGermanPlaceName(deName, "ru"),
      uk: transliterateGermanPlaceName(deName, "uk"),
    },
  });
}

export const STYRIA_CITIES: readonly AustriaCityDef[] = STYRIA_MUNICIPALITY_NAMES.map((deName) => {
  const slug = austriaSlugFromName(deName);
  const override = STYRIA_CITY_OVERRIDES[slug];
  if (override) return attachStyriaMeta(override);
  return defaultStyriaCity(deName, slug);
});
