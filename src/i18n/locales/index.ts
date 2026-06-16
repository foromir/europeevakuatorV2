import type { Locale } from "../types";
import { de } from "./de";
import { en } from "./en";
import { ru } from "./ru";
import { uk } from "./uk";

type MessagesPack = typeof ru;

export const messages: Record<Locale, MessagesPack> = {
  ru,
  en: en as unknown as MessagesPack,
  de: de as unknown as MessagesPack,
  uk: uk as unknown as MessagesPack,
};
