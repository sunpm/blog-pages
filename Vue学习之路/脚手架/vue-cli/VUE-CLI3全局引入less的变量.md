# [VUE-CLI3全局引入less的变量](https://www.cnblogs.com/zixian/p/VUE-CLI3_less.html)

在使用Vue开发的过程中，通常会用到一些样式的全局变量，如果在每个组件中引入就太繁琐了，维护性也不好，因此全局引入是个不错的想法。下面以less为例，记录一下全局引入less变量的步骤：

### 1、首先安装依赖

在项目根目录的命令行工具里，执行以下命令。

```bash
npm i style-resources-loader vue-cli-plugin-style-resources-loader -D
# or
yarn add style-resources-loader vue-cli-plugin-style-resources-loader
```

### 2、配置vue.config.js文件

```js
pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/common/less/variable.less")] // 引入全局样式变量
    }
}
```

​		将上述代码添加到vue.config.js文件中。如图所示：

![img](https://img2018.cnblogs.com/blog/1256079/201909/1256079-20190917164805930-1452447519.png)



```js
const path = require('path')

module.exports = {
    pluginOptions: {
        // 设置 less 公用变量文件
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, 'src/assets/style/public/public.less')] // 引入全局样式变量
        }
    }
}
```

