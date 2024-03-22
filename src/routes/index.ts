import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/common/home/index' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  // 如果没有注册过路由
  if (!router.hasRoute(to.path)) {
    // 前端folder/业务模块/名称/动作
    // /home => home
    // /common/home => common home
    // /common/components/icon => common components icon
    // /common/components/x/y => common components x y
    const [_, x, y, z] = to.path.split('/')
    router.addRoute({
      component: () => import(`../pages/${x}/${y}/${z}/index.vue`),
      path: to.path,
      name: to.path,
    })
    return to.fullPath
  }
  else {
    return true
  }
  // if (
  //   // 检查用户是否已登录
  //   !isAuthenticated
  //   // ❗️ 避免无限重定向
  //   && to.name !== 'Login'
  // ) {
  //   // 将用户重定向到登录页面
  //   return { name: 'Login' }
  // }
})
// router.afterEach((to, from) => {
// sendToAnalytics(to.fullPath)
// })

export default router
