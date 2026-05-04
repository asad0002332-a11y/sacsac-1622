import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

// Vercel-specific Vite config — no Cloudflare plugin, pure SPA output
export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/web"),
    },
  },
  build: {
    outDir: "dist/vercel",
    emptyOutDir: true,
  },
  // Strip out any Cloudflare-specific env references at build time
  define: {
    "import.meta.env.DEV": "false",
  },
});
