import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
// element css(如果使用了 CDN，不需要引入css)
// import "element-plus/dist/index.css"
import * as Icons from '@element-plus/icons-vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const app = createApp(App)

// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(router).use(ElementPlus).use(pinia).mount('#app')
