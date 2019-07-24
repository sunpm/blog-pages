

# [vue中watch的用法](https://www.cnblogs.com/carriezhao/p/9330137.html)

**一、首先确认watch是一个对象，一定要当做对象来用**

```js
`watch:{` `}`
```

　　对象：有键，有值。

　1、键：就是你要监控的那个家伙，比如说$route，这个就是要监控路由的变化。或者是data中的某个变量。

　2、值：

　　① 可以是【函数】：就是当你监控的家伙变化时，需要执行的函数，这个函数有两个形参，第一个是当前值，第二个是变化后的值。

　　② 可以是【函数名】：不过这个函数名要用单引号来包裹。

　　③ 可以是【包括选项的对象】：选项包含有三个，如下：

　　　　a. 第一个handler：其值是一个回调函数。即监听到变化时应该执行的函数

　　　　b. 第二个是deep：其值是true或false；确认是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以监听到，因此：数据的改变不需要使用深度watch）

　　　　c. 第三个是immediate：其值是true或false，确认是否以当前的初始值执行handler的函数



```js
var vm = new Vue({
    data:{
        a:1,
        b:2,
        c:3
    },
    watch:{
        //值：函数
        a:function(val, oldVal) {
            console.log('new: %s, old: %s', val, oldVal)
        },
        //值：方法名
        b:'someMethod',
        //选项的对象
        c:{
            handler:function(val, oldVal){
                console.log(val, oldVal)
            },
            deep: true,
            immediate: true
        }
    }
});
```





# [Vue.js中 watch(深度监听)的最易懂的解释](https://www.cnblogs.com/yesu/p/9546458.html)

```vue
<div>
      <p>FullName: {{fullName}}</p>
      <p>FirstName: <input type="text" v-model="firstName"></p>
</div>
 
new Vue({
  el: '#root',
  data: {
    firstName: 'Dawei',
    lastName: 'Lou',
    fullName: ''
  },
  watch: {
    firstName(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    }
  } 
})
```

上面的代码的效果是，当我们输入`firstName`后，`wacth`监听每次修改变化的新值，然后计算输出`fullName`。

## handler方法和immediate属性

这里 watch 的一个特点是，最初绑定的时候是不会执行的，要等到 `firstName` 改变时才执行监听计算。那我们想要一开始就让他最初绑定的时候就执行改怎么办呢？我们需要修改一下我们的 watch 写法，修改过后的 watch 代码如下：

```js
watch: {
  firstName: {
    handler(newName, oldName) {
      this.fullName = newName + ' ' + this.lastName;
    },
    // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
    immediate: true
  }
}
```

注意到`handler`了吗，我们给 firstName 绑定了一个`handler`方法，之前我们写的 watch 方法其实默认写的就是这个`handler`，Vue.js会去处理这个逻辑，最终编译出来其实就是这个`handler`。

而`immediate:true`代表如果在 wacth 里声明了 firstName 之后，就会立即先去执行里面的handler方法，如果为 `false`就跟我们以前的效果一样，不会在绑定的时候就执行。

## deep属性

watch 里面还有一个属性 `deep`，默认值是 `false`，代表是否深度监听，比如我们 data 里有一个`obj`属性：

```vue
<div>
      <p>obj.a: {{obj.a}}</p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
</div>
 
new Vue({
  el: '#root',
  data: {
    obj: {
      a: 123
    }
  },
  watch: {
    obj: {
      handler(newName, oldName) {
         console.log('obj.a changed');
      },
      immediate: true
    }
  } 
})
```

当我们在在输入框中输入数据视图改变`obj.a`的值时，我们发现是无效的。受现代 JavaScript 的限制 (以及废弃 `Object.observe`)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 `getter/setter` 转化过程，所以属性必须在 `data` 对象上存在才能让 Vue 转换它，这样才能让它是响应的。

默认情况下 handler 只监听`obj`这个属性它的引用的变化，我们只有给`obj`赋值的时候它才会监听到，比如我们在 mounted事件钩子函数中对`obj`进行重新赋值：

```js
mounted: {
  this.obj = {
    a: '456'
  }
}
```

这样我们的 handler 才会执行，打印`obj.a changed`。

相反，如果我们需要监听`obj`里的属性`a`的值呢？这时候`deep`属性就派上用场了！

```js
watch: {
  obj: {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    deep: true
  }
}
```

`deep`的意思就是深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修改`obj`里面任何一个属性都会触发这个监听器里的 handler。

优化，我们可以是使用字符串形式监听。

```js
watch: {
  'obj.a': {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    // deep: true
  }
}
```

这样Vue.js才会一层一层解析下去，直到遇到属性`a`，然后才给`a`设置监听函数。

## 注销watch

为什么要注销 `watch`？因为我们的组件是经常要被销毁的，比如我们跳一个路由，从一个页面跳到另外一个页面，那么原来的页面的 watch 其实就没用了，这时候我们应该注销掉原来页面的 watch 的，不然的话可能会导致内置溢出。好在我们平时 watch 都是写在组件的选项中的，他会随着组件的销毁而销毁。

```js
const app = new Vue({
  template: '<div id="root">{{text}}</div>',
  data: {
    text: 0
  },
  watch: {
    text(newVal, oldVal){
      console.log(`${newVal} : ${oldVal}`);
    }
  }
});
```

但是，如果我们使用下面这样的方式写 watch，那么就要手动注销了，这种注销其实也很简单

```js
const unWatch = app.$watch('text', (newVal, oldVal) => {
  console.log(`${newVal} : ${oldVal}`);
})
 
unWatch(); // 手动注销watch
```

`app.$watch`调用后会返回一个值，就是`unWatch`方法，你要注销 watch 只要调用`unWatch`方法就可以了。

2.watch监听路由

我们可以使用watch来进行路由的监听

```js
watch: {
    changeShowType(value) {
      console.log("-----"+value);
    },
    '$route'(to,from){
      console.log(to);   //to表示去往的界面
      console.log(from); //from表示来自于哪个界面
      if(to.path=="/shop/detail"){
        console.log("商品详情");
      }
    }
  },
```

