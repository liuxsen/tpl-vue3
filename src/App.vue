<script setup>
import { defineAsyncComponent } from 'vue'

const DefaultLayout = defineAsyncComponent(() =>
  import('~layouts/default/index.vue'),
)
</script>

<template>
  <Suspense>
    <DefaultLayout />
  </Suspense>
</template>
