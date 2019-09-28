web开发中，三角形的日常应用，以三角形指示箭头最为常见，其用CSS来实现非常简单，熟悉了之后相比于引入SVG或是背景图片会是更好更灵活的选择。

而三角箭头一般而言，又分为两种，一种是视觉上没有边框的，我们叫做实心三角形；还有一种是视觉上有边框的，而三角箭头刨去边框的部分又要与主体元素的背景颜色一致，我们叫做空心三角形。

![两种三角箭头](https://ws3.sinaimg.cn/large/006tNc79gy1fznv0ifp48j30lz0htmys.jpg)

言归正传，讲一下怎样实现的。

首先，讲一下三角形的实现原理，熟悉的同学可以跳过这一步。

## 三角形实现原理

三角形的实现原理是宽高都不设置（即为0），只设置边框，如果四个边框都设置宽度（border-width）、样式（border-style）和颜色（border-color），效果如图：

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznv0joap9j30bj0bfwew.jpg)

上面是四个边框border-width一样时的效果，其实border-width是可以自己根据需求来变化的，如下图效果：

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv0lnaypj30e70cft95.jpg)

上面看到的都是四个三角形，其实想实现单个的三角形只需把其他三个三角形的border-color设置为透明色transparent就可以了（2017年还用考虑IE6吗）。

这样就实现三角形了。

## 实心三角形箭头

实心三角形的原理就是一个三角形绝对定位到主体元素边界处并连接起来。

为了语义化，我们用单标签，三角形用伪类来实现。

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznv0rzziqj30fg087glo.jpg)

把三角形颜色换成和主体元素一致的背景色就可以了。如下图：

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznv0wnoodj30gg08rjrf.jpg)

## 空心三角箭头

空心三角形的原理就是一个边框颜色的三角形绝对定位到主体元素边界处并连接起来，然后另一个主体元素背景色的三角形绝对定位并覆盖到第一个三角形上面，关键的一点是第二个三角形相较于第一个三角形定位上偏移的距离应等于边框宽度。

说得可能比较晦涩，看效果图会更清楚明白（为了区分显示，第一个三角形用的粉色，第二个白色）

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznv0zchzvj30h809bdg0.jpg)

把第一个三角形颜色换成边框颜色，第二个三角形颜色换成背景颜色就可以了。

为了语义化，我们使用单标签，两个三角形用before和after伪类来实现，因为after伪元素会覆盖before伪元素，所以after伪元素就是第二个三角形。

### 第二个三角形定位的偏移距离

这是比较容易被忽略的一点！

为了视觉效果，也为了用户体验，我们应该将三角箭头的边框宽度和主体元素的边框宽度保持一致。

一般可能会有同学认为第二个三角形的偏移值和主体元素边框宽度一样，其实是不对的。

第二个三角形相较于第一个三角形的偏移值其实应该是主体元素边框宽度的"根号2"倍，约为1.414，为了方便可以按1.4倍计算。

下图是原理图：

![勾股定理](https://ws1.sinaimg.cn/large/006tNc79gy1fznv13sg0rj30ts0eyjs1.jpg)

假设主体元素边框宽度为6px，所以第二个三角形相较于第一个三角形的偏移量应为6px*1.4 = 8.4px

[在线demo](http://yoowinsu.github.io/demos/just-demos/%E5%AE%9E%E7%8E%B0%E7%A9%BA%E5%BF%83%E4%B8%89%E8%A7%92%E6%8C%87%E7%A4%BA%E7%AE%AD%E5%A4%B4.html)

本文首发于个人博客[yoowin.me](https://yoowin.me/2017/css-triangle.html)，欢迎访问！