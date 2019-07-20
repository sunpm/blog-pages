Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

请注意它的应用场景
并不是说我们写了一个动画之后让它一直在动，而是在一个模块显示或隐藏的时候去做一种特效，使得它的过程有过渡性，而不是很突兀的直接消失或显示。
它适用的场景是v-if和v-show，动态组件，组件根节点。

**具体实现有以下几种方式：**
**1）在 CSS 过渡和动画中自动应用 class**
**2）可以配合使用第三方 CSS 动画库，如 Animate.css**
**3）在过渡钩子函数中使用 JavaScript 直接操作 DOM**
**4）可以配合使用第三方 JavaScript 动画库，如 Velocity.js**

下面我们通过一个例子来学习：

```vue
<body>
    <div class="container">
        <!-- 为按钮绑定事件 -->
        <button @click="show">显示</button>
        <button @click="hide">隐藏</button>
        <!-- 在vue中实现动态的显示与隐藏 -->
        <!-- v-if和v-show都可以，两者是有区别的
            v-show：当我们点击隐藏时，下面的div.block还在，只是它的display为none
            v-if:当我们点击隐藏时，下面的div.block整个都没有了，说明它从我们的dom文档结构中去掉了，
                 当我们显示时，它还会再创建一个dom元素插进去
            由此我们可以比较v-if和v-show的效率：
            如果这个东西要频繁的显示隐藏，那么我们选择v-show，这样可以减少创建一个dom的代价
            如果两者切换的频度比较低(比如登陆注册)，那么我们选择v-if
        -->
        <div class="block" v-show="isShow" style="width:100px;height:100px;background-color:skyblue">
            {{msg}}
        </div>
    </div>
    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello',
                //定义它是否显示，默认情况下为false隐藏
                isShow:false,
            },
            //在其中定义显示与隐藏两个方法
            methods:{
                // 要想动态的实现显示与隐藏，我们只要动态的改变isShow的状态
                show(){
                    this.isShow=true;//当isShow为真，显示
                },
                hide(){
                    this.isShow=false;//当isShow为假，隐藏
                }
            }
        });
    </script>
</body>
```

它还有一种简便写法

```vue
<body>
    <div class="container">
        <!-- 
            isShow=!isShow  新值是老值的取反,即
            如果isShow为true,那么再次点击的时候isShow为false
            这种较为简单不需要写函数
        -->
        <button @click="isShow=!isShow">切换</button>
        <!-- 为需要动画特效的部分加transition标签 -->
        <transition>
            <div class="block" v-show="isShow" style="width:100px;height:100px;background-color:skyblue">
                {{msg}}
            </div>
        </transition>
    </div>
    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello',
                isShow:false,
            }
        });
    </script>
</body>
```

我们可以看到，上面显示与隐藏的方式过于直接，此时我们可以为它创建动画效果。

## css过渡

隐藏与显示的效果实现之后，我们来创建动画。
哪个部分要动态的显示与隐藏，我们给哪个部分加<transition></transition>。
然后我们为它加特效。

加特效之前我们要知道，元素从开始显示到完全显示，开始隐藏到完全隐藏也要经历一些阶段，我们可以在这之中加入一些样式，就能达到一些效果。
我们可以通过一张图来说明：
![图片描述](https://ws1.sinaimg.cn/large/006tNc79gy1fznv90o2h3j30m80b4mxt.jpg)

**v-enter**：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
**v-enter-active**：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
**v-enter-to**: 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
**v-leave**: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
**v-leave-active**：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
**v-leave-to**: 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>animate</title>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
    <!-- 为显示和隐藏的过程提供样式定义 -->
    <style type="text/css">
        /*开始显示*/
        .v-enter{ opacity: 0; }
        /*显示过程*/
        .v-enter-active{ transition: opacity 1.5s;/*给transition加过渡特效(属性),持续时间为1.5秒*/ }
        /*显示完毕*/
        .v-enter-to{ opacity: 1; }
        /*开始隐藏*/
         .v-leave{ opacity: 1; }
        /*隐藏过程*/
          .v-leave-active{ transition: opacity 1.5s; }
        /*隐藏完毕*/
        .v-leave-to{ opacity: 0; }
    </style>
</head>
<body>
    <div class="container">
        <button @click="isShow=!isShow">切换</button>
        <!-- 为需要动画特效的部分加transition标签 -->
        <transition>
            <div class="block" v-show="isShow" style="width:100px;height:100px;background-color:skyblue">
                {{msg}}
            </div>
        </transition>
    </div>
    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello',
                isShow:false,
            }
        });
    </script>
</body>
</html>
```

## css动画

相当于将css中的动画机制运用到vue中

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>animate</title>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
    <style type="text/css">
        /*只在显示与隐藏的过程中定义动画,实现过渡效果*/
        .v-enter-active {
              animation-name: app;/*指定动画名称*/
              animation-duration: 3s;/*定义时间*/
        }
        .v-leave-active {
              animation-name: app;
              animation-duration: 3s;
              animation-direction: reverse;/*动画反向播放*/
        } 
        /*定义动画效果*/
         @keyframes app {
              0% {
                transform: scale(0);
              }
              50% {
                transform: scale(1.5);
              }
              100%{
                transform: scale(1);
              }
        }
    </style>
</head>
<body>
    <div class="container">
        <button @click="isShow=!isShow">切换</button>
        <!-- 为需要动画特效的部分加transition标签 -->
        <transition>
            <div class="block" v-show="isShow" style="width:100px;height:100px;background-color:skyblue">
                {{msg}}
            </div>
        </transition>
    </div>
    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello',
                isShow:false,
            }
        });
    </script>
</body>
</html>
```

我们有的时候可能不太能写好keyframes，这个时候我们可以引用别人封装好的动画库，那么我们自己就不用写keyframes了。
下面我们来看看如何在vue中引入animate.css动画库。

## css动画库

上面两种方式，我们只是为特效元素添加transition标签包裹，
而这种动画库的实现方式，我们需要为transition标签添加属性

vue中为我们提供了6个标签：
**enter-class**、**enter-active-class**、**enter-to-class**
**leave-class**、**leave-active-class**、**leave-to-class** 
他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方 CSS 动画库，如 Animate.css 结合使用十分有用。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>animate</title>
    <link href="https://cdn.bootcss.com/animate.css/3.5.2/animate.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
</head>
<body>
    <div class="container">
        <button @click="isShow=!isShow">切换</button>
        <!-- 
            在transition标签中添加属性
            enter-active-class="animated bounceIn":自定义过渡类名="animated(基础样式) css库中已有样式"
            Animate.css官网:https://daneden.github.io/animate.css/
        -->
        <transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOut">
            <div class="block" v-show="isShow" style="width:100px;height:100px;background-color:skyblue">
                {{msg}}
            </div>
        </transition>
    </div>
    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello',
                isShow:false,
            }
        });
    </script>
</body>
</html>
```

## js动画库

这里我们用到了JavaScript 钩子。
它有以下几种钩子：

```vue
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <div>要显示的内容</div>
</transition>
```

用法是在transition绑定函数，并在methods中定义

```json
methods: {
  // 进入
  beforeEnter: function (el) {
    // ...
  },
  // 此回调函数是可选项的设置
  // 与 CSS 结合时使用
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  // 离开
  beforeLeave: function (el) {
    // ...
  },
  // 此回调函数是可选项的设置
  // 与 CSS 结合时使用
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```

实现动画的方式有2种，一种是jquery，一种是velocity。
此处我们以velocity为例

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>animate</title>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
    <!-- 以下两个是js动画库 velocity
        velocity.js:提供动画机制
        velocity.ui,js:提供动画组件
    -->
    <script src="https://cdn.bootcss.com/velocity/2.0.2/velocity.min.js"></script>
      <script src="https://cdn.bootcss.com/velocity/2.0.2/velocity.ui.min.js"></script>
</head>
<body>
    <div class="container">
        <button @click="isShow=!isShow">切换</button>
        <!-- 为transition绑定事件 -->
        <transition @enter="enter">
            <div class="block" v-show="isShow" style="width:100px;height:100px;background-color:skyblue">
                {{msg}}
            </div>
        </transition>
    </div>
    <script type="text/javascript">
        new Vue({
            el:'.container',
            data:{
                msg:'hello',
                isShow:false,
            },
            methods:{
                // 事件由vue来调用,它会给我们传两个参数:el(当前元素),done(函数执行完之后的回调)
                   enter(el,done){
                    //console.log(el);//[object HTMLDivElement]
                    //console.log(done);//function () {...}
                    /*
                    Velocity(要控制的元素,{动画样式},{动画配置})
                    动画样式,可以在http://www.mrfront.com/docs/velocity.js/plugins.html内置特效中寻找
                    */
                    Velocity(el,"transition.fadeIn",{
                        // 动画配置项
                        duration:1000,         //动画执行时间(单位毫秒)
                        complete:done          // 动画结束时的回调函数,必须要写
                        /*其他参数
                        easing: "swing",       // 缓动效果
                        queue: "",             // 队列
                        begin: undefined,      // 动画开始时的回调函数
                        progress: undefined,   // 动画执行中的回调函数（该函数会随着动画执行被不断触发）
                        display: undefined,    // 动画结束时设置元素的 css display 属性
                        visibility: undefined, // 动画结束时设置元素的 css visibility 属性
                        loop: false,           // 循环
                        delay: false,          // 延迟
                        mobileHA: true         // 移动端硬件加速（默认开启）
                        */
                    });
                }
              }
        });
    </script>
</body>
</html>
```