<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ name: 'home' }">{{ $t('route.home') }}</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in matchedRoutes" :key="item.path" :to="{ path: item.path }">{{
      $t(item.meta.title as string)
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const matchedRoutes = computed(() =>
  route.matched.filter(
    (item) => item.name !== 'layout' && item.name !== 'home' && item.name !== 'refresh'
  )
)
</script>
<style lang="scss" scoped></style>
