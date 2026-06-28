import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("embla-carousel")) return "embla";
          if (id.includes("react-router") || id.includes("react-router-dom")) return "router";
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) return "react-vendor";
        },
      },
    },
  },
});
