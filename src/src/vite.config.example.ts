import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  // Capacitor requires the build output to be in 'dist'
  build: {
    outDir: 'dist',
    // Ensure assets are properly referenced
    assetsDir: 'assets',
    // Generate sourcemaps for debugging (optional, disable for production)
    sourcemap: false,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react'],
        },
      },
    },
  },
  // For Capacitor live reload during development
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,
    // Uncomment for HTTPS if needed
    // https: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
