import type { Locale } from "../../types";

const CYRILLIC_LOCALES = new Set<Locale>(["ru", "uk"]);

const CONNECTORS: Record<string, { ru: string; uk: string }> = {
  bei: { ru: "бай", uk: "бай" },
  am: { ru: "ам", uk: "ам" },
  an: { ru: "ан", uk: "ан" },
  der: { ru: "дер", uk: "дер" },
  die: { ru: "ди", uk: "ді" },
  dem: { ru: "дем", uk: "дем" },
  den: { ru: "ден", uk: "ден" },
  im: { ru: "им", uk: "ім" },
  in: { ru: "ин", uk: "ін" },
  ob: { ru: "об", uk: "об" },
  auf: { ru: "ауф", uk: "ауф" },
  zum: { ru: "цум", uk: "цум" },
  zur: { ru: "цур", uk: "цур" },
};

const PREFIXES: Record<string, { ru: string; uk: string }> = {
  bad: { ru: "Бад", uk: "Бад" },
  sankt: { ru: "Санкт", uk: "Санкт" },
  groß: { ru: "Грос", uk: "Грос" },
  gross: { ru: "Грос", uk: "Грос" },
};

function normalizeGerman(value: string): string {
  return value
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("Ä", "Ae")
    .replaceAll("Ö", "Oe")
    .replaceAll("Ü", "Ue")
    .replaceAll("ß", "ss");
}

function transliterateToken(token: string, locale: "ru" | "uk"): string {
  const lower = normalizeGerman(token).toLowerCase();
  if (CONNECTORS[lower]) return CONNECTORS[lower][locale];
  if (PREFIXES[lower]) return PREFIXES[lower][locale];

  let source = normalizeGerman(token).toLowerCase();
  let out = "";

  const push = (chunk: string) => {
    out += chunk;
  };

  while (source.length > 0) {
    if (source.startsWith("ju")) {
      push("Ю");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("ja")) {
      push("Я");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("je")) {
      push("Е");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("jo")) {
      push("Йо");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("sch")) {
      push("ш");
      source = source.slice(3);
      continue;
    }
    if (source.startsWith("ch")) {
      push("х");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("ck")) {
      push("к");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("tz")) {
      push("ц");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("eu")) {
      push("ой");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("ei")) {
      push("ай");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("au")) {
      push("ау");
      source = source.slice(2);
      continue;
    }
    if (source.startsWith("ie")) {
      push("и");
      source = source.slice(2);
      continue;
    }

    const char = source[0];
    source = source.slice(1);

    const mapRu: Record<string, string> = {
      a: "а",
      b: "б",
      c: "к",
      d: "д",
      e: "е",
      f: "ф",
      g: "г",
      h: "х",
      i: "и",
      j: "й",
      k: "к",
      l: "л",
      m: "м",
      n: "н",
      o: "о",
      p: "п",
      q: "к",
      r: "р",
      s: "с",
      t: "т",
      u: "у",
      v: "в",
      w: "в",
      x: "кс",
      y: "и",
      z: "ц",
    };

    const mapUk: Record<string, string> = {
      ...mapRu,
      e: "е",
      i: "і",
      y: "и",
    };

    const mapped = (locale === "uk" ? mapUk : mapRu)[char];
    if (mapped) push(mapped);
  }

  if (!out) return token;
  return out[0].toUpperCase() + out.slice(1);
}

export function transliterateGermanPlaceName(name: string, locale: "ru" | "uk"): string {
  const parts = name.split(/(\s+|-)/);
  return parts
    .map((part) => {
      if (/^\s+$/.test(part) || part === "-") return part === "-" ? "-" : " ";
      return transliterateToken(part, locale);
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

export function hasCyrillic(value: string): boolean {
  return /[А-Яа-яЁёІіЇїЄєҐґ]/.test(value);
}

export function localizedCityName(
  names: Record<Locale, string>,
  locale: Locale,
): string {
  const direct = names[locale];
  if (!CYRILLIC_LOCALES.has(locale) || hasCyrillic(direct)) return direct;
  return transliterateGermanPlaceName(names.de, locale as "ru" | "uk");
}

export { localizedCityNameFrom, localizedCityNameIn } from "./placeNameCases";
