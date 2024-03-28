<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import Footer from '~/layouts/components/Footer.vue'
import Aside from '~/layouts/components/Aside.vue'
import Menu from '~/layouts/components/Menu.vue'
import Mode from '~/components/mode/index.vue'
import { useAppSettings } from '~/store/appSettings'
import Icon from '~/components/Icon/index.vue'

const { shrinkMenu } = storeToRefs(useAppSettings())

const BreadCrumb = defineAsyncComponent(() => import('~/layouts/components/BreadCrumb/index.vue'))
</script>

<template>
  <div class="layout default flex">
    <div class="flex left">
      <el-scrollbar class="full-h w-86 border-right">
        <Aside />
      </el-scrollbar>
      <el-scrollbar class="full-h menu-box border-right" :class="[shrinkMenu ? 'off' : '']">
        <Menu />
      </el-scrollbar>
    </div>
    <div class="right flex-1">
      <div class="header pl-10 pr-10 border-bottom flex flex-middle flex-between">
        <el-space>
          <Icon class-name="ri-menu-unfold-line cs-pt fs-16" :class="[shrinkMenu ? '' : 'rotate-180']" @click="shrinkMenu = !shrinkMenu" />
          <BreadCrumb />
        </el-space>
        <Mode />
      </div>
      <el-scrollbar class="content">
        <div class="pr-20 content-inner">
          <router-view />
        </div>
      </el-scrollbar>
      <Footer />
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout.default {
  .content {
    height: var(--app-content-height);
    padding: var(--app-content-padding);
    padding-right: 0;
  }
  .content-inner{
    height: var(--app-content-inner-height);
  }
  .header {
    height: var(--app-header-height);
  }
  .menu-box {
    width: 200px;
    transition: all ease .3s;
    &.off {
      width: 0;
      border: 0;
    }
  }
}
</style>
