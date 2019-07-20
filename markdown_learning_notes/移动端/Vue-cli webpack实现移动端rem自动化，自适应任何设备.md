### 1 安装vue-cli略

### 2 sass和postcss-px2rem

> 第一步 ：安装

**sass 部分**

> cnpm install sass-loader --save-D
> cnpm install node-sass --save-D

**postcss-px2rem 部分**

> cnpm install postcss-px2rem --save-D

> 第二步 ： webpack.dev.conf.js和webpack.prod.conf.js下的plugins添加一个东西，大家一定要注意remUnit这个属性，就是在苹果5情况下为40px，我这里定为40，也有人定为80，我这里40是为了配合hotcss使用下面我会讲到

```javascript
  plugins: [
    new webpack.LoaderOptionsPlugin({
      // webpack 2.0之后， 此配置不能直接写在自定义配置项中， 必须写在此处
      vue: {
        postcss: [require('postcss-px2rem')({ remUnit: 40, propWhiteList: [] })]
      }
    })
  ]
```

到这里为止安装就完成了
输入font-size:40px 
输出font-size:1rem (在iphone5下)

### 3 我们都知道设备的像素比不一样的，所以我们用hotcss来调整设备的像素比 [链接](https://github.com/imochen/hotcss/blob/master/src/hotcss.js)

我放在了src/assets/js/里面大家可根据习惯来
在webpack.base.conf.js下
引入方法，自己定义什么名字都行，这里我吧hotcss.js改为了viewport.js

```javascript
module.exports = {
  entry: {
    app: './src/main.js',
    rem: './src/assets/js/viewport.js'
  }
}
```

这样就大功告成啦