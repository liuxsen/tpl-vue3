<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMenuStore } from '~/store/menu'

const { breadList } = storeToRefs(useMenuStore())
</script>

<script lang="ts">
export default {
  name: 'BreadCrumb',
}
</script>

<template>
  <el-space>
    <i class="ri-menu-unfold-line" />
    <el-breadcrumb separator="/" class="bread-crumb-box">
      <el-breadcrumb-item v-for="(breadItem) in breadList" :key="breadItem.id" :to="{ path: breadItem.path }">
        {{ breadItem.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </el-space>
</template>

<style lang="less" scoped>
.bread-crumb-box {
  line-height: var(--app-header-height);
}
</style>
