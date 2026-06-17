import { austriaSlugFromName } from "./slugFromName";
import { localizedCityName } from "../locales/transliterate/germanPlaceName";
import { locationCityPath } from "../locations/buildCityPage";
import { LOCATION_COUNTRIES } from "../locations/countries";
import { STYRIA_CITIES } from "./styriaCities";
import { STYRIA_MUNICIPALITY_NAMES } from "./styriaMunicipalities";
import type { CountryCityListItem, Locale } from "../types";

const STYRIA_SLUGS = STYRIA_MUNICIPALITY_NAMES.map((name) => austriaSlugFromName(name));
const STYRIA_SLUG_SET = new Set(STYRIA_SLUGS);

const NEIGHBOR_RADIUS = 4;

export function isStyriaCitySlug(slug: string): boolean {
  return STYRIA_SLUG_SET.has(slug);
}

export const STYRIA_CITIES_BLOCK_COPY: Record<
  Locale,
  { title: string; lead: (grazLabel: string) => string }
> = {
  ru: {
    title: "Другие города Штирии",
    lead: (graz) =>
      `Выезжаем по всей земле Штирия. Ниже — Грац и ближайшие города; полный список из 286 gemeinden — на странице ${graz}.`,
  },
  uk: {
    title: "Інші міста Штирії",
    lead: (graz) =>
      `Виїжджаємо по всій землі Штирія. Нижче — Грац і найближчі міста; повний список із 286 gemeinden — на сторінці ${graz}.`,
  },
  en: {
    title: "More cities in Styria",
    lead: (graz) =>
      `We cover all of Styria. Below: ${graz} and nearby municipalities — see the full list of 286 towns on the ${graz} page.`,
  },
  de: {
    title: "Weitere Orte in der Steiermark",
    lead: (graz) =>
      `Einsatz in der gesamten Steiermark. Unten: ${graz} und Nachbargemeinden — die vollständige Liste aller 286 Gemeinden finden Sie auf der Seite ${graz}.`,
  },
};

function cityItem(locale: Locale, slug: string): CountryCityListItem | null {
  const city = STYRIA_CITIES.find((entry) => entry.slug === slug);
  if (!city) return null;
  return {
    label: localizedCityName(city.names, locale),
    href: locationCityPath(LOCATION_COUNTRIES.at, slug),
  };
}

export function styriaCityPageLinks(locale: Locale, currentSlug: string): CountryCityListItem[] {
  const index = STYRIA_SLUGS.indexOf(currentSlug);
  if (index < 0) return [];

  const slugs: string[] = [];
  if (currentSlug !== "graz") slugs.push("graz");

  for (let offset = 1; offset <= NEIGHBOR_RADIUS; offset += 1) {
    const prev = STYRIA_SLUGS[(index - offset + STYRIA_SLUGS.length) % STYRIA_SLUGS.length];
    const next = STYRIA_SLUGS[(index + offset) % STYRIA_SLUGS.length];
    if (prev !== currentSlug && !slugs.includes(prev)) slugs.push(prev);
    if (next !== currentSlug && !slugs.includes(next)) slugs.push(next);
  }

  return slugs
    .map((slug) => cityItem(locale, slug))
    .filter((item): item is CountryCityListItem => item !== null);
}
