import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import errorRoutes from './modules/error'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'login' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: {
      requireAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  ...errorRoutes,
  {
    // 找不到路由重定向到 404 页面
    path: '/:pathMatch(.*)',
    redirect: { name: '404' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
