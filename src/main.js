import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import OneButton from './components/OneButton.vue'
const app = createApp(App)
app.component(OneButton.name, OneButton)

app.mount('#app')
