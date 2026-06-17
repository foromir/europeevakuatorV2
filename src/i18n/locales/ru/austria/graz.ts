import { ROUTE_PATH } from "../../../routeConfig";
import type { LandingEvacuationCopy, PageSeoBundle } from "../../../types";
import { styriaCitiesLandingBlock } from "../../../austria/styriaCityList";
import { evacuationBlockShared } from "../common";

const seo: PageSeoBundle = {
  title: "Эвакуатор из Граца 24/7 – Помощь на дороге в Австрии",
  description:
    "Круглосуточный эвакуатор из Граца и в Граце, земля Штирия: помощь на дороге, эвакуация и перевозка авто по Австрии и в Украину. Быстрый выезд, прозрачные цены, без скрытых доплат.",
  canonicalPath: ROUTE_PATH.AUSTRIA_GRAZ,
  ogTitle: "Эвакуатор из Граца 24/7 – Помощь на дороге в Австрии",
  ogDescription:
    "Эвакуатор из Граца и в Граце, земля Штирия: помощь на дороге, эвакуация и перевозка авто по Австрии и в Украину. Быстрый выезд, прозрачные цены.",
  ogUrlPath: ROUTE_PATH.AUSTRIA_GRAZ,
  twitterTitle: "Эвакуатор из Граца 24/7 – Помощь на дороге в Австрии",
  twitterDescription:
    "Эвакуатор из Граца и в Граце: эвакуация и перевозка авто по Австрии. Быстро, без скрытых доплат.",
  ogImagePath: "/assets/images/gallery/gallery-19.jpeg",
};

const evacuation: LandingEvacuationCopy = {
  ...evacuationBlockShared,
  badge: "Грац и Штирия — выезд 24/7",
  titleRest: "Эвакуатор из Граца",
  subtitle: "Помощь на дороге, эвакуация и перевозка авто",
  text:
    "Круглосуточный эвакуатор в Граце и земле Штирия: поломка на трассе, ДТП, перевозка на СТО или в Украину. Помощь на дороге по Австрии — быстрый выезд, прозрачные цены, без скрытых доплат.",
  slideAlts: [
    "Эвакуатор из Граца — круглосуточный выезд",
    "Эвакуация и перевозка авто в Штирии",
    "Погрузка автомобиля на эвакуатор в Граце",
  ],
};

const landing = {
  cities: styriaCitiesLandingBlock("ru"),
  directions: {
    title: "Популярные направления из Граца",
    lead: "Эвакуатор из Граца — междугородняя перевозка по Австрии и в соседние страны:",
    list: [
      "Грац — Вена",
      "Грац — Зальцбург",
      "Грац — Клагенфурт",
      "Грац — Линц",
      "Грац — Любляна",
      "Грац — Мюнхен",
      "Грац — Будапешт",
    ],
    more: "и другие маршруты по запросу",
  },
} as const;

export default { seo, evacuation, landing } as const;
