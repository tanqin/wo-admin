<template>
  <el-tooltip effect="dark" :content="$t('header.fullScreen')" placement="bottom">
    <i
      :class="['iconfont', 'full-screen-icon', isFullscreen ? 'icon-fangda' : 'icon-suoxiao']"
      @click="toggle"
    ></i>
  </el-tooltip>
</template>
<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
</script>
<style lang="scss" scoped></style>
