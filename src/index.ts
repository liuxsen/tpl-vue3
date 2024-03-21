import * as Vue from 'vue'
import App from './App.vue'
import pinia from './store'

const app = Vue.createApp(App)
app.use(pinia)

// requirejs注入
define('vue', [], () => Vue)

app.mount('#root')
