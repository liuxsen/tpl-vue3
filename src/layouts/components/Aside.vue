<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import type { MenuItem } from '~/store/menu'
import { useMenuStore } from '~/store/menu'

const router = useRouter()

const menuStore = useMenuStore()
const { menu, activeTopMenu } = storeToRefs(menuStore)

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
  <ElAside class="aside-left">
    <div
      v-for="item in menu" :key="item.id"
      class="item"
      :class="[item.id === activeTopMenu.id ? 'ative' : '']"
      @click="onChangeTopMenu(item)"
    >
      <i :class="item.icon" />
      <div>
        {{ item.title }}
      </div>
    </div>
  </ElAside>
</template>

<style lang="less" scope>
.aside-left {
  width: var(--app-aside-width);
  color: var(--app-aside-font-color);
  text-align: center;
  .item  {
    width: var(--app-aside-item-size);
    height: var(--app-aside-item-size);
    border-radius: var(--app-radius);
    margin: 10px auto;
    padding-top: 5px;
    transition: all ease .2s;
    cursor: pointer;
    &.ative {
      background-color: var(--app-aside-item-background);
    }
  }
}
</style>
