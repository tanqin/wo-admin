import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import errorRoutes from './modules/error'
import homeRoutes from './modules/home'
import dataScreen from './modules/dataScreen'

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
  {
    path: '/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    meta: {
      requireAuth: true,
      title: '布局页',
      key: 'layout'
    },
    redirect: { name: 'home' },
    children: [...homeRoutes, ...dataScreen]
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
