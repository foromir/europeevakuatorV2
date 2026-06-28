import { absUrl, withLocale } from "../routeConfig";
import { DEFAULT_LOCALE, LOCALE_HREFLANG, SEO_LOCALES } from "./config";
import { parseLocalizedPath } from "./resolvePage";

export type HreflangLink = {
  hreflang: string;
  href: string;
};

export function buildHreflangLinks(pathname: string): HreflangLink[] {
  const { contentPath } = parseLocalizedPath(pathname);

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
