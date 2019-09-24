# vuecli3.x 中使用px2rem 忽略指定文件 不影响ui组件样式的解决方案

最近在用vuecli3.x搭建项目    安装了postcss-px2rem但是影响了ui组件的样式，网上的方法都试过，总结下

1. postcss-px2rem不能忽略指定文件   需要安装postcss-px2rem-exclude（安装前需要先卸载postcss-px2rem）

​    npm uninstall postcss-px2rem

​    npm i postcss-px2rem-exclude -D

2. 在项目搭建的时候要选择配置文件的位置了。

​     对于 Babel 、 PostCSS 等，都可以有自己的配置文件： .babelrc 、 .postcssrc 等等

​     或者也可以把配置信息放在 package.json 里面

3. 要是选择独立配置文件的 直接在根目录下  postcss.config.js内修改

exclude  就是要忽略的文件    

![img](https://upload-images.jianshu.io/upload_images/10353409-17e37602be3e851f.png)

 

4. 最坑的就是你选的配置信息都放在 package.json 里面

我参照网上的方法 把配置放在package.json  根本无效

 

![img](https://upload-images.jianshu.io/upload_images/10353409-7f377f4e9610c2fd.png)

 

之后我查看了postcss-px2rem-exclude 的源码，发现在package.json中加入的配置传过去的是  "/node_moudules/i"是字符串，并不是正则表达式，所以根本无效，我自己试了2中方法均有效

 

![img](https://upload-images.jianshu.io/upload_images/10353409-05b875723b074258.png)

 

第一种： 就是删除package.json 中关于postcss的配置

​                然后在根目录下新建postcss.config.js，把package.json中的postcss配置放到postcss.config.js

​                同3  

 ```js
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    'autoprefixer': {},
    'postcss-px2rem-exclude': { // 添加的代码
      remUnit: 75,
      exclude: /node_modules/i // 忽略node_modules目录下的文件
    }
  }
}
 ```



第二种  就是修改postcss-px2rem-exclude 源码

/node_modules/postcss-px2rem-exclude/lib/index.js 文件 增加如下内容，即可

 

 

![img](https://upload-images.jianshu.io/upload_images/10353409-fec07b0c43dbfcac.png)



<https://www.cnblogs.com/guandekuan/p/10551711.html>