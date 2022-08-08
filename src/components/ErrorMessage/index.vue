<template>
  <div class="error-container">
    <img :src="`/src/assets/images/${errorMsg.key}.png`" class="error-img" :alt="errorMsg.key" />
    <div class="error-detail">
      <h2>{{ errorMsg.key }}</h2>
      <h4>{{ errorMsg.msg }}</h4>
      <el-button type="primary" @click="tabsStore.goHome()">返回首页</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { TabsStore } from '@/store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const errorMsg = computed(() => ({
  key: route.meta.key as string,
  msg: route.meta.msg
}))

const tabsStore = TabsStore()
</script>
<style lang="scss" scoped>
.error-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .error-img {
    margin-right: 100px;
  }
  .error-detail {
    h2 {
      margin-bottom: 30px;
      color: #444;
      font-size: 60px;
      font-weight: bold;
    }
    h4 {
      color: #aaa;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .el-button {
      width: 100px;
    }
  }
}
</style>
