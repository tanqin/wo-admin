import router from './router'
import NProgress from '@/config/nprogress'

// 前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start()

  // 外链不跳转路由
  if (to.redirectedFrom?.path === '/link') {
    NProgress.done()
    router.push(from.path)
  } else {
    next()
  }
})

// 后置守卫
router.afterEach(() => {
  NProgress.done()
})

export default router
