这里，我们要补充一下
在之前的学习中，我们说到了在构建new Vue()实例对象中，我们往里面写了el和data属性，其实还有其他属性，如：methods,watch,computed,props,以及生命周期钩子函数等。
我们知道，el是Vue实例的作用对象，data定义所有页面中的数据。
而methods则存放我们定义的所有的事件处理函数，watch中存放我们要侦听的函数；
生命周期钩子下面的内容会介绍，computed，props在之后的学习中会有详细说明。

它的大概的完整形式就是这样的：

```vue
<script type="text/javascript">
  new Vue{
      el:'',       //执行vue实例服务的视图
      data:{},     //定义数据模型
      methods:{},  //定义函数，主要用于事件的绑定
      watch:{},    //监听某一个数据的变化
      conmputed:{},//计算机属性
      事件钩子函数...
  }
</script>
```

大概了解了以上补充内容之后，我们接着来学习事件处理。

# 事件处理

在事件处理中，我们用v-on 指令来用于监听DOM事件。它的参数为事件指令名称，引号内为绑定的（methods中的）事件处理函数（需要调用的方法名称）。
它的语法形式是： v-on:event="事件处理函数"。
例如：v-on:click="handler"
当然，v-on:可以简写为@。
例如：@click="handler"。

v-on后面可以绑定的事件指令还有很多，如：submit,keyUp,scroll,mouseout,mousever...
v-on:click是我们比较常用的指令。

下面我们写一个简单应用来测试一下：

```vue
<body>
    <div class="container">
        <!-- 我们在此处定义当我们点击时触发handler方法，
        相应的，在methods中存放handler的方法即可
        如果handler事件中需要传递参数，那么要加括号，如handler(data)
        参数可以为常规值或事件对象$event
         -->
        <button @click="handler">点击按钮</button>
        <!-- 
        也可以写成 
        <button v-on:click="handler">点击按钮</button>
         -->
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                
            },
            //存放所有定义的方法或事件处理机制
            methods:{
                handler(){
                    alert("你点击了按钮~~");
                }
                /*
                handler(){},是es6的写法
                es5的写法是这样的：
                handler:function(){
                    alert("你点击了按钮~~");
                }
                箭头函数的写法是这样的：
                handler:()=>{
                    alert("你点击了按钮~~");
                }
                */
            }
        });
    </script>
</body>
```

v-on除了直接绑定一个方法，也可以内联javascript语句，可以用特殊变量$event把原生dom事件传入方法。
当然，这种情况比较少见，一般来说，数据驱动框架对模型的操作比较少（主要用数据改变模型，而非dom事件）。

我们不推荐用特殊变量$event把原生dom事件传入方法，是因为我们之所以传event对象，主要是因为event中，我们要用到preventDefault，stopPropagation（以及获取target和this），我们主要是要通过事件对象来获取这样的信息。
但是在vue中，我们可以通过事件修饰符来解决这样的问题。

## 事件修饰符

它的语法形式是：在v-on:指令名称后面用点操作符"."加上一个事件修饰符。
有以下几种修饰符：
**1).stop**
stop：停止事件冒泡

```vue
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>
```

**2).prevent**
prevent：阻止事件的默认行为

```vue
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
```

**3).capture**
capture：事件捕获

```vue
<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>
```

**4).self**
self：事件在当前元素本身上时触发

```vue
<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</
```

**5).once**
once：只触发一次事件

```vue
<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

**6).passive**
passive：能够提升移动端的性能

```vue
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

修饰符还可以串联

```vue
<a v-on:click.stop.prevent="doThat"></a>
```

或者只有修饰符，不加事件

```vue
<form v-on:submit.prevent></form>
```

## 按键修饰符

在监听键盘事件时，我们经常需要检查常见的键值。Vue允许为 v-on 在监听键盘事件时添加按键修饰符keyUp。

举例

```vue
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input v-on:keyup.13="submit">
```

全部的按键别名：
.enter
.tab
.delete
.esc
.space
.up
.down
.left
.right

# 生命周期钩子

每个 Vue 实例在被创建时都要经过一系列的初始化过程。例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。
也就是说，从vue开始工作到vue完毕之后，这整个过程，我们是可以插入一些代码进去的，使得它能够在每一阶段做相应的事情。

生命周期按顺序分为以下八个部分，分别为：
**beforeCreate**：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
**created**：在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，
**beforeMount**：在挂载开始之前被调用。
**mounted**：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
**beforeUpdate**：数据更新时调用，发生在虚拟 DOM 打补丁之前。
**updated**：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
**beforeDestroy**：实例销毁之前调用。
**destroyed**：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

下面我们来简单的尝试一下：
(请按顺序阅读以下代码)

```vue
<body>
    <div class="container">
        <p>{{msg}}</p>
        <!-- <input type="text" v-model="msg"> -->
    </div>

    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello lifecycle'
            },
            //实例初始化之后（刚刚创建了实例，还没初始化data,methods,computed...）
            beforeCreate(){
                 //console.log(this);//在事件钩子中，this代表当前对象实例
                 console.log(this.$data);//undefined
                 //此时有vue中的值但未被初始化，{{msg}}未被解析          
                 alert('beforeCreate');//alert可以阻塞当前代码的运行      
            },
            //创建了实例，初始化了data,methods,，computed...，并且启动了数据监听
            created(){
                console.log(this.$data);//[object Object]: {msg: "hello lifecycle"}
                //此时{{msg}}还未被解析，我们可以手动添加msg的值
                this.msg = 'hello world';
                console.log(this.$data);//[object Object]: {msg: "hello world"}
                alert('created');                
            },
            //在数据挂载之前，可以对数据做最后一次修改
            beforeMount(){
                this.msg = 'last change';
                console.log(this.$data);//[object Object]: {msg: "last change"}
                alert('beforeMount');
            },    
            //数据挂载(渲染)之后，即model中的数据显示到了view中        
            mounted(){
                //此时在页面中打印出hello world
                alert('mounted');
            },
            //以上四个阶段在一次渲染之后就不会再执行了

            //模型发生改变，数据渲染之前执行
            beforeUpdate(){
                alert('update');//未执行，因为值没改变
                //想要改变的话可以在上面代码中加入    <input type="text" v-model="msg">
                //一旦发生改变，beforeUpate就会被反复执行
            },
            //模型发生改变，并且数据渲染之后执行
            updated(){
                alert('updated');//每次改变都会被激发
            },
            //vue实例销毁之后（一般我们等不到它销毁）
            beforeDestroy(){
                alert('beforeDestroy');
            },
            //vue实例销毁之后
            destroyed(){
                alert('destroyed');
            },
            //监听数据的变化
            watch:{
                //这里我们监听msg的变化
                msg:{
                    handler(now,old){
                        console.log(now,old);//打印当前值和之前的值 last change hello lifecycle
                    }
                }
            },
        });
    </script>
</body>
```