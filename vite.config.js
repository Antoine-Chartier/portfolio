import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imageOptimizerPlugin } from "./src/plugin/imagesOptimizerPlugin";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // build: { manifest: "manifest.json" },
  plugins: [
    imageOptimizerPlugin(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // navigateFallbackDenylist: [/\.pdf$/],
        globPatterns: ['**/*.{js,css,html,ico,png,webp,avif,svg,pdf}'],
        maximumFileSizeToCacheInBytes: 3000000,
      },
      manifest: {
        name: "Mon Portfolio",
        short_name: "Portfolio",
        // start_url: "/custom-start-url",
        display: "standalone",
        // background_color: "#f5f5f5",
        theme_color: "#f5f5f5",
        description: "A portfolio built with Vite and React",
        icons: [
          {
            src: "/icons/vite-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/vite-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
