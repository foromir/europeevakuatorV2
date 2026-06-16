import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

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
};

export default { seo } as const;
