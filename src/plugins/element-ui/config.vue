<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<script lang="ts">
export default {
  name: 'ElConfig',
}
</script>

<template>
  <el-config-provider :locale="locale">
    <slot />
  </el-config-provider>
</template>
