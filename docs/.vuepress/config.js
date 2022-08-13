module.exports = {
  title: 'sunpm',
  description: '成功少不了沉淀！',
  base: '/blog-pages/',
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
    nav: [
      { text: '首页', link: '/' },
      {
        text: '了解更多',
        items: [
          { text: 'Github', link: 'https://github.com/sunpm' }
        ],
      },
    ],
  },
};
