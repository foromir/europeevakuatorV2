import { useMemo } from "react";
import { useLocation } from "react-router";
import { useI18n } from "../../i18n/I18nContext";
import { getBreadcrumbs, parseLocalizedPath } from "../../i18n/seo";
import { withLocale } from "../../i18n/routeConfig";
import type { PageSeoBundle } from "../../i18n/types";

type BreadcrumbsProps = {
  seo?: PageSeoBundle;
};

export function Breadcrumbs({ seo }: BreadcrumbsProps) {
  const { locale, localizedPath } = useI18n();
  const { pathname } = useLocation();

  const items = useMemo(() => {
    const contentPath = seo?.canonicalPath ?? parseLocalizedPath(pathname).contentPath;
    return getBreadcrumbs(locale, contentPath);
  }, [seo, locale, pathname]);

  if (items.length <= 1) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container breadcrumbs__container">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="breadcrumbs__item">
              {item.path && !isLast ? (
                <a href={localizedPath(item.path)} className="breadcrumbs__link">
                  {item.label}
                </a>
              ) : (
                <span className="breadcrumbs__current" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      </div>
    </nav>
  );
}
