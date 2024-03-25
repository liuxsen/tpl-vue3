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
    <div class="header flex flex-items-center flex-justify-between">
      <Menu />
      <Mode />
    </div>
    <div class="content-box">
      <ElScrollbar>
        <div class="content-box-inner">
          <router-view />
        </div>
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
    // background-color: var(--app-header-dark-background);
  }
  .content-box {
    height: var(--app-content-box-height);
    padding: var(--app-content-box-padding);
    padding-right: 0px;
    .content-box-inner {
      padding-right: var(--app-content-box-padding);
    }
  }
}
</style>
