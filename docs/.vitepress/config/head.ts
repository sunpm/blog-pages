import type { HeadConfig } from 'vitepress'
import { baiduZhanZhang, busuanzi, googleAnalytics } from '../theme/plugins'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/images/logo.png' }],
  ['meta', { name: 'description', content: '一站式前端、健身和英语内容网站，包括学习路线、知识体系，一站式阅读体验，跟随前沿技术，深度和广度学习，折腾 VitePress 。' }],
  ['meta', { name: 'keywords', content: '资源导航,知识体系,Sun .P.M,vitepress博客,前端专栏,编程学习,面试手册,前端面试,健身和英语' }],
  ...baiduZhanZhang,
  // 头条搜索站长验证
  ['meta', { name: 'bytedance-verification-code', content: 'yNTgJVlOI3MPXWXsd4jo' }],
  ['script',
    {},
    // 头条搜索站长自动收录
    `
      (function(){
        var el = document.createElement("script");
        el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?a1eef4821911d532b3d827128030939829c2618c307e0021b181f299231aa355fd9a9dcb5ced4d7780eb6f3bbd089073c2a6d54440560d63862bbf4ec01bba3a";
        el.id = "ttzz";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(el, s);
      })(window)
    `,
  ],
  busuanzi,
  ...googleAnalytics,
]
