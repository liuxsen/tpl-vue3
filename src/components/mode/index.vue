<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

import { useAppSettings } from '~/store/appSettings'

const { mode } = storeToRefs(useAppSettings())

watch(mode, (v) => {
  const html = document.querySelector('html')!
  if (v) {
    html.classList.add('dark')
  }
  else {
    html.classList.remove('dark')
  }
})
</script>

<script lang="ts">
export default {
  name: 'ComponnetName',
}
</script>

<template>
  <el-switch v-model="mode">
    <template #active-action>
      <div class="dark-icon">
        <i class="ri-moon-clear-fill" />
      </div>
    </template>
    <template #inactive-action>
      <i class="ri-sun-fill" />
    </template>
  </el-switch>
</template>

<style lang="less" scoped>
.ri-sun-fill {
  color: var(--app-primary-color);
}
</style>
