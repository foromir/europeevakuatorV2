import { messages } from "../locales";
import { getBlogPostPage, isBlogPostPath } from "../blogPosts";
import { ROUTE_PATH, DEFAULT_LOCALE, isLocale } from "../routeConfig";
import type { BlogArticlePage, Locale, PageSeoBundle, RouteLocaleEntry } from "../types";

export type ResolvedPage =
  | {
      kind: "home";
      locale: Locale;
      contentPath: typeof ROUTE_PATH.HOME;
      seo: PageSeoBundle;
    }
  | {
      kind: "route";
      locale: Locale;
      contentPath: string;
      routeKey: string;
      seo: PageSeoBundle;
      entry: RouteLocaleEntry;
    }
  | {
      kind: "blogIndex";
      locale: Locale;
      contentPath: typeof ROUTE_PATH.BLOG;
      seo: PageSeoBundle;
    }
  | {
      kind: "blog";
      locale: Locale;
      contentPath: string;
      seo: BlogArticlePage;
    };

export function parseLocalizedPath(pathname: string): { locale: Locale; contentPath: string } {
  const parts = pathname.split("/").filter(Boolean);
  const locale = isLocale(parts[0] ?? "") ? (parts[0] as Locale) : DEFAULT_LOCALE;
  const contentPath = parts.length <= 1 ? ROUTE_PATH.HOME : `/${parts.slice(1).join("/")}`;
  return { locale, contentPath };
}

export function resolvePage(pathname: string): ResolvedPage | null {
  const { locale, contentPath } = parseLocalizedPath(pathname);
  const pack = messages[locale];

  if (contentPath === ROUTE_PATH.HOME) {
    return { kind: "home", locale, contentPath: ROUTE_PATH.HOME, seo: pack.pages.home };
  }

  if (contentPath === ROUTE_PATH.BLOG) {
    return { kind: "blogIndex", locale, contentPath: ROUTE_PATH.BLOG, seo: pack.pages.blogIndex };
  }

  if (isBlogPostPath(contentPath)) {
    const seo = getBlogPostPage(pack.pages, contentPath);
    if (!seo) return null;
    return { kind: "blog", locale, contentPath, seo };
  }

  const routeKey = contentPath.replace(/^\//, "");
  const entry = pack.routes[routeKey];
  if (!entry) return null;

  return {
    kind: "route",
    locale,
    contentPath,
    routeKey,
    seo: entry.seo,
    entry,
  };
}
