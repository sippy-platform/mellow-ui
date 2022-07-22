import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Mellow UI',
      fileName: (format) => `mellow-ui.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react(), dts()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/index.ts'),
      '@docs': path.resolve(__dirname, './src/docs'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  }
})
