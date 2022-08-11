<template>
  <el-config-provider :size="layoutSize" :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { computed, ref } from 'vue'
import { GlobalStore } from './store'

const globalStore = GlobalStore()
const language = ref<string>(globalStore.language)
const locale = computed(() => {
  switch (language.value) {
    case 'en':
      return en
    case 'zh-cn':
    default:
      return zhCn
  }
})

const layoutSize = computed(() => globalStore.layoutSize as '' | 'small' | 'default')
</script>
<style lang="scss" scoped></style>
