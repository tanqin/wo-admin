<template>
  <div class="header">
    <div class="header-left">
      <el-icon class="collapse-icon" @click="menuStore.setCollapse">
        <component :is="isCollapse ? 'expand' : 'fold'" />
      </el-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MenuStore } from '@/store/index'
import { computed } from 'vue'

const menuStore = MenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  .header-left {
    display: flex;
    font-size: 24px;
    .collapse-icon {
      cursor: pointer;
    }
  }
}
</style>
