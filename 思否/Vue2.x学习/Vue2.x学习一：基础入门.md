# 基础简介

**Vue属于数据驱动框架**。
与jquery不同 ( jquery是对dom的封装，属于模型驱动框架)。
数据驱动框架：即数据--驱动--模型。
也就是说，数据的改变会影响视图的改变，而这样的过程由框架来完成。

**Vue采用MVVM模式**。
M------Modal----------数据模型-----表示在data属性中定义的内容
V-------View-----------视图-----------html标签显示的内容
VM----ViewModal----中间件--------将模型中的数据转换为视图

## 兼容性

**Vue 不支持 IE8 及以下版本**，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。
----事实上，在MVVM框架兴起之后，大家对兼容性的要求就不是这么高了。而现在兼容IE8 及以下版本的公司（技术更新比较慢的公司），不会用到vue框架，也不会招用vue框架的人。因此，我们的市场是中小型公司和先进的公司。

## 安装

**①直接用 <script> 引入**
将文件直接下载到本地，放到要引入文件的文件夹中，通过<script src=" "></script>引入。
此时，Vue 会被注册为一个全局变量。
一般在教学中使用。

**②cdn 在线引入**
链接到一个你可以手动更新的指定版本号，如：
<script src="[https://cdn.jsdelivr.net/npm/...](https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js&quot);></script>

**③npm**
$ npm install vue
一般在开发项目时使用，需要用到vue-cli脚手架。

# Vue实例

## 1）在创建vue实例之前，我们先创建一个html文档，然后引入vue.js文件。

需要注意的是：当我们引入vue.js后，（就像引入jquery.js,它为我们提供了一个全局变量$）,它并不并不影响全局变量。我们使用了框架之后，它只会影响一个变量，那就是Vue变量，以供我们的代码直接调用。

我们可以简单的测试一下：

```html
<script type="text/javascript">
    //vue框架提供的全局变量Vue,它是构建Vue对象的构造函数
    console.log(Vue);
    /*打印结果为：function mn(e){this._init(e)}*/    
</script>
```

如果你引入js文件了，并且成功地在控制台打印出了结果，那么你就可以进行接下来的操作了。

## 2）在<body></body>中编写视图代码

以下面代码为例：

```html
<div class="container">
    <div class="header">
        <h3>第一个Vue实例</h3>
    </div>
    <div class="content">
        <table class="table table-bordered table-hover">
            <caption class="text-center" style="caption-side: top;">
                <h4>学生信息</h4>
            </caption>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                </tr>
            </thead>            
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
```

需要注意的是：
在写代码的时候最好要用一个根标签包裹。例如：<div class="container"></div>
我们要注意代码规范，并且在写代码的时候可以活用bootstrap框架，这样可以简化我们的代码开发。

写完我们要显示的内容之后，接下来就要，开始我们的主要部分了。

## 3）构建Vue对象的构造函数

**①通过用Vue函数创建一个新的Vue实例。**

```vue
<script type="text/javascript">
    var vm = new Vue({ 传递对象/选项 });
</script>
```

**②传递选项 el,data**

在对象中，我们可以传递以下选项：

------

**el**
提供一个在页面上已存在的DOM元素作为Vue实例的 挂载目标(作用对象)。
例如：

```vue
<script type="text/javascript">
    var vm=new Vue({
        el:'.container'
    });
</script>
```

当然，如果Vue实例在实例化时没有收到el选项，则它处于“未挂载”状态。
此时，我们可以通过vm.$mount()进行手动挂载。
例如：

```vue
<script type="text/javascript">
    var vm=new Vue({
        //选项
    });
    vm.$mount('.container');
</script>
```

或者直接这样写：

```vue
<script type="text/javascript">
    new Vue({
        //选项
    }).$mount('.container');
</script>
```

------

**data**
它是一个对象，页面中的所有数据都定义在data:{}中。
此时，我们需要知道在vue中，数据绑定最常见的形式就是使用“Mustache”语法 (双大括号)，即{{}}。
我们先进行一个测试：

```vue
<div class="container">
    {{msg}}
</div>

<script type="text/javascript">
    var vm=new Vue({
        el:'.container',
        data:{
            msg:'hello world'
        }
    });
</script>
<!-- 在页面中打印出的结果就是 hello world -->
```

由此，我们可知双大括号中的语法可被vue解析，而这个被解析的值就是在data中寻找。

**③遍历 v-for**
我们要遍历信息，要用到一个命令，v-for，它是根据一组数组的选项列表进行渲染。
它的语法形式是：v-for="item in items"
其中，item是数组元素迭代的别名，items 是源数据数组(也就是要放在data对象中，供item来寻找，每找到一次就要进行for-of循环)。
因此，之前写的代码实例，能够被修改成这样：

```vue
<tr v-for='student in studentList'>
    <td>{{student.name}}</td><!-- 将学生中的name取出 -->
    <td>{{student.age}}</td><!-- 将学生中的age取出 -->
</tr>
data:{
    //studentLsit是数组，因此用中括号
    //目前由于没有与后台数据库进行绑定，因此在这里为了学习，直接赋值
    studentList:[{
        name:'terry',
        age:'12'
    },{
        name:'larry',
        age:'13'
    }]
}
```

完整代码如下：



```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>第一个Vue实例</title>
    <link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="header"><h3>第一个Vue实例</h3></div>
        <div class="content">
            <table class="table table-bordered table-hover">
                <caption class="text-center" style="caption-side:top">
                    <h4>学生信息</h4>
                </caption>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='student in studentList'>
                        <td>{{student.name}}</td>
                        <td>{{student.age}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                studentList:[{
                    name:'terry',
                    age:'12'
                },{
                    name:'larry',
                    age:'13'
                }]
            }
        });
    </script>
</body>
</html>
```