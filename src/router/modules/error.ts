import { RouteRecordRaw } from 'vue-router'

// 错误页面模块的路由
const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: '/403',
    name: '403',
    component: () => import(/* webpackChunkName: "403" */ '@/components/ErrorMessage/403.vue'),
    meta: {
      requireAuth: true,
      title: '403页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/components/ErrorMessage/404.vue'),
    meta: {
      requireAuth: false,
      title: '404页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import(/* webpackChunkName: "500" */ '@/components/ErrorMessage/500.vue'),
    meta: {
      requireAuth: false,
      title: '500页面'
    }
  }
]

export default errorRoutes
