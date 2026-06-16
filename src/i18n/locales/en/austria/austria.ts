import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Tow truck Austria — Vienna, Graz, Salzburg 24/7 | Europe-Evakuator",
  description:
    "Book a tow truck in Austria: recovery, transport to a workshop, roadside help nationwide. Upfront pricing, no hidden fees.",
  canonicalPath: ROUTE_PATH.AUSTRIA,
  ogTitle: "24/7 Tow truck in Austria — Vienna, Graz, Salzburg, Linz, Innsbruck",
  ogDescription:
    "24/7 towing in Austria: recovery and car transport, roadside assistance. Fast dispatch, transparent pricing.",
  ogUrlPath: ROUTE_PATH.AUSTRIA,
  twitterTitle: "Tow truck in Austria — Europe-Evakuator",
  twitterDescription: "24/7 car recovery and transport in Austria. Vienna, Graz, Salzburg and more.",
  ogImagePath: "/assets/images/gallery/gallery-18.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Serving all of Austria",
  titleRest: "Tow truck in Austria",
  subtitle: "Car transport and roadside assistance",
  text:
    "24/7 towing in Austria: Vienna, Graz, Salzburg, Linz, Innsbruck. Roadside assistance, recovery and car transport. Fast dispatch, transparent pricing.",
  slideAlts: [
    "Tow truck in Austria — 24/7 dispatch",
    "Recovery and car transport in Austria",
    "Loading a vehicle onto a tow truck in Austria",
  ],
};

const landing = {
  cities: {
    title: "Tow truck in Austrian cities",
    lead: "You can book a tow truck for vehicle transport in Austria from the cities listed below:",
    list: [
      "Vienna (Wien)",
      "Graz",
      "Linz",
      "Salzburg",
      "Innsbruck",
      "Klagenfurt am Wörthersee",
      "Villach",
      "Wels",
      "Sankt Pölten",
    ],
  },
  directions: {
    title: "Popular car transport routes in Austria",
    lead: "Book a tow truck between Austrian and EU cities — we serve the routes below.",
    list: [
      "Vienna — Graz",
      "Graz — Vienna",
      "Vienna — Salzburg",
      "Salzburg — Innsbruck",
      "Vienna — Linz",
      "Graz — Klagenfurt",
      "Innsbruck — Salzburg",
      "Linz — Vienna",
      "Vienna — Innsbruck",
      "Graz — Salzburg",
      "Salzburg — Vienna",
      "Linz — Graz",
      "Klagenfurt — Vienna",
      "Villach — Graz",
      "Sankt Pölten — Vienna",
    ],
    more: "and other routes across Austria and the EU",
  },
} as const;

export default {
  seo,
  evacuation,
  landing,
} as const;
