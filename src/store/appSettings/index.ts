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
  mode: 'light' | 'dark'
  shrinkMenu: boolean // 是否缩小菜单
}
export interface SettingItem {
  val: 'vertical' | 'column'
  label: string
  menuMode: 'horizontal' | 'vertical'
}

const settings: SettingItem[] = [
  { val: 'vertical', label: '纵向', menuMode: 'horizontal' },
  { val: 'column', label: '分栏', menuMode: 'vertical' },
  // { val: 'complex', label: '综合' },
  // { val: 'horizontal', label: '横向' },
  // { val: 'normal', label: '常规' },
  // { val: 'float', label: '浮动' },
]

// 系统配置
export const useAppSettings = defineStore('useAppSettings', () => {
  const settingsInfo = reactive<Settings>({
    layout: 'column',
    mode: 'light',
    shrinkMenu: false,
  })
  const themeList = ref(settings)
  const menuStore = useMenuStore()
  watch(settingsInfo, ({ layout }) => {
    const layoutInfo = settings.find((item) => {
      return item.val === layout
    })
    layoutInfo && menuStore.setMode(layoutInfo.menuMode)
  }, {
    immediate: true,
  })
  return {
    ...toRefs(settingsInfo),
    info: settingsInfo,
    themeList,
  }
})
