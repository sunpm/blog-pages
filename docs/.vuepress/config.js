const nav = require('./config/nav.config')

module.exports = {
  title: 'sunpm',
  description: '成功少不了沉淀！',
  base: '/blog-pages/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        // "@alias": "path/to/some/dir",
      },
    },
  },
  // theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    subSidebar: 'auto',
    nav,
  },
};
