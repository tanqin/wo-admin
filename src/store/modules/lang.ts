import piniaPersist from '@/config/piniaPersist'
import { defineStore } from 'pinia'

interface LangState {
  language: string
}

export default defineStore('LangStore', {
  state: (): LangState => ({ language: navigator.language.toLocaleLowerCase() || 'en' }),
  getters: {},
  actions: {
    setLang(lang: string) {
      this.language = lang
    }
  },
  persist: piniaPersist('LangStore')
})
