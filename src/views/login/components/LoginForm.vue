<template>
  <el-form ref="formRef" :model="formData" status-icon label-width="120px">
    <el-form-item label="用户名：" prop="username">
      <el-input v-model="formData.username">
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-input v-model="formData.password" type="password">
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin">登录</el-button>
      <el-button @click="hanlereset(formRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, toRefs } from 'vue'
import { ILoginForm } from '@/model/login'
import { FormInstance } from 'element-plus'
const emit = defineEmits(['login', 'reset'])
const formRef = ref<FormInstance>()

// 采用 ts 专有声明，可设置默认值
const props = withDefaults(defineProps<{ data: ILoginForm }>(), {
  data: () => ({ username: 'test', password: '123456' })
})
const formData = toRefs(props).data

// 登录
const handleLogin = () => {
  emit('login', formData.value)
}

// 重置
const hanlereset = (formRef: FormInstance | undefined) => {
  formRef?.resetFields()
}
</script>
<style lang="scss" scoped></style>
