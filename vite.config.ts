import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: resolve(__dirname, './public'),
  plugins: [],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        // main: resolve(__dirname, 'src/index.ts'),
      },
    },
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
  },
})
