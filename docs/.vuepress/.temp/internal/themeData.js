export const themeData = {
  "logo": "/img/logo.png",
  "navbar": [
    {
      "text": "组件",
      "link": "/components/"
    },
    {
      "text": "文档",
      "children": [
        {
          "text": "介绍",
          "link": "/document/introduction/"
        },
        {
          "text": "注意事项",
          "link": "/document/tips/"
        }
      ]
    },
    {
      "text": "工具箱",
      "children": [
        {
          "text": "在线编辑",
          "children": [
            {
              "text": "图片压缩",
              "link": "https://tinypng.com/"
            }
          ]
        },
        {
          "text": "在线服务",
          "children": [
            {
              "text": "阿里云",
              "link": "https://www.aliyun.com/"
            },
            {
              "text": "腾讯云",
              "link": "https://cloud.tencent.com/"
            }
          ]
        },
        {
          "text": "博客指南",
          "children": [
            {
              "text": "掘金",
              "link": "https://juejin.im/"
            },
            {
              "text": "CSDN",
              "link": "https://blog.csdn.net/"
            }
          ]
        }
      ]
    }
  ],
  "sidebar": {
    "/components/": [
      {
        "text": "basic",
        "collapsable": true,
        "children": [
          {
            "text": "Button 按钮",
            "link": "/components/pages/Button"
          }
        ]
      },
      {
        "text": "form",
        "collapsable": true,
        "children": [
          {
            "text": "Input 输入框",
            "link": "/components/pages/Input"
          },
          {
            "text": "Switch 开关",
            "link": "/components/pages/Switch"
          },
          {
            "text": "Radio 单选框",
            "link": "/components/pages/Radio"
          },
          {
            "text": "Checkbox 多选框",
            "link": "/components/pages/Checkbox"
          },
          {
            "text": "Form 表单",
            "link": "/components/pages/Form"
          }
        ]
      },
      {
        "text": "data",
        "collapsable": true,
        "children": [
          {
            "text": "Pagination 分页",
            "link": "/components/pages/Pagination"
          }
        ]
      }
    ]
  },
  "sidebarDepth": 2,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
