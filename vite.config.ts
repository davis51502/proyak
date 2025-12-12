import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change this line to just use '/' since your custom domain is the root
  base: '/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})