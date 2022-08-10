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
        :name="item.path"
        :closable="item.close"
      >
        <template #label>
          <span @click.middle="handleRemoveTab(item.path)"
            ><el-icon v-if="item.icon">
              <component :is="item.icon"></component>
            </el-icon>
            {{ $t(item.title) }}</span
          >
        </template>
      </el-tab-pane>
    </el-tabs>
    <RefreshButton />
    <MoreButton />
  </div>
</template>
<script lang="ts" setup>
import { TabsPaneContext } from 'element-plus'
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TabsStore } from '@/store/index'
import RefreshButton from './components/RefreshButton.vue'
import MoreButton from './components/MoreButton.vue'

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
