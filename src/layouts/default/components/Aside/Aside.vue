<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import Menu from './Menu.vue'
import type { MenuItem } from '~/store/menu'
import { useMenuStore } from '~/store/menu'

const router = useRouter()

const menuStore = useMenuStore()
const { menu } = storeToRefs(menuStore)

function onChangeTopMenu(menu: MenuItem) {
  const firstMenu = menuStore.getFirstMenuPath(menu)
  if (firstMenu) {
    router.push(firstMenu)
  }
}
</script>

<script lang="ts">
export default {
  name: 'AppAside',
}
</script>

<template>
  <ElAside width="100px" class="aside-left">
    <div
      v-for="item in menu" :key="item.id"
      @click="onChangeTopMenu(item)"
    >
      {{ item.title }}
    </div>
  </ElAside>
  <ElAside width="200px" class="aside-menu">
    <ElScrollbar class="app-aside-menu-scroll-bar">
      <Menu />
    </ElScrollbar>
  </ElAside>
</template>
