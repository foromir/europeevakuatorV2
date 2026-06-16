import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

export function App({ children }: { children: ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
