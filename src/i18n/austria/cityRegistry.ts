import type { LocationCityDef } from "../locations/types";
import { STYRIA_CITIES } from "./styriaCities";

export type AustriaCityDef = LocationCityDef & { country: "at" };

/** Austrian cities outside the Steiermark registry. */
const OTHER_AUSTRIA_CITIES: readonly AustriaCityDef[] = [
  { country: "at", slug: "wien", names: { de: "Wien", en: "Vienna", ru: "Вена", uk: "Відень" } },
  { country: "at", slug: "linz", names: { de: "Linz", en: "Linz", ru: "Линц", uk: "Лінц" } },
  { country: "at", slug: "salzburg", names: { de: "Salzburg", en: "Salzburg", ru: "Зальцбург", uk: "Зальцбург" } },
  { country: "at", slug: "klagenfurt", names: { de: "Klagenfurt", en: "Klagenfurt", ru: "Клагенфурт", uk: "Клагенфурт" } },
  { country: "at", slug: "suben", names: { de: "Suben", en: "Suben", ru: "Субен", uk: "Субен" } },
  { country: "at", slug: "braunau-am-inn", names: { de: "Braunau am Inn", en: "Braunau am Inn", ru: "Браунау-ам-Инн", uk: "Браунау-на-Інні" } },
  { country: "at", slug: "arnoldstein", names: { de: "Arnoldstein", en: "Arnoldstein", ru: "Арнольдштайн", uk: "Арнольдштайн" } },
  { country: "at", slug: "villach", names: { de: "Villach", en: "Villach", ru: "Филлах", uk: "Філлах" } },
  { country: "at", slug: "heiligenkreuz", names: { de: "Heiligenkreuz", en: "Heiligenkreuz", ru: "Хайлигенкройц", uk: "Гайлігенкрайц" } },
  { country: "at", slug: "wolfsberg", names: { de: "Wolfsberg", en: "Wolfsberg", ru: "Вольфсберг", uk: "Вольфсберг" } },
  {
    country: "at",
    slug: "spittal-an-der-drau",
    names: {
      de: "Spittal an der Drau",
      en: "Spittal an der Drau",
      ru: "Шпиттал-ан-дер-Драу",
      uk: "Шпітталь-ан-дер-Драу",
    },
  },
  { country: "at", slug: "hermagor", names: { de: "Hermagor", en: "Hermagor", ru: "Хермагор", uk: "Гермагор" } },
  { country: "at", slug: "jennersdorf", names: { de: "Jennersdorf", en: "Jennersdorf", ru: "Йеннерсдорф", uk: "Єннерсдорф" } },
  { country: "at", slug: "eisenstadt", names: { de: "Eisenstadt", en: "Eisenstadt", ru: "Айзенштадт", uk: "Айзенштадт" } },
  { country: "at", slug: "rust", names: { de: "Rust", en: "Rust", ru: "Руст", uk: "Руст" } },
  { country: "at", slug: "oberwart", names: { de: "Oberwart", en: "Oberwart", ru: "Оберварт", uk: "Оберварт" } },
  { country: "at", slug: "guessing", names: { de: "Güssing", en: "Güssing", ru: "Гисинг", uk: "Гісінг" } },
  { country: "at", slug: "schaerding", names: { de: "Schärding", en: "Schärding", ru: "Шардинг", uk: "Шардинг" } },
  {
    country: "at",
    slug: "ried-im-innkreis",
    names: { de: "Ried im Innkreis", en: "Ried im Innkreis", ru: "Рид-им-Иннкрайс", uk: "Рід-ім-Іннкрайс" },
  },
  { country: "at", slug: "gmunden", names: { de: "Gmunden", en: "Gmunden", ru: "Гмунден", uk: "Гмунден" } },
  { country: "at", slug: "steyr", names: { de: "Steyr", en: "Steyr", ru: "Штайр", uk: "Штайр" } },
  { country: "at", slug: "wels", names: { de: "Wels", en: "Wels", ru: "Вельс", uk: "Вельс" } },
  { country: "at", slug: "sankt-poelten", names: { de: "Sankt Pölten", en: "Sankt Pölten", ru: "Санкт-Пёльтен", uk: "Санкт-Пёльтен" } },
  { country: "at", slug: "dornbirn", names: { de: "Dornbirn", en: "Dornbirn", ru: "Дорнбирн", uk: "Дорнбірн" } },
  {
    country: "at",
    slug: "wiener-neustadt",
    names: { de: "Wiener Neustadt", en: "Wiener Neustadt", ru: "Винер-Нойштадт", uk: "Вінер-Нойштадт" },
  },
  { country: "at", slug: "feldkirch", names: { de: "Feldkirch", en: "Feldkirch", ru: "Фельдкирх", uk: "Фельдкірх" } },
  { country: "at", slug: "bregenz", names: { de: "Bregenz", en: "Bregenz", ru: "Брегенц", uk: "Брегенц" } },
  { country: "at", slug: "leonding", names: { de: "Leonding", en: "Leonding", ru: "Леондинг", uk: "Леондинг" } },
  { country: "at", slug: "klosterneuburg", names: { de: "Klosterneuburg", en: "Klosterneuburg", ru: "Клостернойбург", uk: "Клостернойбург" } },
  {
    country: "at",
    slug: "baden-bei-wien",
    names: { de: "Baden bei Wien", en: "Baden bei Wien", ru: "Баден-бай-Вен", uk: "Баден-бай-Він" },
  },
  { country: "at", slug: "traun", names: { de: "Traun", en: "Traun", ru: "Траун", uk: "Траун" } },
] as const;

export const AUSTRIA_CITIES: readonly AustriaCityDef[] = [
  ...OTHER_AUSTRIA_CITIES,
  ...STYRIA_CITIES,
] as const;

export const AUSTRIA_CITY_SLUGS = AUSTRIA_CITIES.map((city) => city.slug);

export const AUTO_AUSTRIA_CITY_SLUGS = AUSTRIA_CITIES.filter((city) => !city.customPage).map(
  (city) => city.slug,
);

import { findLocationCity, getLocationCityByRouteKey } from "../locations/registry";

export function findAustriaCityByLabel(label: string): AustriaCityDef | undefined {
  const city = findLocationCity("at", label);
  return city?.country === "at" ? (city as AustriaCityDef) : undefined;
}

export { getLocationCityByRouteKey as getAustriaCityByRouteKey };

export function austriaCityPath(slug: string): `/austria/${string}` {
  return `/austria/${slug}`;
}

export function austriaCityRouteKey(slug: string): string {
  return `austria/${slug}`;
}

export function getAustriaCityBySlug(slug: string): AustriaCityDef | undefined {
  return AUSTRIA_CITIES.find((city) => city.slug === slug);
}
