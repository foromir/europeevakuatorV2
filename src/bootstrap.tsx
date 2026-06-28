import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { App } from "./App";
import { AppRoutes } from "./routes/AppRoutes";
import { ensureLocalePack } from "./i18n/loadLocale";
import { parseLocalizedPath } from "./i18n/seo/resolvePage";

async function boot() {
  const { locale } = parseLocalizedPath(window.location.pathname);
  await ensureLocalePack(locale);

  const app = (
    <StrictMode>
      <App>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </App>
    </StrictMode>
  );

  const container = document.getElementById("root")!;
  createRoot(container).render(app);
}

void boot();
