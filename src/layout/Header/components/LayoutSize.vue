<template>
  <el-dropdown trigger="click" @command="handleSetLayoutSize">
    <span>
      <el-tooltip effect="dark" :content="$t('header.layoutSize')" placement="bottom">
        <i class="iconfont icon-font-size"></i>
      </el-tooltip>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in layoutSizeTypes"
          :key="item"
          :command="item"
          :disabled="layoutSize === item"
          >{{ item }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { GlobalStore } from '@/store'
import { computed, reactive } from 'vue'

const layoutSizeTypes = reactive<string[]>(['default', 'small'])
const globalStore = GlobalStore()
const layoutSize = computed(() => globalStore.layoutSize)

const handleSetLayoutSize = (layoutSize: string) => {
  globalStore.setLayoutSize(layoutSize)
}
</script>
<style lang="scss" scoped></style>
