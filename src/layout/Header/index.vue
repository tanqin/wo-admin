<template>
  <div class="header">
    <div class="header-left">
      <el-icon class="collapse-icon" @click="menuStore.setCollapse">
        <component :is="isCollapse ? 'expand' : 'fold'" />
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ name: 'home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/layout/dataScreen' }">数据大屏</el-breadcrumb-item>
        <el-breadcrumb-item>其它</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-right">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <i
          :class="['iconfont', 'full-screen-icon', fullScreen ? 'icon-fangda' : 'icon-suoxiao']"
          @click="handleFullScreen"
        ></i>
      </el-tooltip>
      <el-dropdown trigger="click">
        <span
          ><el-tooltip effect="dark" content="语言" placement="bottom">
            <i class="iconfont icon-language"></i> </el-tooltip
        ></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item disabled>简体中文</el-dropdown-item>
            <el-dropdown-item>繁体中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown trigger="click">
        <span>
          <el-tooltip effect="dark" content="布局大小" placement="bottom">
            <i class="iconfont icon-font-size"></i>
          </el-tooltip>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>large</el-dropdown-item>
            <el-dropdown-item disabled>default</el-dropdown-item>
            <el-dropdown-item>small</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown size="large" trigger="click">
        <div class="user">
          <img class="avatar" src="@/assets/images/avatar.svg" alt="avatar" />
          <span class="username">wo-admin</span>
          <el-icon><CaretBottom /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="UserFilled" @click="handleOpenDialog('personalRef')"
              >个人中心</el-dropdown-item
            >
            <el-dropdown-item :icon="Key" @click="handleOpenDialog('passwordRef')"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item :icon="SwitchButton" divided @click="handleLogout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <PersonalDialog v-model="personalDialogVisible" title="个人中心" />
      <PasswordDialog v-model="passwordDialogVisible" title="修改密码" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MenuStore } from '@/store/index'
import { computed, ref } from 'vue'
import { ArrowRight, UserFilled, Key, SwitchButton, CaretBottom } from '@element-plus/icons-vue'
import PersonalDialog from './components/PersonalDialog.vue'
import { ElMessageBox } from 'element-plus'
import router from '@/router'
import PasswordDialog from './components/PasswordDialog.vue'

const menuStore = MenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)
const fullScreen = ref<boolean>(false)
const personalDialogVisible = ref<boolean>(false)
const passwordDialogVisible = ref<boolean>(false)

// 全屏切换
const handleFullScreen = () => {
  fullScreen.value = Boolean(document.fullscreenElement)

  if (fullScreen.value) {
    document.exitFullscreen?.()
  } else {
    document.body.requestFullscreen?.()
  }
}

// 打开弹窗
const handleOpenDialog = (refName: string) => {
  switch (refName) {
    case 'personalRef':
      personalDialogVisible.value = true
      break

    case 'passwordRef':
      passwordDialogVisible.value = true
      break
  }
}

// 退出登录
const handleLogout = async () => {
  try {
    await ElMessageBox.confirm('您是否确认退出登录？', '退出登录', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    router.push({ name: 'login' })
  } catch (err) {
    // console.log(err)
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eee;
  .header-left {
    display: flex;
    align-items: center;
    font-size: 24px;
    .collapse-icon {
      cursor: pointer;
      margin-right: 20px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    color: $themeColor;
    .iconfont {
      cursor: pointer;
      font-size: 22px;
      &.full-screen-icon {
        font-size: 18px;
      }
    }

    .el-dropdown {
      margin-left: 15px;
      .user {
        display: flex;
        align-items: center;
        height: 100%;
        margin-right: 15px;
        cursor: pointer;
        font-size: 18px;
        .avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
