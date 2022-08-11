import piniaPersist from '@/config/piniaPersist'
import { defineStore } from 'pinia'

interface GlobalState {
  language: string
  layoutSize: string
}

export default defineStore('GlobalStore', {
  state: (): GlobalState => ({
    language: navigator.language.toLocaleLowerCase() || 'en',
    layoutSize: 'small'
  }),
  getters: {},
  actions: {
    setLang(lang: string) {
      this.language = lang
    },
    setLayoutSize(size: string) {
      this.layoutSize = size
    }
  },
  persist: piniaPersist('GlobalStore')
})
