# vue props监听变化的几种方式

## 应用场景

在vue中父子组件是通过props传递数据的。通常有以下几种场景：

- 子组件展示父组件传递过来的props，一般是字符串
- 子组件通过父组件的props计算得到某个值
- 子组件修改父组件传递过来的props

## computed 计算属性

使用场景：当pros传递过来的值不能直接使用的时候，就可以使用计算属性了。
 比如：完整的地址需要将省市区3个字段拼接后展示。

计算属性是基于依赖进行`缓存`的，当props不变时，多次访问addrese计算属性，会立即返回结果，而不必再次执行计算。

```js
props: {
    province: String, // 省
        city: String, // 市
            area: String // 区
},
    computed: {
        address(){
            return `${this.province}${this.city}${this.area}`
        }
    }
```

## methods 方法

上面计算属性，通过methods也可以实现，但methods不会进行缓存，而且methods通常用来处理业务逻辑。

## watch 侦听器

使用场景：将传递过来的props作为初始值，比如城市选择列表的默认城市，我们希望选择城市时，改变这个值。

##### 单向数据流

父级 prop 的更新会向下流动到子组件中。

当我们需要在子组件中修改父组件传递过来的props时，如果直接更改，vue会报错的，因为如果子组件直接更改父组件的props，会使应用的数据流向难以理解。

##### 解决方案

为了不直接修改props的值，可以在data中，用props初始化一个data属性，以后更改这个data属性即可。

但是这会导致，父组件变化时，该data属性不会更新(`注意`：只针对基本类型，如果是引用类型，仍旧是变化的。)

此时为了更新这个data属性，就需要使用侦听器来监听props的变化。

## 深度监听

使用场景：当监听到某个值变化后，执行异步请求。
 此时computed和methods都不太合适。

- 基本类型

```js
watch: {
    msg(newV,oldV) {
        // do something
        console.log(newV,oldV)
    } 
}
```

- 引用类型 

  1. 计算属性(推荐)
      先通过计算属性得到引用类型的内部某个字段，再使用侦听器监听该字段的变化

  ```js
  computed: {
      isShow() { 
          return this.config.role.isShow
      }
  },
      watch: {
          isShow(newV,oldV) {
              // do something
              console.log(newV,oldV)
          }
      }
  ```

  1. deep

  ```js
  watch: {
      isShow:{ //深度监听，可监听到对象、数组的变化
          handler (newV, oldV) {
              // do something, 可使用this
              console.log(newV,oldV)
          },
              deep:true
      }
  },
  ```

## 总结

- props和data的选择
- data的更新
- 单向数据流
- 为什么不用methods

## 参考

[vue文档：计算属性和侦听器](https://links.jianshu.com/go?to=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Fcomputed.html%23%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-vs-%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7)   
 [小火柴的蓝色理想：Vue组件选项props](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.cnblogs.com%2Fxiaohuochai%2Fp%2F7388866.html%23anchor8)

作者：回调的幸福时光

链接：https://www.jianshu.com/p/ff708a773dc0

来源：简书

简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。