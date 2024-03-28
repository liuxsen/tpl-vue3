<script lang="ts" setup>
import type { CommonProps } from '~/types/type'

export type Props = {
  modelValue?: string | number
} & CommonProps

withDefaults(defineProps<Props>(), {
  mode: 'read',
})
</script>

<script lang="ts">
export default {
  name: 'VInput',
}
</script>

<template>
  <template v-if="mode === 'read'">
    <span>{{ modelValue }}</span>
  </template>
  <template v-else>
    <el-input v-bind="$attrs" :modelValue="modelValue" />
  </template>
</template>
