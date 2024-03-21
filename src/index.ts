import * as Vue from 'vue'
import pinia from './store'
import router from './routes'
import './styles/index.less'
import App from './App.vue'

const app = Vue.createApp(App)
app.use(pinia)
app.use(router)

// requirejs注入
define('vue', [], () => Vue)

app.mount('#root')
