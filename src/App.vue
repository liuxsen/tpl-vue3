<script setup>
import { storeToRefs } from 'pinia'
import { computed, defineAsyncComponent } from 'vue'
import { useAppSettings } from '~/store/appSettings'
import LayoutSettings from '~/layouts/components/LayoutSettings.vue'

const { layout } = storeToRefs(useAppSettings())

const LayoutDefault = defineAsyncComponent(() =>
  import('~layouts/default/index.vue'),
)
const ElConfig = defineAsyncComponent(() =>
  import('~/plugins/element-ui/config.vue'),
)
const LayoutVertical = defineAsyncComponent(() =>
  import('~layouts/vertical/index.vue'),
)
const Component = computed(() => {
  switch (layout.value) {
    case 'complex':
      return LayoutDefault
    case 'vertical':
      return LayoutVertical
    default:
      return LayoutDefault
  }
})
</script>

<template>
  <Suspense>
    <ElConfig>
      <div :class="layout">
        <component :is="Component" />
        <LayoutSettings />
      </div>
    </ElConfig>
  </Suspense>
</template>
