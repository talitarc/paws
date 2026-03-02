import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/paws",
  plugins: [react()],
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
