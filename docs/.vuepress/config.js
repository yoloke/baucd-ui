const navbar = require('./config/navbar')
const sidebar = require('./config/sidebar')

module.exports = {
  // 站点配置
  lang: "zh-CN",
  base: "/baucd-ui/",
  title: "BaucdUI",
  description: "基于 Vue 3，面向设计师和开发者的组件库",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "logo.ico",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "logo.png",
    navbar,
    sidebar,
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // lastUpdated: true // 文档更新时间：每个文件git最后提交的时间
  },
  plugins: [
    [
      "vuepress-plugin-demoblock-plus",
      {
        "/zh": {
          "hide-text": "隐藏代码",
          "show-text": "显示代码",
          "copy-button-text": "复制代码片段",
          "copy-success-text": "复制成功",
        },
      },
    ],
  ],
};