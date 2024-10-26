import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imageOptimizerPlugin } from './src/plugin/imagesOptimizerPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {manifest: "manifest.json"},
  plugins: [ imageOptimizerPlugin(), react()],
})
