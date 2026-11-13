import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true,
    allowedHosts: true,
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: {
      ignored: ['**/dist/**', '**/.playwright-cli/**', '**/node_modules/**']
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
