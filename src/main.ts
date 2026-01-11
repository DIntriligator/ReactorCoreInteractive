import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const globalPoperties = {
  apiBaseUrl: 'https://api.example.com',
}       

const app = createApp(App)

app.use(router)

app.mount('#app')
