<template>
  <template v-for="item in menuList" :key="item.id">
    <el-sub-menu v-if="item.children?.length" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <span>{{ $t(item.title) }}</span>
      </template>
      <SubItem :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      <template #title>
        <a class="href" v-if="item.isLink" :href="item.isLink" target="_blank">{{
          $t(item.title)
        }}</a>
        <span v-else>{{ $t(item.title) }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts" setup>
defineProps<{ menuList: globalThis.Menu.MenuOptions[] }>()
</script>
<style lang="scss" scoped>
.href {
  display: inline-block;
  text-decoration: none;
  color: $textColor;
}
</style>
