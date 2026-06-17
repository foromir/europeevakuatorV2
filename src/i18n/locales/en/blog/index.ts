import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const page: PageSeoBundle = {
  title: "Blog — Tow truck tips and roadside help in Europe",
  description:
    "Articles on car recovery, transport and roadside assistance in Europe: breakdowns abroad, insurance after accidents and international vehicle shipping.",
  canonicalPath: ROUTE_PATH.BLOG,
  ogTitle: "Blog — Tow truck tips and roadside help in Europe",
  ogDescription:
    "Useful articles on recovery, car transport and roadside help across the EU.",
  ogUrlPath: ROUTE_PATH.BLOG,
  twitterTitle: "Blog — Abschleppdienst24",
  twitterDescription:
    "Articles on recovery, car transport and roadside help in Europe.",
  ogImagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
};

export default page;
