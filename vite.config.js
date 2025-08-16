import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Clock from './src/components/Clock';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Digital-Clock",
})
