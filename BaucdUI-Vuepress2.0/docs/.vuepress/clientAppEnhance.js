import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import BaucdUI from 'baucd-ui'
import 'baucd-ui/dist/baucd-ui.css'


import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(Antd)
  app.use(BaucdUI)
})
