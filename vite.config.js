import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kamloops_cc_website/',
  plugins: [react()]
})
