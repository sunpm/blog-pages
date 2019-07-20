# JS判断移动设备并实现跳转至手机版网址

由 [码匠](https://www.oicto.com/author/admin/) · 发布日期 2018年06月14日 · 已更新 2018年06月14日



**方法一：通过navigator.userAgent字符串检测**

Navigator对象包含有关浏览器的信息，通过检测userAgent字符串，然后使用正则表达式进行匹配，我们自然就能知道用户是否在使用移动端的浏览器啦。



以下代码加入到<head>里即可

<script type="text/javascript">
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	window.location = "mobile.html"; //可以换成http地址
    }
</script>


**方法二：使用 Device.js 库**

device.js 是一个用于检查设备用的插件，使用它你可以很方便的判断设备的操作系统，以及设备是纵向还是横向。

首先，我们下载Device.js

下载地址： https://github.com/matthewhudson/device.js

STEP 1: 引入 JS 文件
<script src="device.min.js"></script>
STEP 2: 加入判断代码

<script type=”text/javascript”>
    if(device.mobile()){
    	window.location = “shouji.html”;  //可以换成http地址
    }
</script>

附：

device.js cdn地址

http://www.bootcdn.cn/device.js/

**方法三：检测移动端的TouchEvent事件**

使用document.createEvent()创建TouchEvent事件，如果成功那就是移动端了，返回true，pc端是没有TouchEvent事件的，所以会出错，返回false

代码实现：

```javascript
function mobile() {
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}
```

