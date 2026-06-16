import { Navigate, Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import BlogArticlePage from "../pages/BlogArticlePage";
import { AreaStubPage, CityStubPage, CountryStubPage, NotFoundPage } from "../pages/placeholders";
import { readStoredLocalePreference, ROUTE_PATH, routeSlug, BLOG_POST_PATHS } from "../i18n/routeConfig";
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
        <Route path={routeSlug(ROUTE_PATH.BLOG)} element={<BlogPage />} />
        {BLOG_POST_PATHS.map((path) => (
          <Route key={path} path={routeSlug(path)} element={<BlogArticlePage />} />
        ))}
        <Route path=":country/:city/:area" element={<AreaStubPage />} />
        <Route path=":country/:city" element={<CityStubPage />} />
        <Route path=":country" element={<CountryStubPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
