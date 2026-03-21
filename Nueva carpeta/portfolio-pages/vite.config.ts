import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      // Esto le dice a Vite: cuando veas '@', vete a la carpeta 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
