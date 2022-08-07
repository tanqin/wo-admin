<template>
  <el-container>
    <el-aside>
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
        <Tabs />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition appear name="fade-transform" mode="out-in">
            <section class="main-content" :key="route.path">
              <keep-alive v-if="route.meta.keepAlive">
                <component :is="Component" :key="route.path" />
              </keep-alive>
              <component v-else :is="Component" :key="route.path" />
            </section>
          </transition>
        </router-view>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Footer from './Footer/index.vue'
import Tabs from './Tabs/index.vue'
</script>
<style lang="scss" scoped>
.el-container {
  height: 100vh;
  .el-aside {
    width: auto;
  }
  .el-header {
    height: auto;
  }
  .el-main {
    background-color: #f0f3f7ec;
    padding: 15px;
    box-sizing: border-box;
    overflow-x: hidden;
    .main-content {
      box-sizing: border-box;
      overflow: auto;
      height: 100%;
      background-color: #fff;
      padding: 14px;
      border-radius: 10px;
    }
  }

  .el-footer {
    height: auto;
  }
}
</style>
