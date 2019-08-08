# 删除Vue中的Eslint代码检查工具

#### 前言

如果在使用Vue-CLI创建Vue项目的时候, 在cmd中会询问`Use ESLint to lint your code?`,默认是`yes`. 如果采用了 Eslint, 它严格的代码检查会让项目开发异常痛苦,所以最好关闭Eslint的代码检查.

#### 关闭方法

**1.在bulid目录下找到webpack.base.conf.js文件,点击进入**



![img](https:////upload-images.jianshu.io/upload_images/5318700-5d6251fd63d668a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/559/format/webp)



**2. 删除rules数组中的eslint配置(如图区域)**



![img](https://upload-images.jianshu.io/upload_images/5318700-4bdef93d08e95045.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/658/format/webp)



**3. npm run dev ,重启服务器(改变webpack配置文件, 必须重启)**

作者：李棠辉

链接：https://www.jianshu.com/p/bafd62610e7a

来源：简书

简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。