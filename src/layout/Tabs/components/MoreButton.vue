<template>
  <el-dropdown trigger="click">
    <el-button type="primary">
      <span>{{ $t('tabs.more') }}</span
      ><el-icon class="el-icon--right"><ArrowDown /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleCloseCurrent">{{
          $t('tabs.closeCurrent')
        }}</el-dropdown-item>
        <el-dropdown-item @click="handleCloseOther">{{ $t('tabs.closeOther') }}</el-dropdown-item>
        <el-dropdown-item @click="handleCloseAll">{{ $t('tabs.closeAll') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { TabsStore } from '@/store'

const tabsStore = TabsStore()

// 关闭当前 tab
const handleCloseCurrent = () => {
  if (tabsStore.activeTabValue === '/layout/home') return
  tabsStore.removeTab(tabsStore.activeTabValue)
}

// 关闭其它 tab
const handleCloseOther = () => {
  tabsStore.closeMultipleTab(tabsStore.activeTabValue)
}

// 关闭所有 tab
const handleCloseAll = () => {
  tabsStore.closeMultipleTab()
  tabsStore.goHome()
}
</script>
<style lang="scss" scoped></style>
