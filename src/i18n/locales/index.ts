import type { Locale } from "../types";
import { en } from "./en";
import { ru } from "./ru";

type MessagesPack = typeof ru;

/** `de` / `uk` пока с тем же пакетом, что `en` — замените на отдельные модули при переводе. */
export const messages: Record<Locale, MessagesPack> = {
  ru,
  en: en as unknown as MessagesPack,
  de: en as unknown as MessagesPack,
  uk: en as unknown as MessagesPack,
};
