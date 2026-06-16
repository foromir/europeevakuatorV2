import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";

const seo: PageSeoBundle = {
  title: "Эвакуатор в Якомини, Грац — помощь на дороге 24/7",
  description:
    "Эвакуатор в районе Якомини (Грац, Штирия): выезд на поломку или ДТП, эвакуация и перевозка авто по городу и Австрии. Прозрачная цена до выезда.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  ogTitle: "Эвакуатор в Якомини, Грац — помощь на дороге 24/7",
  ogDescription:
    "Круглосуточный эвакуатор в Якомини и Граце: эвакуация, перевозка на СТО, помощь на дороге по Штирии и Австрии.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI,
  twitterTitle: "Эвакуатор в Якомини, Грац",
  twitterDescription:
    "Эвакуация и перевозка авто в районе Якомини (Грац). Выезд 24/7, цена по телефону.",
};

export default { seo } as const;
