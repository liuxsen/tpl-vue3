<script lang="ts" setup>
import router from '~/routes'
import type { MenuItem } from '~/store/menu'

export interface Props {
  menu: MenuItem | MenuItem[]
}
// eslint-disable-next-line
const props = withDefaults(defineProps<Props>(), {
  bar: 'aaa',
  menu: {} as any,
})
function onClickMenuItem(menu: MenuItem) {
  const path = menu.path!
  router.push(path)
}
</script>

<script lang="ts">
export default {
  name: 'AppMenuItem',
}
</script>

<template>
  <template v-if="Array.isArray(menu) && menu.length > 0">
    <AppMenuItem v-for="(item) in menu" :key="item.id" :menu="item" />
  </template>
  <!-- 如果有children -->
  <template v-else-if="(menu as MenuItem)?.children && (menu as any).children.length > 0">
    <el-sub-menu :index="(menu as MenuItem).id">
      <template #title>
        {{ (menu as MenuItem).title }}
      </template>
      <template v-for="(menuItem) in (menu as MenuItem).children" :key="menuItem.id">
        <AppMenuItem :menu="menuItem" />
      </template>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="(menu as MenuItem)?.id" @click="onClickMenuItem(menu as MenuItem)">
      <template #title>
        <i v-if="(menu as MenuItem).icon" :class="(menu as MenuItem).icon" class="mr-10" />
        {{ (menu as MenuItem)?.title }}
      </template>
    </el-menu-item>
  </template>
</template>
