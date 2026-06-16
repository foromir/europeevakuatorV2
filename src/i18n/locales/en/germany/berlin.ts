import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "24/7 Tow truck in Berlin — Recovery and transport",
  description:
    "Tow truck in Berlin and region: highway breakdown, accident recovery, transport to workshop or parking. 24/7 in the city and Brandenburg.",
  canonicalPath: ROUTE_PATH.GERMANY_BERLIN,
  ogTitle: "24/7 Tow truck in Berlin — Recovery and transport",
  ogDescription:
    "24/7 towing in Berlin: fast dispatch, professional loading, transport across Germany and the EU.",
  ogUrlPath: ROUTE_PATH.GERMANY_BERLIN,
  twitterTitle: "24/7 Tow truck in Berlin",
  twitterDescription: "Car recovery and transport in Berlin. Roadside assistance.",
  ogImagePath: "/assets/images/gallery/gallery-20.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Berlin & Brandenburg — 24/7",
  titleRest: "Tow truck in Berlin",
  subtitle: "Recovery, workshop delivery and intercity routes",
  text:
    "24/7 tow truck in Berlin and Brandenburg: motorway breakdown, accident recovery, delivery to a workshop or parking. Fast dispatch, transparent pricing.",
  slideAlts: [
    "Tow truck in Berlin — 24/7 dispatch",
    "Car recovery in Berlin and Brandenburg",
    "Loading a vehicle onto a tow truck in Berlin",
  ],
};

const landing = {
  directions: {
    title: "Popular routes from Berlin",
    lead: "Tow truck from Berlin — transport across Germany and neighbouring countries:",
    list: [
      "Berlin — Hamburg",
      "Berlin — Munich",
      "Berlin — Frankfurt",
      "Berlin — Dresden",
      "Berlin — Prague",
      "Berlin — Warsaw",
      "Berlin — Copenhagen",
    ],
    more: "and other routes on request",
  },
} as const;

export default { seo, evacuation, landing } as const;
