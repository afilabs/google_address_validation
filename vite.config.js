/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 3000,
    host: true,
  },
  preview: {
    port: parseInt(process.env.PORT) || 3000,
    host: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Suppress warnings from dependencies (like Bootstrap)
        silenceDeprecations: [
          'import', // Suppress @import deprecation warnings
          'color-functions', // Suppress color function deprecation warnings
          'global-builtin', // Suppress global builtin function warnings
        ],
      },
    },
  },
});
