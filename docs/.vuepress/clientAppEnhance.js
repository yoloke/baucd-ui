import BaucdUI from 'baucd-ui'
import 'baucd-ui/dist/baucd-ui.css'


import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app }) => {
  app.use(BaucdUI)
})
