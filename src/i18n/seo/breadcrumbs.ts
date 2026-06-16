import { messages } from "../locales";
import { getBlogPostPage, isBlogPostPath } from "../blogPosts";
import { ROUTE_PATH, withLocale } from "../routeConfig";
import type { Locale } from "../types";

export type BreadcrumbItem = {
  label: string;
  path?: string;
};

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

  if (parts[0] === "austria") {
    const items: BreadcrumbItem[] = [home, { label: common.countryAustria, path: ROUTE_PATH.AUSTRIA }];
    if (parts.length === 1) return items;

    const entry = routes[routeKey];
    const label = entry?.evacuation?.titleRest ?? entry?.seo.title.split("|")[0]?.trim() ?? routeKey;
    items.push({ label, path: contentPath });
    return items;
  }

  if (parts[0] === "germany") {
    const items: BreadcrumbItem[] = [home, { label: common.countryGermany, path: ROUTE_PATH.GERMANY }];
    if (parts.length === 1) return items;

    const entry = routes[routeKey];
    const label = entry?.evacuation?.titleRest ?? entry?.seo.title.split("|")[0]?.trim() ?? routeKey;
    items.push({ label, path: contentPath });
    return items;
  }

  return [home];
}

export function breadcrumbAbsoluteUrls(locale: Locale, items: BreadcrumbItem[]): string[] {
  return items.map((item) => (item.path ? withLocale(locale, item.path) : ""));
}
