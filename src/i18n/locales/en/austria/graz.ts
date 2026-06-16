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

export default { seo, evacuation } as const;
