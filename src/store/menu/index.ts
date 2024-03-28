import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useCurrentRoute } from './currentRoute'
import { findParentMenus } from './findParentMenus'

export interface MenuItem {
  icon?: string
  title: string
  path?: string
  url?: string
  visible?: boolean // 是否显示到菜单中
  id: string
  parent?: MenuItem
  children?: MenuItem[]
}

export type AppMenuMode = 'vertical' | 'horizontal' // normal 拆分第一层级路由 horizontal 不拆分第一层级路由

export const useMenuStore = defineStore('useMenuStore', () => {
  const menuData = ref<MenuItem[]>([
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
          id: '9',
          icon: 'ri-user-3-line',
          title: '角色权限',
          path: '/common/rbac/index',
        },
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
        {
          id: '12',
          icon: 'ri-user-3-line',
          title: '表格组件',
          path: '/bsn/order/list',
        },
      ],
    },
  ],
  )

  const { currentRoutePath } = storeToRefs(useCurrentRoute())
  const currentTopMenu = ref<MenuItem | null>()
  const menuList = computed(() => {
    if (currentTopMenu.value) {
      return currentTopMenu.value.children
    }
    else {
      return menuData.value
    }
  })

  const mode = ref<AppMenuMode>('vertical')
  const setMode = (val: AppMenuMode) => {
    mode.value = val
    if (val === 'horizontal') {
      currentTopMenu.value = null
    }
  }

  watch(currentRoutePath, () => {
    if (currentRoutePath && menuData.value.length && mode.value === 'vertical') {
      const arr = findParentMenus(menuData.value, currentRoutePath.value!)
      if (arr.length > 0) {
        currentTopMenu.value = arr[0]
      }
    }
    else if (mode.value === 'horizontal') {
      currentTopMenu.value = null
    }
  }, {
    immediate: true,
  })

  const getFirstMenuPath = (menu: MenuItem) => {
    let path = ''
    function loop(menu: MenuItem) {
      if (path) {
        return
      }
      if (menu.path) {
        path = menu.path
      }
      else {
        if (menu.children) {
          for (const item of menu.children) {
            loop(item)
          }
        }
      }
    }
    loop(menu)
    return path
  }

  // const { breadList } = storeToRefs(useBreadCrumb())

  const breadList = computed(() => {
    return currentRoutePath.value ? findParentMenus(menuList.value!, currentRoutePath.value!) : []
  })
  const activeMenu = computed(() => {
    const len = breadList.value.length
    return breadList.value[len - 1]
  })
  const activeTopMenu = computed(() => {
    return breadList.value[0]
  })

  return {
    menu: menuData,
    currentTopMenu,
    menuList,
    breadList,
    activeMenu,
    activeTopMenu,
    getFirstMenuPath,
    mode,
    setMode,
  }
})
