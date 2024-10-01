import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { webfontDownload } from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap',
      'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
    ]),
    vueRouter(),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
  },
})
