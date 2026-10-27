import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative, so dist/ works on any host or subfolder
export default defineConfig({
  plugins: [react()],
  base: './',
})
