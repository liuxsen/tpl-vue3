<script setup>
import Parent from './components/Parent/index.vue'
import Remote from './components/Remote/index.vue'

function onClickLog() {
}
</script>

<template>
  <div>
    <el-button>aaa</el-button>
  </div>
  <Parent />
  <Remote js="http://127.0.0.1:8080/HButton/index.umd.js" type="success" @click="onClickLog" />
  <Remote
    js="http://127.0.0.1:8080/HRadio/index.umd.js"
    css="http://127.0.0.1:8080/HRadio/css/index.css"
    type="primary"
    @click="onClickLog"
  />
</template>
