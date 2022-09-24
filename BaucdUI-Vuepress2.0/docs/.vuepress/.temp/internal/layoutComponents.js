import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/Users/张996/Desktop/BaucdUI/UI-Vuepress2.0/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("C:/Users/张996/Desktop/BaucdUI/UI-Vuepress2.0/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
