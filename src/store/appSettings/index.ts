import { defineStore } from 'pinia'
import { reactive, ref, toRefs, watch } from 'vue'
import { useMenuStore } from '../menu'

export interface Settings {
  layout: 'column' | // 分栏
  'complex' | // 综合
  'vertical' | // 纵向
  'horizontal' | // 横向
  'normal' | // 常规
  'float' // 浮动
}

const settings = [
  { val: 'column', label: '分栏' },
  { val: 'complex', label: '综合' },
  { val: 'vertical', label: '纵向' },
  { val: 'horizontal', label: '横向' },
  { val: 'normal', label: '常规' },
  { val: 'float', label: '浮动' },
]

// 系统配置
export const useAppSettings = defineStore('useAppSettings', () => {
  const settingsInfo = reactive<Settings>({
    layout: 'vertical',
  })
  const themeList = ref(settings)
  const menuStore = useMenuStore()
  watch(settingsInfo, ({ layout }) => {
    if (layout === 'vertical') {
      menuStore.setMode('horizontal')
    }
  }, {
    immediate: true,
  })
  return {
    ...toRefs(settingsInfo),
    info: settingsInfo,
    themeList,
  }
})
