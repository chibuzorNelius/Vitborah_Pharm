import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    cors: true,
    allowedHosts: true,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true,
      interval: 100
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    allowedHosts: true
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('therapeuticProducts.json') || id.includes('supplements.json')) {
            return 'products-data';
          }
          if (id.includes('/data/') || id.includes('\\data\\')) {
            return 'corporate-data';
          }
        }
      }
    }
  }
});
