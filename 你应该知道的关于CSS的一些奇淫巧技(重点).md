**本文分享关于CSS应用中的一些小技巧， 如果有不对的地方，欢迎指出建议和意见。**

**Github项目地址：[Great-CSS-Tips-You-Should-Know](https://github.com/Erichain/Great-CSS-Tips-You-Should-Know/blob/master/README_ZH_CN.md)，欢迎fork和star，如果有更多的tips，也欢迎提交PR。**

### 使用CSS来垂直居中一切元素

其实很简单, 使用下面的代码就让你的所有元素都垂直居中

```css
html, body {
  height: 100%;
  margin: 0;
}

body {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;  
  -ms-flex-align: center;  
  align-items: center;
}
```

如果你的需求不只是垂直居中的话--比如你想要上下左右都居中, 那么, 可以看看我的另外一个项目: [css-center-complete](https://github.com/Erichain/css-center-complete)

### 使用CSS来制作箭头

如果使用CSS来画我们常用的箭头呢? 就像下面这样:

```css
/* 向下的箭头 */
.caret {
    display: inline-block;
    width: 0;
    height: 0;

    vertical-align: middle;
    
    /* 如果需要向上的箭头的话, 就把border-top改为border-bottom */
    border-top: 20px solid;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
}
```

### 使用CSS来让footer永远位于屏幕底部, 并随内容而拉伸

这是个困扰我很久的问题, 不过最终, 我还是找到了一个比较好的解决方案

假设你的html是下面这样写的:

```html
<div class="header"></div>
<div class="content"></div>
<div class="footer"></div>
```

我们要的效果是footer一直位于底部, 同时, 当内容的高度增加时, 他也会被内容给挤下去. 所以, 我们需要像下面这样定义CSS:

```css
html {
    height: 100%;
}

body {
    position: relative;
    min-height: 100%;

    &:after {
        display: block;
        content: '';
        height: 200px; /* 此处的高度必须和footer的高度相同 */
    }
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
}
```

### 使用CSS避免图片超出包含块

我们想要我们的大图放在我们的文章或者其他地方, 所以, 要避免这些图片超出内容, 怎么做呢?

```css
img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
}
```

### 使用CSS制作带有分割线的导航

制作一个带有分割线的横向导航, 可以使用CSS的`:not`和`:last-child`来实现

```css
.nav li:not(:last-child) {
    border-right: 1px solid #cccccc;
}
```

### 使用CSS来通过动态计算设置元素的高度

不得不说, CSS3的`calc`属性真的很棒, 我们可以使用这个属性来动态计算一个元素的高度

> 当你使用calc来计算元素的高度的时候你要注意, 计算的高度是依赖于父级元素的高度的, 所以, 你需要先设置父级元素的高度

```css
.container {
    height: 100vh;  /* 使用vh这个单位来设置高度为100% */
}

.content {
  width: 100%;  
  height: calc(100% - 150px);
  background-color: #aaaaaa;
}
```

### 使用CSS设置全屏图片

Set a full page image is so common for the website nowadays.
现在的很多网站都采用了全屏的图片, 那么, 这是怎么实现的呢? 有两种方法:

**1. 设置全屏背景图**

```css
html {
    background: url('the/path/to/your/image') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='.myBackground.jpg', sizingMethod='scale');
    -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='myBackground.jpg', sizingMethod='scale')";
}
```

**2. 使用img标签的全屏图片**

要使用`img`标签的话, 最好是将它放在一个div中

```css
<div class="bg">
    <img src="the/path/to/your/image" alt="">
</div>
.bg {
    position: fixed;
    top: -50%;
    left: -50%;

    width: 200%;
    height: 200%;
}

.bg img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
}
```

### 使用CSS的BFC来清除浮动

使用BFC的特性来清除浮动是一个很常用的手段. 因为, 当计算BFC的高度的时候, 浮动元素也会参与计算.

```css
.container {
    width: 800px;
    padding: 20px;
    border: 1px solid #aaaaaa;
    overflow: hidden; /* or set to auto */
}
```

### 使用CSS来去除display为inline-block的li之间的间隙

当制作一个横向列表的时候, 我们一般设置`li`的`display`属性为`inline-block`

但是, 这样就有一个问题就是每两个`li`之间总是会有你不知道是什么的间隙

所以, 该怎么解决呢? 其实很简单, 设置`ul`的`font-size`为0, 再对`li`的字体大小进行单独设置就行了

```css
ul {
    font-size: 0;
    
    /* 以下两句视不同情况而定 */
    letter-spacing: -1px;
    word-spacing: -1px;
}

ul li {
    font-size: 16px;
    letter-spacing: normal;
    word-spacing: normal;
}
```

### 使用CSS实现图片预加载

```css
#preload-01 { background: url(http://domain.tld/image-01.png) no-repeat -9999px -9999px; }
#preload-02 { background: url(http://domain.tld/image-02.png) no-repeat -9999px -9999px; }
#preload-03 { background: url(http://domain.tld/image-03.png) no-repeat -9999px -9999px; }
```

### 使用CSS来避免闪烁

如果我们的内容在图片加载好之前渲染好的话, 我们可能会看到包含块被撑开的一个过程, 这个过程就叫做闪烁

所以,我们应该尽量避免这种现象, 通过`margin/padding`来实现

```css
<div class="container">
    <img src="the/path/to/your/image" alt="" />
</div>
.container {
    positiong: relative;
    width: 100%;
    max-height: 500px;
    background-color: red;
    
    /* 避免编边距折叠 */
    overflow: hidden;
}

.container:after {
    content: '';
    display: block;
    margin-top: 50%; /* 或者设置padding-top: 50%; */
}
```

你应该能看到, 图片没有加载出来的时候, 内容也是有高度的.

### 使用CSS来制作图片加载失败的效果

在图片加载失败的时候, 使用CSS来让加载失败的图片显得更美观更友好



```css
img:before {  
  content: "We're sorry, the image below is broken :(";
  display: block;
  margin-bottom: 10px;
}

img:after {  
  content: "(url: " attr(src) ")";
  display: block;
  font-size: 12px;
}
```

