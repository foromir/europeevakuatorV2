import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const page: PageSeoBundle = {
  title: "Blog — Tipps zu Abschleppdienst und Pannenhilfe in Europa",
  description:
    "Artikel über Bergung, Fahrzeugtransport und Pannenhilfe in Europa: Panne im Ausland, Versicherung nach Unfällen und internationaler Transport.",
  canonicalPath: ROUTE_PATH.BLOG,
  ogTitle: "Blog — Tipps zu Abschleppdienst und Pannenhilfe in Europa",
  ogDescription:
    "Nützliche Artikel über Bergung, Fahrzeugtransport und Pannenhilfe in ganz Europa.",
  ogUrlPath: ROUTE_PATH.BLOG,
  twitterTitle: "Blog — Europe-Evakuator",
  twitterDescription:
    "Artikel über Bergung, Fahrzeugtransport und Pannenhilfe in Europa.",
  ogImagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
};

export default page;
