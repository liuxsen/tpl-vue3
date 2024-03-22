import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface MenuItem {
  icon?: string
  title: string
  path?: string
  url?: string
  id: string
  children?: MenuItem[]
}

export const useMenuStore = defineStore('useMenuStore', () => {
  const menu = ref<MenuItem[]>([
    {
      icon: 'ri-home-2-line',
      title: '首页',
      id: '0',
      children: [
        {
          icon: 'ri-home-2-line',
          title: '首页',
          id: '1',
          path: '/',
        },
        {
          icon: 'ri-dashboard-line',
          title: '看板',
          path: '/dashboard',
          id: '2',
        },
        {
          icon: 'ri-settings-6-line',
          title: '工作台',
          path: '/workbench',
          id: '3',
        },
      ],
    },
    {
      icon: 'ri-code-box-line',
      title: '组件',
      id: '4',
      children: [
        {
          icon: 'ri-remixicon-line',
          title: '图标',
          id: '5',
          children: [
            {
              title: '小清新图标',
              path: 'remix-icon',
              id: '6',
            },
          ],
        },
        {
          icon: 'ri-slideshow-line',
          id: '7',
          title: '描述',
          children: [
            {
              id: '8',
              title: '小清新图标1',
              path: 'remix-icon',
            },
          ],
        },
        {
          id: '9',
          icon: 'ri-user-3-line',
          title: '角色权限',
          path: 'rbac',
        },
      ],
    },
  ],
  )
  const getMenu = () => {

  }
  return { menu, getMenu }
})
