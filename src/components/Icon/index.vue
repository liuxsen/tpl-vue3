<script lang="ts" setup>
export interface Props {
  className: string
}
withDefaults(defineProps<Props>(), {
  className: '',
})
</script>

<script lang="ts">
export default {
  name: 'VIcon',
}
</script>

<template>
  <i :class="className" v-bind="$attrs" class="icon" />
</template>

<style lang="less" scoped>
.icon {
  transition: all ease .3s;
}
</style>
