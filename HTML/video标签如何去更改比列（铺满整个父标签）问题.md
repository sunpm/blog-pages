在使用video标签的时候，很多时候我们并不想去使用默认的16：9的显示比列，而自定义的宽和高显示出来后，又总是被默认比列所影响，那么如何解决呢？
其实想要video能自动填充慢父div的大小，只要给video标签加上

```html
style="width= 100%; height=100%; object-fit: fill"
```

即可。
这是我同事本来的代码：无论宽高如何变化，video标签总是会受到固定比例额影响，而不能达到预期效果！

```html
<div class="btn" style="width:244px;height:300px; overflowhidden">
    <video id="video" style="width:100%;height:100%;></video>
</div>
```

页面显示出来后，总是会有一部分的留白区域，而不能铺满整个父盒子，尝试了很多方法都不行，也看到了一些帖子，说的都不是很详细，直到后来去查了object-fit的用法才算解决了问题；具体代码如下：

```html
<div class="btn" style="width:244px;height:300px; overflowhidden">
    <video id="video" style="width:100%;height:100%;object-fit:fill;"></video>
</div>
```

如此问题就解决掉了，那么这个object-fit有何特点呢？

1.object-fit语法
object-fit属性的语法非常的简单：

```html
<code class="cs" style="font-family: 'Microsoft YaHei'; padding: 0px;">
    object-fit:fill | contain | cover | none | scale-down
</code>
```

```html
object-fit主要适合于替换元素，比如：<video>、<object>、<img>、<input type="image">、<svg>、<svg:image>和<svg:video>等。其默认值为fill。object-fill取值的说明如下：
```

fill:此值为boject-fit的默认值，替换内容的大小被设置为填充元素的内容框，也就是说，元素的内容扩大到完全填充容器的外形尺寸，即使这打破其内在的宽高比。
contain：替换元素内容大小保持长宽比例填充元素内容容器，其具体对象大小被解析为一个包含元素的宽度和高度。也就是说，如果你在替换元素上设置一个明确的高度和宽度，此值将导致内容大小，完全在固定的比例显示，但仍在元素尺寸内显示。
cover：替换元素内容大小保持长宽比例填充元素内容容器，其具体对象大小被解析为覆盖整个元素的宽度和高度。也就是说，替换元素内容大小保持长宽比，但改变宽度和高度，以便完全覆盖内容元素。
none：替换元素内容不调整大小以适应内部元素的容器，内容完全忽略设置在元素上的任何高度和权重，并且仍在元素尺寸内显示。
scale-down：当内容大小设置了non或contain，将导致具体对象变得更小。