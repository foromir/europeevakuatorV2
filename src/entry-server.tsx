import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import { buildHeadForUrl, htmlLangForUrl, stripDocumentMetadata } from "./prerender/head";

export function render(url: string) {
  const html = stripDocumentMetadata(
    renderToString(
      <HelmetProvider>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>,
    ),
  );

  return {
    html,
    head: buildHeadForUrl(url),
    htmlLang: htmlLangForUrl(url),
  };
}

export { generateRobotsTxt, generateSitemap, getPrerenderPaths } from "./prerender/paths";
