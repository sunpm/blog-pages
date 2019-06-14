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