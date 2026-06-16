import { ROUTE_PATH, type RoutePath } from "../../i18n/routeConfig";

type LinkedRow = {
  code: string;
  countryHref: string;
  featuredCityLabel: string;
  featuredCityHref: string;
  citiesRest: string;
};

type SimpleRow = {
  code: string;
  citiesLine: string;
};

export type LocationRowInput = {
  code: string;
  flagAlt: string;
  country: string;
} & (LinkedRow | SimpleRow);

export type LocationCityLink = {
  label: string;
  href: RoutePath;
};

const COUNTRY_HREF: Partial<Record<string, RoutePath>> = {
  at: ROUTE_PATH.AUSTRIA,
  de: ROUTE_PATH.GERMANY,
};

function isLinkedRow(row: LocationRowInput): row is LocationRowInput & LinkedRow {
  return "countryHref" in row && Boolean(row.countryHref);
}

function cityHref(countryCode: string, label: string): RoutePath {
  const key = label.toLowerCase();

  if (countryCode === "at") {
    if (key.includes("graz") || key.includes("грац")) return ROUTE_PATH.AUSTRIA_GRAZ;
    return ROUTE_PATH.AUSTRIA;
  }

  if (countryCode === "de") {
    if (key.includes("berlin") || key.includes("берлін") || key.includes("берлин")) {
      return ROUTE_PATH.GERMANY_BERLIN;
    }
    return ROUTE_PATH.GERMANY;
  }

  return ROUTE_PATH.HOME;
}

export function countryHrefFor(row: LocationRowInput): RoutePath {
  if (isLinkedRow(row)) return row.countryHref as RoutePath;
  return COUNTRY_HREF[row.code] ?? ROUTE_PATH.HOME;
}

export function citiesForRow(row: LocationRowInput): LocationCityLink[] {
  if (isLinkedRow(row)) {
    const rest = row.citiesRest.split(",").map((part) => part.trim()).filter(Boolean);
    return [
      { label: row.featuredCityLabel, href: row.featuredCityHref as RoutePath },
      ...rest.map((label) => ({ label, href: cityHref(row.code, label) })),
    ];
  }

  return row.citiesLine
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((label) => ({ label, href: cityHref(row.code, label) }));
}
