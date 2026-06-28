import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
createRoot(container).render(app);
