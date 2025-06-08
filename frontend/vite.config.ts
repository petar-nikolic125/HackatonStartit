import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  server: {
    proxy: {
      '/api': 'http://localhost:3001',   // adjust if your backend port differs
    },
  },
});
