# [Google Fonts 的介绍与使用](https://www.cnblogs.com/milly/archive/2013/05/10/google-fonts.html)

### Google Fonts 是什么？（以下翻译为谷歌字体）

> 关于谷歌字体
>
> 使用在线字体的页面将更加漂亮，更具可读性、可访问性与开放性。
>
> 谷歌字体让所有人，包括专业的设计师与开发者可以快速、简便的使用在线字体，我们相信每个人都可以在他们的网页与应用中使用高质量的字体。
>
> 我们的目标是创建一个可以为世界各地的人所使用的在线字体目录。通过我们的 API 服务可以在几秒内为您的网站添加谷歌字体，该服务不仅快速、可靠，而且还是免费的。
>
> 开源字体
>
> 谷歌字体都是开源的，这意味着你可以自由地与你的朋友与同事分享，甚至可以基于它们定制自己的字体，或者与原来的设计师共同改善他们；你还可以以任何一种方式使用它们，私人或商业，包括印刷，在电脑上使用，或者网站使用。
>
> 我们正在与世界各地的设计师协商发布高质量的在线字体，如果你是一名字体设计师并且希望参与其中，请联系我们。
>
> 许多谷歌的页面已经在使用谷歌字体，例如谷歌的关于页与谷歌世界遗产项目，它们都使用了 Open Sans 这款字体。

以上简介翻译自>><http://www.google.com/fonts/#AboutPlace:about>

### 使用谷歌字体的好处？

- 使用谷歌字体可以使页面更加美观
- 不必担心访问者电脑上没有安装该字体而导致与预期不一致的效果

注：谷歌字体仅适用于英文页面，因为英文字体文件较小（K级别），中文或其它语言的文字由于不像英文仅需要26个字母组成，字体文件较大（均为M级别），以目前的网速没有实际意义。

### 如何使用谷歌字体？

1.进入 Google Fonts 主页>><http://www.google.com/fonts/>

2.将鼠标移动到喜欢的字体上面，然后点击 Add to Collection，可以选择多款字体，目前 Google Fonts 上有625款字体；

[![google_fonts_choose](https://images0.cnblogs.com/blog/294534/201305/10003342-8d09820182314cc6899804b8cfb58aee.jpg)](https://images0.cnblogs.com/blog/294534/201305/10003338-1dcc5fa085234a3f9a879f119ac71636.jpg)

3.然后点击右下角的 review 按钮预览效果；

[![google_fonts_review](https://images0.cnblogs.com/blog/294534/201305/10003354-85ed8552d9954ac0990c3db4211560bd.jpg)](https://images0.cnblogs.com/blog/294534/201305/10003346-884e4a99275b42b7b3cc580db3d4a463.jpg)

4.接着点击 Use 按钮来到使用介绍页面，该页面中还会提示字体大致的加载时间，所以尽可能的少选字体，同时有的字体还提供了其它字符集，如果有需要也可以勾选，当然，勾选后同样会影响加载速度。

[![google_fonts_use](https://images0.cnblogs.com/blog/294534/201305/10003358-2a78c249b76545b1a6a64df3cd020a21.jpg)](https://images0.cnblogs.com/blog/294534/201305/10003356-4c2266b2a02c4f16bba1119480a645c7.jpg)

 

5.谷歌提供了三种方式在 HTML 中引入 Google Fonts

a.标准式：

```html
<link href='http://fonts.googleapis.com/css?family=Swanky+and+Moo+Moo|Meie+Script' rel='stylesheet' type='text/css'>
```

b.导入式：

```css
@import url(http://fonts.googleapis.com/css?family=Swanky+and+Moo+Moo|Meie+Script);
```

c.JavaScript方式：

```html
<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Swanky+and+Moo+Moo::latin', 'Meie+Script::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
</script>
```



6.接下来通过 CSS 的字体定义就可以方便使用了

```
font-family: 'Swanky and Moo Moo', cursive;
```

如果想让字体显示的好看一点，还可以使用 CSS3 进行简单操作，例如添加阴影效果

```
.font-effect {text-shadow: 4px 4px 4px #aaa;}
```

当然，谷歌字体还提供了一些强大的字体效果 API，通过它们可以实现一些高级效果，目前还处于测试阶段，必且除 webkit 内核浏览器外，其它浏览器并不完全支持。

使用方法：

在链接字体库时带入字体效果的参数

```
<link href='http://fonts.googleapis.com/css?family=Swanky+and+Moo+Moo&effect=brick-sign' rel='stylesheet'>
```

然后给文字添加特定格式的 class，前缀为 font-effect- ，然后是字体效果的 API 名。

```
<p class="font-effect-brick-sign">This is an easy example for google fonts.</p>
```

详细接口：<https://developers.google.com/fonts/docs/getting_started?hl=en>

下载地址：<http://files.cnblogs.com/milly/google-fonts-sample.zip>