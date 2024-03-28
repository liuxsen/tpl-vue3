<script lang="ts" setup>
import { computed } from 'vue'
import dayjs from 'dayjs'
import type { CommonProps, DateFormat, DateType } from '~/types/type'

export type Props = {
  modelValue?: string | Date | null | Array<string>
  format?: DateFormat // 支持format
  valueFormat?: DateFormat // 支持valueFormat
  type?: DateType
} & CommonProps

const props = withDefaults(defineProps<Props>(), {
  mode: 'edit',
  format: 'YYYY-MM-DD',
  valueFormat: 'YYYY-MM-DD',
  type: 'date',
})

const renderText = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.map((item) => {
      return dayjs(item).format(props.valueFormat)
    }).join('~')
  }
  if (props.modelValue instanceof Date) {
    return dayjs(props.modelValue).format(props.valueFormat)
  }
  return props.modelValue
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
      :format="format"
      :type="type"
      :value-format="valueFormat"
      v-bind="$attrs"
    />
  </template>
  <template v-else>
    <span>{{ renderText || '-' }}</span>
  </template>
</template>
