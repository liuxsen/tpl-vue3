import * as Vue from 'vue'
import pinia from './store'
import router from './routes'
import './styles/index.less'
import App from './App.vue'
import ElementPlus from './plugins/element-ui'
import { useTable } from './plugins/vxe-table'

import 'uno.css'

const app = Vue.createApp(App)
useTable(app)

app.use(pinia)
app.use(router)
app.use(ElementPlus)

// requirejs注入
define('vue', [], () => Vue)

app.mount('#root')
