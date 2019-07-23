# [vux修改css样式的2种办法](https://www.cnblogs.com/pass245939319/p/10000206.html)

 最近手上有个移动端的项目。前端UI框架是选择的VUX。但是在使用的时候经常会发现框架自带的组件样式和我们要求的不一致。经常需要手动覆盖样式。这里记录下我们使用的2种方法。

我们以XHeader组件为例。XHeader组件默认为藏青色。
![enter image description here](http://img.shepherd618.cn/x-header-d.png)
![enter image description here](http://img.shepherd618.cn/x-header.png)

##### 全局方式

找到build目录下的webpack.base.conf在最后加入一下2行

```js
const themeConfig={
    name: 'less-theme',
    path: 'src/assets/less/theme.less'
};
module.exports = vuxLoader.merge(webpackConfig, {
    plugins:['vux-ui', themeConfig]
});
```

注意path的路径
![enter image description here](http://img.shepherd618.cn/css-d.png)
然后我们在theme.less里面增加

```less
/**
* Header
*/
@header-background-color: #3cc51f;
@header-title-color: black;
```

![enter image description here](http://img.shepherd618.cn/x-heard-l.png)

##### 局部方式

  由于有时候我们一个界面有多个组件。样式都不一致的时候。全局方式就不适用了。所以我们需要采用局部的方式。同样还是XHeader我们这次需要把他们在同个界面把颜色修改成2种颜色可以使用/deep/ 或者>>>这里方式来修改。
![enter image description here](http://img.shepherd618.cn/x-heared-d.png)

```vue
<template>
<div class="wrap">
    <x-header class="">XX银行<a slot="right"></a>
    </x-header>
    <div class="wrap1">
        <x-header class="">XX银行<a slot="right"></a>
    </x-header>
    </div>
    <toast v-model="isToast" type="text" position="middle" :text="toastTxt" width="auto"></toast>
    </div>
</template>

<style scoped>
    .wrap /deep/ .vux-header {
        background-color: #3cc51f;
    }
    .wrap1 >>> .vux-header {
        background-color: red;
    }
</style>
```

转载需在明显位置处注明出处。
作者:[进击的小羊驼](http://www.cnblogs.com/pass245939319) 
如果文章有错的地方欢迎指正，大家互相交流。