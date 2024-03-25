<script lang="ts" setup>
import { ref, watch } from 'vue'

const mode = ref(false)

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
      <div class="custom-active-action">
        ON
      </div>
    </template>
    <template #inactive-action>
      <span class="custom-inactive-action">OFF</span>
    </template>
  </el-switch>
</template>
