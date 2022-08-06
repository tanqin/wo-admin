<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-left">
        <img src="@/assets/images/login_left.svg" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img src="@/assets/images/logo.svg" alt="logo" />
          <p class="logo-text">wo-admin</p>
        </div>
        <LoginForm :data="loginForm" @login="handleLogin"></LoginForm>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LoginForm from './components/LoginForm.vue'
import { ILoginForm } from '@/model/login'
import { reactive } from 'vue'

const loginForm = reactive<ILoginForm>({
  username: 'admin',
  password: '123456'
})

// 登录
const handleLogin = (form: ILoginForm) => {
  console.log(form)
}
</script>
<style lang="scss" scoped>
.login-container {
  box-sizing: border-box;
  height: 100vh;
  padding: 20px;
  background: center/100% #eee url('@/assets/images/login_bg.svg');
  .login-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(252 252 252);
    .login-left {
      width: 900px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login-form {
      width: 480px;
      height: 240px;
      border-radius: 15px;
      padding: 30px;
      background-color: #fff;
      box-shadow: 3px 3px 8px 1px #00000038;
      .login-logo {
        text-align: center;
        margin-bottom: 30px;
        img {
          width: 50px;
          height: 40px;
          margin-right: 20px;
        }
        .logo-text {
          display: inline-block;
          font-size: 45px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
