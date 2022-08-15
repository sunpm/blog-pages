#如何根据系统主题自动更改CSS暗黑模式（也可手动更改）

现在在很多的网站上面都可以看到主题的切换，这也不是什么复杂的东西。有一些网站的主题还可以根据系统去自动切换，例如：[Taro](https://taro-docs.jd.com/taro/docs/README)、[Lodash 中文文档](https://www.lodashjs.com/)、[surmon.me](https://surmon.me/)**、**[MacWk](https://macwk.com/)。。。



##媒体查询 prefers-color-scheme

**prefers-color-scheme** [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) [媒体特性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#media_features)用于检测用户是否有将系统的主题色设置为亮色或者暗色。

该媒体查询常见的值有：

- **`no-preference`**：表示用户未指定操作系统主题。其作为布尔值时以`false`输出
- **`light`**：表示用户的操作系统是浅色主题（`light`）
- **`dark`**：表示用户的操作系统是深色主题（`dark`）

目前，若结果为 `no-preference`，无法通过此媒体特性获知用户的系统是否支持设置主题色，或者用户是否主动将其设置为无偏好。出于隐私保护等方面的考虑，用户或用户代理也可能在一些情况下在浏览器内部将其设置为 `no-preference`。

## 默认样式

**可以是light，也可以是dark，个人喜好即可。默认是light主题。**

先给根标签加一些变量，定制主题的颜色。这样后期修改可以更加的方便也简单。

```css
:root {
    --background-color: #fff;
    --text-color: #333;
    --link-color: #b52;
}
```

> **`:root`** 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，**`:root`** 表示 `<html>`元素，除了优先级更高之外，与 `html` 选择器相同。

在默认的主题下面，你的样式可能长这样

```css
body {
    background-color: var(--background-color);
    color: var(--text-color);
}

a {
    color: var(--link-color);
}
```

这只是举例了两个，剩下的可以按照HTML结构，页面设计去编写CSS



## dark模式

如果只有两个主题，需要根据系统主题去更换而改变，可以使用媒体查询。

如果设置多种主题，需要让用户手动去切换，可以使用修改class切换变量的值达到切换主题颜色的效果。

### 媒体查询

```css
@media (prefers-color-scheme: dark) {
    :root {
        --background-color: #111416
        --text-color: #ccc;
        --link-color: #f96;
    }
}
```

深色模式自动响应，如果当前系统是dark模式，就使用里面的css，从而覆盖了默认的css变量

### class

```css
.dark {
  --background-color: #111416
  --text-color: #ccc;
  --link-color: #f96;
}
```

一般在最外层的容器添加`.dark`类名，它的后代元素使用的到对应的css变量，都会覆盖`:root`的值

## Javascript更改主题

在进来页面的时候，可以先判断一下当前是否为dark主题

```js
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  //深色主题, 可以在这里给某个DOM添加dark的class的逻辑
}
```

> [`matchMedia` (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia)方法返回一个[`MediaQueryList` (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList)对象，该对象具有属性`matches`、`media`，具有方法`addListener`、`removeListener`。



![image-20210607114219629](https://upyun.fassr.com/image/picgo/image-20210607114219629.png)

系统是可以自动去切换主题，这个时候，我们就需要监听，然后切换

`addListener`接收一个`MediaQueryList`对象作为参数。

```javascript
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener((e) => {
  const darkModeOn = e.matches;
  console.log(`Dark mode is ${darkModeOn ? 'on' : 'off'}.`);
  if (darkModeOn) {
    // 深色模式
  }
});
```

## 结论

细节其实还有很多，单单修改字体颜色和背景颜色只是完成了大部分的工作。还有图片的亮度、切换的国度

、图标的处理等等。。。。

如果是多主题，还需要在监听系统主题事件的时候判断是否用户自己设置了主题。毕竟不能在用户设置了**中国红**主题的时候，突然又根据电脑系统主题变成深色模式。

**我相信，当用户访问了你的网站后，会发出惊艳的叫声。**
