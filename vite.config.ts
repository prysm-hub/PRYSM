import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/PRYSM/', // Replace <repo-name> with your GitHub repo name
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
