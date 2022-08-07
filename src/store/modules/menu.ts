import { defineStore } from 'pinia'
import piniaPersist from '@/config/piniaPersist'
export default defineStore('MenuStore', {
  state: () => ({
    isCollapse: false
  }),
  getters: {},
  actions: {
    setCollapse() {
      console.log(11)
      this.isCollapse = !this.isCollapse
    }
  },
  persist: piniaPersist('MenuStore')
})
