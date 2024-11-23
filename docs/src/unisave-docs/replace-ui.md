# 更换 UI 组件库

## 默认组件库

[uview-plus](https://github.com/ijry/uview-plus) 是基于 uView 2.x 修改的 Vue 3 版本，包含一套 `.d.ts` 适配组件类型 [uview-plus/types](https://github.com/ijry/uview-plus/tree/master/src/uni_modules/uview-plus/types)，支持多平台兼容。

然而，开发者可能有不同需求，如仅需微信小程序、希望有更好的 UI（uview 并不总是美观）或更简洁的 UI 文档等。此时，更换 UI 库需要以下步骤：

- 卸载原有 `uview-plus` 库
- 安装其他 UI 库

下面将详细介绍更换两个主流 UI 库——`nutui` 和 `Wot Design Uni` 的过程。

## 卸载 uview-plus 库

### 卸载命令

```bash
pnpm un uview-plus
```

### 更新 `pages.config.ts`
移除相关配置：
```diff
  easycom: {
    custom: {
-      '^u--(.*)': 'uview-plus/components/u-$1/u-$1.vue',
-      '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
-      '^u-([^-].*)': 'uview-plus/components/u-$1/u-$1.vue',
    },
  },
```

### 更新 `tsconfig.json`
移除相关配置：
```diff
"types": [
    "@dcloudio/types",
    "@uni-helper/uni-app-types",
    "pinia-plugin-persist-uni",
-   "uview-plus/types",
    // .....
]
```

### 更新 `uni.scss`
移除样式：
```diff
- @import "uview-plus/theme";
```

### 更新 `App.vue`
移除样式：
```diff
<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
- @import "uview-plus/index";
</style>
```

### 更新 `main.ts`
移除导入：
```diff
import { pinia } from '@/stores'
- import uviewPlus from 'uview-plus'
import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
-  app.use(uviewPlus)
  app.use(pinia)
  return {
    app,
  }
}

```

现在 `uview-plus` 已从项目中完全移除。

## 安装 nutui 库
### 安装
```bash
pnpm add nutui-uniapp
```

### 组件导入
> **注意**
>
> 自动按需导入组件有 `unplugin` 和 `easycom` 两种方式，请勿混用~
>

#### `推荐` unplugin 方式
配置插件

> vite.config.ts
>

```typescript
import { defineConfig } from "vite";
import UniApp from "@dcloudio/vite-plugin-uni"
// ....
import Components from 'unplugin-vue-components/vite'
import { NutResolver } from "nutui-uniapp"
// ....

export default defineConfig({
  // ...
  plugins: [
    // ...
    // 确保放在 `UniApp()` 之前
    UniComponents({
      resolvers: [
        NutResolver()
      ]
    }),
    UniApp()
  ]
});
```

#### 使用 `easycom` 方式
更新 `pages.config.ts`：

```json
{
  easycom: {
    autoscan: true,
    custom: {
      '^nut-(.*)?-(.*)': 'nutui-uniapp/components/$1$2/$1$2.vue',
      '^nut-(.*)': 'nutui-uniapp/components/$1/$1.vue',
    },
  },
  // ...
}
```


### 类型提示

> tsconfig.json（需要[IDE 支持](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)）

```json
{
  "compilerOptions": {
    // ...
    "types": [
      "nutui-uniapp/global.d.ts"
    ]
  }
}
```

### 样式引入
更新 `App.vue`：

```vue
<!-- 注意这里的 lang="scss"，并且没有 scoped -->
<style lang="scss">
  @import "nutui-uniapp/styles/index.scss";

  // ...
</style>
```

更新 `uni.scss`：
```css
@import "nutui-uniapp/styles/variables.scss";
```

完整代码已上传本模板子分支，开箱即用：[https://github.com/sunpm/unisave/tree/nutui](https://github.com/sunpm/unisave/tree/nutui)

更多详细信息请参阅 [NutUi 文档](https://nutui-uniapp.netlify.app/guide/quick-start.html)。


## 安装 Wot Design Uni 库
```bash
pnpm add wot-design-uni
```
### 配置 easycom 自动引入组件

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom`将其精简为一步。  
只要组件路径符合规范（具体见[easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)），就可以不用引用、注册，直接在页面中使用。


uni-app 考虑到编译速度，直接在`pages.config.ts`内修改`easycom`不会触发重新编译，需要改动页面内容触发。 

请确保您的pages.config.ts中只有一个easycom字段，否则请自行合并多个引入规则。

```json
// pages.config.ts
{
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
    },
  },

  // 此为本身已有的内容
  pages: [
    // ......
  ],
}
```

### 类型提示
在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```typescript
{
  "compilerOptions": {
    // ...
    "types": [
      "wot-design-uni/global"
    ]
  }
}
```

完整代码已上传本模板子分支，开箱即用：[GitHub - sunpm/unisave at wot-design-uni](https://github.com/sunpm/unisave/tree/wot-design-uni)

更多详细信息请参阅 [Wot Design Uni 文档](https://wot-design-uni.netlify.app/guide/quick-use.html)。
