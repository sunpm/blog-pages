# vue生命周期钩子函数详解

**先放一张官网生命周期图：**

![img](https://user-gold-cdn.xitu.io/2019/2/21/1690dfbce06b05ee?imageslim) 



Vue2.0的生命周期钩子一共有10个



| **生命周期钩子**  | **说明**                                                         | **在此阶段可以做的事情** |
| ------------- | :----------------------------------------------------------- |
| beforCreate   | 实例初始化完成                                               |加loading事件 |
| created       | 实例化已经完成之后被调用，数据观测，属性和方法的运算，watch/event事件回调已完成，挂载还没还没开始 $el属性上还没有 |结束loading、请求数据为mounted渲染做准备 |
| beforeMount   | 开始挂载之前调用，相关的render函数首次被调用 此时的DOM是数据挂载前的DOM，数据还未挂载 |.. |
| mounted       | 数据已挂载后调用 初始化的el被vm.$el替换，并挂载到实例上去之后的钩子 |配合路由钩子使用 |
| beforeUpdate  | 数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前            ||
| updated       | 在数据驱动下导致的虚拟DOM重新渲染和打补丁之后调用，此时，组件DOM已经更新 |数据更新时，做一些处理（此处也可以用watch进行观测） |
| activated     | keep-alive 组件激活时调用 如果你使用keep-alive进行缓存， 又希望每次切换组件的时候更新数据，那么更新数据的请求方式必须写在该钩子函数里 |
| deactivated   | keep-alive 组件停用时调用                                    |
| beforeDestroy | 实例销毁之前调用，此时实例还可用                             ||
| destroyed     | 实例销毁后调用，实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁 |组件销毁时进行提示 |



**测试代码：** 
组件模板自己试着写就好，此处贴js代码 
（省略部分代码）

```js
export default {
    data () {
        return {
            todos: [],
            allCounts: 0,
            filter: 'all',
            id: 0,
            states: ['all', 'active', 'completed']
        }
    },
    beforeCreate () {
        console.log('==============' + 'beforeCreated' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    },
    created () {
        console.log('==============' + 'created' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    },
    beforeMount () {
        console.log('==============' + 'beforeMount' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    },
    mounted () {
        console.log('==============' + 'mounted' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    },
    beforeUpdate () {
        console.log('==============' + 'beforeUpdate' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    },
    updated () {
        console.log('==============' + 'updated' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    },
    beforeDestroy () {
        console.log('==============' + 'beforeDestroy' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    },
    destroyed () {
        console.log('==============' + 'destroyed' + '===================')
        console.log(this.$el)
        console.log(this.$data)
        console.log(this.filter)
    }
}
```

**效果：** 
![刷新vue项目时](https://img-blog.csdn.net/20180726110418925?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NTg1NzAx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70) 
![改变data中的filter时](https://img-blog.csdn.net/20180726110457471?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NTg1NzAx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

至于destroyed就不好演示了。 
destroyed钩子函数有一点一定要特别注意：**在执行destroy方法后，对data的改变不会再触发周期函数，此时的vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在**。所以对于实时显示的通知型组件，在他destroyed之前，我们必须**手动removeChild()删除该节点**；否则，DOM节点还是存在，影响浏览器性能。

还有一点需要补充： 
**组件套用时生命周期：** 
父组件：tabs 
子组件：tab、tab-container 
我的应用场景是：

```html
<tabs>
    <tab />
    <tab />
    <tab />
    <tab-container />
</tabs>
```

```js
/*tabs的打印代码*/
  beforeMount () {
    console.log('============Tabs befortemounted==============')
  },
  mounted () {
    console.log('============Tabs mounted==============')
  },
  created () {
    console.log('============Tabs created==============')
  }

/*tab的打印代码*/
  beforeMount () {
    console.log('----------------tab beforemounted-------------')
  },
  mounted () {
    this.$parent.panes.push(this)
    console.log('----------------tab mounted-------------')
  },
  created () {
    console.log('----------------tab created-------------')
  }

/*tab-container的打印代码*/
  beforeMount () {
    console.log('!!!!!!!!!!!!!!!!tab container beforemounted!!!!!!!!!!!!!!!!!')
  },
  mounted () {
    console.log('!!!!!!!!!!!!!tab container mounted!!!!!!!!!!!!!!!!!')
  },
  created () {
    console.log('!!!!!!!!!!!!!!!!!!!!!tab container created!!!!!!!!!!!!!!!!!!!!!!!')
  }
```

浏览器结果： 
![组件钩子函数打印](https://img-blog.csdn.net/20180726112221490?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1NTg1NzAx/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**结论：**先执行父组件的created和beforeMounted函数；再按子组件的使用顺序，执行子组件的created和beforeMounted函数；依旧按照子组件的执行顺序执行mounted函数，最后是父组件的mounted函数； 
也就是说**父组件准备要挂载还没挂载的时候，子组件先完成挂载，最后父组件再挂载**；所以在真正整个大组件挂载完成之前，内部的子组件和父组件之间的数据时可以流通的（好难表达。。。。）



------

版权声明：本文为CSDN博主「小bearBear」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_35585701/article/details/81216704

