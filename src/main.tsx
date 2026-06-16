import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { App } from "./App";
import { AppRoutes } from "./routes/AppRoutes";

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
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
