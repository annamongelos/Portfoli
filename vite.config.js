import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base = nom del repositori a GitHub Pages
export default defineConfig({
  base: '/Portfoli/',
  plugins: [react(), tailwindcss()],
})
