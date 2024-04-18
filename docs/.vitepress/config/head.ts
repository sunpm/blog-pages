import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/images/logo.png' }],
  ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,css3,html5,Node,git,github,markdown' }],
  // 百度搜索站长验证
  ['meta', { name: 'baidu-site-verification', content: 'code-a1SrlwvDIN' }],
  // 头条搜索站长验证
  ['meta', { name: 'bytedance-verification-code', content: 'yNTgJVlOI3MPXWXsd4jo' }],
  ['script',
    {},
    // 百度搜索站长自动收录
    `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?dd9a050364d57df3d5e04ed94ff378e9";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `,
  ],
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
]
