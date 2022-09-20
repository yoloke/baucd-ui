import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import OneButton from './components/OneButton.vue'
import OneDialog from './components/OneDialog.vue'
const app = createApp(App)
app.component(OneButton.name, OneButton)
app.component(OneDialog.name, OneDialog)

app.mount('#app')
