import { ROUTE_PATH, BLOG_IMAGE } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const page: PageSeoBundle = {
  title: "Блог — советы по эвакуации и помощи на дороге в Европе",
  description:
    "Статьи об эвакуации, перевозке авто и помощи на дороге в Европе: поломка за границей, страховка после ДТП и международная перевозка.",
  canonicalPath: ROUTE_PATH.BLOG,
  ogTitle: "Блог — советы по эвакуации и помощи на дороге в Европе",
  ogDescription:
    "Полезные статьи об эвакуации, перевозке авто и помощи на дороге по всей Европе.",
  ogUrlPath: ROUTE_PATH.BLOG,
  twitterTitle: "Блог — Europe-Evakuator",
  twitterDescription:
    "Статьи об эвакуации, перевозке авто и помощи на дороге в Европе.",
  ogImagePath: BLOG_IMAGE.BREAKDOWN_ABROAD,
};

export default page;
