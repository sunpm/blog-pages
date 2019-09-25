# H5 唤醒 IOS/Android APP 总结

最近接到一个任务。

需求大概就是：APP内社交分享链接，用户访问页面领取VIP奖励，后有个 打开APP 功能。

![《H5 唤醒 IOS/Android APP 总结》](https://www.misechow.com/wp-content/uploads/2018/09/vip-225x300.png)

话不多说，直奔主题。

> 注：此文不叙述有多少种实现方式。仅分享自己比较完善的实现方法。

### 一、实现方式

通过 浏览器访问 URL Scheme 从而实现唤醒APP 。

众所周知，IOS 和 安卓 系统不一样，当然在 Scheme 的处理上也不一样。
在 IOS 9 和以上系统，都是支持 [**Universal Links** ](https://www.jianshu.com/p/734c3eff8feb)的。但是本文没有使用这种方法。

其余的大概有2种实现方式，各有弊端。

1. iframe 跳转方式
   – 优点：不会引起页面可见的变化（例如页面内容变成一个新页面），不会导致浏览器历史记录的变化。 安卓兼容性比较好。
   – 缺点：IOS9 以下貌似不支持。
2. window.locaiton.href 跳转方式
   – 优点：IOS都支持，安卓有部分不支持。
   – 缺点：会有空标签。

这里我们结合了两种来处理。

当是 **安卓** 的时候 使用 iframe 模式。

当是 **IOS** 的时候 使用 window.location.href 模式。

当在 **微信** 的时候 跳转到 应用宝。（IOS、安卓 Scheme 都不能在微信跳转，因为微信屏蔽了）

### 二、判断是否唤醒

我们在浏览器是不能获取到本机的APP的，也就是说，我们不知道是否存在该APP、也不知道是否唤醒了该APP。

所以前人发现了一个方法，走一个弯路来实现功能。即用定时器来判断是否唤醒了APP。

> 唤醒过程：浏览器尝试打开 URL scheme，在 3 秒计时后，检查当前时间，如果实际时间已过 3000 毫秒，说明唤起APP 成功（唤起 APP 会让浏览器的定时器变慢）

如果唤醒了 则直接跳转到该APP，如果没有则跳转到腾讯应用宝下载链接。

### 三、兼容情况

安卓：
微信：唤醒不了，只能应用宝。
QQ / 其他浏览器：若有可以唤醒，没则跳转应用宝。

IOS：
微信：唤醒不了，只能应用宝。
QQ / 其他浏览器：若有可以唤醒，没则跳转应用宝。

但是 IOS Safari 没有该APP唤醒失败时会有这种情况。

![《H5 唤醒 IOS/Android APP 总结》](https://www.misechow.com/wp-content/uploads/2018/09/IOS-Safari-300x159.png)

解决办法：IOS9及以上使用  **Universal Links**。

### 四、案例与代码

[**点击我尝试~**](https://www.misechow.com/demo/h5wakeupapp.html)

```js
var baseUrl = {
    "weixin": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mm',
    "taobao": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.taobao.taobao',
    "mqq": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mobileqq',
    "TencentWeibo": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.WBlog'
}
function openApp(scheme) {
    var can_open = false;
    var url = scheme;
    var browser = this.browser();
    if ( browser.isweixin ) { // 如果是 微信 则跳转到应用宝
        window.location.href = baseUrl[scheme.split(':')[0]];
        return false;
    }
    var _loading = function () {
        console.log('正在打开App');
    }
    // const $_ifr = $("<iframe src=''></iframe>")
    const $_ifr = document.createElement('iframe')
    $_ifr.id = 'test'
    $_ifr.style = 'display:none'
    $_ifr.src = url
    const t = 0
    const ast2 = 100
    // $_ifr.attr('id', 'test')
    // $_ifr.attr('style', 'display:none')
    body.appendChild($_ifr)
    // $_ifr.attr('src', url)
    if ( browser.ios  ) {
        window.location.href = url;
    }
    _loading();

    var t1 = new Date().getTime();
    var cc_noapp = true;
    var cc_stop = false;
    var cc_count = 0;
    var tt2, tt1 = t1;
    var cc_check = function () {
        tt2 = new Date().getTime();
        if (tt2 - tt1 > ast2 * 1.3) {
            cc_noapp = false;
            return false;
        }
        tt1 = tt2;
        !cc_stop && setTimeout(cc_check, ast2)
    }
    setTimeout(cc_check, ast2)
    setTimeout(function () {
        cc_stop = true;
        //有APP
        if (new Date().getTime() - t1 > t + 200) {

        }
        else {
            if (cc_noapp) {
                window.location.href = baseUrl[scheme.split(':')[0]];
            }
            else {

            }
        }
    }, t)
}


/**
   * 获取浏览器类型
   * @returns {*} 返回一个对象。【
   * ipad|iphoneOs|midp|uc|uc7|uc|android|ce|winphone 手机浏览器类型
   * ie5|ie6|ie7|ie8|ie9|ie10|ie11|moz|webkit|opera|safari PC浏览器类型
   * mob:是否手机端
   * pc:是否PC端
   * iosversion:IOS版本
   * 】
   */
function browser() {
    var _fn = function () {
        var ret = {};
        var sUserAgent = navigator.userAgent.toLowerCase();
        ret.ipad = sUserAgent.match(/ipad/i) == "ipad";
        ret.ipod = sUserAgent.match(/ipod/i) == "ipod";
        ret.iphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        ret.midp = sUserAgent.match(/midp/i) == "midp";
        ret.uc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        ret.uc = sUserAgent.match(/ucweb/i) == "ucweb";
        ret.qq = /qqbrowser/i.test(sUserAgent);
        ret.android = sUserAgent.match(/android/i) == "android";
        ret.is360 = /360 aphone browser/i.test(sUserAgent) || /360browser/i.test(sUserAgent);
        ret.chrome = /chrome/i.test(sUserAgent)
        ret.ce = sUserAgent.match(/windows ce/i) == "windows ce";
        ret.winphone = sUserAgent.match(/windows mobile/i) == "windows mobile";
        ret.isweixin = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
        if (ret.ipad || ret.iphoneOs || ret.ipod) {
            ret.ios = true;
        }
        if (!(ret.ipad || ret.iphoneOs || ret.midp || ret.uc7 || ret.uc || ret.android || ret.ce || ret.winphone)) {
            return false;
        }
        else {
            if (navigator.userAgent.toLowerCase().match(/applewebkit\/([\d.]+)/).length > 1) {
                var _v = parseFloat(navigator.userAgent.toLowerCase().match(/applewebkit\/([\d.]+)/)[1]);
                _v = !isNaN(_v) ? _v : null;
                if (_v < 534 && !ret.uc) ret.isandroidbrowser = true;
            }
            return ret;
        }

    }

    var _iosfn = function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var ret = null;
        var reg = /OS \d+_\d[_\d]* like Mac OS X/i;
        var vreg = /\d+/g;
        var iosstr = sUserAgent.match(reg);
        if (iosstr && iosstr.length) {
            var ver = iosstr[0].match(vreg)
            if (ver) {
                ver = ver.join(".");
                ret = ver;
            }
        }
        return ret;

    }

    var _android = function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var ret = null;
        var reg = /android (\d+.)+\d/g;
        var vreg = /\d/g;
        var androidstr = sUserAgent.match(reg);
        if (androidstr && androidstr.length) {
            var ver = androidstr[0].match(vreg)
            if (ver) {
                ver = ver.join(".");
                ret = ver;
            }
        }
        return ret;
    }

    var _weixin_version = function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var ret = null;
        var reg = /MicroMessenger\/([\d\.]+)/i;
        var str = sUserAgent.match(reg);
        if (str && str.length > 1) {
            str = str[1];
            ret = str;
        }
        return ret;
    }

    var _versionfn = function (str) {
        var _ret = 0;
        try {
            var _ver = parseFloat(navigator.userAgent.toLowerCase().match(str)[1]);
            if (isNaN(_ver)) _ret = 0;
            else _ret = _ver;
        } catch (e) {
            _ret = 0;
        }
        return _ret;
    }
    var ret = {}
    var _fna = function (obj) {
        obj = obj ? obj : {};
        if (obj.moz) return "Mozilla";
        if (obj.webkit) return "WebKit";
        if (obj.opera) return "Opera";
        if (obj.ie11) return "Internet Explorer 11";
        if (obj.ie10) return "Internet Explorer 10";
        if (obj.ie9) return "Internet Explorer 9";
        if (obj.ie8) return "Internet Explorer 8";
        if (obj.ie7) return "Internet Explorer 7";
        if (obj.ie6) return "Internet Explorer 6";
        if (obj.ie5) return "Internet Explorer 5";
        if (obj.ipad) return "Ipad";
        if (obj.iphoneOs) return "Iphone";
        if (obj.midp) return "Midp";
        if (obj.uc7 || obj.uc) return "Uc browser";
        if (obj.android) return "Android Browser";
        if (obj.cs) return "Window CE";
        if (obj.winphone) return "Window Moblie";
    }
    var mobile = _fn();
    if (mobile) {
        ret = mobile;

        ret.pc = false;
        ret.mob = true;
        ret.iosversion = _iosfn();
        ret.androidversion = _android();
        if (ret.isweixin) {
            ret.weixin_version = _weixin_version();
        }
    }
    else {
        var nav = navigator.userAgent.toLowerCase();
        var pc = {};
        pc.version = 0;
        pc.moz = /firefox/.test(nav);
        pc.webkit = /webkit/.test(nav);
        pc.opera = /opera/.test(nav);
        pc.safari = /safari/.test(nav);
        if (pc.moz) {
            pc.version = _versionfn(/firefox\/([\d.]+)/);
        }
        else if (pc.webkit) {
            pc.version = _versionfn(/chrome\/([\d.]+)/);
        }
        else if (pc.opera) {
            pc.version = _versionfn(/opera\/([\d.]+)/);
        }
        pc.ie = /msie/.test(nav);
        pc.ie11 = false;
        pc.ie10 = false;
        pc.ie9 = false;
        pc.ie8 = false;
        pc.ie7 = false;
        pc.ie6 = false;
        pc.ie5 = false;
        if (pc.ie) {
            var _ver = nav.match(/msie ([\d.]+)/)[1];

            if (_ver == "11.0") pc.ie11 = true;
            else if (_ver == "11.0") pc.ie11 = true;
            else if (_ver == "10.0") pc.ie10 = true;
            else if (_ver == "9.0") pc.ie9 = true;
            else if (_ver == "8.0") pc.ie8 = true;
            else if (_ver == "7.0") pc.ie7 = true;
            else if (_ver == "6.0") pc.ie6 = true;
            else pc.ie5 = true;
            var _vs = parseInt(_ver);
            if (!isNaN(_vs)) pc.version = _vs;
        }
        ret = pc;
        ret.mob = false;
        ret.pc = true;
        ret.version = pc.version;
    }
    ret.tostring = _fna(ret);
    return ret;
}
```

```html
<button class="open-app" onclick="openApp('alipay://')">
    打开微信APP
</button>
<button class="open-app" onclick="openApp('mqq://')">
    打开QQAPP
</button>

<button class="open-app" onclick="openApp('TencentWeibo://')">
    打开腾讯微博
</button>
<button class="open-app" onclick="openApp('taobao://')">
    打开淘宝APP
</button>
```

```css
body {
    text-align: center;
    padding-top: 100px;
}
.open-app {
    background: linear-gradient(to left,#fd4596,#912df8);
    border: 0;
    width: 130px;
    height: 50px;
    color: #fff;
    border-radius: 6px;
    font-size: 16px;
    display: inline-block;
    margin-top: 10px;
}
```

```html
<!--实例源代码-->

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0, viewport-fit=cover">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="renderer" content="webkit">
        <title>H5唤醒APP - Demo</title>
        <style>
            body {
                text-align: center;
                padding-top: 100px;
            }
            .open-app {
                background: linear-gradient(to left,#fd4596,#912df8);
                border: 0;
                width: 130px;
                height: 50px;
                color: #fff;
                border-radius: 6px;
                font-size: 16px;
                display: inline-block;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <button class="open-app" onclick="openApp('weixin://')">
            打开微信APP
        </button>
        <button class="open-app" onclick="openApp('mqq://')">
            打开QQAPP
        </button>

        <button class="open-app" onclick="openApp('TencentWeibo://')">
            打开腾讯微博
        </button>
        <button class="open-app" onclick="openApp('taobao://')">
            打开淘宝APP
        </button>

    </body>
</html>
<script src="../demo-assets/jquery1.8.js"></script>
<script>
    var baseUrl = {
        "weixin": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mm',
        "taobao": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.taobao.taobao',
        "mqq": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mobileqq',
        "TencentWeibo": 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.WBlog'
    }
    function openApp(scheme) {
        var can_open = false;
        var url = scheme;
        var browser = this.browser();
        if ( browser.isweixin ) { // 如果是 微信 则跳转到应用宝
            window.location.href = baseUrl[scheme.split(':')[0]];
            return false;
        }
        var _loading = function () {
            console.log('正在打开App');
        }
        var $_ifr = $("<iframe src=''></iframe>");
        var t = 3000, ast2 = 100;
        $_ifr.attr("id", "test");
        $_ifr.attr("style", "display:none");
        $("body").append($_ifr);
        $_ifr.attr("src", url);
        if ( browser.ios  ) {
            window.location.href = url;
        }
        _loading();

        var t1 = new Date().getTime();
        var cc_noapp = true;
        var cc_stop = false;
        var cc_count = 0;
        var tt2, tt1 = t1;
        var cc_check = function () {
            tt2 = new Date().getTime();
            if (tt2 - tt1 > ast2 * 1.3) {
                cc_noapp = false;
                return false;
            }
            tt1 = tt2;
            !cc_stop && setTimeout(cc_check, ast2)
        }
        setTimeout(cc_check, ast2)
        setTimeout(function () {
            cc_stop = true;
            //有APP
            if (new Date().getTime() - t1 > t + 200) {

            }
            else {
                if (cc_noapp) {
                    window.location.href = baseUrl[scheme.split(':')[0]];
                }
                else {

                }
            }
        }, t)
    }


    /**
   * 获取浏览器类型
   * @returns {*} 返回一个对象。【
   * ipad|iphoneOs|midp|uc|uc7|uc|android|ce|winphone 手机浏览器类型
   * ie5|ie6|ie7|ie8|ie9|ie10|ie11|moz|webkit|opera|safari PC浏览器类型
   * mob:是否手机端
   * pc:是否PC端
   * iosversion:IOS版本
   * 】
   */
    function browser() {
        var _fn = function () {
            var ret = {};
            var sUserAgent = navigator.userAgent.toLowerCase();
            ret.ipad = sUserAgent.match(/ipad/i) == "ipad";
            ret.ipod = sUserAgent.match(/ipod/i) == "ipod";
            ret.iphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            ret.midp = sUserAgent.match(/midp/i) == "midp";
            ret.uc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            ret.uc = sUserAgent.match(/ucweb/i) == "ucweb";
            ret.qq = /qqbrowser/i.test(sUserAgent);
            ret.android = sUserAgent.match(/android/i) == "android";
            ret.is360 = /360 aphone browser/i.test(sUserAgent) || /360browser/i.test(sUserAgent);
            ret.chrome = /chrome/i.test(sUserAgent)
            ret.ce = sUserAgent.match(/windows ce/i) == "windows ce";
            ret.winphone = sUserAgent.match(/windows mobile/i) == "windows mobile";
            ret.isweixin = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
            if (ret.ipad || ret.iphoneOs || ret.ipod) {
                ret.ios = true;
            }
            if (!(ret.ipad || ret.iphoneOs || ret.midp || ret.uc7 || ret.uc || ret.android || ret.ce || ret.winphone)) {
                return false;
            }
            else {
                if (navigator.userAgent.toLowerCase().match(/applewebkit\/([\d.]+)/).length > 1) {
                    var _v = parseFloat(navigator.userAgent.toLowerCase().match(/applewebkit\/([\d.]+)/)[1]);
                    _v = !isNaN(_v) ? _v : null;
                    if (_v < 534 && !ret.uc) ret.isandroidbrowser = true;
                }
                return ret;
            }

        }

        var _iosfn = function () {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var ret = null;
            var reg = /OS \d+_\d[_\d]* like Mac OS X/i;
            var vreg = /\d+/g;
            var iosstr = sUserAgent.match(reg);
            if (iosstr && iosstr.length) {
                var ver = iosstr[0].match(vreg)
                if (ver) {
                    ver = ver.join(".");
                    ret = ver;
                }
            }
            return ret;

        }

        var _android = function () {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var ret = null;
            var reg = /android (\d+.)+\d/g;
            var vreg = /\d/g;
            var androidstr = sUserAgent.match(reg);
            if (androidstr && androidstr.length) {
                var ver = androidstr[0].match(vreg)
                if (ver) {
                    ver = ver.join(".");
                    ret = ver;
                }
            }
            return ret;
        }

        var _weixin_version = function () {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var ret = null;
            var reg = /MicroMessenger\/([\d\.]+)/i;
            var str = sUserAgent.match(reg);
            if (str && str.length > 1) {
                str = str[1];
                ret = str;
            }
            return ret;
        }

        var _versionfn = function (str) {
            var _ret = 0;
            try {
                var _ver = parseFloat(navigator.userAgent.toLowerCase().match(str)[1]);
                if (isNaN(_ver)) _ret = 0;
                else _ret = _ver;
            } catch (e) {
                _ret = 0;
            }
            return _ret;
        }
        var ret = {}
        var _fna = function (obj) {
            obj = obj ? obj : {};
            if (obj.moz) return "Mozilla";
            if (obj.webkit) return "WebKit";
            if (obj.opera) return "Opera";
            if (obj.ie11) return "Internet Explorer 11";
            if (obj.ie10) return "Internet Explorer 10";
            if (obj.ie9) return "Internet Explorer 9";
            if (obj.ie8) return "Internet Explorer 8";
            if (obj.ie7) return "Internet Explorer 7";
            if (obj.ie6) return "Internet Explorer 6";
            if (obj.ie5) return "Internet Explorer 5";
            if (obj.ipad) return "Ipad";
            if (obj.iphoneOs) return "Iphone";
            if (obj.midp) return "Midp";
            if (obj.uc7 || obj.uc) return "Uc browser";
            if (obj.android) return "Android Browser";
            if (obj.cs) return "Window CE";
            if (obj.winphone) return "Window Moblie";
        }
        var mobile = _fn();
        if (mobile) {
            ret = mobile;

            ret.pc = false;
            ret.mob = true;
            ret.iosversion = _iosfn();
            ret.androidversion = _android();
            if (ret.isweixin) {
                ret.weixin_version = _weixin_version();
            }
        }
        else {
            var nav = navigator.userAgent.toLowerCase();
            var pc = {};
            pc.version = 0;
            pc.moz = /firefox/.test(nav);
            pc.webkit = /webkit/.test(nav);
            pc.opera = /opera/.test(nav);
            pc.safari = /safari/.test(nav);
            if (pc.moz) {
                pc.version = _versionfn(/firefox\/([\d.]+)/);
            }
            else if (pc.webkit) {
                pc.version = _versionfn(/chrome\/([\d.]+)/);
            }
            else if (pc.opera) {
                pc.version = _versionfn(/opera\/([\d.]+)/);
            }
            pc.ie = /msie/.test(nav);
            pc.ie11 = false;
            pc.ie10 = false;
            pc.ie9 = false;
            pc.ie8 = false;
            pc.ie7 = false;
            pc.ie6 = false;
            pc.ie5 = false;
            if (pc.ie) {
                var _ver = nav.match(/msie ([\d.]+)/)[1];

                if (_ver == "11.0") pc.ie11 = true;
                else if (_ver == "11.0") pc.ie11 = true;
                else if (_ver == "10.0") pc.ie10 = true;
                else if (_ver == "9.0") pc.ie9 = true;
                else if (_ver == "8.0") pc.ie8 = true;
                else if (_ver == "7.0") pc.ie7 = true;
                else if (_ver == "6.0") pc.ie6 = true;
                else pc.ie5 = true;
                var _vs = parseInt(_ver);
                if (!isNaN(_vs)) pc.version = _vs;
            }
            ret = pc;
            ret.mob = false;
            ret.pc = true;
            ret.version = pc.version;
        }
        ret.tostring = _fna(ret);
        return ret;
    }

</script>
```

