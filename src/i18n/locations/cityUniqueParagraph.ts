import type { Locale } from "../types";
import { getStyriaTopCityParagraph } from "../austria/styriaTopCityParagraphs";
import {
  localizedCityNameFrom,
  localizedCityNameIn,
} from "../locales/transliterate/placeNameCases";
import type { LocationCityDef, LocationCountryDef } from "./types";

function slugHash(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function regionPhrase(city: LocationCityDef, locale: Locale): string {
  const region = city.meta?.region?.[locale];
  if (!region) return "";
  const phrases: Record<Locale, string> = {
    ru: ` в земле ${region}`,
    uk: ` у землі ${region}`,
    en: ` in ${region}`,
    de: ` in der ${region}`,
  };
  return phrases[locale];
}

type ParagraphBuilder = (
  cityIn: string,
  cityFrom: string,
  inCountry: string,
  city: LocationCityDef,
) => string;

const RU_PARAGRAPHS: ParagraphBuilder[] = [
  (cityIn, _from, inCountry, def) =>
    `Круглосуточный эвакуатор в ${cityIn}${regionPhrase(def, "ru")}: выезжаем на федеральные трассы, местные дороги и в промышленные зоны. Поломка, ДТП, эвакуация на СТО или доставка авто в Украину — помощь на дороге ${inCountry} с прозрачной ценой до выезда.`,
  (cityIn, cityFrom, inCountry) =>
    `Из ${cityFrom} и окрестностей оперативно выезжаем на вызов: заблокированные колёса, разряженный аккумулятор, авария на парковке или поломка на трассе. Эвакуатор ${inCountry} — фиксированная стоимость, бережная погрузка и перевозка легковых авто и внедорожников.`,
  (cityIn, _from, inCountry, def) =>
    `Служба эвакуации в ${cityIn}${regionPhrase(def, "ru")} работает без выходных: примем вызов, уточним маршрут и подберём технику под ваш автомобиль. Перевозка ${inCountry}, в соседние регионы и в Украину — с сопровождением на каждом этапе.`,
  (cityIn, _from, inCountry) =>
    `В ${cityIn} и прилегающих населённых пунктах доступен выезд эвакуатора 24/7. Убираем авто с проезжей части после ДТП, доставляем на сервис или по адресу клиента. Помощь на дороге ${inCountry} — быстро, без скрытых доплат.`,
  (cityIn, cityFrom, inCountry, def) =>
    `Эвакуатор в ${cityIn}: междугородние рейсы ${inCountry}, трансфер к границе и перевозка купленного авто. Знаем особенности местных дорог${regionPhrase(def, "ru")} и подбираем оптимальный маршрут из ${cityFrom}.`,
  (cityIn, _from, inCountry, def) =>
    `Нужен эвакуатор в ${cityIn}? Выезжаем в центр, на автобан и в горные участки${regionPhrase(def, "ru")}. Эвакуация после поломки или аварии, доставка на СТО, стоянку или в Украину — круглосуточно, с честным расчётом стоимости ${inCountry}.`,
];

const UK_PARAGRAPHS: ParagraphBuilder[] = [
  (cityIn, _from, inCountry, def) =>
    `Цілодобовий евакуатор у ${cityIn}${regionPhrase(def, "uk")}: виїжджаємо на федеральні траси, місцеві дороги та промзони. Поломка, ДТП, евакуація на СТО або доставка авто в Україну — допомога на дорозі ${inCountry} із прозорою ціною до виїзду.`,
  (cityIn, cityFrom, inCountry) =>
    `З ${cityFrom} та околиць оперативно виїжджаємо на виклик: заблоковані колеса, розряджений акумулятор, аварія на парковці чи поломка на трасі. Евакуатор ${inCountry} — фіксована вартість, обережне завантаження та перевезення легкових авто й позашляховиків.`,
  (cityIn, _from, inCountry, def) =>
    `Служба евакуації в ${cityIn}${regionPhrase(def, "uk")} працює без вихідних: приймемо виклик, уточнимо маршрут і підберемо техніку під ваш автомобіль. Перевезення ${inCountry}, у сусідні регіони та в Україну — із супроводом на кожному етапі.`,
  (cityIn, _from, inCountry) =>
    `У ${cityIn} та прилеглих населених пунктах доступний виїзд евакуатора 24/7. Прибираємо авто з проїзної частини після ДТП, доставляємо на сервіс або за адресою клієнта. Допомога на дорозі ${inCountry} — швидко, без прихованих доплат.`,
  (cityIn, cityFrom, inCountry, def) =>
    `Евакуатор у ${cityIn}: міжміські рейси ${inCountry}, трансфер до кордону та перевезення купленого авто. Знаємо особливості місцевих доріг${regionPhrase(def, "uk")} і підбираємо оптимальний маршрут з ${cityFrom}.`,
  (cityIn, _from, inCountry, def) =>
    `Потрібен евакуатор у ${cityIn}? Виїжджаємо в центр, на автобан і в гірські ділянки${regionPhrase(def, "uk")}. Евакуація після поломки чи аварії, доставка на СТО, стоянку або в Україну — цілодобово, з чесним розрахунком вартості ${inCountry}.`,
];

const EN_PARAGRAPHS: ParagraphBuilder[] = [
  (cityIn, _from, inCountry, def) =>
    `24/7 tow truck in ${cityIn}${regionPhrase(def, "en")}: we cover motorways, local roads and industrial areas. Breakdown, accident, workshop transport or delivery to Ukraine — roadside assistance ${inCountry} with upfront pricing.`,
  (cityIn, _from, inCountry) =>
    `From ${cityIn} and surrounding areas we respond quickly to locked wheels, flat batteries, parking-lot incidents and motorway breakdowns. Tow truck ${inCountry} — fixed quotes, careful loading and transport for cars and SUVs.`,
  (cityIn, _from, inCountry, def) =>
    `Our recovery service in ${cityIn}${regionPhrase(def, "en")} runs around the clock: we confirm the route and assign the right truck for your vehicle. Transport ${inCountry}, to neighbouring regions and Ukraine with support at every step.`,
  (cityIn, _from, inCountry) =>
    `In ${cityIn} and nearby communities a tow truck is available 24/7. We clear vehicles from the road after accidents and deliver to workshops or your address. Roadside assistance ${inCountry} — fast, no hidden fees.`,
  (cityIn, _from, inCountry, def) =>
    `Tow truck in ${cityIn}: intercity routes ${inCountry}, border transfers and transport for newly purchased cars. We know local road conditions${regionPhrase(def, "en")} and plan efficient routes.`,
  (cityIn, _from, inCountry, def) =>
    `Need a tow truck in ${cityIn}? We dispatch to the city centre, motorways and mountain roads${regionPhrase(def, "en")}. Recovery after breakdowns or accidents, workshop delivery or transport to Ukraine — 24/7 with transparent pricing ${inCountry}.`,
];

const DE_PARAGRAPHS: ParagraphBuilder[] = [
  (cityIn, _from, inCountry, def) =>
    `Abschleppdienst in ${cityIn}${regionPhrase(def, "de")}: Einsatz auf Autobahnen, Landesstraßen und in Gewerbegebieten. Panne, Unfall, Transport zur Werkstatt oder Lieferung in die Ukraine — Pannenhilfe ${inCountry} mit transparenter Preisangabe vor der Anfahrt.`,
  (cityIn, _from, inCountry) =>
    `Von ${cityIn} und Umgebung sind wir schnell vor Ort: blockierte Räder, leere Batterie, Parkplatzschaden oder Pannen auf der Strecke. Abschleppdienst ${inCountry} — Festpreis, schonendes Verladen und Transport für Pkw und SUV.`,
  (cityIn, _from, inCountry, def) =>
    `Unser Abschleppdienst in ${cityIn}${regionPhrase(def, "de")} ist rund um die Uhr erreichbar: Route abstimmen und passendes Fahrzeug für Ihr Auto. Transport ${inCountry}, in Nachbarregionen und in die Ukraine — mit Begleitung auf der gesamten Strecke.`,
  (cityIn, _from, inCountry) =>
    `In ${cityIn} und angrenzenden Orten sind wir 24/7 im Einsatz. Wir räumen Fahrzeuge nach Unfällen von der Fahrbahn und liefern zur Werkstatt oder Wunschadresse. Pannenhilfe ${inCountry} — schnell, ohne versteckte Kosten.`,
  (cityIn, _from, inCountry, def) =>
    `Abschleppdienst ${cityIn}: Überlandfahrten ${inCountry}, Grenztransfer und Transport gekaufter Fahrzeuge. Wir kennen die örtlichen Straßen${regionPhrase(def, "de")} und planen effiziente Routen.`,
  (cityIn, _from, inCountry, def) =>
    `Abschleppdienst in ${cityIn} gesucht? Einsatz in der Innenstadt, auf Autobahnen und in Berglagen${regionPhrase(def, "de")}. Bergung nach Panne oder Unfall, Werkstatttransport oder Lieferung in die Ukraine — 24/7 mit fairer Kalkulation ${inCountry}.`,
];

const PARAGRAPHS: Record<Locale, ParagraphBuilder[]> = {
  ru: RU_PARAGRAPHS,
  uk: UK_PARAGRAPHS,
  en: EN_PARAGRAPHS,
  de: DE_PARAGRAPHS,
};

export function buildCityUniqueParagraph(
  locale: Locale,
  country: LocationCountryDef,
  city: LocationCityDef,
): string {
  const top = country.code === "at" ? getStyriaTopCityParagraph(city.slug, locale) : undefined;
  if (top) return top;

  const cityIn = localizedCityNameIn(city.names, locale);
  const cityFrom = localizedCityNameFrom(city.names, locale);
  const inCountry = country.seoInCountry[locale];
  const variants = PARAGRAPHS[locale];
  const index = slugHash(`${country.code}/${city.slug}`) % variants.length;
  return variants[index](cityIn, cityFrom, inCountry, city);
}

/** Nominative label for badges and direction lists. */
export { localizedCityName } from "../locales/transliterate/germanPlaceName";
