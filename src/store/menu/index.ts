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
          path: '/common/home/index',
        },
        {
          icon: 'ri-dashboard-line',
          title: '看板',
          path: '/common/dashboard/index',
          id: '2',
        },
        {
          icon: 'ri-settings-6-line',
          title: '工作台',
          path: '/common/workbench/index',
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
              path: '/common/components/icon',
              id: '6',
            },
          ],
        },
        {
          id: '9',
          icon: 'ri-user-3-line',
          title: '角色权限',
          path: '/common/rbac/index',
        },
        {
          id: '10',
          icon: 'ri-user-3-line',
          title: '用户详情',
          path: '/bsn/user/detail',
        },
        {
          id: '11',
          icon: 'ri-user-3-line',
          title: '用户列表',
          path: '/bsn/user/list',
        },
      ],
    },
  ],
  )
  const getMenu = () => {

  }
  return { menu, getMenu }
})
