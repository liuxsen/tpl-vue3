<script lang="ts" setup>
import { onMounted } from 'vue'
import { getPetById } from '~/api/pet'

onMounted(() => {
  getPetById({ petId: 1 })
})
</script>

<script lang="ts">
export default {
  name: 'BsnUserList',
}
</script>

<template>
  <T name="bb" />
</template>
