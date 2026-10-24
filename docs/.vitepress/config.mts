import { defineConfig } from 'vitepress'

const rawBase = process.env.VITEPRESS_BASE || '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineConfig({
  base,
  title: 'Dream Visa',
  titleTemplate: ':title · Dream Visa',
  description: '把复杂的签证拆成一步一步，免费开放的签证 DIY 知识站。',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#fbfaf7' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Dream Visa',
    nav: [
      { text: '首页', link: '/' },
      { text: '签证入门', link: '/guide/process' },
      { text: '出行目的地', link: '/#destinations' },
      { text: '材料清单', link: '/checklist/tourist' },
    ],
    sidebar: [
      {
        text: '签证入门',
        collapsed: false,
        items: [
          { text: '欢迎与网站介绍', link: '/' },
          { text: '递签全流程', link: '/guide/process' },
          {
            text: '材料准备详解',
            link: '/guide/documents',
            collapsed: false,
            items: [
              { text: '普通护照办理指南', link: '/guide/passport' },
            ],
          },
          { text: '旅游签材料清单', link: '/checklist/tourist' },
          { text: '学生签材料 · 筹备中' },
          { text: '探亲访友签 · 筹备中' },
          { text: '预约递签 · 筹备中' },
          { text: '审理与取签 · 筹备中' },
          { text: '常见拒签原因', link: '/guide/refusal' },
          { text: '常见问题 FAQ · 筹备中' },
        ],
      },
      {
        text: '出行目的地',
        collapsed: false,
        items: [
          {
            text: '申根区 Schengen Area',
            collapsed: false,
            items: [
              { text: '旅游签证', link: '/encyclopedia/schengen/tourist' },
              { text: '商务签证 · 筹备中' },
            ],
          },
          {
            text: '美国 United States',
            collapsed: true,
            items: [{ text: 'B1/B2 签证 · 筹备中' }],
          },
          {
            text: '英国 United Kingdom',
            collapsed: true,
            items: [{ text: 'Standard Visitor · 筹备中' }],
          },
          {
            text: '日本 Japan',
            collapsed: true,
            items: [{ text: '旅游签证 · 筹备中' }],
          },
          { text: '加拿大 Canada · 筹备中' },
          { text: '澳大利亚 Australia · 筹备中' },
          { text: '新西兰 New Zealand · 筹备中' },
          { text: '韩国 South Korea · 筹备中' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索本站' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到亮色模式',
    darkModeSwitchTitle: '切换到暗色模式',
    footer: {
      message: 'Dream Visa · 免费开放的签证 DIY 知识站',
      copyright: '内容仅供参考，请以使领馆和签证中心最新要求为准',
    },
  },
})
