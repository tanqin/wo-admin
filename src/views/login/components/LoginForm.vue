<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    size="large"
    @keyup.enter="handleLogin(loginFormRef)"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名" autofocus>
        <template #prefix>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" type="password" placeholder="密码">
        <template #prefix>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="validCode">
      <el-input v-model="loginForm.password" type="password" placeholder="验证码">
        <template #prefix>
          <el-icon><Message /></el-icon>
        </template>
      </el-input>
      <img class="code-img" :src="codeImgUrl" alt="验证码" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        :icon="UserFilled"
        round
        :loading="btnLoading"
        @click="handleLogin(loginFormRef)"
        >登录</el-button
      >
      <el-button :icon="Refresh" round @click="hanlereset(loginFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue'
import { ILoginForm } from '@/views/login/types/index'
import { FormInstance, FormRules } from 'element-plus'
import { Refresh, UserFilled } from '@element-plus/icons-vue'
import { getRandom32Num } from '@/utils'
import { getCodeImgAPI } from '@/api/modules/login'

const emit = defineEmits(['login', 'reset'])
const loginFormRef = ref<FormInstance>()
// 采用 ts 专有声明，可设置默认值
const props = withDefaults(defineProps<{ data: ILoginForm }>(), {
  data: () => ({ username: '', password: '' })
})
const loginForm = toRefs(props).data
const loginRules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const btnLoading = ref<boolean>()
const codeImgUrl = ref('')

// 生成设备 id (32 位随机数)
const deviceId = getRandom32Num()

// 获取登录验证码
const getCodeImg = async () => {
  const res = await getCodeImgAPI(deviceId)
  console.log(res)

  const blob = res.data
  codeImgUrl.value = window.webkitURL.createObjectURL(blob) || window.URL.createObjectURL(blob)
}
getCodeImg()

// 登录
const handleLogin = (loginFormEl: FormInstance | undefined) => {
  if (!loginFormEl) return
  loginFormEl.validate((valid) => {
    if (valid) {
      btnLoading.value = true
      emit('login', loginForm.value, (msg: string) => {
        console.log(msg)
        btnLoading.value = false
      })
    }
  })
}

// 重置
const hanlereset = (loginFormEl: FormInstance | undefined) => {
  if (!loginFormEl) return
  loginFormEl?.resetFields()
}
</script>
<style lang="scss" scoped></style>
