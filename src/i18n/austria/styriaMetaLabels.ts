import type { Locale } from "../types";
import type { CityPageMeta } from "../locations/types";
import type { StyriaMunicipalityMeta } from "./styriaMunicipalityMeta";

const STYRIA_REGION: Record<Locale, string> = {
  de: "Steiermark",
  en: "Styria",
  ru: "Штирия",
  uk: "Штирія",
};

export function styriaMetaToCityPageMeta(_meta: StyriaMunicipalityMeta): CityPageMeta {
  return {
    region: STYRIA_REGION,
  };
}
