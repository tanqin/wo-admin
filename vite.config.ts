// 配置参考: https://juejin.cn/post/7028137821269393438
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import { Plugin as importToCDN } from 'vite-plugin-cdn-import'
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname'
import { visualizer } from 'rollup-plugin-visualizer'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import externalGlobals from 'rollup-plugin-external-globals'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
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
    host: '0.0.0.0', // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
    port: 8088, // 服务器端口号
    // https: false,
    open: true, // 是否自动打开浏览器
    // cors: true, // 是否允许跨域
    proxy: {
      // 代理跨域
      '/api': {
        target: 'http://192.168.1.113:6666', // 代理目标地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    // demand import element（如果使用了 cdn 引入,就没必要使用 element 自动导入）
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // cdn 引入 (vue、element-plus)
    importToCDN({
      modules: [
        // {
        //   name: 'vue',
        //   var: 'Vue',
        //   path: 'https://cdn.jsdelivr.net/npm/vue@next'
        // },
        // {
        //   name: 'element-plus',
        //   var: 'ElementPlus',
        //   path: 'https://cdn.jsdelivr.net/npm/element-plus',
        //   css: 'https://cdn.jsdelivr.net/npm/element-plus/dist/index.css'
        // }
      ]
    }),
    // gzip compress
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    // 查看打包体积大小
    visualizer(),
    eslintPlugin(),
    manualChunksPlugin()
  ],
  // build configure
  build: {
    outDir: 'dist',
    minify: 'terser',
    terserOptions: {
      // delete console/debugger
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      external: ['vue', 'ElementPlus', 'vue-demi'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          'vue-demi': 'VueDemi'
        })
      ],
      output: {
        // Static resource classification and packaging
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
