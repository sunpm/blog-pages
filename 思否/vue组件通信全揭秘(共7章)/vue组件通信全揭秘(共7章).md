这文章在一年前已经写出来了。今天还是决定放出来供所有人学习。为什么我会写vue组件通信全揭秘，因为无论任何组件模式的框架。组件是核心，只有把组件写组件之间能理顺了。项目也就自然顺了。内容非常多，而且一年后我觉得组件的通信部分的没有任何变化。没有任何一点过时。希望对大家有帮助

## 第01课：给你一个不学 Vue 的理由

### 什么是 Vue

Vue 是尤雨溪一个人的项目，是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。

Vue 通过 Api 来进行统一性的管理，可以让整个团队的代码都用统一的风格和方法标准去运作，而且对组件系统也有强大的支持，在封装组件时通过 Props 和 Event 两个标准性的原则去调用，可以让开发更加得心应手。

### 请给一个不学 Vue 的理由

如果非要让我说一个不学 Vue 的理由，可能是它的写法太方便了……你也可能觉得它借鉴的太多，没有亮眼的地方，那我只能说同样实现的东西就是那么方便，简洁的教程和 Api 文档接入整个开发体系，相当符合中国市场的开发——业务变动大、版本要求上线快、需求改动频繁、学习成本低……相比之下，同样有着高效的功能，集成了组件系统和 Virtual DOM。

### 阅读这一系列课程你可以学到什么？

掌握 Vue 主要就是正确理解教程和深入掌握 Api 的用法，不但要会用，更重要的是学会对症下药，在任何一种场景下使用最简洁、最正确、最合理的代码才是关键。只有对 Api 和教程有了一定程度的项目实战和组件库实战经验才能把它用的游刃有余。

在 Vue2.0 起步的时候我在掘金上进行了 Vue 课程的一系列套课的讲解，从基础到 Vuex，最后到组件库的实战都进行了简单的讲解。期间也经过大量的项目实战和组件库的实践，通过一步步总结，对 Api 文档的深入理解和测试性模拟，总结了一些真实场景的正确用法和常用案例需求，让你在开发中少走弯路，少刨坑。

### 除了 Vue 还能学到什么

在 Vue 开发中，我们不但要准确的运用 Api，还要结合 es6 的新语法，用更深更强大的新特性来组织代码，这同样也是下一代 Javascript 的标准：

- let 和 const 命令
- 变量的解构赋值
- 字符串的扩展
- 函数的扩展
- 数组的扩展
- 对象的扩展
- Promise 对象
- async 函数

在此次教程中将会展示 es6 大量的新语法进行，只有不断的进行尝试，才能有不同的成效。

### 本课程的优势

如果你想快速上手进行一个特别面向 C 端的 Mobile 产品开发，甚至是一个中大型的项目开发，如果你能完全阅读完所有课程，并且跟着一步步实践，那么你同样也能给自己的C端产品设计一套属于自己的组件库，毕竟通用型的组件库仍然具备面对市场竞争需求的独特性。

本课程分享的内容是 Vue 的最新版本，可以说这是一套独一无二的教程，不但会结合官方教程和 Api，最主要的是告诉大家在什么场景用什么方式组织代码，避开不必要的坑。

数据驱动架构体系永远离不开组件模式。在这里我会给大家分享级别组件的划分内部原则性，在自己打造组件库的同时，也大量借鉴了各大厂商团队的优秀组件写法，进行比对优缺点，总结相应的理论。

### 课程大纲如下

- 01 开启 Vue 之旅
- 02 灵活的 data，死板的 props
- 03 `$on`， `$emit`， v-on 三者关系
- 04 .sync 王者回归，v-model 使命将至
- 05 `$attrs`，`$listeners` 深组件通信
- 06 智能组件与木偶组件的正确通信
- 07 你不知道的中央事件通信

### 本课设计想法

当我在掘金写下第一篇文章的时候，虽然只是很基础的部分，但文章在两天内获得了大量关注，这充分显示出了中国市场的开发者们对 Vue 的渴望程度。与此同时，我也收集到了一些批评意见，对于读者的反馈能及时做出响应才更能体现出一个课程的价值。

不是能写出源码的教程就是对你有帮助，也并不是写的很基础就对你没有帮助。不是每个人都能当大上牛、进入大公司的研发团队，大多数程序员都是面对业务层面的开发。因此如何在市场上有立足之地，能快速接手项目，这才是大部分人应该最需要发力的地方。

### 学习本课程你需要做些什么？

学习本课程的同学需要对 Html 和 JavaScript 的基础知识有一定了解，理解 es6 基础新特性，了解 npm 和 node 的基本用法。

推荐：

[阮一峰老师的es6入门](https://link.juejin.im?target=http%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fintro)

别浪费时间看别的了，如果你能静下来看完整本书，比任何 es6 其它书籍都好，为什么呢？平民化，就像 Vue 一样，很容易让人理解。

同时在学习本教程的时候，尽量跑一遍 Vue 中文官网结合 Api 你能看懂的示例。

[cn.vuejs.org/](https://link.juejin.im?target=https%3A%2F%2Fcn.vuejs.org%2F)

可能有些 Api 或者教程只有一个简单的解释，还特别官方话，没关系，跟着我一步一步敲遍所有的 Demo。

### 开启 Vue 之旅

在整理好心情开始旅程之时，我们往往都会带上许多必备工具，同样 Vue 在面向开源之时，周边的身态也向其靠拢。

> vue-devtool

以往 Dom 操作的时候，我们都是通过 dubger 断点来进行错点查找和基础数据驱动，dubger 已经派不上什么用场了，只有通过观察数据的变化，才能准确的定位到错识变化的数据和是否执行了需要的事件。

就用商店输入vue自行安装



![img](https://user-gold-cdn.xitu.io/2017/4/14/bba5bc51be9063fa2664b910e7621a7d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



> vue-cli

`Vue.js`提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：

进入 Node.js 官网，下载 Node.js 安装包；

为了下载安装包快速一点，走[淘宝源](https://link.juejin.im?target=http%3A%2F%2Fnpm.taobao.org%2F)进入 cli 终端；

```
运行npm install -g cnpm --registry=https://registry.npm.taobao.org
 全局安装 vue-cli
$ npm install --global vue-cli
 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```

打开文件夹，本次教程的示例全部通过 Components 文件夹来定义单个组件，进行 SPA 的应用开发，用单 .vue 文件也更加直观，一个文夹可能是一个 Page，也可能是一个 Component；

在开启 Vue 的旅程之时，拿 todo-list 尝试一下它的神奇魔法，通过 Vue 实例和模板进行数据与行为的交互绑定；

实例的每个选项如何与定义的模板值进行一一对应，通过数据驱动、事件绑定，来轻松高效的实现一个 todoList 应用。相比 Juqery 这种操作 Dom 的冷兵器时代，给开发者的感觉是完全变了一种模式，延续着 Html 写法的友好性和适应度，同样还提供了 JSX 语法，Vue 官网说是一个渐进式框加，写法也同样是渐近式，让开发者以不畏惧的心态使用，而且 Vue 的数据驱动模式提供了大量的 Api，每个 Api 无论是实例选项还是实例属性都负责着自己的职责，它们就像五金店的零件一样，只有正确的使用每个 Api 特性并且作用到恰当的地方，Vue 工程代码组织结构和后续的维护才会显得易如反掌。在组件化工程化没到来的时候，业务的实现复杂度并不是最难的，反而令人头疼的是对代码后续的版本迭代、重构、复用等一系列问题，希望通过简单的 todo-list 应用，可以对前端开发革命有新的认识！

```vue
<template>
   <div>
     <input type="text" v-model.trim="msg"  @keyup.enter="push">
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="deleteItem(index)">
          {{index}} {{item.name}}
        </li>
      </ul>
   </div>
</template>

<script>
  export default {
    name: 'todo-list',
    data () {
      return {
         msg: "",
         list: []
      }
    },
    methods: {
      push () {
         this.list.push({name:this.msg})
         this.msg = ""
      },
      deleteItem (index) {
        this.list.splice(index,1)
      }
    }
  }
</script>
```

本章通过这个示例 Demo 表现 Vue 数据驱动式框架运作是如何简单到令人窒息。

一个 todo-list 应用集成了两个事件，两条 data 数据就完成了！

通过 Template 里的 Html 模版能清楚的观察到绑定信息，数据联动和时时改动：

- v-model 里的 msg 和实列 data 里存放的数据进行了绑定
- @keyup.enter="push" 对键盘事件 keyup 进行监听，同时用 enter 修饰符进行 enter 按键进行监听，当触行 methods 里的 push 函数，向整个 list 列表里添加一条 object 数据
- 通过 v-for 指令循环出整个 list 里的数据，循环出相对应的节点数
- 点击每个节点的时候执行 deleteItem 事件，删除对应的节点

> 对于往时操作dom写法和当前的数据驱动有什么区别？

- 数据渲染，我们会通过第三方的模版引擎，比如 artTemplate，Jade 等等，渲染完毕之后再 append 到根元素中。
- Vue 只是通过一个 v-for 指令循环所有对应的节点，先前只要在 Html 中写好循环模板。

------

- 执行事件，需要获取 DOM 元素，对 DOM 元素 addEventlistener 事件，再进行函数。
- Vue 直接通过你的 Template 集成的模版在需要发生事件的元素上直接绑定事件，只要执行一个 v-on 结合你需要绑定的事件，所有原生的事件都支持。

------

- 需要存储数据时，我们需要定一堆变量，有局部变量和全局变量，导致后续的变量难以维护，甚至可能会导致变量名冲突，作用域调用错误，无法准确定位到正确的数据源。
- Vue 通过 data 选项，用每个属性去保存渲染的数据和临时过度的数据，用统一 data 选项去保存，让使用者一目了然。

------

- 所有执行的函数，无论是事件所需要执行的，还是封装所需要调用的函数，通过函数式声明在 script 标签内写入，代码量大了，也会存在变量名冲突，和无法准确的定位方法。
- Vue 通过 Methods 选项专门为事件所执行的函数和所封装需要调用的函数，就像垃圾桶一样，有一个准确的、可投放的位置，需要找到执行和所需调用的函数，直接可以准确定位到 Methods 选项。

------

- 平时我们要对有些数据进行一些处理，比方说去除有后空格，按键的定位，都要通过 js 去过滤或者判断。
- Vue 提供了大量的修饰符封装了这些过滤和判断，让开发者少写代码，把时间都投入的业务、逻辑上，只需要通过一个.修饰符去调用。

------

以上只是一个简单 todo-list Demo 总结出来的例子，文中所提到的也只是部分功能优势，还有很多功能可以让开发路径更加快速。重点在于数据驱动的模式，只要把组件与组件之间的通信掌握了，也就相当于你就手握大半江山，因为一切的一切都是基于组件通信模式和结构用法来的。

> 下篇课程导读：

数据驱动一切都是一数据，只有灵活把控对数据的理解，才能自如的运用，在 Vue 里灵活的 data，死板的 props，是存放数据的和传递数据的基点。

## 第02课：灵活的 data，死板的 props

### 事件驱动

在前端来说数据驱动式框架，必然离不开事件驱动，事件驱动一定程度上弥补了数据驱动的不足，在`dom操作`的时代通常都是这样操作：

> 通过特定的选择器查找到需要操作的节点 -> 给节点添加相应的事件监听

响应用户操作，效果是这样：

> 用户执行某事件（点击，输入，后退等等） -> 调用 JavaScript 来修改节点

这种模式对业务来说是没有什么问题，但是从开发成本和效率来说会比较力不从心，在业务系统越来越庞大的时候，就显得复杂了。另一方面，找节点和修改节点这件事，效率本身就很低，因此出现了数据驱动模式。

### 数据驱动

> 读取模板，同时获得数据，并建立 VM( view-model ) 的抽象层 -> 在页面进行填充

要注意的是，`MVVM` 对应了三个层，`M - Model`，可以简单的理解为数据层；`V - View`，可以理解为视图，或者网页界面；`VM - ViewModel`，一个抽象层，简单来说可以认为是 V 层中抽象出的数据对象，并且可以与`V 和 M 双向互动`（一般实现是基于双向绑定，双向绑定的处理方式在不同框架中不尽相同）。

> 用户执行某个操作 -> 反馈到 VM 处理（可以导致 Model 变动） -> VM 层改变，通过绑定关系直接更新页面对应位置的数据

可以简单地理解：数据驱动不是操作节点的，而是通过虚拟的抽象数据层来直接更新页面。主要就是因为这一点，数据驱动框架才得以有较快的运行速度（因为不需要去折腾节点），并且可以应用到大型项目。

### Vue 模式

Vue 通过`{{}}`绑定文本节点，`data`里动态数据与`Props`静态数据进行一个映射关系，当`data`中的属性或者`props`中的属性有变动，以上两者里的每个数据都是行为操作需要的数据或者模板 view 需要渲染的数据，一旦其中一个属性发生变化，则所有关联的行为操作和数据渲染的模板上的数据同一时间进行同步变化，这种基于数据驱动的模式更简便于大型应用开发。只要合理的组织数据和代码，就不会显得后续皮软。

### 何为动态数据 data，何为静态数据 props

#### 相同点

两者选项里都可以存放各种类型的数据，当行为操作改变时，所有行为操作所用到和模板所渲染的数据同时都会发生同步变化。

#### 不同点

Data 被称之为动态数据的原因，在各自实例中，在任何情况下，我们都可以随意改变它的数据类型和数据结构，不会被任何环境所影响。

Props 被称之为静态数据的原因，在各自实例中，一旦在初始化被定义好类型时，基于 Vue 是单向数据流，在数据传递时始终不能改变它的数据类型。

更为关键地是，对数据单向流的理解，`props`的数据都是通过父组件或者更高层级的组件数据或者字面量的方式进行传递的，不允许直接操作改变各自实例中的`props`数据，而是需要通过别的手段，改变传递源中的数据。

### data 选项

当一个实例创建的时候，`Vue`会将其响应系统的数据放在`data选项中`，当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。初始定行的行为代码也都会随着响应系统进行一个映射。

而 data 选项中的数据在实例中可以任意改变，不受任何影响，前提必须数据要跟逻辑相辅相成。

### 初始化映射

```vue
<template>
   <div>
      <p v-if='boolean'>true</p>
      <p v-for='value in obj'>{{value}}</p>
      <p v-for='item in list'>{{item}}</p>
      <p>{{StringMsg}}</p>
      <p>{{NumberMsg}}</p>
   </div>
</template>
<script>
   export default {
     data () {
       return  {
          obj : {a:'1',b:'2',c:'3'},
          list:['a','b','c'],
          boolean : true,
          StringMsg : 'hello vue',
          NumberMsg : 2.4,
       }
     }
   }
</script>
```

运行代码时，在`data选项`里定义了五种数据类型，通过指令和`{{}}`进行渲染，证实了`data选项`里可以`定义任何数据类型`。

### 视图与数据映射

```vue
<template>
   <div>
      <p>{{StringMsg}}</p>
      <p>{{NumberMsg}}</p>
      <button @click='changeData'>改变数据</button>
   </div>
</template>
<script>
   export default {
     data () {
       return  {
          StringMsg : 'hello vue',
          NumberMsg : 2.4
       }
     },
     methods: {
       changeData () {
         this.StringMsg = 2.4;
         this. NumberMsg = 'hello vue'
       }
     }
   }
</script>
```

每个.vue 的文件则就是一个实例，在 data 中定义了两种数据：

- String 类型
- Number 类型

同时还定义了一个 changeData 事件。

在运行代码时候，`data选项`已经进入了`Vue的响应系统`里，`model层`(数据层)与`view层`(视图层)进行了对应的映射，任何数据类型都可以定义。

当用户发生点击操作的时候，同时可以把 StringMsg， NumberMsg 的数据对调，充分说明了，`无论值和类形都可以进行随意转换`。

### 行为与数据的映射

```vue
<template>
   <div>
      <p>{{StringMsg}}</p>
      <p>{{NumberMsg}}</p>
      <button @click='changeData'>改变数据</button>
      <button @click='findData'>查看数据</button>
   </div>
</template>
<script>
   export default {
     data () {
       return  {
          StringMsg : 'hello vue',
          NumberMsg : 2.4
       }
     },
     methods: {
       changeData () {
         this.StringMsg = 2.4;
         this.NumberMsg = 'hello vue'
       },
       findData () {
         console.log(`StringMsg: ${this.StringMsg}`)
         console.log(`NumberMsg: ${this.NumberMsg}`)
       }
     }
   }
</script>
```

改变数据以后，通过点击 findData 事件来进行验证，虽然在初始化定义好了行为数据的检测代码，但是当数据在执行 findData 之前先执行 changeData，一旦改变 data 选项里的数据时，findData 里对应的数据同时也会进行相应的映射。

this.StringMsg //=> 2.4

this.NumberMsg //=>'hello vue'

总结：

- data 选项里的数据是灵活的
- 可以定义任何数据类型
- 也可以改变成任何数据类型
- 当数据变化时，视图和行为绑定的数据都会同步改变

### props

使用`props`传递数据作用域是孤立的，它是父组件通过模板传递而来，想接收到父组件传来的数据，需要通过`props选项`来进行接收。

子组件需要显示的声明接收父组件传递来的数据的`数量`，`类型`，`初始值`。

简单的接收可以通过数组的形式来进行接收。

### 父组件

```vue
<template>
   <div>
      <demo :msg='msgData' :math = 'mathData' ></demo>
   </div>
</template>
<script>
import Demo from './Demo.vue'
   export default {
     data () {
       return  {
          msgData:'从父组件接收来的数据',
          mathData : 2
       }
     },
     components : {
       Demo
     }
   }
</script>
```

### 子组件

```vue
<template>
  <div>
     <p>{{msg}}</p>
     <p>{{math}}</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: [ 'msg' , 'math'],
}
</script>
```

在子组件中需要通过显示定义好需要从父组件中接收那些数据。

同样的在父组件中在子组件模板中过`v-bind`来传递子组件中需要显示接收的数据。

语法： ：== v-bind(是封装的语法糖) ：msg = msgData

- msg 第一个参数必须要与子组件的 props 同名
- msgData 则是父组件中需要向子组传递的数据

props 可以显示定义一个或一个以上的数据，对于接收的数据，可以是各种数据类型，同样也可以传递一个函数。

### 父组件

```vue
<template>
   <div>
      <demo :fn = 'myFunction'  ></demo>
   </div>
</template>
<script>
import Demo from './Demo.vue'
   export default {
     components : {
       Demo
     },
     methods: {
       myFunction () {
           console.log('vue')
       }
     }
   }
</script>
```

### 子组件

```vue
<template>
  <div>
     <button @click='fn'>按钮</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: [ 'fn' ],
}
</script>
```

同样，在父组件中也可以向子组件中传递一个`function`，在子组件同样也可以执行父组件传递过来的 myFunction 这个函数。

### 字面量语法和动态语法

对于字面量语法和动态语法，初学者在父组件模板中向子组件中传递数据时加和不加 v-bind 有什么区别，同时会引起什么错语等问题会感觉迷惑。

#### 在子组件模板上传递数据时加 v-bind 意味着什么 ？

`v-bind:msg = 'msg'` 通过 v-bind 进行传递数据并且传递的数据并不是一个字面量，双引号里的解析的是`一个表达式`，同样也可以是实例上定义的数据和方法(其实就是引用一个变量）"。

`msg='11111'` 没有 v-bind 的模式下只能传递一个字面量，这个字面量只限于 String 类量，字符串类型。

注意：

虽然通过字面量模式下，传任何类型都会被转成字符串类型，但是在子件接收的时候可以通过 typeof 去进行类型检测。

### 字面量写法除了 String 类型

想通过字面量进行数据传递时，如果想传递`非String类型`，必须`props`名前要加上`v-bind`，内部通过实例寻找，如果实例方没有此属性和方法，`则默认为对应的数据类型`。

`:msg='11111'`   //number `:msg='true'`   //bootlean `:msg='()=>{console.log(1)}`   //function `:msg='{a:1}`   //object

### 子组件模板 props 定义问题

#### 1.0版本时

HTML 特性是不区分大小写的，所以当使用的不是字符串模板，camelCased (驼峰式) 命名的 prop 需要转换为相对应的 kebab-case (短横线隔开式) 命名。

#### 注意

由于文档上仍然有这句话，经过测试后，无论是不是字符串模板，camelCased (驼峰式) 和 kebab-case (短横线隔开式) 两者都可以。

#### 建议

为了直观性，规范性还是推荐 kebab-case (短横线隔开式)。

### 对象传递简写

props 原子化可以让整体代码逻辑和向外暴露需要传递数据的接口非常清晰，但是同样可以把子组件需要接收的 props 在父组件中以一个对象进行传递。

当传递的数量一旦多到已经让原子化不再结构清晰的时候，通过一个对象传递显得更为简洁明了。

#### 父组件

```vue
<template>
   <div>
      <demo v-bind= 'msg'  ></demo>
   </div>
</template>
<script>
import Demo from './Demo.vue'
   export default {
     components : {
       Demo
     },
     data () {
       return {
         msg : {a:1,b:2}
       }
     }
   }
</script>
```

#### 子组件

```vue
<template>
  <div>
     <button>按钮</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: ['a','b'],
  created () {
     console.log(this.a)
     console.log(this.b)
  },
}
</script>
```

#### `<demo v-bind= 'msg' ></demo>` 内部发生了什么？

在子组件模板内部对其`进行了一个封装`，把其展开则跟 props 原子化原理是一个原理

```
<demo :a='a' :b='b' ></demo>
```

通常情况下建议使用第二种，props 原子化。

### 不可变的 props

在 data 选项中，当前实例（当前组件中改动）可以`任意改变data选项里的数据`，`Vue`传递数据时是基于`数据单向流动`，子组件不能改变当前实例中的 props 任何属性，需要通知父组件改变相应的值，重新改变。

### 直接改变 props 数据

```vue
<template>
  <div>
     <button @click='changeProps'>按钮</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: ['msg'],
  methods: {
    changeProps () {
      this.msg = 'new msg'
    }
  }
}
</script>
```

直接改变 props 时会发生一个警告报错

> [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "msg"

防止数据的`不可控性`，不能显示的直接改变，父组件的传递来的数据和子组接 props 接收的数据也是同步响应的，一旦父组件向下传递的数据改变时，prop 接收的数据值也会同样发生变化。

**单向数据流的原因也是如此，就像河流一样，水只会从高向低流，想让水的质量改变，只有从源头改变。**

#### 父组件改动

```vue
<template>
   <div>
      <demo :msg = 'msg'  ></demo>
      <button @click='msg = "new vue"'>按钮</button>
   </div>
</template>
<script>
import Demo from './Demo.vue'
   export default {
     components : {
       Demo
     },
     data () {
       return {
         msg : 'vue'
       }
     }
   }
</script>
```

在父组件中初始化传递过后，想要改变子组件的数据，可以通过再次改变向子组件传递的 msg 数据，子组件渲染的视图同样会跟着同步改动。

### 一次性传递，过渡改动

虽然 props 是不可改动的，上面的 case 是父组件进行改变自身实例的的数据，这个实现很简单，有时经过一次数据传递，不需用父组件再次传递，因为一些需求需要改动 props 数据，可以用过渡的方法，让其转换为一个可变的数据。

#### 过渡到 data 选项中

```javascript
props: ['msg'],
data: function () {
  return { myMsg: this.msg }
}
```

在 data 选项里通过 myMsg 接收 props msg 数据，相当于对 myMsg = msg 进行一个赋值操作，不仅拿到了 myMsg 的数据，而且也可以改变 myMsg 数据。

this.myMsg = 'new Vue'  myMsg 会发生相应的改变。

### 一次性传递，过滤处理

依然是通过 props 一次性接收，想对接收的 prop 进行一些过滤操作再次进行视图渲染，可以在一些计算属性中进行操作，可以 computed 监听 props 里的数据变化，经过过滤操作返回一个需要的值。

```javascript
props:['msg']
computed : {
   computedMsg () {
       return this.msg + 1
   }
}
```

注意： 在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。不要对父组件传递来的引用类型数据进行过滤。

> 下篇导读

本章对 props 和 data 的用法理解已经进行了全面的讲解，通过再次改变传递数据时是在父组件的实例里进行实施的。往往特定的需求和一些组件封装触发传递的命令并不能直接在父组件执行，需要子组件通知上层组件。

再近一步说，子组件改变不了父组件传递的数据，但是子组件可以用通信的方式，通知子组件改动，因此 `$on`，`$emit`，v-on 深入理解这三者关系尤为重要！

## 第03课：![on，](https://juejin.im/equation?tex=on%EF%BC%8C)emit，v-on 三者关系

### 用家庭来描述 `$emit`，`$on` 的关系

#### 每个 Vue 实例都实现了事件接口：

- 使用 `$on(eventName)` 监听事件
- 使用 `$emit(eventName)` 触发事件

如果把`Vue`看成一个家庭（相当于一个单独的`components`)，女主人一直在家里指派`($emit)`男人做事，而男人则一直监听`($on)`着女士的指派`($emit)里eventName`所触发的事件消息，一旦 `$emit` 事件一触发，`$on` 则监听到 `$emit` 所派发的事件，派发出的命令和执行派执命令所要做的事都是一一对应的。

Api 中的解释：

```
vm.$emit( event, […args] )
```

参数：

- `{string} event`
- `[...args]`

触发当前实例上的事件。附加参数都会传给监听器回调。

------

```javascript
vm.$on( event, callback )
```

参数：

```javascript
{string | Array<string>}` event (数组只在 `2.2.0+` 中支持) `{Function} callback
```

用法：

监听当前实例上的自定义事件。事件可以由 `vm.$emit` 触发。回调函数会接收所有传入事件触发函数的额外参数。

------

```vue
<template>
  <div>
      <p @click='emit'>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
      return {
         msg : '点击后女人派发事件'
      }
  },
  created () {
      this.$on('wash_Goods',(arg)=> {
          console.log(arg)
      })
  },
  methods : {
      emit () {
         this.$emit('wash_Goods',['fish',true,{name:'vue',verison:'2.4'}])
      }
  }
}
</script>
```

以上案例说了什么呢？在文章开始的时候说了 `$emit`的（eventName）是与 `$on(eventName)` 是一一对应的，再结合以上两人在组成家庭的之前，女人会给男人列一个手册，告诉男人我会派发 `$(emit)` 那些事情，男人则会在家庭组成之前 `$on(eventName)`后应该如何做那些事情。

通过以上说明我来进一步解释一下官方 Api 的意思。

------

```javascript
vm.$emit( event, […args] )
```

参数：

- `{string} event`

  - 第一个参数则是所要派发的事件名，必须是 String 类型的。
  - 故事中就是要告诉男人所需要执行的事情。

- `[...args]`

  - 第二个参数是一个任何数据类型，如果我们需要传入多个不同的数据类型，则可以写入数组中，像这样[object,Boolean,function,string,...]，只要传一个参数，我们则可以直接写入

  ```javascript
   this.$emit('wash_Goods','fish')
  ```

  - 故事中就是给男人的一个手册，告诉男人东西放在哪里，会需要到什么工具等等。

------

```javascript
vm.$on( event, callback )
```

参数：

- `{string | Array<string>}` event (数组只在 `2.2.0+` 中支持)
- 第一个参数是相对于 `$emit (eventName)` 一一对应的 `$on (eventName)`，两者是并存的、必须是 String 类型的。
- `(数组只在`2.2.0+`中支持)`或者是`Array<String>`数组中必须包含的是 String 项，后面再具体说。
- 故事中就是男人在组件一个家庭 (components) 的时候所监听的事件名。
- `{Function} callback`
- 第二个参数则是一个 function，同样也被叫作之前回调函数，里面可以接收到由 $emit 触发时所传入的参数（如果是单个参数）。
- 故事中是男人在接收到女人派发的事情该去做那些事情。

------

> {string | Array} event (数组只在 `2.2.0+` 中支持)

在2.2中新增这个 Api 牵扯了另一种方式，也存在这其它的独特用法。

继续延续故事，当女人派发的事情多了，我相信作为男人也会觉得很烦，一旦听到事件的时候肯定会很烦躁，总会抱怨两句。

如果女人在组成家庭之前，告诉男人将要监听那些事情，如果做一件事就抱怨一次，启不是多此一举，所以我们可以通过`Array<string> event`把事件名写成一个数组，在数组里写入你所想监听的那些事件，使用共享原则去执行某些派发事件。

```vue
<template>
  <div>
      <p @click='emit'>{{msg}}</p>
      <p @click='emitOther'>{{msg2}}</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
      return {
         msg : '点击后女人派发事件',
         msg2 : '点击后女人派发事件2',
      }
  },
  created () {

      this.$on(['wash_Goods','drive_Car'],(arg)=> {
          console.log('事真多')
      })
      this.$on('wash_Goods',(arg)=> {
          console.log(arg)
      })
      this.$on('drive_Car',(...arg)=> {
          console.log(BMW,Ferrari)
      })
  },
  methods : {
      emit () {
         this.$emit('wash_Goods','fish')
      },
      emitOther () {
         this.$emit('drive_Car',['BMW','Ferrari'])
      }
  }
}
</script>
```

以上案例说明了当女人无论是派发`drive_Car`或者是`wash_Goods`事件，都会打印出`事真多`，再执行一一对应监听的事件。

通常情况下，以上用法是毫无意思的。在平常业务中，这种用法也用不到，通常在写组件的时候，让`$emit在父级作用域中`进行一个触发，通知子组件的进行执行事情。接下来，可以看一个通过在父级组件中，拿到子组件的实例进行派发事件，然而在子组件中事先进行好派好事件监听的准备，接收到一一对应的事件进行一个回调，同样也可以称之为封装组件向父组件暴露的接口。

#### DEMO 下拉加载 infinite-scroll

```vue
<template>
    <div>
        <slot name="list"></slot>

        <div class="list-donetip" v-show="!isLoading && isDone">
            <slot>没有更多数据了</slot>
        </div>

        <div class="list-loading" v-show="isLoading">
            <slot>加载中</slot>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        data() {
            return {
                isLoading: false,
                isDone: false,
            }
        },
        props: {
            onInfinite: {
                type: Function,
                required: true
            },
            distance : {
                type : Number,
                default：100
            }
        },
        methods: {
            init() {
                this.$on('loadedDone', () => {
                    this.isLoading = false;
                    this.isDone = true;
                });

                this.$on('finishLoad', () => {
                    this.isLoading = false;
                });
            },
            scrollHandler() {
                if (this.isLoading || this.isDone) return;
                let baseHeight = this.scrollview == window ? document.body.offsetHeight : this.scrollview.offsetHeight
                let moreHeight = this.scrollview == window ? document.body.scrollHeight : this.scrollview.scrollHeight;
                let scrollTop = this.scrollview == window ? document.body.scrollTop : this.scrollview.scrollTop

                if (baseHeight + scrollTop + this.distance > moreHeight) {
                    this.isLoading = true;
                    this.onInfinite()
                }
            }
        },
        mounted() {
            this.scrollview = window
            this.scrollview.addEventListener('scroll', this.scrollHandler, false);
            this.$nextTick(this.init);
        },
    }
</script>
```

对下拉组件加载加更的组件进行了一个简单的封装：

```
data 参数解释：
```

- isLoading `false 代表正在执行下拉加载获取更多数据的标识`，`true代表数据加载完毕`
- isDone `false 代表数据没有全完加载完毕`，`true 代表数据已经全部加载完毕`

```
props 参数解释：
```

- onInfinite `父组件向子组件传入当滚动到底部时执行加载数据的函数`
- distance `距离滚动到底部的设定值`

#### 从此组件中，我们进行每一步的分析

- 在

  ```
  mounted
  ```

  的时候，对

  ```
  window
  ```

  对像进行了一个滚动监听，监听的函数为

  ```
  scrollHandler
  ```

  - 当

    ```
    isLoading，isDone
    ```

    任何一个为true时则退出 

    - `isloading`为`true`时防止多次同样加载，必须等待加载完毕
    - `isDone`为`true`时说明所有数据已经加载完成，没有必要再执行`scrollHandler`

  - 同时在$nextTick中进行了初始化监听 

    - `loadedDone` 一旦组件实例$emit('loadedDone')事件时，执行回调，放开加载权限
    - `finishLoad` 一旦组件实例$emit('finishLoad')事件时，执行回调，放开加载权限

- 再看看 scrollHandler函数里发生了什么 

  - `if (this.isLoading || this.isDone) return;` 一旦一者为true，则退出，原因在mounted已经叙述过了

  - ```
    if (baseHeight + scrollTop + this.distance > moreHeight)
    ```

     当在window对象上监听scroll事件时，当滚动到底部的时候执行 

    - `this.isLoading = true;`防止重复监听
    - `this.onInfinite()`执行加载数据函数

> 父组件中调用 infinite-scroll 组件

```vue
<template>
      <div>
          <infinite-scroll :on-infinite='loadData' ref='infinite'>
               <ul slot='list'>
                  <li v-for='n in Number'></li>
               </ul>
          </infinite-scroll>
      </div>
</template>

<script type="text/babel">
import 'InfiniteScroll' from '.......' //引入infinitescroll.vue文件
    export default {
         data () {
           return {
              Number : 10
           }
         },
         methods : {
           loadData () {
             setTimeout(()=>{
                this.Number = 20
                this.$refs.infinite.$emit('loadDone')
             },1000) 
           }
        }
    }
</script>
```

在父组件中引入 infinite-scroll 组件

当滑到底部的时候，infinite-scroll 组件组件内部会执行传入的`:on-infinite='loadData'`函数 同时在内部也会把 Loading 设置为 true，防止重复执行。

在这里用`this.$refs.infinite`拿到`infinite-scroll`组件的实例，同时触发事件之前在组件中 `$on` 已经监听着的事件，在一秒后进行改变数据，同时发出`loadDone`事情，告诉组件内部去执行`loadDone`的监听回调，数据已经全部加载完毕，设置`this.isDone = true；` 一旦`isDone`或者`isLoading`一者为`true`，则一直保持`return退出状态`。

**$emit 和 $on 必须都在实例上进行触发和监听。**

### v-on 使用自定义绑定事件

第一阶段 `$emit` 和 `$on` 的两者之间的关系讲完了，接下来该说说 v-on 与 `$emit` 的关系。

**另外，父组件可以在使用子组件的引入模板直接用 v-on 来监听子组件触发的事件。**

v-on 用接着故事直观的说法就是，在家里装了一个电话，父母随一直听着电话，同样也有一本小册子，在组成家庭之前，也知识要去监听那些事。

### Warn

`不能用 $on 侦听子组件释放的事件，而必须在模板里直接用 v-on 绑定`。

上面 Warn 的意思是`$emit和$on只能作用在一一对应的同一个组件实例`，而`v-on只能作用在父组件引入子组件后的模板上`。

就像下面这样： `<children v-on:eventName="callback"></children>`

就拿官方的这个例子说吧，其实还是很直观的：

```
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
```

这样的好处在哪里？虽然 `Vue` 是进行数据单向流的，但是子组件不能直接改变父组件的数据，(也不是完全不能，但不推荐用)，标准通用明了的用法，则是通过父组件在子组件模板上进行一个 `v-on` 的绑定监听事件，同时再写入监听后所要执行的回调。

在`counter-event-example`父组件里，声明了两个`button-count`的实列，通过 `data` 用闭包的形式，让两者的数据都是单独享用的，而且`v-on` 所监听的 `eventName` 都是当前自己实列中的 `$emit` 触发的事件，但是回调都是公用的一个 `incrementTotal` 函数，因为个实例所触发后都是执行一种操作！

如果你只是想进行简单的进行父子组件基础单个数据进行双向通信的话，在模板上通过 `v-on` 和所在监听的模板实例上进行 `$emit` 触发事件的话，未免有点多余。通常来说通过 `v-on` 来进行监听子组件的触发事件的话，我们会进行一些多步操作。

#### 子组件

```vue
<template>
  <div>
      <p @click='emit'>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
      return {
         msg : '点击后改变数据',
      }
  },
  methods : {
      emit () {
         this.$emit('fromDemo')
      },
  }
}
</script>
```

#### 父组件

```vue
<template>
  <div class="hello">
     <p>hello {{msg}}</p>
     <demo v-on:fromDemo='Fdemo'></demo>
  </div>
</template>
<script>
import Demo from './Demo.vue'
export default {
  name: 'hello',
  data () {
    return {
       msg: '数据将在一秒后改变'
    }
    
  },
  methods: {
    waitTime() {
      return new Promise(resolve=>{
        setTimeout(()=> {
            this.msg = '数据一秒后改变了'
            resolve(1)
        },1000)
      })
    },
    async Fdemo () {
        let a = await this.waitTime();
        console.log(a)
    }
  },
  components : {
     Demo
  }
}
</script>
```

从上面 demo 可以看出当子组件触发了 `fromDemo` 事件，同时父组件也进行着监听。

当父组件接收到子组件的事件触发的时候，执行了`async` 的异步事件，通过一秒钟的等秒改变 `msg`，再打印出回调后通过 `promise` 返回的值。

接下来想通的此例子告诉大家，这种方法通常是通过监听子组件的事件，让父组件去执行一些多步操作，如果我们只是简单的示意父组件改变传递过来的值用此方法就显的多余了。

我们进行一些的改动：

children

```vue
<template>
  <div>
      <p @click='emit'>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: [ 'msg' ],
  methods : {
      emit () {
         this.$emit('fromDemo','数据改变了')
      },
  }
}
</script>
```

parent

```vue
<template>
  <div class="hello">
     <demo v-on:fromDemo='Fdemo' :msg='msg'></demo>
  </div>
</template>
<script>
import Demo from './Demo.vue'
export default {
  name: 'hello',
  data () {
    return {
       msg: '数据没有改变'
    }
  },
  methods: {
    Fdemo (arg) {
      this.msg = arg 
    }
  },
  components : {
     Demo
  }
}
</script>
```

上面 `demo` 中子组件从父组件接收一个 `msg` 数据，但是想点击按钮的时候，改变父组件的 `msg`，进行父组件的数据改动，同时再次改变子组件的 `msg`，但是最简便的方法则是直接改变 `prop` 里 `msg` 的数据。但是数据驱动都是单向数据流，为了不造成数据传递的混乱，我们只能依靠一些其它手段去完成，一个小小的传递数据就显得很复杂的了，所以后续我们会讲讲如何去用更简便的 `Api` 做对应的事。

> 下篇课程导读：

在2.0初期 `.sync` 被砍了，`v-model` 承担起了双向绑定的职责，毕竟 `v-model` 不是为组件与组件之间数据双向绑定而设计的，用起来总有蹩脚的时候。`2.3`版本的回归，启用了显示通知的形式让双向绑定又活了，`.sync` 或者 `v-model` 比`$emit` 与 `v-on` 只是进行简单的父子组件数据交互更加便捷。

## 第04课：.sync 王者回归，v-model 使命将至

上一章我们已经对`$emit和v-on`如何进行数据和行为的交互做了讲解，但如果只是简单用来数据传递改变的话`.sync和v-model`再适合不过了。如果用过1.0的 Vue 的开发者，我相信 .sync 会让你用起来非常便捷，通过双向绑定很简单就能实双，父子组件的双向绑定，2.0为了保持单向数据流的良好性，去除了 .sync 的功能。

官方解释：

1.0 Props 现在只能单向传递。为了对父组件产生反向影响，子组件需要显式地传递一个事件而不是依赖于隐式地双向绑定。

推荐使用

- 自定义组件事件
- 自定义输入组件 (使用组件事件)
- 全局状态管理

通过大量观察，在初期2.0版本中，因为 .sync 并没有回归，只是在2.3进行回归，在组件库中进行数据双向绑定，几乎都是通过 v-model 来进行的。但是无论从语意上还是感观上，给代码维护的感就是不直观，v-model 在开发通常都是结合 Input 输入框来结合进行一个数据绑定，进行父子组件双向绑定，但是相比自定义 v-on 组件事件，无论从代码量，还是用法上更加简洁。

在 Vue 中，有许多方法和 Angular 相似，这主要是因为 Angular 是 Vue 早期开发的灵感来源。然而 Angular 中存在许多问题，在 Vue 中已经得到解决。

官方解释

**自定义事件可以用来创建自定义的表单输入组件，使用 v-model 来进行数据双向绑定。**

```
<input v-model="something">
复制代码
```

这不过是以下示例的语法糖：

```
<input
  v-bind:value="something"
  v-on:input="something = $event.target.value">
复制代码
```

v-model 其实也是一个语法糖，想要理解这些代码，你要先知道`Input元素`上本身有个`oninput事件`，这是`HTML5新增加`的，类似 onchange，每当输入框内容发生变化的时候，就会触发`Input事件`，然后把 Input 输入框中 value 值再次传递给 something。

此时 value 运用在一个 Input 元素上，用：v-bind:value='something'，意义上面只是把 Input 输入框中的 value 值与 something 作为一一对应的双向绑定，这就像一个循环操作，当再次触发 Input 事件时，`input($event.target)对象中的value值会再次改变something`。

这里我们对 v-model 绑定在 Input 元素上进行语法糖上的解析。

既然在元素上能进行双向绑定，那在组件中进行双向绑定又如何实现，原理其实都是一样的，只是应用在自定义的组件上时，拿的并不是`$event.target.value`，因为我此时不作用在 Input 输入框上。

### 在组件中使用时，它相当于下面的简写：

```
<custom-input
  v-bind:value="something"
  v-on:input="something = arguments[0]">
</custom-input>
复制代码
```

通过以上简写，通过自定事件让 v-model 进行一个父子组件双向绑定的话。

- v-bind:value='something' 此时 value 是作为子组件接收的 Props

接收的只能是 value 吗？必须是，因为 v-model 是基于 Input  输入框定制的，其中value 值是为 Input 内部定制的

```
 v-on:input="something = arguments[0]"
复制代码
```

此时作用在组件上时，v-on 监听的语法糖也会有所改动，监听的并不是`$event.target.value`，而是`回调函数中的第一个参数`。

#### 父组件

```vue
<template>
  <div class="hello">
    <button @click="show=true">打开model</button>
    <demo v-model="show"></demo>
  </div>
</template>

<script>
import Demo from './Demo.vue'
export default {
  name: 'hello',
  components: {
    Demo
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
```

#### 子组件

```vue
<template>
   <div v-show="value">
      <div>
         <p>这是一个Model框</p>
         <button @click="close">关闭model</button>
      </div>
   </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    close () {
      this.$emit('input',false)
    }
  }
}
</script>
```

这是一个模态框的基本雏形，可以在父组件通过 v-model 来进行 model 框和父组件之间的显示交互。

通过子组件看出`通过props接收了value值`，当点击关闭的时候还是通过`$emit事件触发input事件`，然后通过传入 false 参数。

父组件隐式 v-on:input="something = arguments[0]" 进行了监听，一但 Input 事件触发，父组件就会执行监听回调，从而做到了双向绑定。

> checkbox 和 radio 原理

```
 <input type="checkbox" :checked="status" @change="status = $event.target.checked" />
 
  <input type="radio" :checked="status" @change="status = $event.target.checked" />
复制代码
```

通过绑定 checked 属性，同样的监听的是 change 事件，无论是 checkbox 还是 radio 在操作的时候都会隐式自动触发一个 change 事件，跟 Input 通过 value 值，Input 触发事件原理绑定是一样的。

### 定制组件 v-model

定制组件，我们就可以`重写v-model里的Props 和 event`，默认情况下，一个组件的 v-model 会使用 `value 属性`和 `input 事件`，往往有些时候，value 值被占用了，或者表单的和自定议`v-model的$emit('input')事件发生冲突`，为了避免这种冲突，可以定制组件 v-model，冲突示例。

#### 子组件

```
<template>
   <div v-show="value">
      <div>
         <p>这是一个Model框</p>
        <input type="text" v-model="value">
        {{value}}
         <button @click="close">关闭model</button>
      </div>
   </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    close () {
      this.$emit('input',false)
    }
  }
}
</script>
```

#### 父组件

```vue
<template>
  <div class="hello">
    <button @click="show=true">打开model</button>
    <demo v-model="show"></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>
```

上面例子可以发现，在子组件中`input中v-model`和`model显示的操作数据共同占用的 props 中的（value）`，同样两者也共同占用了 emit('input') 触发事件，Input 输入框的事件是自动出发，而 model 显示消失是手动触发。

初始化的时候，Input 输入框的值的会被 value 传入的 false 值给自动加上，当改变 Input 输入框的时候，因为冲突而导致报错。

定制 v-model， 通过 model 选项改变 props 和 event 的值，从而解除两者的冲突。

- props代替掉原本 value 的值，可以自定义值
- event代表掉原本 input 的触发事件，可以自定义触发事件

#### 子组件

```vue
<template>
   <div v-show="show">
      <div>
         <p>这是一个Model框</p>
        <input type="text" v-model="value">
        {{value}}
         <button @click="closeModel">关闭model</button>
      </div>
   </div>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'close'
  },
  props: ['show'],
  data () {
     return {
       value: 10
     }
  },
  methods: {
    closeModel () {
      this.$emit('close',false)
    }
  }
}
</script>
```

#### 父组件

```
<template>
  <div class="hello">
    <button @click="show=true">打开model</button>
    <demo v-model="show" ></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>
```

通过 model 选项的改变，把 props 从原本的`value换成了show`，`input触发的事件换成了close`，从而两者都不相互依赖，解决了冲突的问题。

有些时候通过父组件中的子组件模板中想传递 value 值，也会导致同样的冲突。

在不用定制组件的情况下，以下的写法，也会同样导致冲突，导致同用一个 value。

```vue
<demo v-model="show" value="some value"></demo>
props:['value']
```

### 王者回归 .sync

在一些情况下，我们可能会需要对一个 prop 进行『双向绑定』。事实上，这正是 Vue 1.x 中的 .sync 修饰符所提供的功能。当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定的值。这很方便，但也会导致问题，因为它破坏了『单向数据流』的假设。由于子组件改变 prop 的代码和普通的状态改动代码毫无区别，当光看子组件的代码时，你完全不知道它何时悄悄地改变了父组件的状态。这在 debug 复杂结构的应用时会带来很高的维护成本。

在2.0发布一段之后，无论在业务组件还是在功能组件库上面的，大量的子组件改变父子组件的数据和组件库中可能达到大功率的复用，但是在2.3中回归，重新引入了 .sync 修饰符，这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 侦听器。

之前的例子中，v-model 毕竟不是给组件与组件之间通信而设计的双向绑定，无论从语意上和代码写法上都没有 .sync 直观和方便。

无论从 v-model 还是 .sync 修饰符来看，都离不开 $emit v-on 语法糖的封装，主要目的还是为了保证数据的正确单向流动与显示流动。

```
<demo :foo.sync="something"></demo>
复制代码
```

语法糖的扩展：

```vue
<demo :foo="something" @update:foo="val => something = val"></demo>
```

- foo 则是 demo 子组件需要从父组件 props 接收的数据
- 通过事件显示监听 update:foo (foo则是 props 显示监听的数据)，通过箭头函数执行回调，把参数传给 something，则就形成了一种双向绑定的循环链条

当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：

```javascript
this.$emit('update:foo', newValue)
```

同时父组件`@update:foo`也是依赖于子组件的显示触发，这样就可以很轻松的捕捉到了`数据的正确的流动`。

第一个参数则是 update 是显示更新的事件，跟在后面的`：foo`则是需要`改变对应的props值`。

第二个参数传入的是你`希望父组件foo数据里将要变化的值`，以`用于父组件接收update时更新数据`。

#### 子组件

```vue
<template>
   <div v-show="show">
      <p>这是一个Model框</p>
      <button @click="closeModel">关闭model</button>
   </div>
</template>
<script>
export default {
  props: ['show'],
  methods: {
    closeModel () {
      this.$emit('update:show',false)
    }
  }
}
</script>
```

#### 父组件

```vue
<template>
  <div class="hello">
    <button @click="show=true">打开model</button>
    <demo :show.sync="show" ></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>

```

上面的 case 同样也解决了 model 显示交互操作，从代码的语意上看上去让开发者一目了然，同样也做了 v-model 做不了的事，基于 props 的原子化，对传入的 props `进行多个数据双向绑定`.sync 也能轻松做到。

#### 父组件

```vue
<template>
  <div class="hello">
    <button @click="show=true">打开model</button>
    <demo :show.sync="show" :msg.sync="msg"></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        show: false,
        msg: '这是一个model'
      }
    }
  }
</script>
```

#### 子组件

```vue
<template>
   <div v-show="show">
      <p>{{msg}}</p>
      <button @click="closeModel">关闭model</button>
     <button @click="$emit('update:msg','改变了model文案')">改变文案</button>
   </div>
</template>
<script>
export default {
  props: ['show', 'msg'],
  methods: {
    closeModel () {
      this.$emit('update:show',false)
    }
  }
}
</script>
```

父组件向子组件 props 里传递了 msg 和 show 两个值，都用了.sync 修饰符，进行双向绑定。

### warn

子组件改变父组件的数据时，update 冒号后面的参数和父组件传递进来的值是同步的，想改变那个，则冒号后面的值对应的那个，两者是一一对应的，同时也是必填的。

同样还可以在组件 template 里点击执行 click 后不但可以支持回调函数，还可以写入表达式，只是一种直观的表现还是推荐这种写法的。

.sync 修饰符给我们开发中带来了很大的方便，同时在2.0的初期的组件库中大量的 v-model 给开发者用起来还是很别扭，在.sync 回归后同时也会慢慢向.sync 进行一个版本的迁移。

> 下篇课程导读：

不基于大量行为操作，只是进行一个或多个数据双向组件的时候，可以轻松用 .sync 与 v-model 去化解，往往组件通信并不是你想像的那么轻松简单，在项目复杂的时候，组件如何合理的拆分，会让业务代码的`清晰度`，`复用率`，`后续维护都会降低成本`，有利必有困难，同样会造成组件与组件的深层次传递，那我们如何进行通信呢？第一个想到的办法必然是 Vuex。Vuex 理解其实本质上并不是处理跨度深层次组件而使用的，往往这样会导致大家会滥用 vuex，而 `$attrs` `$listeners` 这对兄弟可以很好的帮助你进行深组件的通信。

## 第05课：![attrs，](https://juejin.im/equation?tex=attrs%EF%BC%8C)listeners 两兄弟

在2.4版本中，有关`$attrs`和`$listeners`这两个实例属性用法还是比模糊，深层次挖掘将会非常有用，因为在项目中深层次组件交互的话可能就需要 Vuex 助力了，但是如果只是一个简单的深层次数据传递，或者进行某种交互时需要向上通知顶层或父层组件数据改变时，杀鸡用牛 VUX 可能未免有点多余！

什么情况才会显得多余，如果我们纯通过 props 一层一层向下传递，再通过 watch 或者 data 进行过渡，如果只是单向数据深层能传递，进行监听改变深传递的数据，不进行跨路由之间页面的共享的话，用这两个属性非常便捷。

### 组件与组件之间大胆解耦

有些开发者，特别对 Vuex 没有深入理解和实战经验的时候，同时对组件与组件多层传递时，不敢大胆的解耦组件，只能进行到父子组件这个层面，而且组件复用率层面上也有所下降。

### `$attr` 与 interitAttrs 之间的关系

#### interitAttrs：

默认情况下父作用域的不被认作 `props 的特性绑定 (attribute bindings)` 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上。当撰写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为。通过设置 inheritAttrs 到 false，这些默认行为将会被去掉。而通过 (同样是 2.4 新增的) 实例属性 `$attrs` 可以让这些特性生效，且可以通过 v-bind 显性的绑定到非根元素上。

注意：这个选项不影响 class 和 style 绑定。

### what?

官网上并没有给出一点 demo，语意上看起来还是比较官方的，理解起来总是有点不太友好，通过一些 demo 来看看发生了什么。

### 子组件

```vue
<template>
   <div>
      {{first}}
   </div>
</template>
<script>
export default {
   name: 'demo',
   props: ['first']
}
</script>
```

#### 父组件

```vue
<template>
  <div class="hello">
     <demo :first="firstMsg" :second="secondMessage"></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        firstMsg: 'first props',
        secondMessage: 'second props'
      }
    },
  }
</script>
```

父组件在子组件中进行传递 firstMsg 和secondMsg 两个数据，在子组件中，应该有相对应的 props 定义的接收点，如果在 props 中定义了，你会发现无论是 firstMsg 和 secondMsg 都成了子组件的接收来的数据了，可以用来进行数据展示和行为操作。

虽然在父组件中在子组件模版上通过 props 定义了两个数据，但是子组件中的 props 只接收了一个，只接收了 firstMsg，并没有接收 secondMsg，没有进行接收的此时就会成为子组件根无素的属性节点。

<div class="hello" second="secondMessage"></div>

### 事件代理

当我们用 v-for 渲染大量的同样的 DOM 结构时，但是每个上面都加一个点击事件，这个会导致性能问题，那我们可以通过 HTML5 的 data 的自定义属性做事件代理。

#### 父组件改动

```vue
<template>
  <div class="hello" @click="ff">
     <demo :first="firstMsg" :data-second="secondMsg"></demo>
     <demo :first="firstMsg" :data-second="secondMsg"></demo>
     <demo :first="firstMsg" :data-second="secondMsg"></demo>
     <demo :first="firstMsg" :data-second="secondMsg"></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        firstMsg: 'first props',
        secondMsg: 'secondMsg'
      }
    },
    methods: {
      ff (e) {
        if(e.target.dataset.second == 'secondMsg') {
            console.log('通过事件委托拿到了自定义属性')
        }
      }
    }
  }
</script>
```

经过改动之后，在父组件中，把向子组件传递的参数名改成了 HTML 自定义的 data-second 属性，同样在子组件中不进行 props 接收，就顺其自然的成为了子组件每一个根节点的自定义属性。

通过事件冒泡的原理，然而可以从e.target.dataset.second 就能找对应的 Dom 节点进行逻辑操作。

同样，在子组件模版上可以绑定多个自定义属性，在子组件包裹的外层进行一次监听，通过 data 自定义属性拿到循环出来组件的对应的数据，进行逻辑操作。

interitAttrs = false 发生了什么 ？

```vue
<template>
   <div>
      {{first}}
   </div>
</template>
<script>
export default {
   name: 'demo',
   props: ['first'],
   inheritAttrs: false,
}
</script>
```

对子组件进行一个改动，我们加上 inheritAttrs: false，从字面上的翻译的意思，取消继承的属性，然而 props 里仍然没有接收 seconed，发现就算 props 里没有接收 seconed，在子组件的根元素上并没有绑定任何属性。

> $attrs

包含了父作用域中不被认为 (且不预期为) props 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 props 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建更高层次的组件时非常有用。

在前面的例子中，子组件`props中并没有接受seconed`，`设置选项 inheritAttrs： false`，同样也不会作为根元素的属性节点，整个没有接收的数据都被 `$attr` 实例属性给接收，里面包含着所有父组件传入而子组件并没有在 Props里显示接收的数据。

为了验证事实，可以在子组件中加上

```javascript
created () {
	console.log(this.$attrs)
}
```

打印出来则是一个对象 {second: "secondMsg", third: "thirdMsg"}

### warn

想要通 `$attr` 接收，但必须要保证设置选项 inheritAttrs: false，不然会默认变成根元素的属性节点。

开头说了，最有用的情况则是在深层次组件运用的时候，创建第三层孙子组件，作为第二层父组件的子组件，在子组件引入的孙子组件，在模版上把整个 `$attr` 当数作数据传递下去，中间则并不用通过任何方法去手动转换数据。

#### 子组件

```vue
<template>
   <div>
      <next-demo v-bind="$attrs"></next-demo>
   </div>
</template>

```

#### 孙子组件

```vue
<template>
  <div>
      {{second}}{{third}}
  </div>
</template>

<script>
  export default {
     props : [ 'second' , 'third']
  }
</script>

```

孙子组件在 props 接收子组件中通过 `$attr` 包裹传来的数据，同样是通过父组件传来的数据，只是在子组件用了`$attrs`进行了统一接收，再往下传递，最后通过孙子组件进行接收。

以此类推孙子组件仍然不想接收，再传入下级组件，我们仍然需要对孙子组件实力选项进行设置选项 inheritAttrs: false，否则仍然会成为孙子组件根元素的属性节点。

从而利用 `$attrs` 来接收 props 为接收的数据再次向下传递是一件很方便的事件，深层次接收数据我们理解了，那从深层次向层请求改变数据如何实现。意思就是让顶层数据和最底层数据进行一个双向绑定。

### $listeners

listeners 可以认为是监听者。

向下如何传递数据已经了解了，面临的问题是如何向顶层的组件改变数据，父子组件可以通过 v-model，.sync，v-on 等一系列方法，深层及的组件可以通过 `$listeners` 去管理。

`$listeners` 和 `$attrs` 两者表面层都是一个意思，`$attrs` 是向下传递数据，`$listeners` 是向下传递方法，通过手动去调用 `$listeners` 对象里的方法，原理就是 `$emit` 监听事件，`$listeners` 也可以看成一个包裹监听事件的一个对象。

### 父组件

```vue
<template>
  <div class="hello">
     {{firstMsg}}
     <demo v-on:changeData="changeData" v-on:another = 'another'></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        firstMsg: '父组件',
      }
    },
    methods: {
      changeData (params) {
         this.firstMsg = params
      },
      another () {
        alert(2)
      }
    }
  }
</script>
```

在父组件中引入子组件，在子组件模板上面进行 changeData 和 another 两个事件监听，其它这两个监听事件并不打算被触发，而是直接被调用，再简单的理解则是向下传递两个函数。

```vue
<template>
   <div>
      <p @click="$emit('another')">子组件</p>  
      <next-demo  v-on='$listeners'></next-demo>
   </div>
   
</template>
<script>
import NextDemo from './nextDemo.vue'
export default {
   name: 'demo',
   components: {
       NextDemo
   },
   created () {
     console.log(this.$listeners)
   },
}
</script>
```

在子组件中，引入孙子组件 nextDemo。在子组件中像 `$attrs` 一样，可以用 `$listeners` 去整体接收监听的事件，`{changeData: ƒ, another: ƒ}`以一个对象去接收，此时在父组件中子组件模板上监听的两个事件不但可以被子组件实例属性 `$listeners` 去整体接收，并且同时可以在子组件进行触发。

同样在孙子 nextDemo 组件中，继续向下传递，通过 v-on 把整个 `$listeners` 所接收的事件传递到孙子组件中，只是通过 `$listeners` 把其所有在父组件拿到监听事件一并通过 `$listeners` 一起传递到孙子组件里。

#### 孙子组件

```vue
<template>
  <div class="hello">
      <p @click='$listeners.changeData("change")'>孙子组件</p>
  </div>
</template>

<script>
export default {
  name: 'demo',
  created () {
      console.log(this.$listeners)
  },
}
</script>
```

依然能拿到从子组中传递过来的`$listeners`所有的监听事件，此时并不是通过`$emit`去触发，而是像调用函数一样，`$emit`只是针对于父子组件的双向通信，`$listeners`包了一个对象，分别是 changeData 和 another，通过$listeners.changeData('change')等于直接触发了事件，执行监听后的回调函数，就是通过函数的传递，调用了父组件的函数。

通过 `$attrs` 和 `$listeners` 可以很愉快地解决深层次组件的通信问题，更加合理的组织你的代码。

> 下篇导读

以上介绍了如何在高层组件向下传递数据，在底层组件向上通知改变数据或者进行一些行为操作，而`$listeners` 就像是调用了父组件的函数一样，看上去根本没有什么区别，你可能会想用`$parents，$children`一样能做到。不是不可用，而是在什么情况下适合用，通过下篇介绍木偶组建和智能组件好好理一下正确场景下如何准确利用 Api 进行行为交互、数据交互。

## 第06课：智能组件与木偶组件的正确用法

Vue 中在组件层面的数据和行为通信，前五章通过一些 demo 和进行了深入总结，包括以下几点：

- data 与 props 的数据存放要素
- 单个组件 `$emit` 与 `$on` 的通信，父子组件  v-on 与 `$emit` 的通信
- .sync 和 v-model 双向绑定的模式
- `$attrs` 与 `$listeners` 深层次数据传递与行为交互的运用模式

以上涵盖了大量组件与组件之间的通信模式，只有能熟练掌握以上知识点，接下来才能对智能组件与木偶组件写法和封装有准确用法。

### 智能组件原理

智能组件可以称为第三方通用组件，也可以称之为业务型公用组件，与父组件之间的关系是完全解耦的，只能通过 props 进行数据传递，event 进行事件传递，不依赖于任何环境，只需要传递相应的数据和事件，就能得到你想要的操作。

### 木偶组件原理

木偶组件是为了业务页面进行拆分而形成的组件模式。比如一个页面，可以分多个模块，而每一个模块与其余页面并没有公用性，只是纯粹拆分。

还有一个方面则是复合组件的联动用法。当一个智能组件是由两个组件组成的一个复合智能组件，而它的子组件与父组件之间就有一个木偶的原理，因为两者是相互的，在开发者调用并需保持它们的关系性、规范性，一旦改变其本身的模式则会无效。

> 木偶组件的拆分简便用法

对于每一个木偶组件在定义之前，你必然会知道它将作用于哪个页面，在哪一层，都是有一个准确的不变性，取决于你对页面的拆分深度和数量。

### $parent 组件通信

`$parent` 指向当前组件的父组件，可以拿到父组件的整个实例。前面已经说了，木偶组件可以明确的知道运用在每个 spa 页面对应路由的第几层组件，可能是当前页面的子组件，孙子组件，或者更深的层次。而想和父组件进行通信的话，在不考虑复用的前题下，可以明确如何与父组件进行数据通信或者行为通信。

### 父组件

```vue
<template>
  <div class="hello">
     {{msg}}
     <demo></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    data () {
      return {
        msg: '父组件',
      }
    }
  }
</script>
```

### 子组件

```vue
<template>
   <div>
      <p>{{demoMsg}}</p>
      <p @click="handleClick">子组件</p>  
   </div>
   
</template>
<script>
export default {
   name: 'demo',
   data () {
     return {
        demoMsg : ''
     }
   },
   methods: {
     handleClick () {
        let msg = this.$parent.msg
        this.demoMsg = msg
        this.$parent.msg = '父组件数据被改了'
     }
   }
}
</script>
```

demo 组件已经明确的知道是 Hello 组件的子组件，也可以是 demo 组件是 Hello 组件的木偶组件，通过 `$parent` 就可以随意取到和改动父组件实例的属性（数据）。同样这也并不违反数据的单向流的原则，可以对比一下通过 v-on 和 `$emit` 或者 v-model，.sync 这几种方法，不但方便很多，还更加快捷，并且明确了组件的位置，就像木偶一样，永远不会变，它的父组件永远只会是同一个。

#### $parent 调用父组件方法

父组件

```javascript
...
methods : {
    parentMethods () {
        console.log('调用父组件的方法')
    }
}
```

#### 子组件

```javascript
this.$parent.parentMethods()
```

同样可以调用父件的方法，通过子组的调用去执行父组件的方法。此方法是在父组件内部执行的，在某些场景下就会显得很便捷，后面会给出例子。

### $children 的组件通信

`$children`也是针对于木偶组件的应用，它和`$parent`相反，此 Api是对于一个组件来说，已经明确知道它的子组件，也可能是一个子组件集，准确地拿到想要的子组件实例，或者子组件集实列`$children`可以通过父组件拿到子组件的实例，它是以一个数组的形式包裹。

### 父组件

```vue
<template>
  <div class="hello">
     <p @click='handlerClick'>父组件</p>
     <demo></demo>
     <demo></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    },
    methods: {
      handlerClick () {
        console.log(this.$children)
        this.$children.forEach(item => {
           item.demoMsg = '通过$children改变'
        })
      }
    }
  }
</script>
```

#### 子组件

```vue
<template>
   <div>
      <p>{{demoMsg}}</p>
   </div>
   
</template>
<script>
export default {
   name: 'demo',
   data () {
     return {
        demoMsg : ''
     }
   }
}
</script>
```

此时已经不是通过子组件去与父组件通信，而是用父组件与子组件通信，`$parent`与`$children`就形成了一个父子组件互相通信的机制，还是那句重点一句`只适合木偶组件的模式`。

在父组件中明确 demo 组件是子组件，通过`$children` 拿到所有 demo 组件的实例，通过 forEach 循环改变每个子组件的实例属。因为 data 里所有属性(数据)都是通过 object.defineproperty 来进行数据劫持，把 data 里的属性都绑到 Vue 实例上。从中我们可以轻而易举的得到它。

> 智能组件的运用

智能组件可能是业务组件也可能是第三方通用组件，总归是多个组件公用的子组件，因为它可能服务多个组件或者页面，当嵌入不同组件里，所需要展求的业务能力也是有所区别的，因此称之为智能组件。

#### 举一个例子：

比方说一个智能组件 A，将嵌入 B，C 组件做为子组件：

当A嵌入到B中需要显示文案`嵌入B组件中`

当A嵌入到C中需要显示文案`嵌入C组件中`

通过向智能传递一个数据和标识，告诉它我需要你展示什么？

#### 父组件

```vue
<template>
  <div class="hello">
     <p>父组件</p>
     <demo type='A'></demo>
  </div>
</template>

<script>
  import Demo from './Demo.vue'
  export default {
    name: 'hello',
    components: {
      Demo
    }
  }
</script>
```

#### 子组件

```vue
<template>
   <div>
      <p>{{type==='B'?'嵌入B的组件':'嵌入C的组件'}}</p>
   </div>
   
</template>
<script>
export default {
   name: 'demo',
   props: ['type']
}
</script>
```

对于智能组件你永远不知道你将作用于哪个组件之下，这本身就是一个不定因素，特别对于通用组件，这将会暴露各种方法和 props 数据，只有传递数据传递事件去做自己想做的事件，智能组件（也是一个封装模块），会根据传入的数据和事件去做内部封装后所做的事情，而你并不可以轻意的随便改动它。

### 智能组件里的木偶组件

智能组件与木偶组件同时可以相互嵌套，可以作用在`复合组件上`。一般复合组件是都是通三方通用组件称之为智能组件，但是复合组件的父组件和子组件同样可以互相成为对方的`木偶组件`，两者可以成为`相互依赖的关系`。无论从代码量和理解，调用都会很方便，木偶组件相比智能组件`更方便理解和简洁`，但是`功能上就比较单一`。

#### 通过一个 accordion 折叠面板来理解智能组件中的木偶组件

accordion属于第三方通用组件，同样也是一个复合组件。

#### Accordion 组件

```vue
<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props : ['repeat'],
        methods : {
            open (uid) {
                this.$children.forEach(item => {
                     if(item._uid != uid){
                         item.close = false
                     }
                })
            }
        }
    }
</script>
```

#### AccordionItem 组件

```vue
<template>
<div>
   <p @click='handleClick'>{{title}}</p>
   <div v-show='close' >
      <slot></slot>
   </div>
</div>
</template>

<script>
    export default {
        props : ['title'],
        data () {
            return {
                close : false
            }
        },
        created () {
            if(this.$parent.repeat === true) {
                this.close = true
            }
        },
        methods : {
            handleClick () {
                this.$parent.open(this._uid)
                this.close = !this.close
            }
        }
    }
</script>
```

### 最后的调用

```vue
<template>
  <div class="hello">
     <accordion :repeat='true'>
         <accordion-item title='vueTitle'>vue</accordion-item>
         <accordion-item title='vue-routerTitle'>vue-router</accordion-item>
         <accordion-item title='vuex-Title'>vuex</accordion-item>
     </accordion>
  </div>
</template>

<script>
  import Accordion from './accordion.vue'
  import AccordionItem from './accordion-item.vue'
  export default {
    name: 'hello',
    components: {
      Accordion,
      AccordionItem
    }
  }
</script>
```

先从智能组件这个方面说起，无论是 accordion 还是 accordion-item 同向外暴露一个 props进行你希望的操作。

accordion 暴露了一个 repeat，当 repeat 为 true 的时候则把所有 item 项初始化都进行展开。

accordion-item 暴露了一个 title，可以随意传入你想设计的标题。

以上这些往往都是一些不定因素，也不知道它可能会嵌套在哪个页面组件的哪一层，这就是复合组件的智能方面。

再从木偶组件这个方面论一下。accordion 与 accordion-item 两者是父子组件关系，这种关系是不可变的，想要用到这个复合组件，accordion 与 accordion-item 必须保证确定的父子组件关系，并且缺一不可，从中就能体现出两者的木偶性。

accordion-item 通过`$parent`调用 accordion 父组件的 open 方法， 而 accordion 通过`$children`拿到每一个 accordion-item 子组件的实例，进行显示隐藏的转换。两者很充分形成了一个对木偶关系，这种父子关系是永远断不了的。

> 总结： 木偶组件：子组件只能有一个爹，必须是唯一的，而且父子俩长得一模一模，谁离开谁都活不了。

智能组件：子组件可以有N个爹，非唯一性，而且父子长得不一定要一样，子组件可能会有N个爹的特性，子组件离开哪个爹都能继续生存。

## 第07课：你不知道的中央事件通信

中央事件通信，就像一根线一样，把两个组件的通信用一根线连接起来。前面几节课讲了父子组件通信与深层次嵌套组件通信，并且已经通过各种 Api 和良好的解决方案，但是同级组件怎么办，无论用`$emit` `v-on`  `v-model`  `.sync` `$attr与$listeners`都不适用，以上这些都是`基于嵌套的父子组件进行通信`。

> 同级组件通信，也是一种常见的通信模式，在一个大的容器下(父组件)底下有两个平级的组件，两个组件进行数据交或者行为交互，在 Api 的方法里也没有专门的设计。

### 通过 `$emit`，v-on，`$on` 三者结合使用

这种操作是非常复杂的，如果你能良好掌握以上三个 Api 进行同级组件的通信，那你对这三个 Api 已经完全掌握了。这种方法是一种过渡方法，`b->a`  `a->c` ，意思是`a`去通知`b`，`b`对`a`进行一个监听，当`a`监听到件事，在进行向`c`触发，`c`的内部再进行监听，这样就形成了一个过渡链条。但是代码上就不显的那么直观了，多个触发事件，多个监听事件，一旦这种平级组件需要通信多了，那么代码就有一种很难维护的感觉。

> 实例demo

### 同级子组件 First

```vue
<template>
  <div>
    <p @click="$emit('fromFirst','来自A组件')">first组件</p>
  </div>
</template>

<script>
  export default {
    name: 'first'
  }
</script>
```

按着上面的讲解的顺序，先定义一个同级子组件，当点击的时候向外触发一个`eventName`为`fromFirst`的事件，传递一个`来自A组件`的参数这就形成了`b->a` 让`a`去监听事件，让`b`去触发事件。

### 父组件

```vue
<template>
   <div>
     <p>父组件</p>
     <first v-on:fromFirst="hanlderFromA"></first>
     <second ref="second"></second>
  </div>
<template>
<script>
     import First from './first.vue'
  import Second from './second.vue'
  export default {
    name: 'login',
    components: {
      First,
      Second
    },
    methods: {
      hanlderFromA (Bmsg) {
        let second = this.$refs.second
        second.$emit('fromLogin', Bmsg)
      }
    }
  }
<script>
```

- 父组件中引入了两个同级组件`First`/`Second`，还是延续`b->a` 。此时`a`就是这个父组件，再梳理一下知识点，`v-on与$emit`是进行`父子组件事件通信`，作用在父子组件两个层面上，在`First`组件模版上进行一个`v-on监听`，一旦监听到触发`fromFirst` 事件，则进行`hanlderFromA`函数。
- 接下来是`a->c`这个阶段，`$emit与$on`都是作用在同一个组件的实列上，通过`this.$refs`拿到`Second`组件的实列，在执行`hanlderFromA函数`时再告诉`c`组件进行通信，同时把从`b`接收到的参数再次传入。

以上很明显能看出 A（父组件）只是一个过渡体，也可以说是一个真实的中央体，进行中央事件的派发。

### 同级子组件 Second

```vue
<template>
  <div>
    <p>{{Bmsg}}</p>
    <p>second组件</p>
  </div>
</template>

<script>
  export default {
    name: 'second',
    created () {
      this.$on('fromLogin', (Bmsg) => {
        this.Bmsg = Bmsg
        console.log('通信成功')
      })
    },
    data () {
      return {
        Bmsg: ''
      }
    }
  }
</script>
```

Second 组件是被通信的一方，在`a(父组件)`进行触发，然而在`c(second)`组件中进行监听，一旦监听到了`fromLogin`事件，可以做你想做得改变数据，行为操作都不是问题了。

这就`是b->a a->c` 的模式，我只能用一句话说，复杂！实在是复杂，那必然有简单的方法。在了解更简单的方法之前，先了解一下`ES6 模块的运行机制`。

> ES6 模块的运行机制

JS 引擎对脚本静态分析的时候，遇到模块加载命令`import`，就会生成一个`只读引用`。ES6 export 的原始值变了，`import加载`的值也会跟着变。因此，`ES6` 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

> 举个例子

```javascript
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
```

虽然在`main.js`执行程序的时候加载了`count`，但是`count`在`lib.js`和在`main.js`里形成了一个引用关系，一旦libs内部的`export`导出的`counter`发生变化时，`main.js`中同样会发生变化。

> 通过额外的实例进行简单的中央事件处理

定义一个额外的实例进行一个事件的中转，对于`ES6` 模块的运行机制已经有了一个讲解，当模块内部发生变化的时候，引入模块的部分同样会发生变化，当又一个额外的实例对加载机制进行引入进行`$emit与$on`进行绑定通信，能轻而易举解决问题，通过`b->a->c`的模式直接过渡。

> 定义一个中央事件实例

```vue
<script>
  import Vue from 'vue'

  export default new Vue()
</script>
```

new 一个 Vue 的实例，然后把这个实例能过 es6 模块机制导出。

### 父组件改动

```vue
<template>
  <div>
     <p>父组件</p>
     <first></first>
     <second></second>
  </div>
</template>

<script>
  import First from './first.vue'
  import Second from './second.vue'
  export default {
    name: 'login',
    components: {
      First,
      Second
    }
  }

</script>
```

在父这里只需要进行两个同组件的引入，可以删除任何过渡的方式。

#### 同级子组件 First 改动

```vue
<template>
  <div>
    <p @click="handleClick">first组件</p>
  </div>
</template>

<script>
  import Bus from './bus.js'
  export default {
    name: 'first',
    methods: {
      handleClick () {
        Bus.$emit('fromFirst', '来自A的组件')
      }
    }
  }
</script>
```

在`first同级`组件中把`bus`实例引入，点击时让`bus`实例触发一个`fromFirst`事件，这里你可能已经理解 module 加载机制配合在单个实例上用`$emit和$on`进行通信绑定，往下看。

### 同级子组件Second改动

```vue
<template>
  <div>
    <p>{{Bmsg}}</p>
    <p>second组件</p>
  </div>
</template>

<script>
  import Bus from './bus.js'
  export default {
    name: 'second',
    created () {
      Bus.$on('fromFirst', ( Amsg )=> {
        this.Bmsg = Amsg
        console.log('同级组件交互成功')
      })
    },
    data () {
      return {
        Bmsg: ''
      }
    }
  }
</script>
```

同样也引入`bus`实列，通过`bus`用`$on`监听`fromFirst`事件，因为`bus实例`与`bus.js`里的`export defalt new Vue`关系是一个引用关系，当代码执行后，无论`first`或者`second`组件通过`bus实例`形成了一个`中央事件链条`，这种方法不但直观，也更加便捷。

> 中央事件的延生 跨组件深层次交互

既然同级组件可以用中央事件去过渡，那深层次嵌套不同级组件可以吗？那你肯定第一时间用到了 Vuex，但我一直认为 Vuex 操作大量的数据联动性非常有用，但是如果只是一个改变数据，或者执行事件，用起来反而更加直观。

> 将要模拟的方案：

- a 组件 
  - first 组件 -> firstInner 组件
  - second 组件 -> secondInner 组件

当`firstInner组件`可能会与`second组件`或者`secondInner组件`发生跨组件深层次交互也同样可以用中央事件去进行过渡`，如果说 vuex 是顶层共享数据源，那么中央事件就是顶层共享通信网`。

> demo 示例

前面的所有父组件都不写代码了，只展示一下firstInner 组件、secondInner 组件。

### firstInner 组件

```vue
vue<template>
  <div>
    <p @click="handleClick">firstInner组件</p>
  </div>
</template>

<script>
  import Bus from './bus.js'
  export default {
    name: 'first',
    methods: {
      handleClick () {
        Bus.$emit('fromFirstInner', '来自firstInner组件')
      }
    }
  }
</script>
```

### SecondInner 组件

```vue
<template>
  <div>
    <p>secondInner组件</p>
  </div>
</template>

<script>
  import Bus from './bus.js'
  export default {
    name: 'secondInner',
    created () {
      Bus.$on('fromFirstInner',(msg) => {
         console.log(msg)
      })
    }
  }
</script>
```

无论你想通信的两个组件嵌到在任何地方，它们的关系是如何的，只需要通过中央事件的处理，都能完成，同时还可以进行一对多的中央事件处理方式。在程序代码可控的情况下，没有什么是不可行的，只要数据量的变动是在可控范围之内，做一个中央事件网去行成一个通信网络，也是一个不错的选择。

作者：混元霹雳手

链接：https://juejin.im/post/5bd97e7c6fb9a022852a71cf

来源：掘金

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。