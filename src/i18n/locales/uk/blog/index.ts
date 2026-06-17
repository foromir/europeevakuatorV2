import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const page: PageSeoBundle = {
  title: "Блог — поради з евакуації та допомоги на дорозі в Європі",
  description:
    "Статті про витягування, перевезення авто та допомогу на дорозі в Європі: поломка за кордоном, страховка після ДТП та міжнародне перевезення.",
  canonicalPath: ROUTE_PATH.BLOG,
  ogTitle: "Блог — поради з евакуації та допомоги на дорозі в Європі",
  ogDescription:
    "Корисні статті про витягування, перевезення авто та допомогу на дорозі по всій Європі.",
  ogUrlPath: ROUTE_PATH.BLOG,
  twitterTitle: "Блог — Abschleppdienst24",
  twitterDescription:
    "Статті про витягування, перевезення авто та допомогу на дорозі в Європі.",
  ogImagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
};

export default page;
