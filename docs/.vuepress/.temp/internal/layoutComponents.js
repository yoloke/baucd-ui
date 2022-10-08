import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/张996/Desktop/组件库/组件库文档/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/张996/Desktop/组件库/组件库文档/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
