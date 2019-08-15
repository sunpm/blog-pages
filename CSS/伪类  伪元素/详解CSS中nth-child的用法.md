# [详解CSS中:nth-child的用法](http://www.daqianduan.com/3737.html)



前端的哥们想必都接触过css中一个神奇的玩意，可以轻松选取你想要的标签并给与修改添加样式，是不是很给力，它就是“**:nth-child**”。

下面我将用几个典型的实例来给大家讲解:nth-child的实际用途：

**Tips：**还用低版本的IE浏览器的哥们请绕过！

## :nth-child(2)选取第几个标签，“2可以是你想要的数字”

```css
.demo01 li:nth-child(2){background:#090}
```

## :nth-child(n+4)选取大于等于4标签，“n”表示从整数，下同

[点此查看实例展示](http://www.daqianduan.com/example/?pid=3737)

```css
.demo01 li:nth-child(n+4){background:#090}
```

## :nth-child(-n+4)选取小于等于4标签

[点此查看实例展示](http://www.daqianduan.com/example/?pid=3737)

```css
.demo01 li:nth-child(-n+4){background:#090}
```

## :nth-child(2n)选取偶数标签，2n也可以是even

[点此查看实例展示](http://www.daqianduan.com/example/?pid=3737)

```css
.demo01 li:nth-child(2n){background:#090}
```

## :nth-child(2n-1)选取奇数标签，2n-1可以是odd

[点此查看实例展示](http://www.daqianduan.com/example/?pid=3737)

```css
.demo01 li:nth-child(2n-1){background:#090}
```

## :nth-child(3n+1)自定义选取标签，3n+1表示“隔二取一”

[点此查看实例展示](http://www.daqianduan.com/example/?pid=3737)

```css
.demo01 li:nth-child(3n+1){background:#090}
```

## :last-child选取最后一个标签

[点此查看实例展示](http://www.daqianduan.com/example/?pid=3737)

```css
.demo01 li:last-child{background:#090}
```

## :nth-last-child(3)选取倒数第几个标签,3表示选取第3个

[点此查看实例展示](http://www.daqianduan.com/example/?pid=3737)

```css
.demo01 li:nth-last-child(3){background:#090}
```

ok，:nth-child的这些用法在实际中很用得着，不用单独给需要选取的标签加上ID或Class，是不是很拉轰！





### 前言

渲染列表时，需要设置前3个元素的margin-top值与其他的不同。

### 使用

```css
:nth-child(-n+3){
  margin-top: 12px;
}
```

### 扩展

选择前几个元素

```css
/*【负方向范围】选择第1个到第6个 */
:nth-child(-n+6){}
```



从第几个开始选择

```css
/*【正方向范围】选择从第6个开始的 */
:nth-child(n+6){}
```




两者结合使用，可以限制选择某一个范围

```css
/*【限制范围】选择第6个到第9个，取两者的交集【感谢小伙伴的纠正~】 */
:nth-child(-n+9):nth-child(n+6){}
```



### 参考

https://blog.csdn.net/longgeaisisi/article/details/78154169

https://www.cnblogs.com/baiyangyuanzi/p/6603858.html

