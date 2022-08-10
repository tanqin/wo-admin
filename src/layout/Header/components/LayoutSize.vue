<template>
  <el-dropdown trigger="click">
    <span>
      <el-tooltip effect="dark" :content="$t('header.layoutSize')" placement="bottom">
        <i class="iconfont icon-font-size"></i>
      </el-tooltip>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>large</el-dropdown-item>
        <el-dropdown-item disabled>default</el-dropdown-item>
        <el-dropdown-item>small</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped></style>
