import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ace-builds', 'uuid'], 
  },
  
  build: {
    sourcemap: true, 
    rollupOptions: {
      output: {
        manualChunks: {
          ace: ['ace-builds'],
        },
      },
      external: ['uuid'], 
    },
    target: 'esnext', // Use the latest version of JavaScript that supports top-level await
  },

  assetsInclude: ['**/*.woff2', '**/*.otf'], // Include font files for bundling
});
