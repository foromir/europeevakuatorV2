import { ROUTE_PATH } from "../routeConfig";
import type { LocationCountryDef } from "./types";

export const LOCATION_COUNTRIES: Record<string, LocationCountryDef> = {
  at: {
    code: "at",
    routeSlug: "austria",
    countryPath: ROUTE_PATH.AUSTRIA,
    countryLabel: { de: "Österreich", en: "Austria", ru: "Австрия", uk: "Австрія" },
    countryGenitive: { de: "Österreichs", en: "Austria", ru: "Австрии", uk: "Австрії" },
    seoInCountry: {
      de: "in Österreich",
      en: "in Austria",
      ru: "в Австрии",
      uk: "в Австрії",
    },
    directionHubs: {
      de: ["Wien", "Graz", "München", "Ljubljana"],
      en: ["Vienna", "Graz", "Munich", "Ljubljana"],
      ru: ["Вена", "Грац", "Мюнхен", "Любляна"],
      uk: ["Відень", "Грац", "Мюнхен", "Любляна"],
    },
  },
  de: {
    code: "de",
    routeSlug: "germany",
    countryPath: ROUTE_PATH.GERMANY,
    countryLabel: { de: "Deutschland", en: "Germany", ru: "Германия", uk: "Німеччина" },
    countryGenitive: { de: "Deutschlands", en: "Germany", ru: "Германии", uk: "Німеччини" },
    seoInCountry: {
      de: "in Deutschland",
      en: "in Germany",
      ru: "в Германии",
      uk: "в Німеччині",
    },
    directionHubs: {
      de: ["München", "Wien", "Salzburg", "Graz"],
      en: ["Munich", "Vienna", "Salzburg", "Graz"],
      ru: ["Мюнхен", "Вена", "Зальцбург", "Грац"],
      uk: ["Мюнхен", "Відень", "Зальцбург", "Грац"],
    },
  },
  hr: {
    code: "hr",
    routeSlug: "croatia",
    countryPath: ROUTE_PATH.CROATIA,
    countryLabel: { de: "Kroatien", en: "Croatia", ru: "Хорватия", uk: "Хорватія" },
    countryGenitive: { de: "Kroatiens", en: "Croatia", ru: "Хорватии", uk: "Хорватії" },
    seoInCountry: {
      de: "in Kroatien",
      en: "in Croatia",
      ru: "в Хорватии",
      uk: "в Хорватії",
    },
    directionHubs: {
      de: ["Zagreb", "Rijeka", "Ljubljana", "Wien"],
      en: ["Zagreb", "Rijeka", "Ljubljana", "Vienna"],
      ru: ["Загреб", "Риека", "Любляна", "Вена"],
      uk: ["Загреб", "Рієка", "Любляна", "Відень"],
    },
  },
  hu: {
    code: "hu",
    routeSlug: "hungary",
    countryPath: ROUTE_PATH.HUNGARY,
    countryLabel: { de: "Ungarn", en: "Hungary", ru: "Венгрия", uk: "Угорщина" },
    countryGenitive: { de: "Ungarns", en: "Hungary", ru: "Венгрии", uk: "Угорщини" },
    seoInCountry: {
      de: "in Ungarn",
      en: "in Hungary",
      ru: "в Венгрии",
      uk: "в Угорщині",
    },
    directionHubs: {
      de: ["Győr", "Wien", "Graz", "München"],
      en: ["Győr", "Vienna", "Graz", "Munich"],
      ru: ["Дьёр", "Вена", "Грац", "Мюнхен"],
      uk: ["Дьор", "Відень", "Грац", "Мюнхен"],
    },
  },
  it: {
    code: "it",
    routeSlug: "italy",
    countryPath: ROUTE_PATH.ITALY,
    countryLabel: { de: "Italien", en: "Italy", ru: "Италия", uk: "Італія" },
    countryGenitive: { de: "Italiens", en: "Italy", ru: "Италии", uk: "Італії" },
    seoInCountry: {
      de: "in Italien",
      en: "in Italy",
      ru: "в Италии",
      uk: "в Італії",
    },
    directionHubs: {
      de: ["Triest", "Udine", "Wien", "Ljubljana"],
      en: ["Trieste", "Udine", "Vienna", "Ljubljana"],
      ru: ["Триест", "Удине", "Вена", "Любляна"],
      uk: ["Трієст", "Удине", "Відень", "Любляна"],
    },
  },
  sk: {
    code: "sk",
    routeSlug: "slovakia",
    countryPath: ROUTE_PATH.SLOVAKIA,
    countryLabel: { de: "Slowakei", en: "Slovakia", ru: "Словакия", uk: "Словаччина" },
    countryGenitive: { de: "der Slowakei", en: "Slovakia", ru: "Словакии", uk: "Словаччини" },
    seoInCountry: {
      de: "in der Slowakei",
      en: "in Slovakia",
      ru: "в Словакии",
      uk: "в Словаччині",
    },
    directionHubs: {
      de: ["Bratislava", "Wien", "München", "Graz"],
      en: ["Bratislava", "Vienna", "Munich", "Graz"],
      ru: ["Братислава", "Вена", "Мюнхен", "Грац"],
      uk: ["Братислава", "Відень", "Мюнхен", "Грац"],
    },
  },
  si: {
    code: "si",
    routeSlug: "slovenia",
    countryPath: ROUTE_PATH.SLOVENIA,
    countryLabel: { de: "Slowenien", en: "Slovenia", ru: "Словения", uk: "Словенія" },
    countryGenitive: { de: "Sloweniens", en: "Slovenia", ru: "Словении", uk: "Словенії" },
    seoInCountry: {
      de: "in Slowenien",
      en: "in Slovenia",
      ru: "в Словении",
      uk: "в Словенії",
    },
    directionHubs: {
      de: ["Ljubljana", "Wien", "München", "Zagreb"],
      en: ["Ljubljana", "Vienna", "Munich", "Zagreb"],
      ru: ["Любляна", "Вена", "Мюнхен", "Загреб"],
      uk: ["Любляна", "Відень", "Мюнхен", "Загреб"],
    },
  },
};

export function getLocationCountry(code: string): LocationCountryDef | undefined {
  return LOCATION_COUNTRIES[code];
}

export function getLocationCountryByRouteSlug(routeSlug: string): LocationCountryDef | undefined {
  return Object.values(LOCATION_COUNTRIES).find((country) => country.routeSlug === routeSlug);
}
