import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'motion': ['motion'],
          'themes': ['next-themes'],
          'seo': ['react-helmet-async'],
        },
      },
    },
    // Improve asset caching with content hashes
    assetsDir: 'assets',
    // Target modern browsers for smaller output
    target: 'es2020',
  },
})
