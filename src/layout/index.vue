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
              <div class="main-inner">
                <keep-alive v-if="route.meta.keepAlive">
                  <component :is="Component" />
                </keep-alive>
                <component v-else :is="Component" />
              </div>
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
  background-color: #fff;
  .el-aside {
    width: auto;
  }

  .el-main {
    background-color: #eee;
    padding: 15px;
    box-sizing: border-box;
    overflow-x: hidden;
    .main-content {
      box-sizing: border-box;
      overflow: hidden;
      height: 100%;
      background-color: #fff;
      padding: 10px 0 14px 14px;
      border-radius: 10px;
      /* main-inner 作用：1. 撑出 main-content 的内边距; 2. 使得滚动条可以包含于 main-content 内部 */
      .main-inner {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
  }

  .el-header,
  .el-footer {
    height: auto;
    box-shadow: 0 0 5px #00000024;
  }
}
</style>
