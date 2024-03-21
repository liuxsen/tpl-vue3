<script setup lang="ts">
import { ref } from 'vue'
import { ElAside, ElContainer, ElHeader, ElMenu, ElMenuItem, ElMenuItemGroup, ElScrollbar, ElSubMenu } from 'element-plus'
import Footer from './components/Footer.vue'

const activeIndex = ref('2-1')
</script>

<template>
  <div class="layout default">
    <ElContainer>
      <ElAside width="100px" class="aside-left">
        Aside
      </ElAside>
      <ElAside width="200px" class="aside-menu">
        <ElScrollbar class="app-aside-menu-scroll-bar">
          <ElMenu :default-openeds="['1', '3']" :default-active="activeIndex">
            <ElSubMenu index="1">
              <template #title>
                <!-- <el-icon><message /></el-icon>Navigator One -->
              </template>
              <ElMenuItemGroup>
                <template #title>
                  Group 1
                </template>
                <ElMenuItem index="1-1">
                  Option 1
                </ElMenuItem>
                <ElMenuItem index="1-2">
                  Option 2
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group 2">
                <ElMenuItem index="1-3">
                  Option 3
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubMenu index="1-4">
                <template #title>
                  Option4
                </template>
                <ElMenuItem index="1-4-1">
                  Option 4-1
                </ElMenuItem>
              </ElSubMenu>
            </ElSubMenu>
            <ElSubMenu index="2">
              <template #title>
                <!-- <el-icon><icon-menu /></el-icon>Navigator Two -->
              </template>
              <ElMenuItemGroup>
                <template #title>
                  Group 1
                </template>
                <ElMenuItem index="2-1">
                  Option 1
                </ElMenuItem>
                <ElMenuItem index="2-2">
                  Option 2
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group 2">
                <ElMenuItem index="2-3">
                  Option 3
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubMenu index="2-4">
                <template #title>
                  Option 4
                </template>
                <ElMenuItem index="2-4-1">
                  Option 4-1
                </ElMenuItem>
              </ElSubMenu>
            </ElSubMenu>
            <ElSubMenu index="3">
              <template #title>
                <!-- <el-icon><setting /></el-icon>Navigator Three -->
              </template>
              <ElMenuItemGroup>
                <template #title>
                  Group 1
                </template>
                <ElMenuItem index="3-1">
                  Option 1
                </ElMenuItem>
                <ElMenuItem index="3-2">
                  Option 2
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElMenuItemGroup title="Group 2">
                <ElMenuItem index="3-3">
                  Option 3
                </ElMenuItem>
              </ElMenuItemGroup>
              <ElSubMenu index="3-4">
                <template #title>
                  Option 4
                </template>
                <ElMenuItem index="3-4-1">
                  Option 4-1
                </ElMenuItem>
              </ElSubMenu>
            </ElSubMenu>
          </ElMenu>
        </ElScrollbar>
      </ElAside>
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
