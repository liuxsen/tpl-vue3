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
    <div class="header flex flex-items-center flex-justify-between pl-10 pr-10">
      <Menu />
      <Mode />
    </div>
    <div class="content-box">
      <ElScrollbar>
        <router-view />
      </ElScrollbar>
    </div>
    <Footer />
  </div>
</template>

<style lang="less">
.layout.vertical {
  height: var(--app-full-height);
  .header {
    height: var(--app-header-height);
    border-bottom: 1px solid var(--app-border-color);
  }
  .content-box {
    height: var(--app-content-height);
    padding: var(--app-content-padding);
    padding-right: 0px;
  }
}
</style>
