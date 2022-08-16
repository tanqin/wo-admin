<template>
  <el-config-provider :size="layoutSize" :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import zhCn from 'element-plus/dist/locale/zh-cn.js'
import en from 'element-plus/dist/locale/en.js'
import { computed } from 'vue'
import { GlobalStore } from './store'
import { storeToRefs } from 'pinia'

const globalStore = GlobalStore()
const { language } = storeToRefs(globalStore)
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
