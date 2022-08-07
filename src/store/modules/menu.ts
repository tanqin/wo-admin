import { defineStore } from 'pinia'
import piniaPersist from '@/config/piniaPersist'

interface MenuState {
  isCollapse: boolean
  menuList: Menu.MenuOptions[]
}

export default defineStore('MenuStore', {
  state: (): MenuState => ({
    isCollapse: false,
    menuList: []
  }),
  getters: {},
  actions: {
    setCollapse() {
      this.isCollapse = !this.isCollapse
    },
    setMenuList(menuList: Menu.MenuOptions[]) {
      this.menuList = menuList
    }
  },
  persist: piniaPersist('MenuStore')
})
