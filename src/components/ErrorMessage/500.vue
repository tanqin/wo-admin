<template>
  <div class="error-container">
    <img src="@/assets/images/403.png" class="error-img" alt="403" />
    <div class="error-detail">
      <h2>500</h2>
      <h4>抱歉，服务器错出错了</h4>
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
