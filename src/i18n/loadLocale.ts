import type { Locale } from "./types";
import { getLocalePack, setLocalePack } from "./localeStore";
import type { de } from "./locales/de";

export type MessagesPack = typeof de;

type LocaleModule = Record<Locale, MessagesPack>;

const loaders: Record<Locale, () => Promise<LocaleModule>> = {
  de: () => import("./locales/de"),
  en: () => import("./locales/en"),
  ru: () => import("./locales/ru"),
  uk: () => import("./locales/uk"),
};

/** Loads and caches one locale pack (client + SSR). */
export async function ensureLocalePack(locale: Locale): Promise<MessagesPack> {
  const cached = getLocalePack(locale);
  if (cached) return cached;

  const mod = await loaders[locale]();
  const pack = mod[locale];
  setLocalePack(locale, pack);
  return pack;
}

/** Resolves pack for pathname; throws if not loaded yet. */
export function requireLocalePack(locale: Locale): MessagesPack {
  const pack = getLocalePack(locale);
  if (!pack) {
    throw new Error(`Locale pack "${locale}" is not loaded`);
  }
  return pack;
}
