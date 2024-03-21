<script lang="ts" setup>
import { markRaw, onMounted, ref, toRefs } from 'vue'

export interface Props {
  js: string
  css?: string
}

const props = withDefaults(defineProps<Props>(), {
})
const { js, css } = toRefs(props)

const com = ref()

function loadStyles(url: string) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}
onMounted(() => {
  if (css.value) {
    loadStyles(css.value)
  }
  requirejs([js.value], (m) => {
    com.value = markRaw(m)
  })
})
</script>

<template>
  <!-- attrs 包含事件 和 props -->
  <component :is="com" v-bind="$attrs" />
</template>
