import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/reset.scss'
import ElementPlus from 'element-plus'
// element css(如果使用了 CDN，不需要引入css)
// import "element-plus/dist/index.css"
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)

// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(ElementPlus).mount('#app')
