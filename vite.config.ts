import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import vercel from 'vite-plugin-vercel';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    allowedHosts: [
      'app.local.tookey.cloud'
    ]
  },
  plugins: [vercel(), react(), tailwindcss(), VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    injectRegister: 'auto',

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Self Observe',
      short_name: 'Self Observe',
      description: 'Daily mental health self-observation tracker',
      theme_color: '#fef9f5',
      background_color: '#fef9f5',
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})