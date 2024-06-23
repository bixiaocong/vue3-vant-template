import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcsspxtoviewport from 'postcss-px-to-viewport';

// https://vitejs.dev/config/
export default defineConfig({
  // 设置别名
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          viewportWidth: 375,
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: /node_modules/,
        })
      ]
    }
  },
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
      }
    }
  }
})
