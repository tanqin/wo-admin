<template
  ><div class="menu" :style="{ width: isCollapse ? '64px' : '210px' }">
    <div class="logo flx-center" :style="{ width: isCollapse ? '64px' : '210px' }">
      <img src="@/assets/images/logo.svg" alt="logo" />
      <span v-show="!isCollapse">wo-admin</span>
    </div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :router="true"
      :unique-opened="true"
      :collapse-transition="false"
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
      active-text-color="rgb(64, 158, 255)"
    >
      <SubItem :menuList="menuList" />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SubItem from './components/SubItem.vue'
import menuListJson from './json/menu.json'
import { MenuStore } from '@/store/index'

const menuStore = MenuStore()
menuStore.setMenuList(menuListJson)
const isCollapse = computed((): boolean => menuStore.isCollapse)
const menuList = computed((): globalThis.Menu.MenuOptions[] => menuStore.menuList)
const route = useRoute()
const activeMenu = computed((): string => route.path)
</script>
<style lang="scss" scoped>
$logoHeight: 50px;
.menu {
  height: 100%;
  background-color: $themeColor;
  overflow-x: hidden;
  transition: width 0.4s ease;
  .logo {
    box-sizing: border-box;
    height: $logoHeight;
    transition: width 0.4s ease;
    img {
      width: 24px;
      object-fit: contain;
    }
    span {
      margin-left: 10px;
      color: #fff;
      font-size: 22px;
      font-weight: bold;
      // 文本不进行换行
      white-space: nowrap;
    }
  }
  .el-menu {
    height: calc(100% - $logoHeight);
    border-right: 0;
    overflow: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 3px;
      background-color: $themeColor;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #888;
    }
  }
}
</style>
