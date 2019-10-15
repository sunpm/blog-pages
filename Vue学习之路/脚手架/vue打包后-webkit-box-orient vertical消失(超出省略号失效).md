# vue打包后-webkit-box-orient: vertical消失（超出省略号失效）

之前写代码的时候遇到一个问题，就是用了下面这段css代码来让文字超出范围隐藏并显示省略号。

```css
    overflow:hidden;/*超出隐藏*/
    text-overflow:ellipsis;/*文本溢出时显示省略标记*/
    display:-webkit-box;/*设置弹性盒模型*/
    -webkit-line-clamp:1;/*文本占的行数,如果要设置2行加...则设置为2*/
    -webkit-box-orient: vertical;
```

然鹅本地运行的时候是没有问题的，但是build之后发现失效了。仔细一看是 `-webkit-box-orient: vertical;` 没有起效。
最后各种修改之后发现应该是webpack的锅
解决方案是改成下面这样

```cpp
/*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
```

记得要带上感叹号

参考：<https://github.com/postcss/autoprefixer/issues/776>

