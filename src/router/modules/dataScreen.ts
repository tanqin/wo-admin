import { RouteRecordRaw } from 'vue-router'

// 数据大屏模块的路由
const dataScreenRoutes: Array<RouteRecordRaw> = [
  {
    path: 'dataScreen',
    name: 'dataScreen',
    component: () => import(/* webpackChunkName: "dataScreen" */ '@/views/dataScreen/index.vue'),
    meta: {
      requireAuth: false,
      title: 'route.dataScreen',
      key: 'dataScreen'
    }
  }
]

export default dataScreenRoutes
