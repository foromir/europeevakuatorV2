import type { Locale } from "../../types";
import type { LocationRowInput } from "../locationRowTypes";
import { deLocationRows } from "./de";
import { enLocationRows } from "./en";
import { ruLocationRows } from "./ru";
import { ukLocationRows } from "./uk";

export const LOCATION_ROWS_BY_LOCALE: Record<Locale, readonly LocationRowInput[]> = {
  ru: ruLocationRows,
  en: enLocationRows,
  de: deLocationRows,
  uk: ukLocationRows,
};
