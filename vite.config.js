import { defineConfig } from 'vite'
import { cssCodeSplit } from 'vite-plugin-css-code-split'
import react from '@vitejs/plugin-react'
import { imageOptimizerPlugin } from './src/plugin/imagesOptimizerPlugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {cssCodeSplit: false},
  plugins: [ imageOptimizerPlugin(), react()],
})
