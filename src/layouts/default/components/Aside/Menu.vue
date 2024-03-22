<script lang="ts" setup>
import { ref } from 'vue'
import { useMenuStore } from '../../../../store/menu'
import AppMenuItem from './AppMenuItem.vue'

const menuStore = useMenuStore()
const activeIndex = ref('8')
</script>

<script lang="ts">
export default {
  name: 'AppMenu',
}
</script>

<template>
  <el-menu :default-active="activeIndex">
    <AppMenuItem :menu="menuStore.menu" />
  </el-menu>
</template>
