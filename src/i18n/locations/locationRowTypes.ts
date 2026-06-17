export type LinkedLocationRow = {
  code: string;
  flagAlt: string;
  country: string;
  countryHref: string;
  featuredCityLabel: string;
  featuredCityHref: string;
  citiesRest: string;
};

export type SimpleLocationRow = {
  code: string;
  flagAlt: string;
  country: string;
  citiesLine: string;
  countryHref?: string;
};

export type LocationRowInput = LinkedLocationRow | SimpleLocationRow;

export type LocationCityLink = {
  label: string;
  href: string;
};

export function isLinkedLocationRow(row: LocationRowInput): row is LinkedLocationRow {
  return "citiesRest" in row && "featuredCityLabel" in row;
}
