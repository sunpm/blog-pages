# 视图

## App.vue

`App.vue` 是 uni-app 应用主组件和入口文件，所有页面都是在 `App.vue` 下进行切换的。

`App.vue` 本身不是页面，这里不能编写视图元素，也就是不能使用 `<template>`。

这个文件的作用包括：监听应用生命周期、配置全局样式、配置全局的存储globalData

[应用生命周期](https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle) 只能在 `App.vue` 中监听，在页面监听无效。

::: tip 了解 `uni-app` 关于 `App.vue` 的更多信息

<https://uniapp.dcloud.net.cn/collocation/App.html>

:::

## Components 组件

大多数组件都是用户界面的可重用部分，如按钮和菜单。

得益于 [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)，组件将自动注册到全局，你不需要显式导入它们。只需要在 `src/components` 目录下创建组件，然后直接使用即可。

:::code-group

```vue [src/pages/index/index.vue]
<template>
  <view>
    <h1>欢迎使用 unisave </h1>
    <Logos />
  </view>
</template>
```

```vue [src/components/Logos.vue]
<template>
  <view inline-flex cursor-default text-2xl font-300>
    <view flex flex-col>
      <image inline-block h-10 w-10 src="/static/logo.png" />
    </view>
    <view
      text="3xl gray4"
      m="x-4 y-auto"
      i-carbon-add transform transition-all-500 hover:rotate-135
    />
    <view flex flex-col>
      <span i-carbon-campsite h-10 w-10 />
    </view>
  </view>
  <p my-2>
    <a icon-btn href="https://github.com/sunpm/unisave" target="_blank">unisave</a>
  </p>
  <p>
    <em text-sm italic op75>拥抱 web 开发，拯救 uniapp。</em>
  </p>
</template>
```

:::

## Pages 页面

通过组合使用组件，我们可以得到展示给用户的页面。

得益于 [@uni-helper/vite-plugin-uni-pages](https://github.com/uni-helper/vite-plugin-uni-pages)，约定式路由（文件路由）的实现轻而易举。`src/pages` 目录下的每个文件都代表着一个路由。要创建新页面，只需要在这个目录里新增 `.vue` 文件。

:::code-group

```vue [src/pages/index/index.vue]
<template>
  <view>
    <h1>欢迎使用 unisave </h1>
    <Logos />
  </view>
</template>
```

```vue [src/pages/unocss/index.vue]
<template>
  <section>
    <p>通过 `/pages/unocss/index` 来访问这个页面</p>
  </section>
  <view border="1 solid" text="center" padding="10">
    Unocss
  </view>
  <view class="flex flex-justify-center flex-items-center" m="auto" w="50" mt="10px" h="50" bg="amber hover:blue">
    点我 / 将鼠标 hover
  </view>
</template>
```

:::

## Layouts 布局

布局可以用来创建通用界面（如页眉和页脚显示）的包装器，不同的页面可能需要不同的布局。布局是使用 `Vue` 的插槽功能实现的。

得益于 [@uni-helper/vite-plugin-uni-layouts](https://github.com/uni-helper/vite-plugin-uni-layouts)，你可以轻松地切换不同的布局。

`src/layouts/default.vue` 文件将作为默认布局。

:::code-group

```vue [src/layouts/default.vue]
<template>
  <main
    class="px-10 py-20 text-center"
  >
    <slot />
    <Footer />
    <div mx-auto mt-4 text-center text-sm opacity-50>
      [Default Layout]
    </div>
  </main>
</template>
```

```vue [src/pages/index/index.vue]
<template>
  <view>
    <h1>欢迎使用 unisave </h1>
    <Logos />
  </view>
</template>
```

```vue [src/pages/unocss/index.vue]
<template>
  <section>
    <p>通过 `/pages/unocss/index` 来访问这个页面</p>
  </section>
  <view border="1 solid" text="center" padding="10">
    Unocss
  </view>
  <view class="flex flex-justify-center flex-items-center" m="auto" w="50" mt="10px" h="50" bg="amber hover:blue">
    点我 / 将鼠标 hover
  </view>
</template>
```

:::

在页面文件内设置 `route` 代码块可以指定自定义布局和设置 pages.json 相关配置。具体属性可[查看文档](https://github.com/uni-helper/vite-plugin-uni-pages#sfc-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9D%97%E7%94%A8%E4%BA%8E%E8%B7%AF%E7%94%B1%E6%95%B0%E6%8D%AE)。

```vue [src/pages/index/index.vue]
<route lang="json" type="home">
{
  "navigationBarTitleText": "首页"
}
</route>
```
