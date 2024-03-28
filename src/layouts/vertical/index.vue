<script lang="ts" setup>
import Footer from '~/layouts/components/Footer.vue'
import Menu from '~/layouts/components/Menu.vue'
import Mode from '~/components/mode/index.vue'
</script>

<script lang="ts">
export default {
  name: 'LayoutVertical',
}
</script>

<template>
  <div class="layout vertical">
    <!-- <AppAside /> -->
    <div class="header flex flex-items-center border-bottom flex-justify-between pl-10 pr-10">
      <Menu />
      <Mode />
    </div>
    <el-scrollbar class="content">
      <div class="pr-20 content-inner">
        <router-view />
      </div>
    </el-scrollbar>
    <Footer />
  </div>
</template>

<style lang="less" scoped>
.layout.vertical {
  height: var(--app-full-height);
  .header {
    height: var(--app-header-height);
  }
  .content {
    height: var(--app-content-height);
    padding: var(--app-content-padding);
    padding-right: 0;
  }
  .content-inner{
    height: var(--app-content-inner-height);
  }
}
</style>
