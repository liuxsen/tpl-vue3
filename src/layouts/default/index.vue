<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Footer from '~/layouts/components/Footer.vue'
import Aside from '~/layouts/components/Aside.vue'
import Menu from '~/layouts/components/Menu.vue'

const BreadCrumb = defineAsyncComponent(() => import('~/layouts/components/BreadCrumb/index.vue'))
</script>

<template>
  <div class="layout default flex">
    <div class="flex left">
      <el-scrollbar class="full-h aside-box">
        <Aside />
      </el-scrollbar>
      <el-scrollbar class="full-h menu-left">
        <Menu />
      </el-scrollbar>
    </div>
    <div class="right">
      <div class="header">
        <BreadCrumb />
      </div>
      <el-scrollbar class="content">
        <router-view />
      </el-scrollbar>
      <Footer />
    </div>

    <!-- <ElContainer>
      <AppAside />
      <ElContainer>
        <ElHeader class="header">
          <BreadCrumb v-if="showBread" />
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
    </ElContainer> -->
  </div>
</template>

<style lang="less" scoped>
.layout.default {
  height: var(--app-full-height);
  background-color: var(--app-body-background);
  .left, .right, .full-h {
    height: var(--app-full-height);
  }
  .full-h {
    background-color: var(--app-panel-color);
  }
  .aside-box {
    background-color: var(--app-aside-background);
    color: var(--app-);
  }
  .right {
    flex: 1;
  }
  .header {
    height: var(--app-header-height);
    border-bottom: 1px solid var(--app-border-color);
    background-color: var(--app-panel-color);
  }
  .content {
    height: var(--app-content-box-height);
    padding: var(--app-content-box-padding);
  }
  .menu-left {
    border-right: 1px solid var(--app-border-color);
  }
}
</style>
