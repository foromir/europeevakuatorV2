import { messages } from "../locales";
import { getLocationCityByRouteKey, getLocationCountryByRouteSlug } from "../locations/registry";
import { getBlogPostPage, isBlogPostPath } from "../blogPosts";
import { ROUTE_PATH, withLocale } from "../routeConfig";
import type { Locale } from "../types";

export type BreadcrumbItem = {
  label: string;
  path?: string;
};

function locationBreadcrumbs(
  locale: Locale,
  parts: string[],
  routes: (typeof messages)["ru"]["routes"],
): BreadcrumbItem[] | null {
  const country = getLocationCountryByRouteSlug(parts[0]);
  if (!country) return null;

  const home: BreadcrumbItem = { label: messages[locale].common.crumbHome, path: ROUTE_PATH.HOME };
  const items: BreadcrumbItem[] = [
    home,
    { label: country.countryLabel[locale], path: country.countryPath },
  ];

  if (parts.length === 1) return items;

  const cityRouteKey = parts.slice(0, 2).join("/");
  const entry = routes[cityRouteKey];
  const city = getLocationCityByRouteKey(cityRouteKey);
  const label =
    entry?.evacuation?.titleRest ??
    (city ? city.names[locale] : undefined) ??
    entry?.seo.title.split("|")[0]?.trim() ??
    parts[1];
  items.push({ label, path: `/${cityRouteKey}` });

  if (parts.length >= 3) {
    const areaKey = parts.slice(0, 3).join("/");
    const areaEntry = routes[areaKey];
    const areaLabel =
      areaEntry?.evacuation?.titleRest ?? areaEntry?.seo.title.split("|")[0]?.trim() ?? parts[2];
    items.push({ label: areaLabel });
  }

  return items;
}

export function getBreadcrumbs(locale: Locale, contentPath: string): BreadcrumbItem[] {
  const { common, pages, routes } = messages[locale];
  const home: BreadcrumbItem = { label: common.crumbHome, path: ROUTE_PATH.HOME };

  if (contentPath === ROUTE_PATH.HOME) return [home];

  if (contentPath === ROUTE_PATH.BLOG) {
    return [home, { label: common.navBlog }];
  }

  if (isBlogPostPath(contentPath)) {
    const article = getBlogPostPage(pages, contentPath);
    if (!article) return [home];
    return [home, { label: common.navBlog, path: ROUTE_PATH.BLOG }, { label: article.h1 }];
  }

  const routeKey = contentPath.replace(/^\//, "");
  const parts = routeKey.split("/");
  const locationItems = locationBreadcrumbs(locale, parts, routes);
  if (locationItems) return locationItems;

  return [home];
}

export function breadcrumbAbsoluteUrls(locale: Locale, items: BreadcrumbItem[]): string[] {
  return items.map((item) => (item.path ? withLocale(locale, item.path) : ""));
}
