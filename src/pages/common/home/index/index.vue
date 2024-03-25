<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
const input = ref()
const value1 = ref()
const value2 = ref()
</script>

<script lang="ts">
export default {
  name: 'Home',
}
</script>

<template>
  <div class="m-1">
    <div>
      <div class="example-basic">
        <el-time-picker v-model="value1" placeholder="Arbitrary time" />
        <el-time-picker
          v-model="value2"
          arrow-control
          placeholder="Arbitrary time"
        />
        <el-time-select
          v-model="value"
          style="width: 240px"
          start="08:30"
          step="00:15"
          end="18:30"
          placeholder="Select time"
        />
        <el-input v-model="input" style="width: 240px" placeholder="Please input" />
      </div>
      <el-button type="primary">
        primary
      </el-button>
      <el-button type="success">
        success
      </el-button>
      <el-button type="warning">
        warning
      </el-button>
      <el-button type="danger">
        danger
      </el-button>
      <el-button type="info">
        info
      </el-button>
      我是文本我是文本我是文本我是文本我是文本我是文本
      <span class="label">label</span>
      <el-radio>aaa</el-radio>
    </div>
  </div>
</template>
