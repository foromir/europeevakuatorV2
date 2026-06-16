import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const seo: PageSeoBundle = {
  title: "Эвакуатор в Германии 24/7 — перевозка авто и помощь на дороге",
  description:
    "Круглосуточный эвакуатор в Германии: эвакуация, перевозка автомобилей, помощь на дороге. Быстрый выезд, фиксированная стоимость.",
  canonicalPath: ROUTE_PATH.GERMANY,
  ogTitle: "Эвакуатор в Германии 24/7 — перевозка авто и помощь на дороге",
  ogDescription:
    "Эвакуация и перевозка авто по Германии: помощь на дороге, доставка на СТО, межгород и в другие страны ЕС.",
  ogUrlPath: ROUTE_PATH.GERMANY,
  twitterTitle: "Эвакуатор в Германии 24/7",
  twitterDescription: "Эвакуация и перевозка авто в Германии. Помощь на дороге 24/7.",
};

export default { seo } as const;
