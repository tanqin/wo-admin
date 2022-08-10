<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed } from 'vue'
import { LangStore } from './store'

const langStore = LangStore()

const language = computed(() => langStore.language)
const locale = computed(() => {
  switch (language.value) {
    case 'en':
      return en
    case 'zh-cn':
    default:
      return zhCn
  }
})
</script>
<style lang="scss" scoped></style>
