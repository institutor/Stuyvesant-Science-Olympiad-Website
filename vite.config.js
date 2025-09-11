import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/Stuyvesant-Science-Olympiad-Website/', 
  plugins: [react(),
    tailwindcss(),
  ],
})