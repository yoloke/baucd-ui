import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import OneButton from './components/Button.vue'
import OneDialog from './components/Dialog.vue'
import OneInput from './components/Input.vue'
import OneSwitch from './components/Switch.vue'
import OneRadio from './components/Radio.vue'
import OneRadioGroup from './components/RadioGroup.vue'
import OneCheckbox from './components/Checkbox.vue'
import OneCheckboxGroup from './components/CheckboxGroup.vue'
const app = createApp(App)
app.component(OneButton.name, OneButton)
app.component(OneDialog.name, OneDialog)
app.component(OneInput.name, OneInput)
app.component(OneSwitch.name, OneSwitch)
app.component(OneRadio.name, OneRadio)
app.component(OneRadioGroup.name, OneRadioGroup)
app.component(OneCheckbox.name, OneCheckbox)
app.component(OneCheckboxGroup.name, OneCheckboxGroup)

app.mount('#app')
