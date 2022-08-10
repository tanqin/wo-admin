<template>
  <el-dropdown trigger="click" @command="handleSetLang">
    <span
      ><el-tooltip effect="dark" :content="$t('header.language')" placement="bottom">
        <i class="iconfont icon-language"></i> </el-tooltip
    ></span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in langTypes"
          :key="item.value"
          :command="item.value"
          :disabled="language === item.value"
          >{{ item.label }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { LangStore } from '@/store'
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

type LangEnum = {
  value: string
  label: string
}

const langTypes = reactive<LangEnum[]>([
  {
    value: 'zh-cn',
    label: '简体中文'
  },
  {
    value: 'en',
    label: 'English'
  }
])
const langStore = LangStore()
const language = computed((): string => langStore.language)
const { locale } = useI18n()

const handleSetLang = (lang: string) => {
  langStore.setLang(lang)
  locale.value = lang
}
</script>
<style lang="scss" scoped></style>
