import type { CountryLandingBlock } from "../types";
import type { Locale } from "../types";
import { citiesForCountryFromRegistry } from "./landingLinks";
import { LOCATION_COUNTRIES } from "./countries";
import type { LocationCountryCode, LocationCountryDef } from "./types";

const COPY: Record<
  Locale,
  {
    citiesTitle: (genitive: string, label: string) => string;
    citiesLead: (inCountry: string) => string;
    directionsTitle: (inCountry: string) => string;
    directionsLead: (inCountry: string) => string;
    directionsMore: (genitive: string) => string;
  }
> = {
  ru: {
    citiesTitle: (genitive) => `Эвакуатор в городах ${genitive}`,
    citiesLead: (inCountry) =>
      `Заказать эвакуатор для перевозки автомобилей ${inCountry} можно из городов, перечисленных ниже:`,
    directionsTitle: (inCountry) => `Популярные направления перевозки автомобилей ${inCountry}`,
    directionsLead: (inCountry) =>
      `Закажите эвакуатор для перевозки авто между городами ${inCountry} и ЕС — выезжаем по указанным направлениям.`,
    directionsMore: (genitive) => `и другие направления по ${genitive} и ЕС`,
  },
  en: {
    citiesTitle: (_genitive, label) => `Tow Truck in Cities Across ${label}`,
    citiesLead: (inCountry) =>
      `Book a tow truck for car transport ${inCountry} from the cities listed below:`,
    directionsTitle: (inCountry) => `Popular Car Transport Routes ${inCountry}`,
    directionsLead: (inCountry) =>
      `Book a tow truck for transport between cities ${inCountry} and the EU — we cover these routes.`,
    directionsMore: (genitive) => `and other routes across ${genitive} and the EU`,
  },
  de: {
    citiesTitle: (_genitive, label) => `Abschleppdienst in Städten in ${label}`,
    citiesLead: (inCountry) =>
      `Abschleppdienst für Fahrzeugtransport ${inCountry} in den unten genannten Städten buchen:`,
    directionsTitle: (inCountry) => `Beliebte Fahrzeugtransport-Routen ${inCountry}`,
    directionsLead: (inCountry) =>
      `Abschleppdienst zwischen Städten ${inCountry} und in der EU buchen — wir bedienen die folgenden Routen.`,
    directionsMore: (genitive) => `und weitere Routen in ${genitive} und der EU`,
  },
  uk: {
    citiesTitle: (genitive) => `Евакуатор у містах ${genitive}`,
    citiesLead: (inCountry) =>
      `Замовити евакуатор для перевезення автомобілів ${inCountry} можна з міст, перелічених нижче:`,
    directionsTitle: (inCountry) => `Популярні напрямки перевезення автомобілів ${inCountry}`,
    directionsLead: (inCountry) =>
      `Замовте евакуатор для перевезення авто між містами ${inCountry} та ЄС — виїжджаємо за вказаними напрямками.`,
    directionsMore: (genitive) => `та інші напрямки по ${genitive} та ЄС`,
  },
};

function buildDirectionList(locale: Locale, country: LocationCountryDef): string[] {
  const hubs = country.directionHubs[locale].slice(0, 5);
  const routes: string[] = [];

  for (let from = 0; from < hubs.length; from += 1) {
    for (let to = 0; to < hubs.length; to += 1) {
      if (from === to) continue;
      routes.push(`${hubs[from]} — ${hubs[to]}`);
      if (routes.length >= 15) return routes;
    }
  }

  return routes;
}

export function buildCountryLanding(
  locale: Locale,
  countryCode: LocationCountryCode,
): CountryLandingBlock {
  const country = LOCATION_COUNTRIES[countryCode];
  const copy = COPY[locale];
  const genitive = country.countryGenitive[locale];
  const inCountry = country.seoInCountry[locale];
  const label = country.countryLabel[locale];

  return {
    cities: {
      title: copy.citiesTitle(genitive, label),
      lead: copy.citiesLead(inCountry),
      list: citiesForCountryFromRegistry(locale, countryCode),
    },
    directions: {
      title: copy.directionsTitle(inCountry),
      lead: copy.directionsLead(inCountry),
      list: buildDirectionList(locale, country),
      more: copy.directionsMore(genitive),
    },
  };
}
