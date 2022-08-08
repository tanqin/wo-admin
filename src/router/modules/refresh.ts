import { RouteRecordRaw } from 'vue-router'

// 刷新模块的路由
const refreshRoutes: Array<RouteRecordRaw> = [
  {
    path: 'refresh',
    name: 'refresh',
    component: () => import(/* webpackChunkName: "refresh" */ '@/views/refresh.vue'),
    meta: {
      keepAlive: true,
      requireAuth: true,
      title: '刷新',
      key: 'refresh'
    }
  }
]

export default refreshRoutes
