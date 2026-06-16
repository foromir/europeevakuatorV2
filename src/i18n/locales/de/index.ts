import type { RouteLocaleEntry, StaticPagesBundle } from "../../types";
import { ROUTE_PATH, routeSlug } from "../../routeConfig";
import commonPartial from "./common";
import landing from "./landing";
import pageHome from "./home";
import austria from "./austria/austria";
import graz from "./austria/graz";
import grazJakomini from "./austria/graz-jakomini";
import germany from "./germany/germany";
import pageBlogAccidentInsurance from "./blog/accident-insurance";
import pageBlogInternationalTransport from "./blog/international-transport";
import pageBlogIndex from "./blog/index";
import pageBlogBreakdownAbroad from "./blog/breakdown-abroad";

export const de = {
  common: {
    ...commonPartial,
    landing,
    austriaLanding: austria.landing,
  },
  routes: {
    [routeSlug(ROUTE_PATH.AUSTRIA)]: austria,
    [routeSlug(ROUTE_PATH.AUSTRIA_GRAZ)]: graz,
    [routeSlug(ROUTE_PATH.AUSTRIA_GRAZ_JAKOMINI)]: grazJakomini,
    [routeSlug(ROUTE_PATH.GERMANY)]: germany,
  } satisfies Record<string, RouteLocaleEntry>,
  pages: {
    home: pageHome,
    blogIndex: pageBlogIndex,
    blogBreakdownAbroad: pageBlogBreakdownAbroad,
    blogAccidentInsurance: pageBlogAccidentInsurance,
    blogInternationalTransport: pageBlogInternationalTransport,
  } satisfies StaticPagesBundle,
};
