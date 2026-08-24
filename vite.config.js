import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The React plugin provides JSX support and instant updates during development.
  plugins: [react()],
})
