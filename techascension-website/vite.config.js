import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true,
    allowedHosts: [
      '5173-injsmkhg5uwaz0ajm60t8-ce9266d7.manus.computer',
      '5174-injsmkhg5uwaz0ajm60t8-ce9266d7.manus.computer'
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
