import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/100-1-Carte-De-Visite-React-TypeScript/', // ⚠️ IMPORTANT : nom exact de ton repo
})