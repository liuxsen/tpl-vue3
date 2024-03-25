<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import AppMenuItem from '~/layouts/components/AppMenuItem.vue'
import { useMenuStore } from '~/store/menu'

export interface Props {
  theme?: 'white' | 'dark'
}
withDefaults(defineProps<Props>(), {
  theme: 'white',
})

const { menuList, activeMenu, mode } = storeToRefs(useMenuStore())
</script>

<script lang="ts">
export default {
  name: 'AppMenu',
}
</script>

<template>
  <el-menu
    :default-active="activeMenu.id"
    :mode="mode"
    class="app-menu"
    :class="[theme]"
    :popper-class="theme"
  >
    <AppMenuItem :menu="menuList" />
  </el-menu>
</template>

<style lang="less" scope>
.app-menu {
  width: var(--app-aside-menu-width);
}
</style>

<style lang="less">
.el-menu {
  border-right: 0;
}
</style>
