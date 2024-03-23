import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentRoute = defineStore('useCurrentRoute', () => {
  const currentRoutePath = ref<string | null>(null)
  // const currentRouteRaw = ref(null)

  const setCurrentRoutePath = (path: string) => {
    currentRoutePath.value = path
  }
  return {
    currentRoutePath,
    setCurrentRoutePath,
  }
})
