import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PortfolioWebsite/',
  build: {
    outDir: 'build',
  },
  plugins: [react()],
})

