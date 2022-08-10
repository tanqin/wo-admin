import { createI18n } from 'vue-i18n'
import zhCn from './zh-cn'
import en from './en'

const i18n = createI18n({
  allowComposition: true,
  locale:
    JSON.parse(localStorage.getItem('LangStore') || '{}').language ||
    navigator.language.toLocaleLowerCase() ||
    'en',
  messages: {
    'zh-cn': zhCn,
    en
  },
  // https://vue-i18n.intlify.dev/guide/essentials/fallback.html#explicit-fallback-with-one-locale
  silentTranslationWarn: true, // 阻止翻译失败警告
  silentFallbackWarn: true // 阻止回退警告
})

export default i18n
