# 单行文本

如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性来，当然还需要加宽度width属来兼容部分浏览。

**实现方法：**

```css
.text{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
```

**效果如图：**
![dome1](https://ws3.sinaimg.cn/large/006tNc79gy1fznv14l5v8j30do01dgld.jpg)

# 多行文本

但是这个属性只支持单行文本的溢出显示省略号，如果我们要实现多行文本溢出显示省略号呢。

接下来重点说一说多行文本溢出显示省略号，如下。

**实现方法：**

```css
.text{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

**效果如图：**
![dome2](https://ws2.sinaimg.cn/large/006tNc79gy1fznv16682tj30ew02njr7.jpg)

**适用范围：**
因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；

注：

1. -webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
2. display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
3. -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

# 文字未超出行的情况下也会出现省略号,可结合js优化该方法

**实现方法：**

```css
p {
    position: relative;
    line-height: 20px;
    max-height: 40px;
    overflow: hidden;
}

p::after {
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}
```

**效果如图：**
![dome3](https://ws3.sinaimg.cn/large/006tNc79gy1fznv1e44h5j30dr02hweb.jpg)
**适用范围：**
该方法适用范围广，但文字未超出行的情况下也会出现省略号,可结合js优化该方法。

注：

1. 将height设置为line-height的整数倍，防止超出的文字露出。
2. 给p::after添加渐变背景可避免文字只显示一半。
3. 由于ie6-7不显示content内容，所以要添加标签兼容ie6-7（如：<span>…<span/>）；兼容ie8需要将::after替换成:after。