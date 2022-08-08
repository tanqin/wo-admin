import { RouteRecordRaw } from 'vue-router'

// 错误页面模块的路由
const errorRoutes: Array<RouteRecordRaw> = [
  {
    path: '/403',
    name: '403',
    component: () => import(/* webpackChunkName: "error" */ '@/components/ErrorMessage/index.vue'),
    meta: {
      requireAuth: true,
      title: '403页面',
      key: '403',
      msg: '抱歉，您无权访问该页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "error" */ '@/components/ErrorMessage/index.vue'),
    meta: {
      requireAuth: false,
      title: '404页面',
      key: '404',
      msg: '抱歉，您访问的页面不存在'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import(/* webpackChunkName: "error" */ '@/components/ErrorMessage/index.vue'),
    meta: {
      requireAuth: false,
      title: '500页面',
      key: '500',
      msg: '抱歉，服务器出错了'
    }
  }
]

export default errorRoutes
