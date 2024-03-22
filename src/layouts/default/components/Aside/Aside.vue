<script lang="ts" setup>
import Menu from './Menu.vue'
</script>

<script lang="ts">
export default {
  name: 'AppAside',
}
</script>

<template>
  <ElAside width="100px" class="aside-left">
    Aside
  </ElAside>
  <ElAside width="200px" class="aside-menu">
    <ElScrollbar class="app-aside-menu-scroll-bar">
      <Menu />
    </ElScrollbar>
  </ElAside>
</template>
