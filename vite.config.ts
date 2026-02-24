import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(), // Move o CSS para dentro do JS, eliminando o bloqueio de renderização do index.css
  ],
  build: {
    minify: 'terser', // Minificação mais agressiva para reduzir o tamanho dos arquivos
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log para ganhar performance
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Garante que o arquivo final seja index.js para bater com o index.html corrigido
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
