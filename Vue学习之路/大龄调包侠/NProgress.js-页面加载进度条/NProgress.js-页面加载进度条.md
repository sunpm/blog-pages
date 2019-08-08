# NProgress.js-页面加载进度条

NProgress.js提供页面加载进度条效果，当页面打开加载时，在页面顶部会出现进度条加载动画。NProgress.js是轻量级的进度条组件，使用简便，可以很方便集成到单页面应用中。

#### 安装

使用npm安装

```bash
$ npm install --save nprogress
```

或者直接引用 nprogress.js 和nprogress.css 文件到你的页面中。

```html
<script src='nprogress.js'></script>
<link rel='stylesheet' href='nprogress.css'/>
```

#### 用法

只需要调用`start()` 和 `done()`来控制进度条

```js
NProgress.start();  // 开始加载
NProgress.done();  // 加载完成
```

NProgress还提供了其他几个方法，如设置百分比，调用 `.set(n)`来控制进度，其中n的取值范围为0-1。调用 `.inc()`产生一个随机增量。通过传递 true 参数给done()，使进度条满格，强制完成。

```js
NProgress.set(0.0);     // Sorta same as .start()
NProgress.set(0.4);
NProgress.set(1.0);     // Sorta same as .done()

NProgress.inc(); // 递增
NProgress.done(true);  // 强制完成
```

实际使用中，我们一般在Ajax或者Pjax加载时，调用NProgress。你可以在jQuery提供的Ajax，或者使用[Pjax](https://www.helloweba.net/javascript/387.html)，或者在其他框架如Vue.js中都可以很好的使用NProgress。

这里我们示例演示使用Ajax方法请求远程数据，然后调用进度条加载的过程。

```js
$('#loading').on('click', function(event) {
    event.preventDefault();
    NProgress.start();
    $.get('data.php', function(data) {
        $('#msg').html(data);
        NProgress.done();
    });
});
```

以上代码，当点击按钮#loading时，会调用`NProgress.start()`开始进度条加载动画，并发送`$.get`请求远程数据，直到返回数据后，`NProgress.done()`结束加载动画。注意代码使用了jQuery库，所以你应该先加载jQuery的最新库文件。

这里为了让效果更逼真，我特意将data.php中的代码设置延迟2miao才响应返回数据。当然实际开发中是真实的后端代码执行。

```php
<?php 
// data.php
sleep(2);
echo '返回数据：ok';
```

#### 参数配置

**minimum**

设置开始时最低百分比，默认是0.08。

```js
NProgress.configure({ minimum: 0.1 });
```

**template**

改变进度条的HTML结构。为了保证进度条正常工作，需要一个包含`role='bar'` 属性的元素。

```js
NProgress.configure({
  template: "<div class='....'>...</div>"
});
```

**ease**和**speed**

ease可传递CSS3缓冲动画字符串（如ease、linear、ease-in、ease-out、ease-in-out、cubic-bezier）。speed为动画速度（默认200，单位ms）。

```js
NProgress.configure({ easing: 'ease', speed: 500 });
```

**trickle**

是否显示进度条，默认：true

```js
NProgress.configure({ trickle: false });
```

**trickleSpeed**

设置每次进度条步进速度（ms）。

```js
NProgress.configure({ trickleSpeed: 200 });
```

**showSpinner**

是否显示环形进度动画，默认true。

```js
NProgress.configure({ showSpinner: false });
```

**parent**

指定改变的父容器，默认body。

```js
NProgress.configure({ parent: '#container' });
```

当然，你也可以修改`nprogress.css`以达到你想要的进度条外观，比如改变进度条背景颜色、高度等等。NProgress项目github地址是：<https://github.com/rstacruz/nprogress/>

> **声明：**本文为原创文章，helloweba.net和作者拥有版权，如需转载，请注明来源于[helloweba.net](http://www.helloweba.net/)并保留原文链接：https://www.helloweba.net/javascript/438.html





# vue使用nprogress页面加载进度条

下载 nprogress

```bash
 npm install --save nprogress
```

入口文件,main.js引入 nprogress

```js
import App from './App'
import VueRouter from 'vue-router'
import router from './router' //你的路由文件
//引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

Vue.use(VueRouter)

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to,from,next) => {
  NProgress.start() 
  next()
})

router.afterEach(() => {
  NProgress.done()
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

1.引入依赖：

```js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
```

简单的调用 start() 和 done() 方法来控制进度条。

```js
NProgress.start(); //开始
NProgress.done(); // 结束
```

2.如果想ajax请求有progress，加载vue-resource的interceptors中：

```js
Vue.http.interceptors.push((request, next) => {
  NProgress.start();

  next((response)=>{
    NProgress.done();
  });
});
```

3.如果想路由跳转有progress，加在vue-router的beforeEach和afterEach中：

```js
router.beforeEach(transition => {
  NProgress.done();
});

router.afterEach(transition => {
  NProgress.start();
});
```

PS: 我这里有些奇葩的是beforeEach在afterEach之后执行。。。。所以我只能在afterEach中start了。。

修改进度条颜色
 1、在App.vue中的style中增加：

```css
 #nprogress .bar {
      background: red !important; //自定义颜色
    }
```

作者：author清风斋

链接：https://www.jianshu.com/p/408583294d61

来源：简书

简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。