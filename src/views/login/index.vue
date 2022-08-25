<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-left">
        <img src="@/assets/images/login_left.svg" alt="login" />
      </div>
      <div class="login-right">
        <div class="login-form">
          <div class="login-logo">
            <img src="@/assets/images/logo.svg" alt="logo" />
            <p class="logo-text">wo-admin</p>
          </div>
          <LoginForm :data="loginForm" @login="handleLogin"></LoginForm>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LoginForm from './components/LoginForm.vue'
import { ILoginForm } from '@/views/login/types/index'
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { loginAPI } from '@/api/modules/login'

const loginForm = reactive<ILoginForm>({
  username: 'chenling',
  password: 'ylj123'
})

// 登录
const handleLogin = async (form: ILoginForm, callback: FunctionConstructor) => {
  try {
    const res = await loginAPI(form)
    console.log(res)
    ElMessage.success(`登录成功，${form.username}，欢迎您！`)
    router.push({ name: 'home' })
  } catch (err) {
    console.log(err)
  } finally {
    callback('finally')
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  box-sizing: border-box;
  height: 100vh;
  padding: 20px;
  background: center/100% #f1f2f6 url('@/assets/images/login_bg.svg');
  .login-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(254, 254, 254, 0.7);
    .login-left {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-right {
      flex: 1;
      display: flex;
      justify-content: center;

      .login-form {
        width: 480px;
        height: 270px;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 3px 3px 8px 1px #00000038;
        :deep(.el-form-item) {
          text-align: center;
          margin-bottom: 30px;
          .el-form-item__content {
            justify-content: center;
            .el-button {
              width: 40%;
            }
          }
        }
        .login-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          img {
            width: 58px;
            height: 52px;
            margin-right: 20px;
          }
          .logo-text {
            display: inline-block;
            font-size: 45px;
            font-weight: bold;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
