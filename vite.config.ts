import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: { cssCodeSplit: true, rollupOptions: { output: { manualChunks: {
    'react-vendor': ['react', 'react-dom'],
    'icon-vendor': ['lucide-react'],
  } } } },
})
