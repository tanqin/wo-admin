<template>
  <div class="header">
    <div class="header-left">
      <el-icon class="collapse-icon" @click="menuStore.setCollapse">
        <component :is="isCollapse ? 'expand' : 'fold'" />
      </el-icon>

      <Breadcrumb />
    </div>
    <div class="header-right">
      <FullScreen />
      <Lang />
      <LayoutSize />
      <el-dropdown size="large" trigger="click">
        <div class="user">
          <img class="avatar" src="@/assets/images/avatar.svg" alt="avatar" />
          <div class="greeting">
            <span class="username">wo-admin</span> , {{ $t('header.welcome') }}</div
          >
          <el-icon><CaretBottom /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu placement="bottom-end">
            <el-dropdown-item :icon="UserFilled" @click="handleOpenDialog('personalRef')">{{
              $t('header.profile')
            }}</el-dropdown-item>
            <el-dropdown-item :icon="Key" @click="handleOpenDialog('passwordRef')">{{
              $t('header.changePassword')
            }}</el-dropdown-item>
            <el-dropdown-item :icon="SwitchButton" divided @click="handleLogout">{{
              $t('header.logout')
            }}</el-dropdown-item>
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
import { UserFilled, Key, SwitchButton, CaretBottom } from '@element-plus/icons-vue'
import PersonalDialog from './components/PersonalDialog.vue'
import { ElMessageBox } from 'element-plus'
import PasswordDialog from './components/PasswordDialog.vue'
import { useRouter } from 'vue-router'
import Breadcrumb from './components/Breadcrumb.vue'
import FullScreen from './components/FullScreen.vue'
import Lang from './components/Lang.vue'
import LayoutSize from './components/LayoutSize.vue'

const menuStore = MenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)
const personalDialogVisible = ref<boolean>(false)
const passwordDialogVisible = ref<boolean>(false)
const router = useRouter()

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
    :deep(.iconfont) {
      cursor: pointer;
      font-size: 22px;
      &.full-screen-icon {
        font-size: 18px;
      }
    }

    :deep(.el-dropdown) {
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
        .greeting {
          width: 1750x;
          font-size: 16px;
          margin-right: 5px;

          .username {
            display: inline-block;
            max-width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
}
</style>
