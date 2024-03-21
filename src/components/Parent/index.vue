<script setup lang="ts">
import { ref } from 'vue'
import Child from '../Child/index.vue'
import { useUserInfo } from '../../store/user/info'

const userStore = useUserInfo()

const foo = ref('foo')
function onChangeName() {
  foo.value = `${foo.value}o`
}
</script>

<template>
  <div>parent</div>
  <button @click="onChangeName">
    change foo Name
  </button>
  <Child :foo="foo" />
  <div>name: {{ userStore.name }}</div>
  <div>count: {{ userStore.count }}</div>
  <button @click="userStore.increment">
    +++
  </button>
</template>
