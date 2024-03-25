<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useAppSettings } from '~/store/appSettings'

const { themeList, info } = storeToRefs(useAppSettings())
const drawer = ref(false)
</script>

<script lang="ts">
export default {
  name: 'LayoutSettings',
}
</script>

<template>
  <div class="settings" @click="drawer = true">
    <i class="ri-equalizer-line" />
  </div>
  <el-drawer
    v-model="drawer"
    :append-to-body="true"
    title="主题配置"
  >
    <el-form :model-value="info">
      <el-form-item label="布局">
        <el-select v-model="info.layout">
          <el-option
            v-for="item in themeList" :key="item.val"
            :label="item.label"
            :value="item.val"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="less" scoped>
.settings {
  position: fixed;
  right: 0;
  top: 40%;
  width: 45px;
  height: 45px;
  background-color: var(--el-color-primary);
  color: var(--app-font-color-1);
  line-height: 45px;
  text-align: center;
  border-radius: var(--app-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  font-size: var(--app-font-size-5);
}
</style>
