import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "24/7 Tow truck in Graz — Roadside assistance in Austria",
  description:
    "24/7 tow truck in Graz and Styria: roadside help, recovery and vehicle transport across Austria and to Ukraine. Fast dispatch, transparent pricing, no hidden fees.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ,
  ogTitle: "24/7 Tow truck in Graz — Roadside assistance in Austria",
  ogDescription:
    "24/7 tow truck in Graz and Styria: roadside help, recovery and vehicle transport across Austria and to Ukraine. Fast dispatch, transparent pricing, no hidden fees.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ,
  twitterTitle: "24/7 Tow truck in Graz — Roadside assistance in Austria",
  twitterDescription:
    "24/7 towing in Graz and Styria: recovery and transport across Austria. Fast service, no hidden fees.",
  ogImagePath: "/assets/images/gallery/gallery-19.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Graz & Styria — 24/7 dispatch",
  titleRest: "Tow truck in Graz",
  subtitle: "Roadside help, recovery and car transport",
  text:
    "24/7 tow truck in Graz and Styria: highway breakdown, accident recovery, workshop or Ukraine transport. Roadside assistance across Austria — fast dispatch, clear pricing, no hidden fees.",
  slideAlts: [
    "Tow truck in Graz — 24/7 dispatch",
    "Recovery and car transport in Styria",
    "Loading a vehicle onto a tow truck in Graz",
  ],
};

const landing = {
  cities: {
    title: "Cities in Styria",
    lead: "We cover Graz and all of Styria — including industrial zones and motorways A2 and A9:",
    list: [
      "Weiz",
      "Leoben",
      "Gleisdorf",
      "Kapfenberg",
      "Bruck an der Mur",
      "Deutschlandsberg",
      "Feldkirchen bei Graz",
      "Köflach",
      "Hartberg",
      "Mürzzuschlag",
    ],
  },
  directions: {
    title: "Popular routes from Graz",
    lead: "Tow truck from Graz — intercity transport across Austria and neighbouring countries:",
    list: [
      "Graz — Vienna",
      "Graz — Salzburg",
      "Graz — Klagenfurt",
      "Graz — Linz",
      "Graz — Ljubljana",
      "Graz — Munich",
      "Graz — Budapest",
    ],
    more: "and other routes on request",
  },
} as const;

export default { seo, evacuation, landing } as const;
