const UMLAUTS: Record<string, string> = {
  ä: "ae",
  ö: "oe",
  ü: "ue",
  Ä: "ae",
  Ö: "oe",
  Ü: "ue",
  ß: "ss",
};

/** URL-slug for Austrian municipalities (matches existing city slugs). */
export function austriaSlugFromName(name: string): string {
  let normalized = name.trim();
  for (const [char, replacement] of Object.entries(UMLAUTS)) {
    normalized = normalized.replaceAll(char, replacement);
  }

  return normalized
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
