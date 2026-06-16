import { useCallback, useMemo } from "react";
import { Navigate, Outlet, useLocation, useNavigate, useParams } from "react-router";
import { buildI18nValue, I18nProvider } from "../../i18n/I18nContext";
import { isLocale, persistLocalePreference, swapLocaleInPathname, withLocale } from "../../i18n/routeConfig";
import type { Locale } from "../../i18n/types";

/** Валидирует `:lang`, собирает `I18nValue` из URL и даёт `<Outlet />`. */
export function LocaleGate() {
  const { lang } = useParams<{ lang: string }>();
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  if (!isLocale(lang ?? "")) {
    return <Navigate to={`/ru${pathname}`} replace />;
  }

  const locale = lang as Locale;

  const setLocale = useCallback(
    (next: Locale) => {
      const nextPath = swapLocaleInPathname(pathname, next);
      navigate(`${nextPath}${search}${hash}`, { replace: true });
      persistLocalePreference(next);
    },
    [navigate, pathname, search, hash],
  );

  const localizedPath = useCallback((path: string) => withLocale(locale, path), [locale]);

  const value = useMemo(
    () => buildI18nValue(locale, setLocale, localizedPath),
    [locale, setLocale, localizedPath],
  );

  return (
    <I18nProvider value={value}>
      <Outlet />
    </I18nProvider>
  );
}
