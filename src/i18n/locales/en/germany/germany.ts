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
    title: "Tow truck in German cities",
    lead: "24/7 dispatch in major cities and on motorways:",
    list: [
      "Berlin",
      "Munich (München)",
      "Hamburg",
      "Frankfurt",
      "Cologne (Köln)",
      "Stuttgart",
      "Düsseldorf",
      "Dresden",
      "Nuremberg (Nürnberg)",
    ],
  },
  directions: {
    title: "Popular transport routes in Germany",
    lead: "Intercity recovery and car transport across Germany and the EU:",
    list: [
      "Berlin — Munich",
      "Munich — Vienna",
      "Berlin — Hamburg",
      "Frankfurt — Cologne",
      "Berlin — Prague",
      "Munich — Salzburg",
      "Hamburg — Copenhagen",
    ],
    more: "and other routes across Germany and Europe",
  },
} as const;

export default { seo, landing } as const;
