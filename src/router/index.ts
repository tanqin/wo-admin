import router from './router'
import NProgress from '@/config/nprogress'

// 前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

// 后置守卫
router.afterEach(() => {
  NProgress.done()
})

export default router
