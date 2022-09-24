import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import("C:/Users/张996/Desktop/新建文件夹/baucd-ui/docs/.vuepress/components/Button.vue"))),
  app.component("InputNumber", defineAsyncComponent(() => import("C:/Users/张996/Desktop/新建文件夹/baucd-ui/docs/.vuepress/components/InputNumber.vue")))
}
