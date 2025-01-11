import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ace-builds'],
  },
  build: {
    sourcemap: true, // Add this line to enable source maps
    rollupOptions: {
      output: {
        manualChunks: {
          ace: ['ace-builds'],
        },
      },
    },
  },
});
