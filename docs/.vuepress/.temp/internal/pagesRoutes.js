import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-1020f180","/components/",{"title":"Hello Components"},["/components/index.html","/components/README.md"]],
  ["v-b959d088","/components/pages/Button.html",{"title":""},["/components/pages/Button","/components/pages/Button.md"]],
  ["v-0968f48b","/components/pages/Checkbox.html",{"title":""},["/components/pages/Checkbox","/components/pages/Checkbox.md"]],
  ["v-1e4f8eaa","/components/pages/Form.html",{"title":""},["/components/pages/Form","/components/pages/Form.md"]],
  ["v-5f90e815","/components/pages/Icon.html",{"title":""},["/components/pages/Icon","/components/pages/Icon.md"]],
  ["v-3fe639da","/components/pages/Input.html",{"title":""},["/components/pages/Input","/components/pages/Input.md"]],
  ["v-60bed458","/components/pages/Pagination.html",{"title":""},["/components/pages/Pagination","/components/pages/Pagination.md"]],
  ["v-25bf176e","/components/pages/Radio.html",{"title":""},["/components/pages/Radio","/components/pages/Radio.md"]],
  ["v-e9c58e0c","/components/pages/Switch.html",{"title":""},["/components/pages/Switch","/components/pages/Switch.md"]],
  ["v-7d85779a","/document/introduction/",{"title":"Hello Introduction"},["/document/introduction/index.html","/document/introduction/README.md"]],
  ["v-5851f53c","/document/tips/",{"title":"Hello Tips"},["/document/tips/index.html","/document/tips/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
