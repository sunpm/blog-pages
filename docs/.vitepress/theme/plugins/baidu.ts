import type { HeadConfig } from 'vitepress'

export const baiduZhanZhang: HeadConfig[] = [
  // 百度搜索站长验证
  ['meta', { name: 'baidu-site-verification', content: 'code-a1SrlwvDIN' }],
  // 百度搜索站长自动收录
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
    `,
  ],
]
