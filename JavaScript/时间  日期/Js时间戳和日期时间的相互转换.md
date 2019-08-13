# [Javascript时间戳和日期时间的相互转换](https://www.cnblogs.com/anniey/p/6846025.html)

跟后台对接的时候经常碰到时间格式的问题，有时返回的是时间戳，有时返回的是具体时间，需求又需要它们之间的转换，所以干脆把之前遇到过的情况都给记录下来，以供自己参考！

**本文备注**：(时间戳单位为毫秒ms，换算秒s需timestrap/1000；
例子使用时间为：'2017/5/11 11:42:18')

1.获取当前日期的时间戳

```js
var timestrap=Date.parse(new Date());
//或者
var timestrap=(new Date()).getTime();
console.log(timestrap);//1494474138000 
```

我经常用的是(new Date()).**getTime()**这种方式，很少用Date.parse(new Date())，因为会转换后三位毫秒数，不精确。

2.获取具体时间格式的时间戳

```js
var timestrap=(new Date('2017/5/11 11:42:18')).getTime();
//1494474138000
```

3.转换指定时间戳

```js
var time=new Date(1494474138000);
//Thu May 11 2017 11:42:18 GMT+0800 (中国标准时间)
//Thu May 11 2017 11:42:18 GMT+0800 (CST)
```

4.Date()

　　定义：

```js
var timestrap=1494474138000;
var newDate=new Date();
newDate.setTime(timestrap);
```
Date()实例具体使用情况：

```js
console.log(newDate.toLocaleString());//2017/5/11 上午11:42:18
console.log(newDate.toString());    //Thu May 11 2017 11:42:18 GMT+0800 (中国标准时间)
console.log(newDate.toDateString());//Thu May 11 2017 
console.log(newDate.toTimeString());//11:42:18 GMT+0800 (中国标准时间)
console.log(newDate.toGMTString()); //Thu, 11 May 2017 03:42:18 GMT
console.log(newDate.toUTCString()); //Thu, 11 May 2017 03:42:18 GMT
console.log(newDate.toISOString()); //2017-05-11T03:42:18.000Z
console.log(newDate.toJSON());      //2017-05-11T03:42:18.000Z
//返回一个指定日期对象的年份；
console.log(newDate.getFullYear()); //2017，年

//返回一个指定的日期对象的月份，返回一个0 到 11的整数值， 0 代表一月，1 代表二月，...
console.log(newDate.getMonth());   //4，月

//返回一个指定的日期对象为一个月中的第几天；
console.log(newDate.getDate());     //11，日

//返回一个指定的日期对象的小时，返回一个0 到 23之间的整数值；
console.log(newDate.getHours());   //11，时

//返回一个指定的日期对象的分钟数，返回一个0 到 59的整数值；
console.log(newDate.getMinutes()); //42，分

//返回一个指定的日期对象的秒数，返回一个 0 到 59 的整数值；
console.log(newDate.getSeconds());  //18，秒

//返回一个指定的日期对象的毫秒数，返回一个0 到 999的整数；
console.log(newDate.getMilliseconds());//0，毫秒

//返回一个具体日期中一周的第几天，0 表示星期天，1 表示星期一，...
console.log(newDate.getDay());      //4，星期

//返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数；
console.log(newDate.getTime());     //1494474138000

```
方法使用情况：
```js
//解析一个表示日期的字符串，返回毫秒数
Date.parse('2017/5/11 11:42:18');//1494474138000

//返回自 1970-1-1 00:00:00  UTC (时间标准时间)至今所经过的毫秒数,类型为Number;
Date.now(); //时间戳
```

5.利用原型对象prototype来做时间格式的转换

```json
"M+": '月份',
"d+": '日',
"h+": '小时',
"m+": '分钟',
"s+": '秒',
"q+": '季度',
"S+": '毫秒',
"y+": '年份',
```

```js
Date.prototype.format=function(format){
    var date={
        "M+": this.getMonth()+1, 
        "d+": this.getDate(), 
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth()+3)/3), 
        "S+": this.getMilliseconds(), 
    };
    if(/(y+)/i.test(format)){
        format=format.replace(RegExp.$1,(this.getFullYear()+'').substr(4-RegExp.$1.length));
    }
    for(var i in date){
        if(new RegExp("("+i+")").test(format)){
            format=format.replace(RegExp.$1, RegExp.$1.length==1?date[i]:("00"+date[i]).substr((""+date[i]).length));
        }
    }
    return format;
}
```

使用用例：

```js
(new Date('2017-03-23 17:33:45')).format('yyyy/MM/dd h:m:s');
(new Date()).format('MM,qq');
```

\~~~~~~~~~~~~~~~~~~~~~~~~~ 分割线der ~~~~~~~~~~~~~~~~~~~~~~~~~

2018-11-14补充：

近期和php后台对接时，发现输出的时间戳为**10**位，JS需要换成**13**位的时间戳才能成功换算日期；

JAVA也是**10**位~~

完毕哟~