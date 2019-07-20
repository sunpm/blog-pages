首先，阅读 `w3c` 对两者的定义：

- `CSS` 伪类用于向某些选择器添加特殊的效果。
- `CSS` 伪元素用于将特殊的效果添加到某些选择器。

可以明确两点，第一两者都与选择器相关，第二就是添加一些“特殊”的效果。这里特殊指的是两者描述了其他 `css` 无法描述的东西。

> 伪类，首先是类的一种， 作用于标签本身（状态） 伪元素首先是元素，作用于内容本身

## 伪类种类

![请输入图片描述](https://ws2.sinaimg.cn/large/006tNc79gy1fznuzrxus8j30bz05yjrx.jpg)

## 伪元素种类

![请输入图片描述](https://ws1.sinaimg.cn/large/006tNc79gy1fznuzt12xfj30b503sjrk.jpg)

## 区别

这里用伪类 `:first-child` 和伪元素 `:first-letter` 来进行比较。

```html
<p>i:first-child {color: red}
<p>
    <i>first</i>
    <i>second</i>
</p>
```

![请输入图片描述](https://ws4.sinaimg.cn/large/006tNc79gy1fznuztwf9aj303p016mwx.jpg)

//伪类 `:first-child` 添加样式到第一个子元素
如果我们不使用伪类，而希望达到上述效果，可以这样做：

```html
.first-child {color: red}
<p>
    <i class="first-child">first</i>
    <i>second</i>
</p>
```

即我们给第一个子元素添加一个类，然后定义这个类的样式。那么我们接着看看为元素：

```html
p:first-letter {color: red}
<p>I am stephen lee.</p>
```



![请输入图片描述](https://ws1.sinaimg.cn/large/006tNc79gy1fznuzw4rfkj304b016t8h.jpg)

//伪元素 `:first-letter` 添加样式到第一个字母
那么如果我们不使用伪元素，要达到上述效果，应该怎么做呢？

```html
.first-letter {color: red}
<p><span class='first-letter'>I</span> am stephen lee.</p>
```

即我们给第一个字母添加一个 `span`，然后给 `span` 增加样式。
两者的区别已经出来了。那就是：

> 伪类的效果可以通过添加一个实际的类来达到，而伪元素的效果则需要通过添加一个实际的元素才能达到，这也是为什么他们一个称为伪类，一个称为伪元素的原因。

> 文中举的 `first-child` 和 `first-letter` 的例子，细想起来，其实为了实现 `first-letter` 的效果，实际上也相当于伪造了一个元素，将首字母放到该元素中，然后再添加样式实现效果，而 `first-child` 就相当于直接给自己的第一个子元素添加样式，并不需要伪造一个新的元素。:)

## 总结

伪元素和伪类之所以这么容易混淆，是因为他们的效果类似而且写法相仿，但实际上 `css3` 为了区分两者，已经明确规定了伪类用一个冒号来表示，而伪元素则用两个冒号来表示。

```css
:Pseudo-classes
::Pseudo-elements
```

但因为兼容性的问题，所以现在大部分还是统一的单冒号，但是抛开兼容性的问题，我们在书写时应该尽可能养成好习惯，区分两者。

> “伪类的效果可以通过添加一个实际的类来达到，而伪元素的效果则需要通过添加一个实际的元素才能达到，这也是为什么他们一个称为伪类，一个称为伪元素的原因。”