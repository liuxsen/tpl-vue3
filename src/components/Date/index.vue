<script lang="ts" setup>
import type { CommonProps } from '~/types/type'

export type Props = {
  modelValue: string | Date
} & CommonProps

withDefaults(defineProps<Props>(), {
  mode: 'edit',
})
</script>

<script lang="ts">
export default {
  name: 'VDate',
}
</script>

<template>
  <template v-if="mode === 'edit'">
    <el-date-picker
      :model-value="modelValue"
      v-bind="$attrs"
    />
  </template>
  <template v-else>
    <span>{{ modelValue }}</span>
  </template>
</template>
