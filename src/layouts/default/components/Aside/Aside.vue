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
      <!-- <ElMenu :default-openeds="[]" :default-active="activeIndex">
        <ElSubMenu index="1">
          <template #title>
            aaa
          </template>
          <el-menu-item index="1-1">
            Option 1
          </el-menu-item>
          <el-menu-item index="1-2">
            Option 2
          </el-menu-item>
          <el-menu-item index="1-3">
            Option 3
          </el-menu-item>
          <ElSubMenu index="1-4">
            <template #title>
              Option4
            </template>
            <el-menu-item index="1-4-1">
              Option 4-1
            </el-menu-item>
          </ElSubMenu>
        </ElSubMenu>
      </ElMenu> -->
    </ElScrollbar>
  </ElAside>
</template>
