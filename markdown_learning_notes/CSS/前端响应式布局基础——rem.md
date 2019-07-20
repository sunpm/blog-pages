## 什么是rem?

rem是根元素字体的单位，比如 `html{font-size:16px;}` ，1rem相当于16px。

不仅仅可以给字体用，其他px单位的都可以用，比如设`padding:2rem` ，相当于32px。

## 响应式布局的准则

响应式布局的要求（摘自知乎 [Z Yuhan](https://www.zhihu.com/question/20976405)）：

1 . **内容区块**可伸缩：内容区块的在一定程度上能够自动调整，以确保填满整个页面



![img](https://user-gold-cdn.xitu.io/2018/5/14/1635eff014eba6cb?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



2 . **内容区块**可自由排布：当页面尺寸变动较大时，能够减少/增加排布的列数



![img](https://user-gold-cdn.xitu.io/2018/5/14/1635f008535b1a01?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



3 .**边距**适应：到页面尺寸发生更大变化时，区块的边距也应该变化



![img](https://user-gold-cdn.xitu.io/2018/5/14/1635f018a956e02e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



4 .**图片**适应：对于常见的宽度调整，图片在隐去两侧部分时，依旧保持美观可用



![img](https://user-gold-cdn.xitu.io/2018/5/14/1635f0251e3d988a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



5 .**内容**能够自动隐藏/部分显示：如在电脑上显示的的大段描述文本，在手机上就只能少量显示或全部隐藏



![img](https://user-gold-cdn.xitu.io/2018/5/14/1635f03376630dc1?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



6 .**导航和菜单**能自动折叠：展开还是收起，应该根据页面尺寸来判断



![img](https://user-gold-cdn.xitu.io/2018/5/14/1635f03d2f4b9d29?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



7 .**字体**比例缩放时，字体也保持缩放

## rem有什么用

放弃px单位，使用rem作为单位，这样在不同尺寸的设备上，通过修改根节点的`font-size`大小，实现等比例缩放

假设设备宽度为600px，页面只有2个在一行的div，使用rem宽度如下设置

```css
html{
    font-size:10px;
}
#div1{
    width:20rem;
    float:left;
}
#div2{
    width:40rem;
    float:left;
}
```

现在换到宽度为400px的设备上，保持比例相同，只有改变font-size即可

```css
//在js计算字体大小，x为缩小比例
400/600=x/10
x=6.6
复制代码
html{
    font-size:6.6px;/*实际上使用js动态改变，也可以配置媒体查询*/
}
/*以下保持不变*/
#div1{
    width:20rem;
    float:left;
}
#div2{
    width:40rem;
    float:left;
}
```

为什么不用百分比呢？岂不是很简单

百分比是相对于父元素计算的，使用不方便，而且rem多了个字体变化。

## 如何使用

1 . 给根元素设置字体大小，并在body元素校正

```css
html{font-size:100px;}
body{font-size:14px;}
```

如上设置后，使用rem代替px，直接除100即可

```css
.menu li{
	display: table-cell;
	padding: .1rem .3rem;/*相当于10px 30px*/
}
```

2 . 绑定监听事件，dom加载后和尺寸变化时改变font-size

**注意把代码中的 1536 修改为实际开发时页面的宽度**

```javascript
//改变font-size
(function(doc,win){
    var docEI = doc.documentElement,
    resizeEvt = 'orientationchange' in window?'orientataionchange':'resize',
    recalc = function(){
        var clientWidth = docEI.clientWidth;
        if(!clientWidth) return;
        //100是字体大小，1536是开发时浏览器窗口的宽度，等比计算
        docEI.style.fontSize = 100*(clientWidth/1536)+'px';
    }

    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);
```

## 自动转换成rem

参见 postcss，待后续。。。

## A & Q

- 为什么不设置 `font-size:62.5%` ？

  因为谷歌有些版本不支持10px大小的字体

- 为什么不使用 `em` ？

  同百分比一样，相对于父元素计算不方便

- 为什么不使用 `viewport` 等比缩放？

  viewport的做法：

  这种做法是将屏幕等比缩放，缩放过大时会失真

- 使用rem web就是响应式的了吗？

  不是，rem只是等比缩放，只解决了**响应式布局的准则** 的部分问题 ，还需要配合媒体查询

作者：前往悬崖下寻宝的神三算จุ๊บ

链接：https://juejin.im/post/5af9921af265da0b767d9898

来源：掘金

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。