import { ROUTE_PATH } from "../../../routeConfig";
import type { PageSeoBundle } from "../../../types";
import { cityListFromLabels } from "../../../locations/cityListLinks";

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
  ogImagePath: "/assets/images/gallery/gallery-14.jpeg",
};

const landing = {
  cities: {
    title: "Эвакуатор в районе Якомини и рядом",
    lead: "Быстрый выезд в Якомини и соседние районы Граца:",
    list: cityListFromLabels("at", [
      "Jakomini (Якомини)",
      "Gries",
      "St. Leonhard",
      "Innere Stadt",
      "Murvorstadt",
      "Puntigam",
    ]),
  },
  directions: {
    title: "Направления из Якомини",
    lead: "Эвакуация из района Якомини по Грацу и за его пределы:",
    list: [
      "Якомини — центр Граца",
      "Якомини — Вена",
      "Якомини — аэропорт Graz",
      "Якомини — Клагенфурт",
      "Якомини — Любляна",
    ],
    more: "междугородние маршруты по Австрии и ЕС",
  },
} as const;

export default { seo, landing } as const;
