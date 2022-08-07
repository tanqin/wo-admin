import { RouteRecordRaw } from 'vue-router'

// 首页模块的路由
const dataScreenRoutes: Array<RouteRecordRaw> = [
  {
    path: 'dataScreen',
    name: 'dataScreen',
    component: () => import(/* webpackChunkName: "dataScreen" */ '@/views/dataScreen/index.vue'),
    meta: {
      requireAuth: false,
      title: '数据大屏',
      key: 'dataScreen'
    }
  }
]

export default dataScreenRoutes
