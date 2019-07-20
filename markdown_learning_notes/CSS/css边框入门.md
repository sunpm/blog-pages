# 上、下、左、右边框

可以使用下面的代码很好的显示出这四个边框：

```css
.demo-1{
    width: 100px;
    height: 100px;
    border-left: 50px solid gray;
    border-right: 50px solid green;
    border-bottom: 50px solid blue;
    border-top: 50px solid black;
}
```

下图对应上面的样式即可显示这四个边框到底是如何搭配的：

![clipboard.png](https://ws4.sinaimg.cn/large/006tNc79gy1fznuzlf4yaj308g06p0sq.jpg)

可以发现在边角处，两个边框平分所占面积。

## 正方形

将上面代码中的`.demo-1`的`width`和`height`设置为0：

```css
.demo-1{
    width: 0;
    height: 0;
    border-left: 50px solid gray;
    border-right: 50px solid green;
    border-bottom: 50px solid blue;
    border-top: 50px solid black;
}
```

即可显示一个正方形：

![clipboard.png](https://ws1.sinaimg.cn/large/006tNc79gy1fznuzmdl3zj306a0473yi.jpg)

## 上三角

很显然，作出上三角很简单了，另`border-left`和`border-right`的颜色为透明，不设置`border-top`：

```css
.demo-1 {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid blue;
}
```

即可显示上三角：

![clipboard.png](https://ws2.sinaimg.cn/large/006tNc79gy1fznuzn9ahqj304x02wjr9.jpg)

## 其它简单的图形

可以设置上、下、左、右边框的属性自由组合图形的样式。

# 伪类before和after

`w3c`对这两个伪类的定义：

- :after 选择器在被选元素的内容后面插入内容
- :before 选择器在被选元素的内容前面插入内容

**请使用 content 属性来指定要插入的内容。**

## 使用before和after创建组合图形

通过使伪类、定位可以创建出一下效果的图形：

![clipboard.png](https://ws4.sinaimg.cn/large/006tNc79gy1fznuzoch37j304e02b3yk.jpg)

### 作出一个长方形的`div`

代码：

```css
.hot {
    background-color: #cc0000;
    width: 100;
    height: 50px;
    position: relative;
    text-align: center;
}
```

效果见下：

![clipboard.png](https://ws3.sinaimg.cn/large/006tNc79gy1fznuzp9z0ej304a02ddfm.jpg)

### 使用伪类before插入箭头

代码：

```css
.hot:before {
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    bottom: -12px;
    left: 15px;
    border-top: 12px solid #cc0000;
    border-left: 0px solid transparent;
    border-right: 12px solid transparent;
}
```

**注意这里使用absolute定位**
效果见下：

![clipboard.png](https://ws4.sinaimg.cn/large/006tNc79gy1fznuzq5wi4j305002oq2r.jpg)

### 使用伪类after加上文字

```css
.hot:after {
    content: "头条";
    color: #fff;
    font-size: 39px;
    line-height: 50px;
    font-family: "楷体";
    font-weight: bold;
}
```

最终效果：

![clipboard.png](https://ws1.sinaimg.cn/large/006tNc79gy1fznuzr3qmsj305n02paa4.jpg)