import type { MenuItem } from '.'

export function findParentMenus(
  menus: MenuItem[] | MenuItem,
  path: string,
): MenuItem[] {
  const result: MenuItem[][] = [] // [[], []]
  let index: number = 0

  // 辅助函数，递归遍历菜单树
  function traverseMenu(menu: MenuItem): void {
    result[index].push(menu)
    if (menu.children && Array.isArray(menu.children)) {
      for (const item of menu.children) {
        traverseMenu(item)
      }
    }
  }

  function traverseMenuWithParent(menu: MenuItem) {
    if (menu.children) {
      for (const item of menu.children) {
        item.parent = menu
        traverseMenuWithParent(item)
      }
    }
  }
  function getResMenu({ path, id }: { path?: string; id?: string }): MenuItem {
    for (const [_index, arr] of result.entries()) {
      for (const menu of arr) {
        if (menu.path === path || menu.id === id) {
          return menu
        }
      }
    }
    return null as any
  }

  function check(path: string): MenuItem[] {
    // 根据path，查找路径是否有对应的menu
    let targetmenu = getResMenu({ path })
    const res: MenuItem[] = []
    if (targetmenu) {
      res.push(targetmenu)
    }
    while (targetmenu?.parent) {
      res.unshift(targetmenu.parent)
      targetmenu = targetmenu.parent
    }
    return res
  }

  // 处理菜单树是数组的情况
  if (Array.isArray(menus)) {
    for (const [i, menu] of menus.entries()) {
      index = i
      result[index] = []
      traverseMenuWithParent(menu)
      traverseMenu(menu)
      const res = check(path)
      if (res.length > 0) {
        return res
      }
    }
  }
  // 处理菜单树是单个对象的情况
  else if (typeof menus === 'object') {
    index = 0
    result[index] = []
    traverseMenuWithParent(menus)
    traverseMenu(menus)
    const res = check(path)
    if (res.length > 0) {
      return res
    }
  }
  return [] as MenuItem[]
}
