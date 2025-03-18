import { createApp } from 'vue'
import { setupPinia } from '@/store'
import { setupRouter } from '@/router'
import { setupI18n } from './lang'
import App from './App.vue'
import '@/style/global.css'
import '@/style/reset.css'

const app = createApp(App)

setupPinia(app)
setupRouter(app)
setupI18n(app)

app.mount('#app')
