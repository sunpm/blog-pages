# 本地离线预览 React/Vue 等开源工具官方文档网站

外网访问组件库官方文档网站、React 官方等文档网站太慢，解决办法，是将他们克隆到本地预览，即可离线预览，速度也快。

> 这是一个小技巧分享给大家，文档[归档在这里](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fjaywcjlove%2Fhandbook%2Fblob%2Fmaster%2Fother%2F%E7%A6%BB%E7%BA%BF%E9%A2%84%E8%A7%88%E5%90%84%E7%A7%8D%E5%89%8D%E7%AB%AF%E6%96%87%E6%A1%A3%E7%BD%91%E7%AB%99.md)。

## 安装预览工具

将文档克隆到本地，通过 [`sgo`](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fjaywcjlove%2Fsgo) 工具预览本地各种文档的。



![img](https://user-gold-cdn.xitu.io/2019/7/29/16c3c4081995b66e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)





![img](https://user-gold-cdn.xitu.io/2019/7/29/16c3c40b0098be00?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

```bash
npm install -g sgo # 安装 sgo
sgo --fallback index.html # 创建静态服务，预览网站
```

## 文档网站

下面分享几个工具的文档网站克隆地址

### `React`

```bash
git clone https://github.com/reactjs/zh-hans.reactjs.org.git --depth 1 -b gh-pages
cd zh-hans.reactjs.org # 进入目录
sgo --fallback index.html # 创建静态服务，预览网站
```

### `Ant Design`

```bash
git clone https://gitee.com/ant-design/ant-design.git --depth 1 -b gh-pages
# or
git clone https://github.com/ant-design/ant-design.git --depth 1 -b gh-pages
```

### `Ant Design Pro`

```bash
git clone https://gitee.com/ant-design/ant-design-pro-site.git --depth 1 -b master
# or 
git clone https://github.com/ant-design/ant-design-pro.git --depth 1 -b gh-pages
```

### `uiw`

```bash
git clone https://gitee.com/uiw/uiw.git --depth 1 -b gh-pages
# or 
git clone https://github.com/uiwjs/uiwjs.github.io.git --depth 1 -b master
```

### `Vue`

```bash
git clone https://github.com/vuejs/cn.vuejs.org.git --depth 1 -b gh-pages
```



[本地离线预览 React/Vue 等开源工具官方文档网站 - 小弟调调™ - 掘金专栏](https://juejin.im/post/5d3e8743e51d45775e33f65f)

