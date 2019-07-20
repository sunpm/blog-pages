Component组件是Vue.js最强大的功能之一，它可以扩展HTML元素，封装可重用的代码（减少代码冗余）。
在较高层面上，组件是自定义元素。比如说，我们自己发明了标签，别人不认可，但是vue能够帮我们去解析，帮我们把它转换成大家都能认可的。

# 注册

我们开发组件的时候，需要告诉vue，我们创建了一个新的组件，这里我们就需要注册。
注册分为局部注册和全局注册。

## 全局注册

就是说我们可以注册一个组件，把它挂载到vue的全局变量上。
它里面有个属性叫**Vue.component(组件名称，组件定义)**。
我们可以简单的来测试一下：

```vue
<body>
    <div class="container">
        <!-- 引用自定义组件 -->
        <sf-line></sf-line>
        <!-- 如果我们要写5个这样的组件，那么我们可以用v-for -->
        <sf-line v-for="n in 5"></sf-line>
        <!-- 如果我们想要在sf-line标签中直接插入值，可以用slot插槽 -->
        <sf-line>你好</sf-line>
    </div>
    <script>
        // 在创建vue对象之前，注册组件
        // 通过全局注册Vue.component(组件名称，组件定义)，调用组件
        // 组件名称是自定义的
        // 组件定义template（模板），封装html标签，它里面是多个html的综合体，以反引号包裹html内容，（反引号的好处是可以任意回车，不用做字符串的拼接）
        Vue.component('sf-line',{
            template:`
                <div style="background-color:orange;border-radius:3px;padding:.5em 1em;margin:.5em">
                    <span>hello</span>
                    <!-- slot 插槽，可以用来接受sf-line中的值-->
                    <span><slot></slot></span>
                </div>
            `
        });

        //创建vue的实例
        new Vue({
            el:'.container',
            data:{  }
        });
    </script>
</body>
```

这就是一个最简单的全局注册的组件。

现在，我们不希望将<span>hello</span>中的值写死，我们希望能够动态改变span标签中的值，即**外部组件**（我们可以把.container理解为一个根组件）**向内部组件传值**。此时我们可以借用一个属性props。
props代表属性，也就是说，外部可以传参数，我们通过props来接收。

```vue
<body>
    <div class="container">
        <!-- 动态绑定属性 属性的绑定用v-bind 
            我们绑定一个在props中定义的属性名，
            它的属性值为vue实例data中，定义的lineText，并且lineText会被当作变量来解析
        -->
        <sf-line v-bind:node="lineText"></sf-line>
        <!-- 简写 -->
        <sf-line :node="lineText"></sf-line>
        <!-- 我们也可以定义一个属性,不用v-bind -->
        <sf-line node="组件"></sf-line>
        <!-- 如果我们这样写，lineText会被直接当作一个值打印出来，不会被当作变量解析 -->
        <sf-line node="lineText"></sf-line>
    </div>
    <script>
        //注册组件
        Vue.component('sf-line',{
            template:`
                <div style="background-color:orange;border-radius:3px;padding:.5em 1em;margin:.5em">
                    <!--接收到props中的值之后，通过双大括号来取出，双大括号中的值会被当作变量来解析-->
                    <span>{{node}}</span>
                </div>
            `,
            // 接收参数，假如参数为node
            props:['node']
        });

        //创建vue的实例
        new Vue({
            el:'.container',
            // 在.container中，我们调用了一个子组件<sf-line>，现在我们可以在vue实例的data中，定义一个值，比如说lineText
            data:{ 
                lineText:'component'
            }
        });
    </script>
</body>
```

这里我们要补充一下外部组件与内部组件传值的机制，这里我们要记住：
组件是完全独立的，它有自己的data,methods,钩子函数等，并且这些内容都包含在组件定义中——Vue.component(组件名称，组件定义)。

```vue
<body>
    <div class="container"> 
        <!-- 这是vue实例中的msg -->       
        <p>{{msg}}</p>
        <!-- 这里显示组件中的msg -->
        <sf-line></sf-line>
    </div>
    <script>
        // 注册组件，组件一定要写在vue实例上面
        Vue.component('sf-line',{
            template:`
                <div>
                    <!-- 组件是完全独立的，所以组件中的msg调用的就是组件data中的msg -->
                    <span>{{msg}}</span>
                </div>
            `,
            // 用来接收外部组件向内部组件传值
            props:[ ],
            // 组件样式中,同样有data,methods,钩子函数等...
            // 组件中的data是一个方法（不是属性），要有返回值return
            // data方法会返回一个对象，保证它是多实例的
            // 如果像vue实例中data:{}这样写，那么它就是单例的，它会出现一个问题，比如说：组件会应用多次，如果改变其中一个组件，那么其他组件也会变，这就是单例的
            // 我们希望这个组件是完全独立的，所以我们要return{...}，也就是说：我们每次调用data的时候，都会新建一个对象
            data(){
                return{
                    msg:'这是组件中的msg'
                }
            },
            methods:{

            },
            created(){
                console.log('created');
            }
        });

        //创建vue的实例
        new Vue({
            el:'.container',
            data:{ 
                msg:'这是vue实例中的msg'
            }
        });
    </script>
</body>
```

了解了组件传值之后，我们来学习一下如何来**给组件绑定事件**。
我们根据下面代码来学习：

```vue
<body>
    <div class="container">
        <sf-line :node="lineText"></sf-line>
    </div>
    <script>
        Vue.component('sf-line',{
            template:`
                <div style="background-color:orange;border-radius:3px;padding:.5em 1em;margin:.5em;position:relative">
                    <span>{{node}}</span>
                    <!-- 目标:当点击关闭时,div消失 -->
                    <!-- 第一种方式：在父元素的角度上，将它隐藏 -->
                    <!-- 第二种方式：子元素自己将自己隐藏 -->
                    <!-- 父组件：.container ; 子组件：<sf-line> -->
                    <span style="position:absolute;right:1em;cursor:pointer">关闭</span>
                </div>
            `,
            props:['node'],
            methods:{

            }
        });

        new Vue({
            el:'.container',
            data:{ 
                lineText:'component'
            }
        });
    </script>
</body>
```

这里我们主要讲解
**第一种方式：在父元素的角度上，将它隐藏**

```vue
<body>
    <div class="container">
        <sf-line :node="lineText"></sf-line>
    </div>
    <script>
        Vue.component('sf-line',{
            template:`
                <!-- 我们在div中添加一个v-show,将隐藏操作放在这上面,在组件data中定义它是否显示 -->
                <div 
                    v-show="isShow"
                    style=" background-color:orange;
                            border-radius:3px;
                            padding:.5em 1em;
                            margin:.5em;
                            position:relative"
                >
                    <span>{{node}}</span>
                    <!-- 点击下面按钮关闭
                         由于close是组件内部函数,所以在组件的methods中定义属性
                     -->
                    <span
                        @click="close" 
                        style=" position:absolute;
                                right:1em;
                                cursor:pointer"
                    >关闭</span>
                </div>
            `,
            props:['node'],
            data(){
                return{
                    // 默认情况下让它显示
                    isShow:true
                }
            },
            methods:{
                close(){
                    // 当点击close时,让它隐藏
                    this.isShow=false;
                }
            }
        });

        new Vue({
            el:'.container',
            data:{ 
                lineText:'component'
            },
            methods:{
                
            }
        });
    </script>
</body>
```

此刻我们点击的是外部<sf-line>标签的事件，是在component里面，但是外部vue实例中的methods并没有定义方法。也就是说，子组件自己偷偷摸摸就没了，但是父组件根本就不知道。
如果说，父组件这时候想要在子组件被删除之后，重新刷新整个页面。即子组件要通知外面的父组件，它点击了按钮。那么我们现在应该怎么做？
这里有一个知识点，**子组件向父组件传递事件**，类似于一种事件传递，但此处叫**事件发射**。

这里代码可以这样完善：

```vue
<body>
    <div class="container">
        <!-- 父组件此时要接收子组件发射的自定义事件
             v-on此时监听的是子组件发射的事件close,
             我们为它在父组件中绑定一个方法closeHandler
         -->
        <sf-line :node="lineText" @close="closeHandler"></sf-line>
    </div>
    <script>
        Vue.component('sf-line',{
            template:`
                <!-- 我们在div中添加一个v-show,将隐藏操作放在这上面,在组件data中定义它是否显示 -->
                <div 
                    v-show="isShow"
                    style=" background-color:orange;
                            border-radius:3px;
                            padding:.5em 1em;
                            margin:.5em;
                            position:relative"
                >
                    <span>{{node}}</span>
                    <!-- 点击下面按钮关闭
                         由于close是组件内部函数,所以在组件的methods中定义属性
                     -->
                    <span
                        @click="close" 
                        style=" position:absolute;
                                right:1em;
                                cursor:pointer"
                    >关闭</span>
                </div>
            `,
            props:['node'],
            data(){
                return{
                    // 默认情况下让它显示
                    isShow:true
                }
            },
            methods:{
                close(){
                    // 通知父元素
                    //(子组件向父组件发射emit自定义事件close)
                    this.$emit('close');
                    // 当点击close时,让它隐藏
                    this.isShow=false;
                }
            }
        });

        new Vue({
            el:'.container',
            data:{ 
                lineText:'component'
            },
            methods:{
                // 父组件中绑定的方法
                closeHandler(){
                    alert('closeHandler');
                }
            }
        });
    </script>
</body>
```

## 局部注册

局部注册不必将每个组件都注册到全局。我们可以通过某个Vue实例或组件的实例的选项components注册在，仅在其作用域中可用的组件上。

```vue
<body>
    <div class="container">
        <sf-list :node="msg"></sf-list>
    </div>
    <script type="text/javascript">
        //我声明的组件
        let sfList={
            template:`
                <div>{{node}}</div>
            `,
            props:['node']
        };

        new Vue({
            el:'.container',
            data:{
                msg:'hello component'
            },
            // 局部注册
            components:{
                // 可以直接将组件定义写在这里面
                // 但是,为了不使代码显得臃肿,我在上面声明一个组件sfList
                // 将上面注册的组件声明进来
                // 属性值:自定义的组件名
                // 属性值:上面声明的组件名
                'sf-list':sfList
                /*
                 sfList:sfList                
                 这里也可以用驼峰式命名
                */
                /*
                 sfList
                 直接这样简写也是可以的
                */
                //以上三种方式:<sf-list :node="msg"></sf-list>都可以解析
            }
        });
    </script>
</body>
```

## slot插槽（补充）

插槽定义在组件中，用于接受组件内部的内容。
在全局注册的第一个例子里面我们简单的用了slot插槽。
这种直接插入，不需要命名的插槽，我们称为**匿名插槽**。
我们先来简单回顾一下：

```vue
<body>
    <div class="container">
        <!-- 在组件中,用slot接收插入的内容 -->
        <sf-container>hello</sf-container>
    </div>
    <script type="text/javascript">
        //注册组件
        Vue.component('sf-container',
            template`
                <div class="sf-container">
                    <div class="sf-header">
                        <!-- 用slot接收插入的内容 -->
                        <slot></slot>
                    </div>
                    <div class="sf-content"></div>
                    <div class="sf-footer"></div>
                </div>
            `,
        );
    </script>
</body>
```

在一个模板中，可以出现很多插槽。
我们要去区分它们，我们可以给它取个名字，叫做**具名插槽**。

```vue
<body>
    <div class="container">
        <sf-container>
            <!-- 此时的属性值与slot中命名的名字相同 -->
            <div slot="header">header</div>
            <div slot="content">content</div>
            <div slot="footer">footer</div>
        </sf-container>
    </div>
    <script type="text/javascript">
        //注册组件
        Vue.component('sf-container',
            template`
                <div class="sf-container">
                    <div class="sf-header">
                        <!-- 为不同的插槽取不同的名字 -->
                        <slot name="header"></slot>
                    </div>
                    <div class="sf-content">
                        <slot name="content"></slot>
                    </div>
                    <div class="sf-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            `,
        );
    </script>
</body>
```

组件中除了具名插槽外，还有一种插槽，就是**作用域插槽**。

```vue
<body>
    <div class="container">
        <!-- 调用一个组件,里面绑定属性stuList,将studentList中的值传给stuList -->
        <sf-list :stulist="studentList">
            <!-- 提供一个模板,它里面可以让我们定义td的具体格式 -->
            <!-- slot-scope用于将元素或组件表示为作用域插槽,此属性不支持动态绑定 -->
            <!-- 属性名自定义 -->
            <template slot-scope="stuScope">
                <!-- 在这里显示插入的内容 -->
                <!-- 我们可以在这里选择要插入的数据 -->
                <!-- 作用域插槽,相当于为我们多了一个定制的功能 -->
                {{stuScope.foo.id}}
                <a href="#">{{stuScope.foo.name}}</a>
            </template>
        </sf-list>
    </div>
    <script type="text/javascript">
        //注册组件
        Vue.component('sf-list',{
            template:`
                <div>
                    <p>原来的写法</p>
                    <ul>
                        <li v-for="item in stulist">{{item.name}}</li>
                    </ul>
                    <p>作用域插槽</p>
                    <ul>
                        <li v-for="item in stulist">
                            <!-- 定义一个插槽,在里面随意绑定一个值foo-->
                            <slot :foo="item"></slot>
                        </li>
                    </ul>
                </div>
                
            `,
            // 接收studentList中的内容(外部组件向内部组件传值)
            // props接收的值不区分大小写,不要用驼峰式命名,否则可能报错
            props:['stulist']
        });
        //创建实例
        new Vue({
            el:'.container',
            data:{
                studentList:[{
                    id:1,
                    name:'terry'
                },{
                    id:2,
                    name:'larry'
                },{
                    id:3,
                    name:'tom'
                }]
            }
        });
    </script>
</body>
```