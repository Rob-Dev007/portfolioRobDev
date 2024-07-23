import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      webp: {
        quality: 50
      }
    })
  ]
});