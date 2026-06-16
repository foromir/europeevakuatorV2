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
};

export default { seo } as const;
