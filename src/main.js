import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const body = document.querySelector("body")
const app = createApp(App)

app.config.globalProperties.body = body

app.use(store).use(router).mount('#app')
