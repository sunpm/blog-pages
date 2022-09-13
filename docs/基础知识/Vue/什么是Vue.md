# 什么是Vue

Vue 是一款用于构建用户界面的js框架（面向视图层），基于标准的 html 、 css 和 js 构建，并提供了一套声明式的、组件化的编程模型来开发用户界面



## Vue的两个核心功能：

- **声明式渲染：**Vue 基于标准 html 拓展了一套模版语法，我们可以声明式地描述最终输出 html 和 js 状态之间的关系。
- **响应式：**Vue 会自动跟踪 js 状态变化并在改变发生时响应式更新 DOM。



## 单文件组件

在 Vue 项目中，使用一种类似 html 格式的文件来书写 vue 组件，被称为**单文件组件**（也被称为`*.vue`文件）。

Vue 的单文件组件将一个组件的逻辑（js），模版（html）和样式（css）封装在同一个文件里。

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```



## API风格



Vue 的组件可以按两种不同的风格来书写：**选项式API**和**组合式API**。



### 选项式API（Options APi）

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 `data`、`methods` 和 `mounted` 等等。定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。

```vue
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this`或`this.$data` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```



### 组合式 API （Composition API）

我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 `<script setup>` 搭配使用。这个 `setup` attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，可以更简洁地使用组合式 API。比如：`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

下面是使用了组合式 API 与 `<script setup>` 改造后和上面模板完全一样逻辑的组件：

```vue
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

