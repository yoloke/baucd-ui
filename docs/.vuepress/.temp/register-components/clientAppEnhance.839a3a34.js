import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import("C:/Users/张996/Desktop/BaucdUI-Vuepress2.0/docs/.vuepress/components/Button.vue"))),
  app.component("InputNumber", defineAsyncComponent(() => import("C:/Users/张996/Desktop/BaucdUI-Vuepress2.0/docs/.vuepress/components/InputNumber.vue")))
}
