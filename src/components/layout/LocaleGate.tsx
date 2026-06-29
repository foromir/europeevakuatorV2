import { Suspense, useCallback, useLayoutEffect, useMemo, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate, useParams } from "react-router";
import { ensureLocalePack, getLocalePack } from "../../i18n/loadLocale";
import { buildI18nValue, I18nProvider } from "../../i18n/I18nContext";
import { DEFAULT_LOCALE, isLocale, persistLocalePreference, swapLocaleInPathname, withLocale } from "../../i18n/routeConfig";
import type { Locale } from "../../i18n/types";

/** Валидирует `:lang`, собирает `I18nValue` из URL и даёт `<Outlet />`. */
export function LocaleGate() {
  const { lang } = useParams<{ lang: string }>();
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  if (!isLocale(lang ?? "")) {
    return <Navigate to={`/${DEFAULT_LOCALE}${pathname}`} replace />;
  }

  const locale = lang as Locale;
  const [, setReady] = useState(0);

  useLayoutEffect(() => {
    let active = true;
    void ensureLocalePack(locale).then(() => {
      if (active) setReady((n) => n + 1);
    });
    return () => {
      active = false;
    };
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      void ensureLocalePack(next).then(() => {
        const nextPath = swapLocaleInPathname(pathname, next);
        navigate(`${nextPath}${search}${hash}`, { replace: true });
        persistLocalePreference(next);
      });
    },
    [navigate, pathname, search, hash],
  );

  const localizedPath = useCallback((path: string) => withLocale(locale, path), [locale]);

  if (!getLocalePack(locale)) return null;

  const value = useMemo(
    () => buildI18nValue(locale, setLocale, localizedPath),
    [locale, setLocale, localizedPath],
  );

  return (
    <I18nProvider value={value}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </I18nProvider>
  );
}
