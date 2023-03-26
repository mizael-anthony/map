import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['leaflet', '@geoman-io/leaflet-geoman-free'],
  },
  plugins: [],
  css: {
    postcss: {},
  },
});
