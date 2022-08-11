<template>
  <el-button class="refresh-btn" @click="handleRefresh">
    <span>{{ $t('tabs.refresh') }}</span
    ><el-icon class="el-icon--right"><Refresh /></el-icon>
  </el-button>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
// 刷新页面
const handleRefresh = () => {
  router.push({ name: 'refresh' })
}
</script>
<style lang="scss" scoped></style>
