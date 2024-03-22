<script setup lang="ts">
import Footer from './components/Footer.vue'
import AppAside from './components/Aside/Aside.vue'
</script>

<template>
  <div class="layout default">
    <ElContainer>
      <AppAside />
      <ElContainer>
        <ElHeader class="header">
          Header
        </ElHeader>
        <el-main class="content-box">
          <ElScrollbar>
            <div class="content-box-inner">
              <router-view />
            </div>
          </ElScrollbar>
        </el-main>
        <Footer />
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="less">
.layout.default {
  font-size: var(--app-font-size);
  height: var(--app-full-height);
  background-color: var(--app-body-background);
  .header {
    height: var(--app-header-height);
    border-bottom: 1px solid var(--app-border-color);
    background-color: var(--app-panel-color);
  }
  .content-box {
    height: var(--app-content-box-height);
    padding-right: 0px;
    .content-box-inner {
      padding-right: var(--app-content-box-padding);
    }
  }

  .aside-left {
    background-color: var(--app-aside-background);
    color: var(--app-aside-color);
    width: var(--app-aside-width);
  }
  .aside-menu {
    width: var(--app-aside-menu-width);
    border-right: 1px solid var(--app-border-color);
    .app-aside-menu-scroll-bar {
      height: var(--app-aside-menu-scroll-bar-height);
      background-color: var(--app-aside-menu-scroll-bar-color);
      padding: var(--app-aside-menu-scroll-bar-padding);
      box-sizing: border-box;
      .el-menu {
        border-right: 0;
      }
    }
  }
}
</style>
