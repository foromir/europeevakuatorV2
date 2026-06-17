import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { buildCountryLanding } from "../../../locations/buildCountryLanding";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Tow truck Austria — Vienna, Graz, Salzburg 24/7 | Abschleppdienst24",
  description:
    "Book a tow truck in Austria: recovery, transport to a workshop, roadside help nationwide. Upfront pricing, no hidden fees.",
  canonicalPath: ROUTE_PATH.AUSTRIA,
  ogTitle: "24/7 Tow truck in Austria — Vienna, Graz, Salzburg, Linz",
  ogDescription:
    "24/7 towing in Austria: recovery and car transport, roadside assistance. Fast dispatch, transparent pricing.",
  ogUrlPath: ROUTE_PATH.AUSTRIA,
  twitterTitle: "Tow truck in Austria — Abschleppdienst24",
  twitterDescription: "24/7 car recovery and transport in Austria. Vienna, Graz, Salzburg and more.",
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Serving all of Austria",
  titleRest: "Tow truck in Austria",
  subtitle: "Car transport and roadside assistance",
  text:
    "24/7 towing in Austria: Vienna, Graz, Salzburg, Linz. Roadside assistance, recovery and car transport. Fast dispatch, transparent pricing.",
  slideAlts: [
    "Tow truck in Austria — 24/7 dispatch",
    "Recovery and car transport in Austria",
    "Loading a vehicle onto a tow truck in Austria",
  ],
};

const landing = buildCountryLanding("en", "at");

export default {
  seo,
  evacuation,
  landing,
} as const;
