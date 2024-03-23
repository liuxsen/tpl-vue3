<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import AppMenuItem from './AppMenuItem.vue'
import { useMenuStore } from '~/store/menu'

const { menuList, activeMenu } = storeToRefs(useMenuStore())
</script>

<script lang="ts">
export default {
  name: 'AppMenu',
}
</script>

<template>
  <el-menu :default-active="activeMenu.id">
    <AppMenuItem :menu="menuList" />
  </el-menu>
</template>
