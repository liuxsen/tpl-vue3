# vue3-app
react template


## 项目结构

```
├── package.json
├── packages // 项目抽离包
│   └── remote
│       ├── Button.vue
│       └── index.ts
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── public // 静态文件
│   └── require.js
├── src
│   ├── App.vue
│   ├── components // 公用组件
│   │   ├── Child
│   │   │   └── index.vue
│   │   ├── Parent
│   │   │   └── index.vue
│   │   └── Remote
│   │       └── index.vue
│   ├── index.ts // 入口文件
│   ├── layouts // layout目录
│   │   └── default
│   │       ├── components
│   │       └── index.vue
│   ├── pages // 页面组件
│   │   ├── Home
│   │   │   └── Home.vue
│   │   └── Login
│   │       └── Login.vue
│   ├── plugins // 插件引入
│   │   └── element-ui
│   │       └── var.less
│   ├── routes // 路由模块
│   │   └── index.ts
│   ├── store // store数据中心
│   │   ├── index.ts
│   │   └── user
│   │       └── info.ts
│   └── styles // 项目样式
│       ├── index.less
│       ├── reset.less
│       └── var.less
└── tsconfig.json

```

## 图标

使用方式

```js
import { RiHeartFill } from '@remixicon/vue'

<RiHeartFill size="36px" color="red" class-name="my-icon" />
```

[在线查看](https://remixicon.com/)


## 规范

### git

### css

变量

- 使用css变量
  - 比如color width height 请统一使用css变量
  - 需要考虑dark模式
- 如果需要覆盖element-ui的变量，请写在 `plugins/element-ui/var.less` 中

### ts/vue

vue

1. 组件必须定义组件名称

```vue
<script lang="ts" setup>
import { Ri4kFill, RiArrowDownFill, RiHeartFill } from '@remixicon/vue'
</script>

<script lang="ts">
export default {
  name: 'Home',
}
</script>
```

2. 组件必须定义必要的props

ts

- 请不要随意使用any

### 新建一个store

1. 在src/store 目录下，按照模块新建store，如user为一个模块，菜单为一个模块；保持模块职责清晰，不要混用
2. 使用响应数据的方式新建store；默认返回一个对象，包裹响应对象 如下：

```js
export const useUserInfo = defineStore('useUserInfo', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})
```

### 路由

路由使用小写定义

- /user
- /user-info

### api

### changelog