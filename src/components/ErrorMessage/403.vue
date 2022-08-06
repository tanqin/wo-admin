<template>
  <div class="error-container">
    <img src="@/assets/images/403.png" class="error-img" alt="403" />
    <div class="error-detail">
      <h2>403</h2>
      <h4>抱歉，您无权访问该页面</h4>
      <el-button type="primary" @click="handleToHome">返回首页</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const handleToHome = () => {
  console.log('返回首页')
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
