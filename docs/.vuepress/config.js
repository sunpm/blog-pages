module.exports = {
  title: '算法学习',
  description: 'Just playing around',
  base: '/algorithm-learn/',
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
          { text: 'Github', link: 'https://github.com/strugglinglee' },
          {
            text: '博客',
            link: 'https://blog.strugglinglee.cn/',
          },
        ],
      },
    ],
    sidebar: [
      {
        title: '数据结构',
        path: '/数据结构.md',
      },
      {
        title: '数组的应用',
        path: '/数组的应用.md',
      },
      {
        title: '字符串应用',
        path: '/字符串应用.md',
      },
      {
        title: 'hash表',
        path: '/hash表.md',
      },
      {
        title: "链表",
        children: [
          {
            title: "链表基础",
            path: "/list-node/base.md",
          },
          {
            title: "算法 | 链表的处理-链表的合并及删除",
            path: "/list-node/list-instance1.md",
          },
        ],
      },
      {
        title: '时间复杂度和空间复杂度',
        path: '/时间复杂度和空间复杂度.md',
      },
      {
        title: '递归',
        path: '/递归/base.md',
      },
      {
        title: '二分法',
        path: '/二分法/base.md',
      },
      {
        title: '广度优先搜索',
        path: '/BFS/BFS.md',
      },
    ],
  },
};
