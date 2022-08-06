import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  // global css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/var.scss";`
      }
    }
  },
  // server config
  server: {
    host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
    port: 8088, // 服务器端口号
    // https: false,
    open: true, // 是否自动打开浏览器
    // cors: true, // 是否允许跨域
    proxy: { // 代理跨域
      "/api": {
        target: "http://192.168.1.113:6666", // 代理目标地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
})
