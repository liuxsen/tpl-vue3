<script lang="ts" setup>
import { computed, ref } from 'vue'

const iconNames = (await import('./all')).default

const pageSize = ref(50)
const pn = ref(1)
const icons = computed(() => {
  const startIndex = (pn.value - 1) * pageSize.value
  return iconNames.slice(startIndex, pn.value * pageSize.value)
})

function handleSizeChange(size: number) {
  pn.value = 1
  pageSize.value = size
}
function handleCurrentChange(val: number) {
  pn.value = val
}
</script>

<script lang="ts">
export default {
  name: 'IconComponentsPage',
}
</script>

<template>
  <div class="app-panel">
    <el-scrollbar class="content">
      <el-space size="large" wrap>
        <div v-for="(item) in icons" :key="item" class="icon-container">
          <el-card shadow="never" :style="{ fontSize: '30px' }" :body-style="{ padding: '14px' }">
            <i :class="item" />
          </el-card>
          <div class="icon-text">
            <span>{{ item }}</span>
          </div>
        </div>
      </el-space>
    </el-scrollbar>
    <div class="flex flex-center" style="padding-top: 20px;">
      <el-pagination
        v-model:current-page="pn"
        v-model:page-size="pageSize"
        :page-sizes="[50, 100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="iconNames.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  height: calc(var(--app-content-box-height) - 32px - 20px - var(--app-panel-padding)*2)
}
.icon-container {
  width: 70px;
  text-align: center;
  .icon-text {
    overflow: hidden;
    font-size: 12px;
    line-height: 38px;
    height: 38px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
}
</style>
