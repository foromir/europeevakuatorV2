import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const seo: PageSeoBundle = {
  title: "24/7 Tow truck in Jakomini, Graz — Roadside assistance",
  description:
    "Tow truck in Jakomini (Graz, Styria): breakdown and accident recovery, vehicle transport across the city and Austria. Clear pricing before dispatch.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  ogTitle: "24/7 Tow truck in Jakomini, Graz — Roadside assistance",
  ogDescription:
    "24/7 towing in Jakomini and Graz: recovery, transport to workshops, roadside help in Styria and Austria.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  twitterTitle: "Tow truck in Jakomini, Graz",
  twitterDescription: "Car recovery and transport in Jakomini, Graz. 24/7 dispatch.",
};

export default { seo } as const;
