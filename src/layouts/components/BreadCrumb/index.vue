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
  <div class="box hp-100">
    <el-breadcrumb separator="/" class="bread-crumb-box">
      <el-breadcrumb-item v-for="(breadItem) in breadList" :key="breadItem.id" :to="{ path: breadItem.path }">
        {{ breadItem.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
.box {
  display: flex;
  align-items: center;
}
</style>
