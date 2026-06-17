import { city } from "./_helpers";

export const HUNGARY_CITIES = [
  city("hu", "szombathely", {
    de: "Szombathely",
    en: "Szombathely",
    ru: "Сомбатхей",
    uk: "Сомбатхей",
  }),
  city("hu", "gyor", { de: "Győr", en: "Győr", ru: "Дьёр", uk: "Дьор" }),
  city("hu", "koermend", { de: "Körmend", en: "Körmend", ru: "Кёрменд", uk: "Кёрменд" }),
  city("hu", "sopron", { de: "Sopron", en: "Sopron", ru: "Шопрон", uk: "Шопорн" }),
  city("hu", "csorna", { de: "Csorna", en: "Csorna", ru: "Чорна", uk: "Чорна" }),
  city("hu", "kapuvar", { de: "Kapuvár", en: "Kapuvár", ru: "Капувар", uk: "Капувар" }),
  city("hu", "keszthely", { de: "Keszthely", en: "Keszthely", ru: "Кестхей", uk: "Кестхей" }),
  city("hu", "letenye", { de: "Letenye", en: "Letenye", ru: "Летенье", uk: "Летенье" }),
] as const;
