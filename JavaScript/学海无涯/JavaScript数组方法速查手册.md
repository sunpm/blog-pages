# [JavaScript数组方法速查手册](https://zhuanlan.zhihu.com/p/69465415)

![JavaScript数组方法速查手册](https://pic1.zhimg.com/v2-535e92c65ddaff1a55f11df10c680c75_r.jpg)

## 前言

每次碰到数组一些方法总是记不住，说到底还是用的不够多，所以在此我就想弄一个数组方法的速查手册，方便进行每次数据方式的查找以及获取一些不常用，但是又非常有必要了解的数组方法以及使用方式，当然这里只是一个简单的使用，具体的以及详细内容大家还是需要动手实践，掌握真理

## length长度属性

每个数组都有一个length的属性，对于稠密数组来说，数组的length就代表元素的个数。而对于稀疏数组，length的属性值要大于元素的个数

```js
let arr = ['a', 'b', 'c']
console.log(arr.length)  //输出3
arr.length = 2
console.log(arr)  //输出['a', 'b']
```

## Array.isArray-类型判断

是否为数组判断

```js
let arr = ['a', 'b', 'c']
let obj = {a:1, b:2, c:3}
console.log(Array.isArray(arr))  //输出true
console.log(Array.isArray(obj))  //输出false
```

## Array.of-创建数组

Array.of()从传入参数创建数组，不必在乎参数数量和类型

```js
Array.of(1, 2, 3)  //输出[1, 2, 3]
Array.of(1, '2', true)  //输出[1, '2', true]
```

## Array.from-创建数组

Array.from用于使用类数组或者可迭代对象创建新数组

```js
Array.from('123')  //输出['1', '2', '3']
Array.from([1, 2, 3], x => x+1)  //输出['2', '3', '4']
```

## find-按函数查找

Array.prototype.find()找到第一个满足条件的元素，并返回该元素，没找到则返回undefined

```js
let arr = [1, 2, 3]
arr.find(x => x>1)  //输出2
```

## findIndex-按函数查找

Array.prototype.findIndex()找到第一个满足条件的元素，并返回该元素的下标，没找到则返回-1

```js
let arr = [1, 2, 3]
arr.findIndex(x => x>1)  //输出对应满足条件元素的下标1
```

## indexOf-按元素值查找

Array.prototype.indexOf()查找元素并返回对应元素的索引值，如果找不到此元素则返回-1，第二个参数为查找的起始位置

```js
let arr = ['a', 'b', 'c']
arr.indexOf('b')  //返回值为1
arr.indexOf('d')  //返回值为-1
arr.indexOf('b', 2)  //返回值为-1
```

## lastIndexOf-按元素值查找

Array.prototype.lastIndexOf()从后向前查找元素并返回元素的索引值，如果找不到则返回-1

```js
let arr = ['a', 'b', 'c']
arr.lastIndexOf('b')  //返回值为1
arr.lastIndexOf('d')  //返回值为-1
```

## push-尾部添加元素

Array.prototype.push()向数组的尾部添加一个或多个元素，并返回新数组的长度

```js
let arr = ['a', 'b', 'c']
arr.push('d')  //返回值为4
console.log(arr)  //打印值为['a', 'b', 'c', 'd']
```

## unshift-头部添加元素

Array.prototype.unshift()向数组的头部添加一个或多个元素，并返回新数组的长度

```js
let arr = ['b', 'c', 'd']
arr.unshift('a', 'b')  //返回值为4
console.log(arr)  //打印值为['a', 'b', 'b', 'c', 'd']
```

## pop-尾部删除

Array.prototype.pop()从尾部删除一个元素，并返回该元素

```js
let arr = ['a', 'b', 'c']
arr.pop()  //返回'c'
console.log(arr)  //打印值为['a', 'b']
```

## shift-头部删除

Array.prototype.shift()从头部删除一个元素，并返回该元素

```js
let arr = ['a', 'b', 'c']
arr.shift()  //返回'a'
console.log(arr)  //打印值为['b', 'c']
```

## splice-添加替换删除

Array.prototype.splice()添加、替换、删除元素。会改变原数组

```js
let arr = [1, 2, 3, 4, 5]
arr.splice(1, 0, 2)
console.log(arr)  //输出[1, 2, 2, 3, 4, 5]
arr.splice(1, 1)
console.log(arr)  //输出[1, 2, 3, 4, 5]
arr.splice(1, 1, 2, 3)
console.log(arr)  //输出[1, 2, 3, 3, 4, 5]
```

array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

- 参数start表示替换的位置
- 参数deleteCount表示删除的元素
- 参数item1...表示添加的元素

## sort-排序

Array.prototype.sort()数组排序，改变原数组

```js
let arr = [25, 4, 3, 10, 22, 4]
arr.sort()
console.log(arr)  //输出[10, 22, 25, 3, 4, 4]
arr.sort((x, y) => x - y)
console.log(arr)  //输出[3, 4, 4, 10, 22, 25]
```

## reverse-反序

Array.prototype.reverse()倒置数组，并返回新数组。改变原数组

```js
let arr = ['a', 'b', 'c']
let reverseArr = arr.reverse()
console.log(reverseArr)  //输出['c', 'b', 'a']
console.log(reverseArr === arr)
```

## keys-键迭代器

Array.prototype.keys()数组的键迭代器

```js
let arr = ['a', 'b', 'c']
for (let key of arr.keys()) {
    console.log(key)  //输出0, 1, 2
}
```

## values-值迭代器

Array.prototype.values()数组的值迭代器

```js
let arr = ['a', 'b', 'c']
for (let value of arr.values()) {
    console.log(value)  //输出a, b ,c
}
```

## entries-键/值对迭代器

Array.prototype.entries()数组的键/值对迭代器

```js
let arr = ['a', 'b', 'c']
let iterator = arr.entries()
console.log(iterator.next().value)  //输出Array [0, 'a']
console.log(iterator.next().value)  //输出Array [1, 'b']
```

## forEach-遍历

Array.prototype.forEach()遍历数组中的元素，并执行回调函数

```js
let arr = ['a', 'b', 'c']
arr.forEach(x => {
    console.log(x)  //输出a, b, c
})
```

## includes-值包含检测

Array.prototype.includes()值包含检测，如果包含则返回true，不包含则返回false

```js
let arr = ['a', 'b', 'c']
console.log(arr.includes('a'))  //输出true
console.log(arr.includes('d'))  //输出false
```

## some-函数包含检测

Array.prototype.some()检测数组中是否有元素可以通过检测函数验证

```js
let arr = [ 1, 2, 3, 4 ];
console.log(arr.some(x => x >3));    // 输出  true
console.log(arr.some(x => x > 5));    // 输出  false
```

## every-函数完全检测

Array.prototype.every()检测数组中所有元素可以通过检测函数验证

```js
let arr = [ 1, 2, 3, 4 ];
console.log(arr.every(x => x < 8));    // 输出  true
console.log(arr.every(x => x > 2));    // 输出  false
```

## join-合并成字符串

Array.prototype.join()合并数组中所有元素成为字符串并返回

```js
let arr = ['a', 'b', 'c']
console.log(arr.join())  //输出a, b, c
console.log(arr.join('-'))  //输出a-b-c
```

## concat-合并成数组

Array.prototype.concat()合并两个或多个数组，返回一个全新的数组，原数组不变

```js
let arr1 = ['a', 'b']
let arr2 = ['c', 'd']
console.log(arr1.concat(arr2))  //输出["a", "b", "c", "d"]
```

## reduce-左侧累计

Array.prototype.reduce()从左至右按reducer函数组合元素值，并返回累加器终值

```js
let arr = [1, 2, 3, 4, 5]
let reducer = (accumulator, currentValue) => accumulator + currentValue
console.log(arr.reduce(reducer))  //1+2+3+4+5 = 15
console.log(arr.reduce(reducer, 5))  //5+1+2+3+4+5 = 20 设置5为累加器的初始值
```

## reduceRight-右侧累加

Array.prototype.reduceRight()从右至左按reducer函数组合元素值，并返回累加器终值

```js
let arr = [1, 2, 3, 4, 5]
let reducer = (accumulator, currentValue) => accumulator+'-'+currentValue
console.log(arr.reduceRight(reducer))  //5-4-3-2-1
console.log(arr.reduceRight(reducer, 6))  //6-5-4-3-2-1
```

## copyWithin-内部复制

Array.prototype.copyWithin()数组内部复制，不改变原数组长度

```js
let arr = ['a', 'b', 'c', 'd', 'e','f']
console.log(arr.copyWithin(0, 3, 5))  // 输出 [ "d", "e", "c", "d", "e", "f" ]
console.log(arr.copyWithin(1, 3))  // 输出 [ "d", "d", "e", "f", "e", "f" ]
```

arr.copyWithin(target[, start[, end]])

- 参数target表示要复制到的索引位置，如为负值则从后向前计数
- 参数start表示要复制序列的起始索引位置，如为负值则从后向前计数。如省略该值，则从索引0开始
- 参数end表示要复制序列的结束位置，如为负值则从后向前计数。如省略该值，则复制到结尾位置



## fill-填充函数

Array.prototype.fill()用固定值填充起始索引到终止索引区间内的全部元素值，不包括终止索引

```js
let arr = [1, 2, 3, 4]
console.log(arr.fill(0, 2, 4))  // 输出 [ 1, 2, 0, 0 ]
console.log(arr.fill(6, 1))  // 输出 [ 1, 6, 6, 6 ]
console.log(arr.fill(7))  // 输出 [ 7, 7, 7, 7 ]
```

## filter-过滤函数

Array.prototype.filter()生成由通过检测函数验证元素组成的新数组并返回

```js
let arr = [1, 2, 3, 4]
console.log(arr.filter(x => x > 2))  //输出 [ 3, 4 ]
```

## flat-数组扁平化

Array.prototype.flat()按指定深度递归遍历数组，并返回包含所有遍历到的元素组成的新数组。不改变原数组

```js
let arr1 = [ 1, 2, [ 3, 4 ] ]
console.log(arr1.flat())  // 输出 [ 1, 2, 3, 4 ]
var arr2 = [ 1, 2, [3, 4, [ 5, 6 ] ] ]
console.log(arr2.flat())  // 输出 [ 1, 2, 3, 4,  [ 5, 6 ] ]
var arr3 = [1, 2, [ 3, 4, [ 5, 6 ] ] ]
console.log(arr3.flat(2))  // 输出 [ 1, 2, 3, 4, 5, 6 ]
```

## map-映射

[Array.prototype.map](http://array.prototype.map/)()创建一个新数组，该数组中的元素由原数组元素调用map函数产生

```js
let arr = [1, 2, 3, 4];
console.log(arr.map(x => x * 2))  // 输出 [ 2, 4, 6, 8 ]
```

## slice-截取数组

Array.prototype.slice()按参数begin和end截取数组，不改变原数组

```js
let arr = [ 1, 2, 3, 4, 5]
console.log(array1.slice( 2, 4 ))  //输出 [ 3, 4 ]
console.log(arr)  //输出 [ 1, 2, 3, 4, 5 ]
```

## 结语

简单介绍下api的使用方式，方便大家快速查找，有的方法可能不常用但是有时候用到的时候还需要自己去查，这个文档的目的就是不用再去搜索，在此查看即可，比较简单的写了demo，如果大家发现有什么问题，欢迎指正，如果需要了解更详细的使用方式，请移步MDN查看对应文档，谢谢大家！