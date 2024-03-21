<script setup lang="ts">
import { toRefs } from 'vue'

export interface Props {
  foo: string
  bar?: string
}

const props = withDefaults(defineProps<Props>(), {
  bar: 'aaa',
})
const { foo } = toRefs(props)
function changeFoo() {
  foo.value = 'foo'
}
</script>

<template>
  <div>child</div>
  <span>{{ props.foo }}</span>
  <div>----ref---</div>
  <button @click="changeFoo">
    change
  </button>
  <div>{{ foo }}</div>
  <div>{{ bar }}</div>
</template>
