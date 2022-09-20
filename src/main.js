import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import OneButton from './components/OneButton.vue'
import OneDialog from './components/OneDialog.vue'
import OneInput from './components/OneInput.vue'
import OneSwitch from './components/OneSwitch.vue'
const app = createApp(App)
app.component(OneButton.name, OneButton)
app.component(OneDialog.name, OneDialog)
app.component(OneInput.name, OneInput)
app.component(OneSwitch.name, OneSwitch)

app.mount('#app')
