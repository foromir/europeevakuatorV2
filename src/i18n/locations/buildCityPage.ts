import type { LandingEvacuationCopy, Locale, RouteLocaleEntry } from "../types";
import { isStyriaCitySlug } from "../austria/styriaCityPageLinks";
import { styriaCitiesLandingBlock } from "../austria/styriaCityList";
import {
  localizedCityName,
  localizedCityNameFrom,
  localizedCityNameIn,
} from "../locales/transliterate/germanPlaceName";
import { buildCountryLanding } from "./buildCountryLanding";
import { buildCityUniqueParagraph } from "./cityUniqueParagraph";
import type { LocationCityDef, LocationCountryDef } from "./types";

type EvacuationShared = Omit<
  LandingEvacuationCopy,
  "badge" | "titleRest" | "subtitle" | "text" | "slideAlts"
>;

type CityPageCopy = {
  seoTitle: (cityFrom: string, inCountry: string) => string;
  seoDescription: (cityFrom: string, cityIn: string, inCountry: string) => string;
  ogTitle: (cityFrom: string, inCountry: string) => string;
  ogDescription: (cityFrom: string, cityIn: string, inCountry: string) => string;
  twitterTitle: (cityFrom: string) => string;
  twitterDescription: (cityFrom: string, cityIn: string, inCountry: string) => string;
  badge: (city: string) => string;
  titleRest: (cityFrom: string) => string;
  subtitle: string;
  text: (city: string, inCountry: string) => string;
  slideAlts: (cityFrom: string, cityIn: string) => readonly string[];
  directionsTitle: (city: string) => string;
  directionsLead: (city: string, inCountry: string) => string;
  directionsMore: string;
};

const COPY: Record<Locale, CityPageCopy> = {
  ru: {
    seoTitle: (cityFrom, inCountry) => `Эвакуатор из ${cityFrom} 24/7 – Помощь на дороге ${inCountry}`,
    seoDescription: (cityFrom, cityIn, inCountry) =>
      `Круглосуточный эвакуатор из ${cityFrom} и в ${cityIn}: помощь на дороге, эвакуация и перевозка авто ${inCountry} и в Украину. Быстрый выезд, прозрачные цены, без скрытых доплат.`,
    ogTitle: (cityFrom, inCountry) => `Эвакуатор из ${cityFrom} 24/7 – Помощь на дороге ${inCountry}`,
    ogDescription: (cityFrom, cityIn, inCountry) =>
      `Эвакуатор из ${cityFrom} и в ${cityIn}: эвакуация и перевозка авто ${inCountry}. Быстрый выезд, прозрачные цены.`,
    twitterTitle: (cityFrom) => `Эвакуатор из ${cityFrom} 24/7`,
    twitterDescription: (cityFrom, cityIn, inCountry) =>
      `Эвакуатор из ${cityFrom} и в ${cityIn}: помощь на дороге и перевозка авто ${inCountry} 24/7.`,
    badge: (city) => `${city} — выезд 24/7`,
    titleRest: (cityFrom) => `Эвакуатор из ${cityFrom}`,
    subtitle: "Помощь на дороге, эвакуация и перевозка авто",
    text: (city, inCountry) =>
      `Круглосуточный эвакуатор в ${city} и регионе: поломка на трассе, ДТП, перевозка на СТО или в Украину. Помощь на дороге ${inCountry} — быстрый выезд, прозрачные цены, без скрытых доплат.`,
    slideAlts: (cityFrom, cityIn) => [
      `Эвакуатор из ${cityFrom} — круглосуточный выезд`,
      `Эвакуация и перевозка авто в ${cityIn}`,
      `Погрузка автомобиля на эвакуатор в ${cityIn}`,
    ],
    directionsTitle: (city) => `Популярные направления из ${city}`,
    directionsLead: (city, inCountry) =>
      `Эвакуатор из ${city} — междугородняя перевозка ${inCountry} и в соседние страны:`,
    directionsMore: "и другие маршруты по запросу",
  },
  en: {
    seoTitle: (cityFrom, inCountry) => `Tow Truck from ${cityFrom} 24/7 – Roadside Assistance ${inCountry}`,
    seoDescription: (cityFrom, cityIn, inCountry) =>
      `24/7 tow truck from ${cityFrom} and in ${cityIn}: roadside assistance, car recovery and transport ${inCountry} and to Ukraine. Fast response, transparent pricing, no hidden fees.`,
    ogTitle: (cityFrom, inCountry) => `Tow Truck from ${cityFrom} 24/7 – Roadside Assistance ${inCountry}`,
    ogDescription: (cityFrom, cityIn, inCountry) =>
      `Tow truck from ${cityFrom} and in ${cityIn}: car recovery and transport ${inCountry}. Fast response, transparent pricing.`,
    twitterTitle: (cityFrom) => `Tow Truck from ${cityFrom} 24/7`,
    twitterDescription: (cityFrom, cityIn, inCountry) =>
      `Tow truck from ${cityFrom} and in ${cityIn}: roadside assistance and car transport ${inCountry} 24/7.`,
    badge: (city) => `${city} — 24/7 dispatch`,
    titleRest: (cityFrom) => `Tow Truck from ${cityFrom}`,
    subtitle: "Roadside assistance, recovery and car transport",
    text: (city, inCountry) =>
      `24/7 tow truck in ${city} and the surrounding region: breakdown, accident, transport to a workshop or Ukraine. Roadside assistance ${inCountry} — fast response, transparent pricing, no hidden fees.`,
    slideAlts: (cityFrom, cityIn) => [
      `Tow truck from ${cityFrom} — 24/7 dispatch`,
      `Car recovery and transport in ${cityIn}`,
      `Loading a car onto a tow truck in ${cityIn}`,
    ],
    directionsTitle: (city) => `Popular routes from ${city}`,
    directionsLead: (city, inCountry) =>
      `Tow truck from ${city} — intercity transport ${inCountry} and to neighbouring countries:`,
    directionsMore: "and other routes on request",
  },
  de: {
    seoTitle: (cityFrom, inCountry) => `Abschleppdienst aus ${cityFrom} 24/7 – Pannenhilfe ${inCountry}`,
    seoDescription: (cityFrom, cityIn, inCountry) =>
      `Abschleppdienst aus ${cityFrom} und in ${cityIn} rund um die Uhr: Pannenhilfe, Abschleppen und Autotransport ${inCountry} und in die Ukraine. Schnelle Anfahrt, transparente Preise, keine versteckten Kosten.`,
    ogTitle: (cityFrom, inCountry) => `Abschleppdienst aus ${cityFrom} 24/7 – Pannenhilfe ${inCountry}`,
    ogDescription: (cityFrom, cityIn, inCountry) =>
      `Abschleppdienst aus ${cityFrom} und in ${cityIn}: Autotransport ${inCountry} rund um die Uhr. Schnelle Anfahrt, transparente Preise.`,
    twitterTitle: (cityFrom) => `Abschleppdienst aus ${cityFrom} 24/7`,
    twitterDescription: (cityFrom, cityIn, inCountry) =>
      `Abschleppdienst aus ${cityFrom} und in ${cityIn}: Pannenhilfe und Autotransport ${inCountry} 24/7.`,
    badge: (city) => `${city} — Einsatz 24/7`,
    titleRest: (cityFrom) => `Abschleppdienst aus ${cityFrom}`,
    subtitle: "Pannenhilfe, Abschleppen und Autotransport",
    text: (city, inCountry) =>
      `Abschleppdienst in ${city} und Region rund um die Uhr: Panne, Unfall, Transport zur Werkstatt oder in die Ukraine. Pannenhilfe ${inCountry} — schnelle Anfahrt, transparente Preise, keine versteckten Kosten.`,
    slideAlts: (cityFrom, cityIn) => [
      `Abschleppdienst aus ${cityFrom} — Einsatz rund um die Uhr`,
      `Abschleppen und Autotransport in ${cityIn}`,
      `Beladung eines Fahrzeugs auf den Abschleppwagen in ${cityIn}`,
    ],
    directionsTitle: (city) => `Beliebte Strecken ab ${city}`,
    directionsLead: (city, inCountry) =>
      `Abschleppdienst ab ${city} — Überlandtransport ${inCountry} und in Nachbarländer:`,
    directionsMore: "und weitere Strecken auf Anfrage",
  },
  uk: {
    seoTitle: (cityFrom, inCountry) => `Евакуатор з ${cityFrom} 24/7 – Допомога на дорозі ${inCountry}`,
    seoDescription: (cityFrom, cityIn, inCountry) =>
      `Цілодобовий евакуатор з ${cityFrom} і в ${cityIn}: допомога на дорозі, евакуація та перевезення авто ${inCountry} та в Україну. Швидкий виїзд, прозорі ціни, без прихованих доплат.`,
    ogTitle: (cityFrom, inCountry) => `Евакуатор з ${cityFrom} 24/7 – Допомога на дорозі ${inCountry}`,
    ogDescription: (cityFrom, cityIn, inCountry) =>
      `Евакуатор з ${cityFrom} і в ${cityIn}: евакуація та перевезення авто ${inCountry}. Швидкий виїзд, прозорі ціни.`,
    twitterTitle: (cityFrom) => `Евакуатор з ${cityFrom} 24/7`,
    twitterDescription: (cityFrom, cityIn, inCountry) =>
      `Евакуатор з ${cityFrom} і в ${cityIn}: допомога на дорозі та перевезення авто ${inCountry} 24/7.`,
    badge: (city) => `${city} — виїзд 24/7`,
    titleRest: (cityFrom) => `Евакуатор з ${cityFrom}`,
    subtitle: "Допомога на дорозі, евакуація та перевезення авто",
    text: (city, inCountry) =>
      `Цілодобовий евакуатор у ${city} та регіоні: поломка на трасі, ДТП, перевезення на СТО або в Україну. Допомога на дорозі ${inCountry} — швидкий виїзд, прозорі ціни, без прихованих доплат.`,
    slideAlts: (cityFrom, cityIn) => [
      `Евакуатор з ${cityFrom} — цілодобовий виїзд`,
      `Евакуація та перевезення авто в ${cityIn}`,
      `Завантаження автомобіля на евакуатор в ${cityIn}`,
    ],
    directionsTitle: (city) => `Популярні напрямки з ${city}`,
    directionsLead: (city, inCountry) =>
      `Евакуатор з ${city} — міжміське перевезення ${inCountry} та в сусідні країни:`,
    directionsMore: "та інші маршрути за запитом",
  },
};

const GALLERY_IMAGES = [
  "/assets/images/gallery/gallery-18.jpeg",
  "/assets/images/gallery/gallery-19.jpeg",
  "/assets/images/gallery/gallery-1.jpeg",
  "/assets/images/gallery/gallery-2.jpeg",
  "/assets/images/gallery/gallery-13.jpeg",
] as const;

export function locationCityPath(country: LocationCountryDef, slug: string): string {
  return `${country.countryPath}/${slug}`;
}

export function locationCityRouteKey(country: LocationCountryDef, slug: string): string {
  return `${country.routeSlug}/${slug}`;
}

export function buildLocationCityPage(
  locale: Locale,
  country: LocationCountryDef,
  city: LocationCityDef,
  evacuationShared: EvacuationShared,
  imageIndex: number,
): RouteLocaleEntry {
  const cityNom = localizedCityName(city.names, locale);
  const cityIn = localizedCityNameIn(city.names, locale);
  const cityFrom = localizedCityNameFrom(city.names, locale);
  const inCountry = country.seoInCountry[locale];
  const copy = COPY[locale];
  const path = locationCityPath(country, city.slug);
  const hubs = country.directionHubs[locale].filter((hub) => hub !== cityNom);
  const directions = hubs.slice(0, 4).map((hub) => `${cityNom} — ${hub}`);

  const landing: RouteLocaleEntry["landing"] = {
    directions: {
      title: copy.directionsTitle(cityFrom),
      lead: copy.directionsLead(cityFrom, inCountry),
      list: directions,
      more: copy.directionsMore,
    },
  };

  if (country.code === "at" && isStyriaCitySlug(city.slug) && city.slug !== "graz") {
    landing.cities = styriaCitiesLandingBlock(locale);
  }

  return {
    seo: {
      title: copy.seoTitle(cityFrom, inCountry),
      description: copy.seoDescription(cityFrom, cityIn, inCountry),
      canonicalPath: path,
      ogTitle: copy.ogTitle(cityFrom, inCountry),
      ogDescription: copy.ogDescription(cityFrom, cityIn, inCountry),
      ogUrlPath: path,
      twitterTitle: copy.twitterTitle(cityFrom),
      twitterDescription: copy.twitterDescription(cityFrom, cityIn, inCountry),
      ogImagePath: GALLERY_IMAGES[imageIndex % GALLERY_IMAGES.length],
    },
    evacuation: {
      ...evacuationShared,
      badge: copy.badge(cityNom),
      titleRest: copy.titleRest(cityFrom),
      subtitle: copy.subtitle,
      text: buildCityUniqueParagraph(locale, country, city),
      slideAlts: copy.slideAlts(cityFrom, cityIn),
    },
    landing,
  };
}

export function buildLocationCountryPage(
  locale: Locale,
  country: LocationCountryDef,
  evacuationShared: EvacuationShared,
): RouteLocaleEntry {
  const name = country.countryLabel[locale];
  const inCountry = country.seoInCountry[locale];
  const path = country.countryPath;

  const copy: Record<
    Locale,
    {
      title: string;
      description: string;
      titleRest: string;
      text: string;
    }
  > = {
    ru: {
      title: `Эвакуатор ${inCountry} 24/7 – Перевозка авто и помощь на дороге`,
      description: `Круглосуточный эвакуатор ${inCountry}: эвакуация, перевозка на СТО, помощь на дороге. Быстрый выезд, прозрачные цены.`,
      titleRest: `Эвакуатор ${inCountry}`,
      text: `Круглосуточный эвакуатор ${inCountry}: поломка на трассе, ДТП, перевозка авто по стране и в соседние государства.`,
    },
    en: {
      title: `Tow Truck ${inCountry} 24/7 – Car Recovery and Roadside Assistance`,
      description: `24/7 tow truck ${inCountry}: car recovery, transport to workshops, roadside assistance. Fast response, transparent pricing.`,
      titleRest: `Tow Truck ${inCountry}`,
      text: `24/7 tow truck ${inCountry}: breakdown, accident, car transport across the country and to neighbouring states.`,
    },
    de: {
      title: `Abschleppdienst ${inCountry} 24/7 – Fahrzeugbergung und Pannenhilfe`,
      description: `Abschleppdienst ${inCountry} rund um die Uhr: Bergung, Transport zur Werkstatt, Pannenhilfe. Schnelle Anfahrt, transparente Preise.`,
      titleRest: `Abschleppdienst ${inCountry}`,
      text: `Abschleppdienst ${inCountry}: Panne, Unfall, Autotransport im Land und in Nachbarstaaten.`,
    },
    uk: {
      title: `Евакуатор ${inCountry} 24/7 – Перевезення авто та допомога на дорозі`,
      description: `Цілодобовий евакуатор ${inCountry}: евакуація, перевезення на СТО, допомога на дорозі. Швидкий виїзд, прозорі ціни.`,
      titleRest: `Евакуатор ${inCountry}`,
      text: `Цілодобовий евакуатор ${inCountry}: поломка на трасі, ДТП, перевезення авто по країні та в сусідні держави.`,
    },
  };

  const strings = copy[locale];

  return {
    seo: {
      title: strings.title,
      description: strings.description,
      canonicalPath: path,
      ogTitle: strings.title,
      ogDescription: strings.description,
      ogUrlPath: path,
      twitterTitle: strings.title,
      twitterDescription: strings.description,
      ogImagePath: GALLERY_IMAGES[0],
    },
    evacuation: {
      ...evacuationShared,
      badge: `${name} — 24/7`,
      titleRest: strings.titleRest,
      subtitle: COPY[locale].subtitle,
      text: strings.text,
      slideAlts: [
        `${name} — 24/7`,
        `${name}`,
        `${name}`,
      ],
    },
    landing: buildCountryLanding(locale, country.code),
  };
}
