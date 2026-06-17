import { austriaSlugFromName } from "./slugFromName";
import { STYRIA_MUNICIPALITY_NAMES } from "./styriaMunicipalities";

const STYRIA_SLUGS = STYRIA_MUNICIPALITY_NAMES.map((name) => austriaSlugFromName(name));
const STYRIA_SLUG_SET = new Set(STYRIA_SLUGS);

export function isStyriaCitySlug(slug: string): boolean {
  return STYRIA_SLUG_SET.has(slug);
}
