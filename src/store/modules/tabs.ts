import piniaPersist from '@/config/piniaPersist'
import router from '@/router'
import { defineStore } from 'pinia'

const whiteList = ['/403', '/404', '/500', '/layout', '/login', '/layout/refresh']
let isExist = false

interface TabsState {
  activeTabValue: string
  tabsMenuList: Menu.MenuOptions[]
}

export default defineStore({
  id: 'TabsStore',
  state: (): TabsState => ({
    activeTabValue: '/layout/home',
    tabsMenuList: [
      {
        path: '/layout/home',
        title: '首页',
        icon: 'HomeFilled',
        close: false
      }
    ]
  }),
  getters: {},
  actions: {
    // 添加 tab
    addTab(tabItem: Menu.MenuOptions) {
      // 白名单中的路由不需要添加
      if (whiteList.includes(tabItem.path)) return
      const tabInfo: Menu.MenuOptions = { ...tabItem }
      const findItem = this.tabsMenuList.find((item) => item.path === tabInfo.path)
      if (findItem) isExist = true
      if (!isExist) this.tabsMenuList.push(tabInfo)
      this.activeTabValue = tabInfo.path
      router.push(tabInfo.path)
      isExist = false
    },
    // 移除 tab
    removeTab(tabPath: string) {
      if (this.activeTabValue === tabPath) {
        const itemIndex = this.tabsMenuList.findIndex((item) => item.path === tabPath)
        const newTab = this.tabsMenuList[itemIndex + 1] || this.tabsMenuList[itemIndex - 1]
        this.activeTabValue = newTab.path
        router.push(newTab.path)
      }
      this.tabsMenuList = this.tabsMenuList.filter((item) => item.path !== tabPath)
    },
    // 移除多个 tab
    closeMultipleTab(tabPath?: string) {
      this.tabsMenuList = this.tabsMenuList.filter(
        (item) => item.path === tabPath || item.path === '/layout/home'
      )
    },
    // 设置激活的 tab
    setActiveTabValue(activeTabValue: string) {
      this.activeTabValue = activeTabValue
    },
    // 前往首页
    goHome() {
      router.push('/layout/home')
    }
  },
  persist: piniaPersist('TabsStore')
})
