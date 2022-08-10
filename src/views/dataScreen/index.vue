<template>
  <div class="data-screen"> {{ dataScreen }} </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const dataScreen = computed(() => t('route.dataScreen'))
</script>
<style lang="scss" scoped></style>
