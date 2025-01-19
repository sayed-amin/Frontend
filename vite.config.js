import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ace-builds', 'uuid', 'socket.io-client'], // Add socket.io-client here
  },
  
  build: { 
    chunkSizeWarningLimit: 1000, 
    sourcemap: true, 
    rollupOptions: {
      output: {
        manualChunks: {
          ace: ['ace-builds', 'socket.io-client'], // Bundle socket.io-client with ace-builds
        },
      },
      external: ['uuid'], // uuid will be external
    },
    target: 'esnext', // Use the latest version of JavaScript
  },

  assetsInclude: ['**/*.woff2', '**/*.otf'], // Include font files for bundling
});
