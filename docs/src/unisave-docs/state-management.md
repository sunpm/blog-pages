# 状态管理

得益于组合式方法（Composition API），管理状态非常简单。

模板预设了 [Pinia](https://github.com/vuejs/pinia) 和 [`pinia-plugin-persist-uni`](https://github.com/Allen-1998/pinia-plugin-persist-uni)
- [Pinia](https://github.com/vuejs/pinia) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
- [`pinia-plugin-persist-uni`](https://github.com/Allen-1998/pinia-plugin-persist-uni) - pinia 在 uniapp 中数据持久化插件

:::code-group

```ts [src/stores/modules/count.ts]
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  const count = ref(0)

  function inc() {
    count.value += 1
  }
  function dec() {
    count.value -= 1
  }

  return {
    count,
    inc,
    dec,
  }
}, {
  persist: {
    enabled: true,
    detached: true, // 设置订阅与组件分离
  },
})

```

```vue [src/components/Counter.vue]
<script setup lang="ts">
  const { inc, dec } = useCountStore()
  const { count } = storeToRefs(useCountStore())
</script>

<template>
  <div my-4>
    <div mb1 text-gray:80>
      下面数据已通过 pinia 存储并持久化，不信请刷新
    </div>
    <div flex="~ items-center">
      <u-button h="!6" w="!12" type="success" text="-" @click="dec" />
      {{ count }}
      <u-button h="!6" w="!12" type="success" text="+" @click="inc" />
    </div>
  </div>
</template>
```
:::

::: warning
报错：`Uncaught SyntaxError: The requested module '/node_modules/vue-demi/lib/index.mjs?v=701bef9f' does not provide an export named 'hasInjectionContext'`
> pinia v2.1.X 版本要求 vue 3.3 或者 vue-demi latest ，如果 uniapp 的 vue 版本是 ^3.2.45，通过 pinia 降级到 2.0.X 可以运行和使用。
:::
