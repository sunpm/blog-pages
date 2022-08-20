import {HeadConfig} from 'vitepress'

const headConfig: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/images/logo.png' }],
  ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,css3,html5,Node,git,github,markdown' }],
  // 百度搜索站长验证
  ['meta', { name: 'baidu-site-verification', content: 'code-a1SrlwvDIN' }],
  // 头条搜索站长验证
  ['meta', { name: 'bytedance-verification-code', content: 'yNTgJVlOI3MPXWXsd4jo' }],
  ['script',
    {},
    `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?dd9a050364d57df3d5e04ed94ff378e9";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `
  ]
]

export default headConfig
