import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { optimizeHtmlCriticalPath } from "./scripts/optimize-html-critical-path.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function criticalPathHtmlPlugin(): Plugin {
  return {
    name: "critical-path-html",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return optimizeHtmlCriticalPath(html);
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), criticalPathHtmlPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  build: {
    modulePreload: false,
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
