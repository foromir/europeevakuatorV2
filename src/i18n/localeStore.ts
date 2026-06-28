import type { Locale } from "./types";
import type { MessagesPack } from "./loadLocale";

let activeLocale: Locale | null = null;
let activePack: MessagesPack | null = null;

export function getLocalePack(locale: Locale): MessagesPack | null {
  return activeLocale === locale ? activePack : null;
}

export function setLocalePack(locale: Locale, pack: MessagesPack): void {
  activeLocale = locale;
  activePack = pack;
}

export function getActiveLocalePack(): MessagesPack | null {
  return activePack;
}
