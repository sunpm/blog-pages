# PhpStrom花括号的设置

有的程序员喜欢 

```php
function{
}
```

有的喜欢

```php
function
{
}
```

在PhpStrom中可以进行设置 
设置页面Code Style->PHP->Wrappping and Braces ->Braces placement 
选择End of line，显示如上第一种情况，next line，显示如上第二种情况





在`setting -> editor -> code style -> php -> Wrapping and Braces -> Braces placement In function declaration` 选择`End of line`



# phpstorm 取消工作区右侧白色线

较早的版本 可能在网上都能搜到  show right margin  叫这个名字
但是新版的 不是这个名字
Editor->General->Appearence->Show hard wrap guide  去掉勾就可以 取消白色线
实际上 只是把名字改了   但网上的内容都是  较早版本的 所以可能找不到

我也是找了好久才找到



# phpstorm 自动换行

> File -> Settings -> Editor -> general



![img](https://upload-images.jianshu.io/upload_images/1779921-681bbc91fcf15c34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/713/format/webp)





![img](https://upload-images.jianshu.io/upload_images/1779921-542e58d41b6444f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)



# Phpstorm [设置注释符缩进位置](https://blog.csdn.net/ASUKA2020/article/details/84527927)

在日常PHP项目开发中，使用 Phpstrom 单行注释时，注释符号「//」没有和代码缩进的位置对齐。

注释不对齐情况：

```js
function test() { 
    //这是注释
//    return false; 
}
```

我们想要的是下面这种：

```js
function test() {
    //这是注释
    //return false;
}
```

设置方式：

> 菜单栏：File > Settings > Editor > Code Style > PHP
> 取消勾选「Code Generation」 选项卡下的「Line comment at first column」
> 添加勾选 「Code Generation」 选项卡下的「Add a space at comment start」
> 设置好后，依次点击「Apply」、「OK」按钮，使配置生效。

![å¨è¿éæå¥å¾çæè¿°](https://img-blog.csdnimg.cn/20181126104439155.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0FTVUtBMjAyMA==,size_16,color_FFFFFF,t_70)