export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "logo.png",
    "actionText": "快速上手 →",
    "actionLink": "/zh/`guide/",
    "features": [
      {
        "title": "指南",
        "details": "了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。"
      },
      {
        "title": "组件",
        "details": "使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。"
      },
      {
        "title": "主题",
        "details": "在线主题编辑器，可视化定制和管理站点主题、组件样式。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present Baucd"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1665225229000,
    "contributors": [
      {
        "name": "Baucd",
        "email": "2575735053@qq.com",
        "commits": 4
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
