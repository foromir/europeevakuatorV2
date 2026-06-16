import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const seo: PageSeoBundle = {
  title: "24/7 Tow truck in Germany — Car recovery and transport",
  description:
    "24/7 towing in Germany: recovery, vehicle transport, roadside assistance. Fast dispatch, fixed quotes.",
  canonicalPath: ROUTE_PATH.GERMANY,
  ogTitle: "24/7 Tow truck in Germany — Car recovery and transport",
  ogDescription:
    "Recovery and car transport across Germany: roadside help, delivery to workshops, intercity and EU routes.",
  ogUrlPath: ROUTE_PATH.GERMANY,
  twitterTitle: "24/7 Tow truck in Germany",
  twitterDescription: "Car recovery and transport in Germany. Roadside help 24/7.",
  ogImagePath: "/assets/images/gallery/gallery-13.jpeg",
};

const landing = {
  cities: {
    title: "Tow truck in Munich",
    lead: "24/7 dispatch in Munich, Bavaria and on motorways A8, A9 and A95:",
    list: ["Munich (München)"],
  },
  directions: {
    title: "Popular routes from Munich",
    lead: "Intercity recovery and car transport from Munich to Austria and other EU countries:",
    list: [
      "Munich — Vienna",
      "Munich — Salzburg",
      "Munich — Graz",
      "Munich — Innsbruck",
      "Munich — Nuremberg",
      "Munich — Stuttgart",
      "Munich — Prague",
    ],
    more: "and other routes across Germany and Europe",
  },
} as const;

export default { seo, landing } as const;
