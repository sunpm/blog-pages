# 样式

模板基于 `UnoCSS` 提供主要样式支持。当然，你可以使用 CSS 预处理器、组件库等。

## UnoCSS

[UnoCSS](https://unocss.dev/) 是按需使用的原子 CSS 引擎，提供了良好的样式支持。

本模版已为其他预设启用 [attributify 模式](https://unocss.dev/presets/attributify#attributify-mode)。

### 属性前缀
由于第三方组件库组件样式和 unocss attributify 模式冲突，已在配置中为 attributify 模式添加 `us-` 前缀。

```html
<a text="red">这与链接的 `text` 属性冲突</a>
<!-- 修改为 -->
<a us-text="red">文字颜色设为红色</a>
```

可以根据自己喜好设置其他前缀
```ts
// uno.config.ts
presetUni({
  attributify: {
    prefixedOnly: true,
    prefix: 'us-', // <--
  },
})
```

以下多种写法等价
```html
<button class="border border-red">Button</button>

<button us-border us-border-red>Button</button>

<button us-border="~ red">Button</button>
```

### 多平台条件编译
模板内置了 [@uni-helper/unocss-preset-uni](https://github.com/uni-helper/unocss-preset-uni)，它在底层使用 [unocss-applet](https://github.com/unocss-applet/unocss-applet) 来兼容不同平台，并提供了按平台编写样式的能力。

```html
<!-- 只在 H5 编译时生成 mx-auto 类 -->
<view class='uni-h5:mx-auto'></view>
<!-- 只在 APP 编译时生成 mx-auto 类 -->
<view class='uni-app:mx-auto'></view>
<!-- 只在小程序编译时生成 mx-auto 类 -->
<view class='uni-mp:mx-auto'></view>
<!-- 只在微信小程序编译时生成 mx-auto 类 -->
<view class='uni-weixin:mx-auto'></view>
<!-- 只在支付宝小程序编译时生成 mx-auto 类 -->
<view class='uni-mp-alipay:mx-auto'></view>
```

## CSS 预处理器

模板内置了 scss 预处理器，可使用 `lang="scss"` 编写样式，具体文档可参考[uni-scss](https://zh.uniapp.dcloud.io/collocation/uni-scss.html)

其他的预处理器你可以参考 [Vite 文档 CSS 预处理器](https://cn.vitejs.dev/guide/features.html#css-pre-processors)，了解相关使用方法。

## 单文件组件样式

你可以参考 [Vue 文档单文件组件 CSS 功能](https://cn.vuejs.org/api/sfc-css-features.html)，了解相关使用方法。

## 组件库

[uview-plus](https://github.com/ijry/uview-plus) uview-plus3.0是基于uView2.x修改的vue3版本。

依赖内有一套 `.d.ts` 适配组件的类型 [uview-plus/types](https://github.com/ijry/uview-plus/tree/master/src/uni_modules/uview-plus/types)

市面上还有很多优秀的 ui 框架，例如但不止：

- uv-ui - [文档地址](https://www.uvui.cn/)
- uviewui - [文档地址](https://www.uviewui.com/)
- Wot Design Uni - [文档地址](https://wot-design-uni.netlify.app/)
- TuniaoUI - [文档地址](https://vue3.tuniaokj.com/zh-CN/)
- nutui - [文档地址](https://nutui-uniapp.netlify.app/)

### 多端支持情况

| UI 框架      | [uv-ui](https://www.uvui.cn/) | [uviewui](https://www.uviewui.com/) | [wot-ui](https://wot-design-uni.netlify.app/) | [TuniaoUI](https://vue3.tuniaokj.com/) | [nutui](https://nutui-uniapp.netlify.app/) |
| :----------- | :---- | :------ | :----- | :------- | ----- |
| h5           | ✅     | ✅       | ✅      | ✅        | ✅     |
| app(ios)     | ✅     | ✅       | ✅      | ✅        | ❓     |
| app(android) | ✅     | ✅       | ✅      | ✅        | ❓     |
| 微信小程序   | ✅     | ✅       | ✅      | ✅        | ✅     |
| 支付宝小程序 | ✅     | ✅       | ✅      | ✅        | ❓     |
| QQ 小程序    | ✅     | ✅       | ❌      | ❌        | ❌     |
| 百度小程序   | ✅     | ✅       | ❌      | ❌        | ❌     |
| 头条小程序   | ✅     | ✅       | ❌      | ❌        | ❌     |

在兼容性方面只剩下 `uv-ui` 和 `uviewui`，都是基于 `uviewui` 生态系统的组件库。尽管这两个库在功能和设计上表现出了较高的实用性，但在类型支持方面却显得不足，因为它们缺乏原生的类型定义文件。通常，这类类型支持是由第三方包 [`@ttou/uview-typings`](https://www.npmjs.com/package/@ttou/uview-typings) 提供的，但令人遗憾的是，该包已被其维护者标记为废弃，且最后一次更新已有一年之久(**截稿时间：2024 年 8 月 16 日**)。鉴于此，继续依赖 `@ttou/uview-typings` 显然存在风险，因为它可能不再接收更新或修复，从而影响项目的长期稳定性和维护性。

![image-20240816111235368](https://upic.fassr.com/uPic/2024-08-16/11:12:38-aGukXA_image-20240816111235368.png)

经过深思熟虑，我们决定转向 `uview-plus`，这是一个由其核心作者直接维护的组件库。`uview-plus` 的一个显著优势在于，它内置了完善的类型定义，无需额外依赖第三方包，这不仅简化了项目配置，也确保了类型检查的准确性和时效性。选择 `uview-plus` 意味着我们可以在享受丰富组件功能的同时，获得高质量的类型支持，这对于提升开发效率和代码质量至关重要。

综上所述，尽管 `uv-ui` 和 `uviewui` 在功能层面颇具吸引力，但考虑到类型支持的稳定性和维护性，`uview-plus` 成为了我们的首选。


[//]: # (TODO：备选 ui 库)
[//]: # (如果你司不需要考虑其他平台.....)
