import { ROUTE_PATH } from "./routeConfig";
import type { BlogArticlePage, StaticPagesBundle } from "./types";

export const BLOG_POST_PAGE_KEYS = {
  [ROUTE_PATH.BLOG_POST_BREAKDOWN_ABROAD]: "blogBreakdownAbroad",
  [ROUTE_PATH.BLOG_POST_ACCIDENT_INSURANCE]: "blogAccidentInsurance",
  [ROUTE_PATH.BLOG_POST_INTERNATIONAL_TRANSPORT]: "blogInternationalTransport",
} as const satisfies Record<string, keyof StaticPagesBundle>;

export type BlogPostPageKey = (typeof BLOG_POST_PAGE_KEYS)[keyof typeof BLOG_POST_PAGE_KEYS];

export function getBlogPostPage(pages: StaticPagesBundle, contentPath: string): BlogArticlePage | null {
  const key = BLOG_POST_PAGE_KEYS[contentPath as keyof typeof BLOG_POST_PAGE_KEYS];
  if (!key) return null;
  return pages[key];
}

export function isBlogPostPath(contentPath: string): boolean {
  return contentPath in BLOG_POST_PAGE_KEYS;
}
