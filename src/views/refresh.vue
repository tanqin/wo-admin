<template>
  <div></div>
</template>
<script lang="ts">
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$router.replace(from.path)
    })
  }
}
</script>

<script lang="ts" setup></script>
<style lang="scss" scoped></style>
