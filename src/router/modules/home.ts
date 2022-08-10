import { RouteRecordRaw } from 'vue-router'

// 首页模块的路由
const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: 'home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    meta: {
      keepAlive: true,
      requireAuth: true,
      title: 'route.home',
      key: 'home'
    }
  }
]

export default homeRoutes
