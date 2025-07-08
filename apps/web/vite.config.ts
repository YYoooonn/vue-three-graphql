import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      // 만약 SCSS나 LESS 사용 시 여기에 global import 설정 가능
      // scss: {
      //   additionalData: `@import "@/assets/styles/variables.scss";`
      // }
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})