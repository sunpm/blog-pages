可能早就知道，像汶川这种糟糕的日子网站全灰在IE下是可以轻松实现的(`filter: gray;`)，不过，当时，其他浏览器是无解的。不过，时代发展，如今，CSS3的逐步推进，我们也开始看到“黑白效果”大规模应用于实际的可能。

![彩色照片CSS黑白示意图 张鑫旭-鑫空间-鑫生活](https://ws3.sinaimg.cn/large/006tNc79gy1fznv0ci74hj30f0062q3e.jpg)

### CSS3 greyscale 滤镜实现

如下测试代码：

```css
.gray { 
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    
    filter: grayscale(100%);
	
    filter: gray;
}
```

HTML代码：

```html
<img src="mm1.jpg" />
<img src="mm1.jpg" class="gray" />
```

如果你手上的浏览器是Chrome18+, 您可以狠狠地点击这里：[CSS3 greyscale 滤镜与照片黑白](http://www.zhangxinxu.com/study/201208/css3-grayscale-filter.html)

可以看到类似文章一开始展示的黑白对比效果图。

其他些浏览器，如FireFox很快就会跟上实现。当然，要实现（比方说）FireFox 4浏览器上照片变黑白的效果，也是可以的。可以使用SVG的灰度滤镜效果。

### SVG滤镜实现

我们新建一个空白文本文件，比如说：`gray.txt`. 拷贝进去如下的XML代码：

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <filter id="grayscale">
        <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/>
    </filter>
</svg>
```

然后，修改后缀`.txt` → `.svg`. 然后就可以调用了~~

![修改文本文件后缀变成SVG文件 张鑫旭-鑫空间-鑫生活](https://ws3.sinaimg.cn/large/006tNc79gy1fznv0di301j303802s74b.jpg)

如下CSS调用代码：

```css
filter: url(gray.svg#grayscale);
```

然后，效果就出来了。如果你手上的浏览器是FireFox4+，您可以狠狠地点击这里：[SVG滤镜实现照片黑白demo](http://www.zhangxinxu.com/study/201208/css3-grayscale-filter-use-svg.html)

### 别忘了IE浏览器

IE下实现上面已经提过，就是：

```css
filter: gray;
```

至少IE7~9都是支持的。最近较懒，IE6懒得去测，支持与否不知。经验来看，应该是支持的。

### 我需要一个一统江山的方法

一统江山（完全兼容），如果单纯想通过CSS，也是可以的，你所要做的就是：天天拿个鱼竿去黄浦江钓鱼，年复一年，日复一日……然后，两年后，只要两年，把上面两个demo页面F5一下，就可以了！很简单吧！

如果嫌上面的做法过于伦敦，且你也不是一根筋，到是有个一统江山的方法，不过不是CSS的干货，一个貌似有点名气的[Greyscale.js](http://james.padolsey.com/demos/grayscale)。

用法很简单，引用JavaScript文件，如下：

```html
<script src="http://james.padolsey.com/demos/grayscale/grayscale.js"></script>
```

然后，一句话：

```javascript
grayscale(document.getElementById("thisImage"));
```

或DOM元素集：

```javascript
grayscale(document.getElementsByTagName("img"));
```

如果你喜欢使用jQuery，还可以使用：

```javascript
grayscale($("#thisImage"));
```

很简单吧。

**实现原理**：IE浏览器下是添加灰度滤镜，这个大家都懂的。其他浏览器貌似使用Canvas中的`getImageData`方法，然后对每个像素点进行灰度转换~~

因此，在现代浏览器下，对于该方法，图片的灰度处理有两个局限性：

1. **速度**。300*300这张一般般大小的图片变灰就要数秒之久；
2. **跨域**。安全性机制，无法转换跨域的图片为黑白色。

您可以狠狠地点击这里：[Greyscale.js照片变灰兼容性实现demo](http://www.zhangxinxu.com/study/201208/js-grayscale.html)

截图跟上面的一致，略。

**补充于2015年12月21日**
很多人邮件问，IE10, IE11这两个高不成低不就的浏览器怎么办？

我个人都是借助SVG实现（专门为IE10-IE12）的，讲[毛玻璃效果](http://www.zhangxinxu.com/wordpress/?p=3804)的时候有类似实现。

\1. 页面载入（可以请求载入，或者直接放在HTML代码中）上面gray.txt对应的SVG文件，也就是：

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    <filter id="grayscale">
        <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/>
    </filter>
</svg>
```

\2. 然后将图片转为SVG图片引用，`filter`属性值指向`grayscale`(上面红色的`id`值)。例如

```html
<svg>
    <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="zxx.jpg" x="0" y="0" width="256" height="190" filter="url('#grayscale')"></image>
</svg>
```

over~