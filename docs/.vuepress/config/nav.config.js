module.exports = [
  { text: '首页', link: '/' },
  {
    text: '分类',  //默认显示
    ariaLabel: '分类',   //用于识别的label
    items: [
      { text: '文章', link: '/pages/folder1/test1.md' },
      //点击标签会跳转至link的markdown文件生成的页面
      { text: '琐碎', link: '/pages/folder2/test4.md' },
    ]
  },
  {
    text: '了解更多',
    items: [
      { text: 'Github', link: 'https://github.com/sunpm' }
    ],
  },
]
