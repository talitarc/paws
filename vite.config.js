import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/paws",
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "stats.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    sourcemap: true,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@mui")) {
            return "mui";
          }
          if (id.includes("framer-motion")) {
            return "animations";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },

    chunkSizeWarningLimit: 1000,
  },
});
