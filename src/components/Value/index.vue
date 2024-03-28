<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { parseName } from '~/utils/name'

export interface Props {
  name: string
}
const props = withDefaults(defineProps<Props>(), {

})

const Com = defineAsyncComponent(() => {
  const path = parseName(props.name)
  return import(`~/components/${path}/index.vue`)
})
</script>

<script lang="ts">
export default {
  name: 'Value',
}
</script>

<template>
  <component :is="Com" />
</template>
