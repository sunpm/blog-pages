# Vue.js - 路由 vue-router 的使用详解4（路由元信息meta）

 		在路由列表中，每个路由都有一个 **meta** 元数据字段， 我们可以在这里设置一些自定义信息，供页面组件或者路由钩子函数中使用。下面通过样例进行演示。



### 1，meta 数据配置

这里我们将每个页面的 **title** 都写在 **meta** 中来统一维护。

```js
const router =  new Router({
  routes: [ //配置路由，使用数组形式
    {
      path: '/',   //链接路径
      name: 'index',  //路由名称
      component: index, //映射的组件
      meta: {
        title: '首页'
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello,
      meta: {
        title: '欢迎页'
      }
    }
  ]
})
```

### 2，在组件中获取 meta 数据 

（1）我们可以通过 $route.meta.xxxx 获取路由元信息中的数据，下面我们将其直接显示在页面上。

```vue
<template>
  <div>
    <h1>{{ $route.meta.title}}</h1>
  </div>
</template>
```

2）运行结果如下：

[![原文:Vue.js - 路由 vue-router 的使用详解4（路由元信息meta）](http://www.hangge.com/blog_uploads/201807/2018072609382315202.png)](http://www.hangge.com/blog/cache/detail_2130.html#)

 

### 3，在路由钩子中获取 meta 数据 

（1）在上文中我演示了当跳转到某个页面时，如何在这个页面组件内改变网页标题。还有种更方便的做法，那便是在全局的钩子函数 beforeEach 中获取 meta 中的 title 数据，并设置为页面标题。

```js
//全局路由改变前钩子
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
```

2）运行结果如下：

​    [![原文:Vue.js - 路由 vue-router 的使用详解4（路由元信息meta）](http://www.hangge.com/blog_uploads/201807/2018072517190953476.png)](http://www.hangge.com/blog/cache/detail_2130.html#)    [![原文:Vue.js - 路由 vue-router 的使用详解4（路由元信息meta）](http://www.hangge.com/blog_uploads/201807/2018072516072697707.png)](http://www.hangge.com/blog/cache/detail_2130.html#)

 

### 4，动态改变 meta 数据

meta 数据并不是只读的，我们可以在代码中根据需求动态地改变它。

```js
this.$route.meta.title = "还是首页";
```

原文出自：[www.hangge.com](http://www.hangge.com/)  转载请保留原文链接：<http://www.hangge.com/blog/cache/detail_2130.html>

