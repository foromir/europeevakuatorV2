import { Navigate, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import { AreaStubPage, CityStubPage, CountryStubPage, NotFoundPage } from "../pages/placeholders";
import { readStoredLocalePreference } from "../i18n/routeConfig";
import { LocaleGate } from "../components/layout/LocaleGate";

function RootRedirect() {
  return <Navigate to={`/${readStoredLocalePreference()}`} replace />;
}

/** Дерево маршрутов SPA (`BrowserRouter`). */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/:lang" element={<LocaleGate />}>
        <Route index element={<HomePage />} />
        <Route path=":country/:city/:area" element={<AreaStubPage />} />
        <Route path=":country/:city" element={<CityStubPage />} />
        <Route path=":country" element={<CountryStubPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
