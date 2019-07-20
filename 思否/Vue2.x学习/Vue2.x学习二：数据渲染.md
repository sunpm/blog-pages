之前，我们提到了vue可以解析双大括号中的语法，数据绑定——{{msg}}，以及，列表渲染——v-for。在这一章中，我们将详细说明数据的几种绑定/渲染方式。

# 单向数据绑定

之前一章中我们提到过，此处，我们通过代码，进行简单回顾。

```vue
<body>
    <div class="container">
    <!-- data中的msg映射到此处 -->
        {{msg}}
    </div>

    <script type="text/javascript">
        //构建Vue对象实例
        new Vue({
            //当前Vue对象的作用范围
            el:'.container',
            //定义页面中需要渲染的数据
            data:{
                msg:'hello world'
            }
        });
    </script>
</body>
```

**补充**
我们说过，在双大括号中的语法变量能够被Vue解析。事实上，双大括号中还能够放表达式，常规表达式都能够被解析。

## {{表达式}}

下面举几个例子来说明
**①{{a+b}}**

```vue
<body>
    <div class="container">
        {{a+b}}
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                a:1,
                b:2
            }
        });
    </script>
    <!-- 打印结果：3 -->
</body>
```

**②三目运算{{a ? 'a存在' : 'a不存在'}}**
这句代码的意思是：是否存在a，如果a存在，那么打印“a存在”，否则，打印“a不存在”。

```vue
<body>
    <div class="container">
        {{a?'a存在':'a不存在'}}
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                a:1,
                b:2
            }
        });
    </script>
    <!-- 打印结果：a存在 -->
</body>
```

如果a为null,undefined,0，NaN，''等这些值的时候，那么打印出的结果为“a不存在”。
此处的原理是：数据类型的转换。

# 双向数据绑定

单向数据绑定中msg的数据只能显示，但是不能改变，通过双向数据绑定v-model，我们可以在页面中，人为的改变其中的数据，并且这样的改变是同步的。

v-model 指令可以在表单 <input> 及 <textarea> 元素上创建双向数据绑定，它负责监听用户的输入事件以更新数据。
在v-model中，写入你要绑定的值的模型。
比如，我们要改变页面中msg显示的hello world，那么我们就可以这样写，v-model="msg"。

我们要记住，**只有**表单元素<input>及<textarea> 元素可以进行双向数据绑定。

下面通过具体例子来说明：

```vue
<body>
    <div class="container">
        <p>{{msg}}</p>
        <!-- 
            双向数据绑定
            这里，我们通过input表单，来获取用户输入的值
            用v-model绑定模型
        -->
        <input type="text" v-model="msg">
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello world'
            }
        });
    </script>
</body>
```

这里我们要理清思路：div中{{msg}}的值，是从我们构建的Vue对象中的data中寻找到的。也就是说：我们可以改变表单元素的值，这个值会去改变data中msg的值，然后data中msg的值改变之后，上面div中{{msg}}的值也会发生改变。所以这种形式，我们称为双向数据绑定。

# 列表渲染

v-for,列表渲染之前也提到过，它是根据一组数组的选项列表进行渲染。
下面我们通过简单的代码例子来回顾

```vue
<body>
    <div class="container">
        <ul>
            <!-- 
                在li中通过v-for指令，来遍历data中，arrList中的数据
                自定义一个数据迭代的别名arr,并且arr能够遍历arrList中的数据
                通过双大括号，将arr中的值输入在内
             -->
            <li v-for="arr in arrList">{{arr}}</li>
        </ul>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                arrList:['terry','larry']
            }
        });
    </script>
<!-- 打印结果：以列表的形式打印出terry,larry -->
</body>
```

# 条件渲染

条件渲染的表达式的返回值是“布尔类型”，并且与if-else循环语句相似。
下面来看一下几种条件渲染的指令：

## v-if

v-if指令中的值可以是我们自己定义在data中的值或者表达式。
表达式，如:"Math.random() > 0.5"，这种返回值为布尔类型的就可以。
如果返回值为“true”,那么v-if中的内容会被显示;反之，它不会被显示。

下面来测试一下：

```vue
<body>
    <div class="container">
    <!-- 如果data中的user存在，对应返回p标签中的内容 -->
        <p v-if="user">欢迎您</p>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                user:'user',//打印结果：欢迎您
                /*
                user:'',//打印结果：什么都打印不出来
                当user为null,undefined,0，NaN，''等这些值的时候，都打印不出来
                */
            }
        });
    </script>
</body>
```

## v-else

v-else必须与v-if或者v-else-if配合使用，否则它将不会被识别。
它的意思是，如果v-if的返回值为“false”，那么它将显示v-else中的内容。

下面我们来测试一下：

```vue
<body>
    <div class="container">
        <p v-if="user">欢迎您</p>
        <p v-else>您未登陆</p>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                user:'',
            }
        });
    </script>
    <!-- 打印结果：您未登陆 -->
</body>
```

## v-else-if

v-else-if，充当v-if的“else-if”部分，可连续使用。
它也必须紧跟在v-if之后，无法单独使用。

下面测试一下：

```vue
<body>
    <div class="container">
        <p v-if="type === 'A'">A</p>
        <p v-else-if="type === 'B'">B</p>
        <p v-else-if="type === 'C'"> C</p>
        <p v-else>Not A/B/C</p>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                type:'B'
            }
        });
    </script>
    <!-- 打印结果：B -->
</body>
```

## v-show

v-show的返回值也为布尔类型，它用来控制代码所示的视图是否显示。
但与v-if不同的是：带有 v-show 的元素始终会被渲染并保留在DOM中，只是改变css中的display属性。

下面来测试一下：

```vue
<body>
    <div class="container">
        <p v-show="isShow">显示</p>
        <!-- isShow是条件渲染的一个属性，所以是一个变量，放在data中 -->
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                isShow:false
                /*v-show意味着是否显示，属性为假，因此不会显示
                如果 isShow:true,则会显示*/
            }
        });
    </script>
    <!-- 无打印结果 -->
</body>
```

下面引用一段官方文档中的关于v-if与v-show区别的话。
**v-if vs v-show**
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

# 属性渲染

我们先来看一下以下代码

```vue
<body>
    <div class="container">
        <!-- 怎么显示data中title的值 -->
        <button>按钮</button>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                //随便定义的值
                title:'this is title'
            },
        });
    </script>
</body>
```

此时，我们有一个问题：如何让data中title的值显示到button中？
原先我们是这么写的：

`<button title="button">按钮</button>`
让title的值在鼠标悬停到button上时，作为提示显示出来。
但这并不是我们所期望的，我们希望悬停时显示的值不是写死的。

这时，我们可以用v-bind来给它绑定属性。
v-bind可以动态地绑定一个或多个特性，或一个组件prop到表达式（prop之后会在组件中讲到）。
它的语法形式是这样的：v-bind:属性名="(定义在data中的)变量"

所以上面的代码可以这样变一下：

```vue
<!-- v-bind动态的绑定(vue中的)属性title -->
<button v-bind:title="title">按钮</button>
<!-- 
 简写
<button :title="title">按钮</button>
-->
```

当然，它还可以其他特性：
**1)样式属性的绑定（通过style）**
（事件的绑定内容在下一章节会有）
以下面代码为例：

```vue
<body>
    <div class="container">
        <!-- 目标：当我们点击p标签，字体变色 -->
        <!-- 属性的绑定用v-bind
            为样式绑定属性，我们可以用v-bind:style="",
            简写 :style=""
         -->
         <!-- 直接写对象，对象中由键值对组成,{样式的属性名:样式的属性值}
               样式的属性值，必须在vue对象中的data中获取
               事件的绑定用v-on: 简写@ ，方法定义在methods中
         -->
        <p :style="{color:fontColor}" @click="scale">{{msg}}</p>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'click me',
                fontColor:'#666'
            },
            methods:{
                // 当我们点击p标签，字体变色
                scale(){
                    this.fontColor='orange';
                }
            }
        });
    </script>
</body>
```

**2)样式属性的绑定（通过class）**

```vue
<body>
    <style type="text/css">
        .block {
            background-color: orange;
            color: #fff;
            border-radius: 3px;
        }
        .aaa {
              padding: .5em 1em;
        }
        .bbb {
              border:2px solid pink;
        }
        .ccc {
            font-weight: bold;
            font-size: 24px;
        }
    </style>
    
    <div class="container">
        <!-- 第一种： 只有一个class-->
        <!-- 在class中的取值就为一个变量
            isBlock为布尔类型的值
            如果，isBlock为true，那么class的取值为block
            如果，isBlock为false，那么class的取值就不为block
            这种写法一定要在style标签中定义block样式
         -->
        <p v-bind:class="{block:isBlock}">{{msg}}</p>
        <!-- 第二种： 有多个class-->
        <!-- 用中括号将多个class包裹，每个class之间用逗号分隔，相当于数组 -->
        <!-- {block:isBlock}：如果isBlock为true，返回值为block 
             'aaa'：用引号引起来，相当于字符串，不会被解析，原样输出
              className：没有单引号，是一个变量，访问data中的className
              class="ccc"：常规css样式
        -->
        <p v-bind:class="[{block:isBlock},'aaa',className]" class="ccc">{{msg}}</p>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'click me',
                isBlock:true,
                // 定义一个样式为bbb
                className:'bbb',
            }
        });
    </script>
</body>
```

**3)style样式属性中传入对象**

```vue
<body>
    <div class="container">
        <!-- 直接给style属性样式传入对象，并在data中定义 -->
        <!-- 只有一个对象 -->
        <p v-bind:style="styleObj">{{msg}}</p>
        <!-- 有多个对象 -->
        <p v-bind:style="[styleObj,styleObj2]">{{msg}}</p>
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'click me',
                // 给style属性传入的对象
                // 相当于将css的样式规则写在js中
                styleObj:{
                    /*由于是一个对象，
                      当属性名为普通字符串的时候不需要加引号，
                      当属性名为特殊写法时，如background-color，要加引号
                    */
                    'background-color':'pink',
                      'color':'#fff',
                      'padding':'.5em 1em'
                },
                styleObj2:{
                      'border-radius':'10px'
                }
            }
        });
    </script>
</body>
```

------

此处讲解的只是基础内容，如果想要详细了解，可以查看Vue.js官方教程文档：<https://cn.vuejs.org/v2/guide/>