export const siteData = {
  "base": "/baucd-ui/",
  "lang": "zh-CN",
  "title": "BaucdUI",
  "description": "基于 Vue 3，面向设计师和开发者的组件库",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "logo.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
