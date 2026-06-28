import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import { ensureLocalePack } from "./i18n/loadLocale";
import { buildHeadForUrl, htmlLangForUrl, stripDocumentMetadata } from "./prerender/head";
import { parseLocalizedPath } from "./i18n/seo/resolvePage";

export async function render(url: string) {
  const pathname = url.startsWith("/") ? url : `/${url}`;
  const { locale } = parseLocalizedPath(pathname);
  await ensureLocalePack(locale);

  const html = stripDocumentMetadata(
    renderToString(
      <HelmetProvider>
        <StaticRouter location={pathname}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>,
    ),
  );

  return {
    html,
    head: buildHeadForUrl(pathname),
    htmlLang: htmlLangForUrl(pathname),
  };
}

export { generateRobotsTxt, generateSitemap, getPrerenderPaths } from "./prerender/paths";
