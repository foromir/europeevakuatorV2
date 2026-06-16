import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
