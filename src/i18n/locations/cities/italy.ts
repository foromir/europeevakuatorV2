import { city } from "./_helpers";

export const ITALY_CITIES = [
  city("it", "udine", { de: "Udine", en: "Udine", ru: "Удине", uk: "Удине" }),
  city("it", "trieste", { de: "Triest", en: "Trieste", ru: "Триест", uk: "Трієст" }),
  city("it", "monfalcone", {
    de: "Monfalcone",
    en: "Monfalcone",
    ru: "Монфальконе",
    uk: "Монфальконе",
  }),
  city("it", "palmanova", {
    de: "Palmanova",
    en: "Palmanova",
    ru: "Пальманова",
    uk: "Пальманова",
  }),
  city("it", "tarvisio", { de: "Tarvisio", en: "Tarvisio", ru: "Tarvisio", uk: "Tarvisio" }),
] as const;
