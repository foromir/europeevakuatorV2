import type { ReactElement } from "react";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import { ensureLocalePack } from "./i18n/loadLocale";
import { buildHeadForUrl, htmlLangForUrl, stripDocumentMetadata } from "./prerender/head";
import { parseLocalizedPath } from "./i18n/seo/resolvePage";

function renderToHtml(element: ReactElement): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const { pipe, abort } = renderToPipeableStream(element, {
      onAllReady() {
        const stream = new PassThrough();
        stream.setEncoding("utf8");
        stream.on("data", (chunk) => {
          html += chunk;
        });
        stream.on("end", () => resolve(html));
        stream.on("error", reject);
        pipe(stream);
      },
      onError(error) {
        reject(error);
      },
    });

    setTimeout(() => abort(), 60_000);
  });
}

export async function render(url: string) {
  const pathname = url.startsWith("/") ? url : `/${url}`;
  const { locale } = parseLocalizedPath(pathname);
  await ensureLocalePack(locale);

  const html = stripDocumentMetadata(
    await renderToHtml(
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
