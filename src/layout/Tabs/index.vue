<template>
  <div class="tabs">
    <el-tabs
      v-model="activeTabValue"
      type="card"
      @tabClick="handleclickTab"
      @tabRemove="handleRemoveTab"
    >
      <el-tab-pane
        v-for="item in tabsMenuList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
        :closable="item.close"
      >
        <template #label>
          <span @click.middle="handleRemoveTab(item.path)"
            ><el-icon v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            {{ item.title }}</span
          >
        </template>
      </el-tab-pane>
    </el-tabs>
    <el-button size="small" class="refresh-btn" @click="handleRefresh">
      <span>刷新</span><el-icon class="el-icon--right"><Refresh /></el-icon>
    </el-button>
    <el-dropdown trigger="click">
      <el-button type="primary" size="small">
        <span>更多</span><el-icon class="el-icon--right"><ArrowDown /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleCloseCurrent">关闭当前</el-dropdown-item>
          <el-dropdown-item @click="handleCloseOther">关闭其它</el-dropdown-item>
          <el-dropdown-item @click="handleCloseAll">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { TabsPaneContext } from 'element-plus'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TabsStore } from '@/store/index'

const route = useRoute()
const router = useRouter()
const tabsStore = TabsStore()
const activeTabValue = computed({
  get: () => {
    return tabsStore.activeTabValue
  },
  set: (val) => {
    tabsStore.setActiveTabValue(val)
  }
})
const tabsMenuList = computed(() => tabsStore.tabsMenuList)

// 监听路由变化，将数据添加至 tabsMenuList 列表
watch(
  () => route.path,
  () => {
    const tabItem = {
      path: route.path,
      title: route.meta.title as string,
      close: true
    }
    tabsStore.addTab(tabItem)
  },
  {
    immediate: true
  }
)

// 点击 tab
const handleclickTab = (tabItem: TabsPaneContext) => {
  const path = tabItem.props.name as string
  router.push(path)
}

// 关闭 tab
const handleRemoveTab = (tabPath: string) => {
  if (tabPath === '/layout/home') return
  tabsStore.removeTab(tabPath)
}

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

// 刷新页面
const handleRefresh = () => {
  router.push({ name: 'refresh' })
}
</script>
<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
  :deep(.el-tabs) {
    flex: 1;
    .el-tabs__header {
      margin: 0;
      .el-tabs__nav {
        border: 0;
        .el-tabs__item {
          border-left: 0;
          &.is-active {
            border-bottom: 2px solid $primaryColor;
          }
        }
      }
    }
  }
  .refresh-btn {
    margin-right: 15px;
  }
}
</style>
