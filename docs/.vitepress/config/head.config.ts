import {HeadConfig} from 'vitepress'

const headConfig: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/images/logo.png' }],
  ['meta', { name: 'baidu-site-verification', content: 'code-a1SrlwvDIN' }],
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
