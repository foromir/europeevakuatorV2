import type { Locale } from "../../types";
import { hasCyrillic, localizedCityName } from "./germanPlaceName";

const CYRILLIC_LOCALES = new Set<Locale>(["ru", "uk"]);

const RU_PREP_OVERRIDES: Record<string, string> = {
  Грац: "Граце",
  Вайц: "Вайце",
  Леобен: "Леобене",
  Линц: "Линце",
  Вена: "Вене",
  Відень: "Відні",
};

const RU_GEN_OVERRIDES: Record<string, string> = {
  Грац: "Граца",
  Вайц: "Вайца",
  Леобен: "Леобена",
  Линц: "Линца",
  Вена: "Вены",
};

const UK_PREP_OVERRIDES: Record<string, string> = {
  Грац: "Граці",
  Вайц: "Вайці",
  Леобен: "Леобені",
  Лінц: "Лінці",
  Відень: "Відні",
};

const UK_GEN_OVERRIDES: Record<string, string> = {
  Грац: "Граца",
  Вайц: "Вайца",
  Леобен: "Леобена",
  Лінц: "Лінця",
  Відень: "Відня",
};

function applySuffixRules(
  nominative: string,
  locale: "ru" | "uk",
  kind: "prepositional" | "genitive",
): string {
  const prep = locale === "ru";
  const overrides = kind === "prepositional"
    ? prep
      ? RU_PREP_OVERRIDES
      : UK_PREP_OVERRIDES
    : prep
      ? RU_GEN_OVERRIDES
      : UK_GEN_OVERRIDES;

  if (overrides[nominative]) return overrides[nominative];

  const suffixRules: Array<[string, string, string]> =
    kind === "prepositional"
      ? locale === "ru"
        ? [
            ["бург", "бург", "бурге"],
            ["берг", "берг", "берге"],
            ["дорф", "дорф", "дорфе"],
            ["бах", "бах", "бахе"],
            ["инг", "инг", "инге"],
            ["иц", "иц", "ице"],
          ]
        : [
            ["бург", "бург", "бурзі"],
            ["берг", "берг", "берзі"],
            ["дорф", "дорф", "дорфі"],
            ["бах", "бах", "баху"],
            ["инг", "инг", "ингу"],
            ["иц", "иц", "иці"],
          ]
      : locale === "ru"
        ? [
            ["бург", "бург", "бурга"],
            ["берг", "берг", "берга"],
            ["дорф", "дорф", "дорфа"],
            ["бах", "бах", "баха"],
            ["инг", "инг", "инга"],
            ["иц", "иц", "ица"],
          ]
        : [
            ["бург", "бург", "бурга"],
            ["берг", "берг", "берга"],
            ["дорф", "дорф", "дорфа"],
            ["бах", "бах", "баха"],
            ["инг", "инг", "инга"],
            ["иц", "иц", "ица"],
          ];

  for (const [from, , to] of suffixRules) {
    if (nominative.endsWith(from)) {
      return nominative.slice(0, -from.length) + to;
    }
  }

  if (nominative.endsWith("ц")) {
    return kind === "prepositional"
      ? locale === "ru"
        ? nominative.slice(0, -1) + "це"
        : nominative.slice(0, -1) + "ці"
      : nominative.slice(0, -1) + "ца";
  }

  const last = nominative.at(-1) ?? "";
  if ("гкхжчшщ".includes(last)) {
    return kind === "prepositional"
      ? locale === "ru"
        ? `${nominative}е`
        : `${nominative}і`
      : `${nominative}а`;
  }

  if ("ьй".includes(last)) {
    return kind === "prepositional"
      ? locale === "ru"
        ? `${nominative.slice(0, -1)}и`
        : `${nominative.slice(0, -1)}і`
      : `${nominative.slice(0, -1)}я`;
  }

  return kind === "prepositional"
    ? locale === "ru"
      ? `${nominative}е`
      : `${nominative}і`
    : `${nominative}а`;
}

export function toPrepositionalCase(nominative: string, locale: "ru" | "uk"): string {
  return applySuffixRules(nominative, locale, "prepositional");
}

export function toGenitiveCase(nominative: string, locale: "ru" | "uk"): string {
  return applySuffixRules(nominative, locale, "genitive");
}

export function localizedCityNameIn(
  names: Record<Locale, string>,
  locale: Locale,
): string {
  if (!CYRILLIC_LOCALES.has(locale)) return localizedCityName(names, locale);
  const nom = localizedCityName(names, locale);
  if (!hasCyrillic(nom)) return nom;
  return toPrepositionalCase(nom, locale as "ru" | "uk");
}

export function localizedCityNameFrom(
  names: Record<Locale, string>,
  locale: Locale,
): string {
  if (!CYRILLIC_LOCALES.has(locale)) return localizedCityName(names, locale);
  const nom = localizedCityName(names, locale);
  if (!hasCyrillic(nom)) return nom;
  return toGenitiveCase(nom, locale as "ru" | "uk");
}
