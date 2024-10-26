import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from 'rollup-plugin-copy';
import { imageOptimizerPlugin } from "./src/plugin/imagesOptimizerPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    imageOptimizerPlugin(),
    react(),
    copy({
      targets: [{ src: "public/AntoineChartier-CV-pub.pdf", dest: "dist" }],
      hook: "writeBundle",
    }),
  ],
  build: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "AntoineChartier-CV-pub.pdf") {
              return "AntoineChartier-CV.pdf";
            }
            return assetInfo.name;
          },
        },
        manifest: true,
      },
    },
  },
});
