import { absUrl, withLocale } from "../routeConfig";
import { DEFAULT_LOCALE, LOCALE_HREFLANG, SEO_LOCALES } from "./config";
import { resolvePage } from "./resolvePage";

export type HreflangLink = {
  hreflang: string;
  href: string;
};

export function buildHreflangLinks(pathname: string): HreflangLink[] {
  const page = resolvePage(pathname);
  if (!page) return [];

  const contentPath = page.seo.canonicalPath;
  const links: HreflangLink[] = SEO_LOCALES.map((locale) => ({
    hreflang: LOCALE_HREFLANG[locale],
    href: absUrl(withLocale(locale, contentPath)),
  }));

  links.push({
    hreflang: "x-default",
    href: absUrl(withLocale(DEFAULT_LOCALE, contentPath)),
  });

  return links;
}
