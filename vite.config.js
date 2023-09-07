import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  globals: {
    'import.meta.env.VITE_SERVER_API': process.env.VITE_SERVER_API,
  },
})
