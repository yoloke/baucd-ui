import { createApp } from 'vue'
import App from './App.vue'

import baucd from '../packages'

const app = createApp(App)
app.use(baucd)

app.mount('#app')
