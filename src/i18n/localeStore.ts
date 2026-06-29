import type { Locale } from "./types";
import type { MessagesPack } from "./loadLocale";

const packs = new Map<Locale, MessagesPack>();

export function getLocalePack(locale: Locale): MessagesPack | null {
  return packs.get(locale) ?? null;
}

export function setLocalePack(locale: Locale, pack: MessagesPack): void {
  packs.set(locale, pack);
}

export function getActiveLocalePack(): MessagesPack | null {
  return packs.size === 1 ? (packs.values().next().value ?? null) : null;
}
