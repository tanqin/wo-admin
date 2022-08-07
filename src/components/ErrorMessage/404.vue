<template>
  <div class="error-container">
    <img src="@/assets/images/404.png" class="error-img" alt="403" />
    <div class="error-detail">
      <h2>404</h2>
      <h4>抱歉，您访问的页面不存在</h4>
      <el-button type="primary" @click="tabsStore.goHome()">返回首页</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { TabsStore } from '@/store'

const tabsStore = TabsStore()
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
