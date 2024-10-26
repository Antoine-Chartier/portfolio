import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imageOptimizerPlugin } from './src/plugin/imagesOptimizerPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ imageOptimizerPlugin(), react(), 
    copy({
      targets: [
        { src: 'public/AntoineChartier-CV-pub.pdf', dest: 'dist' }
      ],
      hook: 'writeBundle'
    })],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.names === 'AntoineChartier-CV-pub.pdf') {
              return 'AntoineChartier-CV.pdf';
            }
            return assetInfo.name;
          }
        }
      }
    }
})
