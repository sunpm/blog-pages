# JS - JSON对象与JSON字符串相互转换的几种方法

实现 **JSON** 字符串与 **JSON** 对象相互转换的方式有很多，下面分别进行介绍。

## 一、JSON字符串转化为JSON对象

假设我们有如下 **JSON** 字符串需要转换为 **JSON** 对象。

```js
var jsonStr = '[{"CityId":18,"CityName":"西安"},{"CityId":53,"CityName":"广州"}]';
```

### 1，使用eval()函数进行转换

- 使用 **eval()** 转换时需要在 **json** 字符外包裹一对小括号。
- **ie8**(兼容模式)、**ie7**、**ie6** 不要使用此方法。

```js
var jsonObj = eval('('+ jsonStr + ')');
alert(jsonObj[0]["CityName"]);
```

[![原文:JS - JSON对象与JSON字符串相互转换的几种方法](http://www.hangge.com/blog_uploads/201701/2017012815470069597.png)](http://www.hangge.com/blog/cache/detail_1534.html#)



### 2，使用JSON.parse()方法进行转换

- **ie8**(兼容模式)、**ie7**、**ie6** 不要使用此方法。

```js
var jsonObj = JSON.parse(jsonStr);
```

###  3，使用json2.js进行转换

**json2.js** 提供了 **json** 的序列化和反序列化方法，完美支持各个浏览器。
使用时我们首先要将 **json2.js** 引用进来，源码地址：<https://github.com/douglascrockford/JSON-js>

```js
var jsonObj = JSON.parse(jsonStr);
```

### 4，使用jQuery进行转换

如果我们项目中有使用 **jQuery**，那么直接使用 **$.parseJSON()** 方法即可，而且可以确保各个浏览器的兼容性。

```js
var jsonObj = $.parseJSON(jsonStr);
```

## 二、JSON对象转化为JSON字符串

假设我们有如下的对象：

```js
var jsonObj = {"CityId":"18", "CityName":"西安2"};
```



### 1，使用JSON.stringify()方法进行转换

该方法不支持较老版本的**IE**浏览器，比如：**ie8**(兼容模式)、**ie7**、**ie6**。

```js
var jsonStr = JSON.stringify(jsonObj);
alert(jsonStr);
```

运行结果如下：

[![原文:JS - JSON对象与JSON字符串相互转换的几种方法](http://www.hangge.com/blog_uploads/201701/2017012822134249920.png)](http://www.hangge.com/blog/cache/detail_1534.html#)

### 2，使用json2.js进行转换

如果想要兼容早期版本的**IE**浏览器，比如：**ie8**(兼容模式)、**ie7**、**ie6**。可以下载使用 **json2.js**，具体地址参考前面内容。使用方式和上面一样。

```js
var jsonStr = JSON.stringify(jsonObj);
```

### 3，使用jQuery进行转换

首先对 **jQuery** 进行扩展，增加个 **json** 对象转字符串的方法。

```js
jQuery.extend({
    stringify: function stringify(obj) {
        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string") obj = '"' + obj + '"';
            return String(obj);
        } else {
            // recurse array or object
            var n, v, json = [], arr = (obj && obj.constructor == Array);

            for (n in obj) {
                v = obj[n];
                t = typeof(v);
                if (obj.hasOwnProperty(n)) {
                    if (t == "string") v = '"' + v + '"';
                    else if (t == "object" && v !== null) v = jQuery.stringify(v);
                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }
            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    }
});
```

使用方式如下：

```js
var jsonStr = $.stringify(jsonObj);
```

原文出自：

www.hangge.com

  转载请保留原文链接：

http://www.hangge.com/blog/cache/detail_1534.html