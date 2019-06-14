不管是什么布局，Flex往往都可以几行命令搞定。

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv2klw7dj30mh0ab74i.jpg)

我只列出代码，详细的语法解释请查阅[《Flex布局教程：语法篇》](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)。我的主要参考资料是[Landon Schropp](http://davidwalsh.name/flexbox-dice)的文章和[Solved by Flexbox](http://philipwalton.github.io/solved-by-flexbox/)。

## 一、骰子的布局

骰子的一面，最多可以放置9个点。

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv2ni7uoj308u08uwej.jpg)

下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到[codepen](http://codepen.io/LandonSchropp/pen/KpzzGo)查看Demo。

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv2pz5q0j30pi08ugln.jpg)

如果不加说明，本节的HTML模板一律如下。

> ```html
> <div class="box">
>   <span class="item"></span>
> </div>
> ```

上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。

### 1.1 单项目

首先，只有左上角1个点的情况。Flex布局默认就是首行左对齐，所以一行代码就够了。

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznv2vsjp5j30b407ogld.jpg)

> ```css
> .box {
>   display: flex;
> }
> ```

设置项目的对齐方式，就能实现居中对齐和右对齐。

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv2yqknmj30b406edfl.jpg)

> ```css
> .box {
>   display: flex;
>   justify-content: center;
> }
> ```

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv30ls46j30b4066a9t.jpg)

> ```css
> .box {
>   display: flex;
>   justify-content: flex-end;
> }
> ```

设置交叉轴对齐方式，可以垂直移动主轴。

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv348nvwj30b4064dfl.jpg)

> ```css
> .box {
>   display: flex;
>   align-items: center;
> }
> ```

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv368yokj30b406xdfl.jpg)

> ```css
> .box {
>   display: flex;
>   justify-content: center;
>   align-items: center;
> }
> ```

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv37md2wj30b407sdfl.jpg)

> ```css
> .box {
>   display: flex;
>   justify-content: center;
>   align-items: flex-end;
> }
> ```

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv38fzxlj30b407fdfl.jpg)

> ```css
> .box {
>   display: flex;
>   justify-content: flex-end;
>   align-items: flex-end;
> }
> ```

### 1.2 双项目

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv3buvnaj30b4078jr5.jpg)

> ```css
> .box {
>   display: flex;
>   justify-content: space-between;
> }
> ```

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv3doirtj30b407amwx.jpg)

> ```css
> .box {
>   display: flex;
>   flex-direction: column;
>   justify-content: space-between;
> }
> ```

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv3gk87aj30b406nmwx.jpg)

> ```css
> .box {
>   display: flex;
>   flex-direction: column;
>   justify-content: space-between;
>   align-items: center;
> }
> ```

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv3jp0nvj30b407gjr5.jpg)

> ```css
> .box {
>   display: flex;
>   flex-direction: column;
>   justify-content: space-between;
>   align-items: flex-end;
> }
> ```

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv3rae6nj30b407kjr5.jpg)

> ```css
> .box {
>   display: flex;
> }
> 
> .item:nth-child(2) {
>   align-self: center;
> }
> ```

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv3s62xfj30b406omwx.jpg)

> ```css
> .box {
>   display: flex;
>   justify-content: space-between;
> }
> 
> .item:nth-child(2) {
>   align-self: flex-end;
> }
> ```

### 1.3 三项目

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznv3tndbmj30b406pq2p.jpg)

> ```css
> .box {
>   display: flex;
> }
> 
> .item:nth-child(2) {
>   align-self: center;
> }
> 
> .item:nth-child(3) {
>   align-self: flex-end;
> }
> ```

### 1.4 四项目

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv3vkbctj30b406rjr5.jpg)

> ```css
> .box {
>   display: flex;
>   flex-wrap: wrap;
>   justify-content: flex-end;
>   align-content: space-between;
> }
> ```

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv3wbb3jj30b406rjr5.jpg)

HTML代码如下。

> ```HTML
> <div class="box">
>   <div class="column">
>     <span class="item"></span>
>     <span class="item"></span>
>   </div>
>   <div class="column">
>     <span class="item"></span>
>     <span class="item"></span>
>   </div>
> </div>
> ```

CSS代码如下。

> ```css
> .box {
>   display: flex;
>   flex-wrap: wrap;
>   align-content: space-between;
> }
> 
> .column {
>   flex-basis: 100%;
>   display: flex;
>   justify-content: space-between;
> }
> ```

### 1.5 六项目

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv3z5wpsj30b407hq2p.jpg)

> ```css
> .box {
>   display: flex;
>   flex-wrap: wrap;
>   align-content: space-between;
> }
> ```

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv40pay9j30b407ct8h.jpg)

> ```css
> .box {
>   display: flex;
>   flex-direction: column;
>   flex-wrap: wrap;
>   align-content: space-between;
> }
> ```

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv42w4dij30b406ft8h.jpg)

HTML代码如下。

> ```HTML
> <div class="box">
>   <div class="row">
>     <span class="item"></span>
>     <span class="item"></span>
>     <span class="item"></span>
>   </div>
>   <div class="row">
>     <span class="item"></span>
>   </div>
>   <div class="row">
>      <span class="item"></span>
>      <span class="item"></span>
>   </div>
> </div>
> ```

CSS代码如下。

> ```css
> .box {
>   display: flex;
>   flex-wrap: wrap;
> }
> 
> .row{
>   flex-basis: 100%;
>   display:flex;
> }
> 
> .row:nth-child(2){
>   justify-content: center;
> }
> 
> .row:nth-child(3){
>   justify-content: space-between;
> }
> ```

### 1.6 九项目

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv44spzcj30b406gmwx.jpg)

> ```css
> .box {
>   display: flex;
>   flex-wrap: wrap;
> }
> ```

## 二、网格布局

### 2.1 基本网格布局

最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv474ykuj30qh0cst8p.jpg)

HTML代码如下。

> ```HTML
> <div class="Grid">
>   <div class="Grid-cell">...</div>
>   <div class="Grid-cell">...</div>
>   <div class="Grid-cell">...</div>
> </div>
> ```

CSS代码如下。

> ```css
> .Grid {
>   display: flex;
> }
> 
> .Grid-cell {
>   flex: 1;
> }
> ```

### 2.2 百分比布局

某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv4jrsu9j30lk05u742.jpg)

HTML代码如下。

> ```HTML
> <div class="Grid">
>   <div class="Grid-cell u-1of4">...</div>
>   <div class="Grid-cell">...</div>
>   <div class="Grid-cell u-1of3">...</div>
> </div>
> ```

> ```css
> .Grid {
>   display: flex;
> }
> 
> .Grid-cell {
>   flex: 1;
> }
> 
> .Grid-cell.u-full {
>   flex: 0 0 100%;
> }
> 
> .Grid-cell.u-1of2 {
>   flex: 0 0 50%;
> }
> 
> .Grid-cell.u-1of3 {
>   flex: 0 0 33.3333%;
> }
> 
> .Grid-cell.u-1of4 {
>   flex: 0 0 25%;
> }
> ```

## 三、圣杯布局

[圣杯布局](https://en.wikipedia.org/wiki/Holy_Grail_(web_design))（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv4ll5zhj30f009q0sj.jpg)

HTML代码如下。

> ```HTML
> <body class="HolyGrail">
>   <header>...</header>
>   <div class="HolyGrail-body">
>     <main class="HolyGrail-content">...</main>
>     <nav class="HolyGrail-nav">...</nav>
>     <aside class="HolyGrail-ads">...</aside>
>   </div>
>   <footer>...</footer>
> </body>
> ```

CSS代码如下。

> ```css
> .HolyGrail {
>   display: flex;
>   min-height: 100vh;
>   flex-direction: column;
> }
> 
> header,
> footer {
>   flex: 1;
> }
> 
> .HolyGrail-body {
>   display: flex;
>   flex: 1;
> }
> 
> .HolyGrail-content {
>   flex: 1;
> }
> 
> .HolyGrail-nav, .HolyGrail-ads {
>   /* 两个边栏的宽度设为12em */
>   flex: 0 0 12em;
> }
> 
> .HolyGrail-nav {
>   /* 导航放到最左边 */
>   order: -1;
> }
> ```

如果是小屏幕，躯干的三栏自动变为垂直叠加。

> ```css
> @media (max-width: 768px) {
>   .HolyGrail-body {
>     flex-direction: column;
>     flex: 1;
>   }
>   .HolyGrail-nav,
>   .HolyGrail-ads,
>   .HolyGrail-content {
>     flex: auto;
>   }
> }
> ```

## 四、输入框的布局

我们常常需要在输入框的前方添加提示，后方添加按钮。

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv4n2yx8j30lm08mq2s.jpg)

HTML代码如下。

> ```HTML
> <div class="InputAddOn">
>   <span class="InputAddOn-item">...</span>
>   <input class="InputAddOn-field">
>   <button class="InputAddOn-item">...</button>
> </div>
> ```

CSS代码如下。

> ```css
> .InputAddOn {
>   display: flex;
> }
> 
> .InputAddOn-field {
>   flex: 1;
> }
> ```

## 五、悬挂式布局

有时，主栏的左侧或右侧，需要添加一个图片栏。

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv4q5ao4j30je0f2dg5.jpg)

HTML代码如下。

> ```html
> <div class="Media">
>   <img class="Media-figure" src="" alt="">
>   <p class="Media-body">...</p>
> </div>
> ```

CSS代码如下。

> ```css
> .Media {
>   display: flex;
>   align-items: flex-start;
> }
> 
> .Media-figure {
>   margin-right: 1em;
> }
> 
> .Media-body {
>   flex: 1;
> }
> ```

### 六、固定的底栏

有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv4shx5oj30pv0ba748.jpg)

HTML代码如下。

> ```html
> <body class="Site">
>   <header>...</header>
>   <main class="Site-content">...</main>
>   <footer>...</footer>
> </body>
> ```

CSS代码如下。

> ```css
> .Site {
>   display: flex;
>   min-height: 100vh;
>   flex-direction: column;
> }
> 
> .Site-content {
>   flex: 1;
> }
> ```

### 七，流式布局

每行的项目数固定，会自动分行。

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv4u3uqxj308t0p33yn.jpg)

CSS的写法。

> ```css
> .parent {
>   width: 200px;
>   height: 150px;
>   background-color: black;
>   display: flex;
>   flex-flow: row wrap;
>   align-content: flex-start;
> }
> 
> .child {
>   box-sizing: border-box;
>   background-color: white;
>   flex: 0 0 25%;
>   height: 50px;
>   border: 1px solid red;
> }
> ```

（完）