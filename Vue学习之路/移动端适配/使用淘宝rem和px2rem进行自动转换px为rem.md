# 使用淘宝rem和px2rem进行自动转换px为rem

安装`lib-flexible`和`postcss-px2rem-exclude`

```js
//.postcssrc.js
//添加
"postcss-px2rem-exclude": {  // 添加的代码
    remUnit: 75,
    exclude: /node_modules/ // 忽略node_modules目录下的文件  //不转换组件ui的px。忽略组件ui
}
```

```js
//main.js
import 'lib-flexible/flexible'  //引入淘宝rem，修改html的font-size
```

```html
<!-- index.html -->
<meta name="viewport" content="width=device-width,initial-scale=0.5"><!-- initial-scale 原本是1，修改为0.5 -->
```

