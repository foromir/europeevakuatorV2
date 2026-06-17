import { city } from "./_helpers";

export const GERMANY_CITIES = [
  city("de", "muenchen", {
    de: "München",
    en: "Munich",
    ru: "Мюнхен",
    uk: "Мюнхен",
  }),
  city("de", "rosenheim", {
    de: "Rosenheim",
    en: "Rosenheim",
    ru: "Rosenheim",
    uk: "Rosenheim",
  }),
  city("de", "passau", { de: "Passau", en: "Passau", ru: "Passau", uk: "Passau" }),
  city("de", "regensburg", {
    de: "Regensburg",
    en: "Regensburg",
    ru: "Regensburg",
    uk: "Regensburg",
  }),
  city("de", "muhldorf-am-inn", {
    de: "Mühldorf am Inn",
    en: "Mühldorf am Inn",
    ru: "Mühldorf am Inn",
    uk: "Mühldorf am Inn",
  }),
  city("de", "traunstein", {
    de: "Traunstein",
    en: "Traunstein",
    ru: "Traunstein",
    uk: "Traunstein",
  }),
  city("de", "deggendorf", {
    de: "Deggendorf",
    en: "Deggendorf",
    ru: "Deggendorf",
    uk: "Deggendorf",
  }),
] as const;
