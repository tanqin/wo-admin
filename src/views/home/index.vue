<template
  ><div class="home">
    <h2 v-for="i in 80" :key="i">首页 👉 {{ i }}</h2>
  </div></template
>
<script lang="ts" setup>
console.log('The home page is refreshed')
</script>
<style lang="scss" scoped>
.home {
  h2 {
    font-size: 40px;
  }
}
</style>
