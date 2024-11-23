# 介绍

unisave 是一个基于 `Vue3` 和 `uni-app` 的开源模板，采用直观且可扩展的方式创建类型安全、高性能和生产级的跨端应用。你可以直接开始编写 `.vue` 文件，而无需从头开始配置。

unisave 灵感源于 [vitesse](https://github.com/antfu/vitesse)。

## 为什么

`uni-app` 背后的公司 DCloudio 选择创建自己的生态，比如 HBuilderX、uni_modules 等。这部分工作对部分开发者来说意义非凡，他们可以轻松上手并享受社区提供的一切资源。

但是，`uni-app` 社区生态远不如 npm 生态繁荣，我们常常需要求助于 npm 生态来实现部分需求，而 `uni-app` 的黑盒性阻碍了这一点。

unisave 充分拥抱开放生态，比如 VS Code 和 pnpm，希望能带给你更好的体验。

## 主要依赖

unisave 由不同的开源包组成：

### UI 框架
- [uview-plus](https://github.com/ijry/uview-plus) uview-plus3.0是基于uView2.x修改的vue3版本
- [UnoCSS](https://github.com/unocss/unocss) 高性能且极具灵活性的即时原子化 CSS 引擎
- [unocss-preset-uni](https://github.com/uni-helper/unocss-preset-uni) 专为 uni-app 打造的 UnoCSS 预设

### 插件
- [Pinia](https://github.com/vuejs/pinia) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
    - [`pinia-plugin-persist-uni`](https://github.com/Allen-1998/pinia-plugin-persist-uni) - pinia 在 uniapp 中数据持久化插件
- Router
    - [`@uni-helper/vite-plugin-uni-pages`](https://github.com/uni-helper/vite-plugin-uni-pages) - 在 Vite 驱动的 uni-app 上使用基于文件的路由系统
    - [`vite-plugin-vue-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts) - 页面布局系统
    - [`@uni-helper/uni-use`](https://github.com/uni-helper/uni-use) - 使用 `useRouter` 封装路由方法 -> `src/composables/useNavigation.ts`
- 请求
    - [`@uni-helper/uni-network`](https://github.com/uni-helper/uni-network) - 为 uni-app 打造的基于 Promise 的 HTTP 客户端
    - `services` 目录封装通用请求
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入
- [`@uni-helper/vite-plugin-uni-manifest`](https://github.com/uni-helper/vite-plugin-uni-manifest) - 使用 TypeScript 编写 `uni-app` 的 `manifest.json`。

### 编码风格

- 使用 Composition API 地 [`<script setup>` SFC 语法](https://cn.vuejs.org/api/sfc-script-setup.html)
- [ESLint](https://github.com/eslint/eslint) 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config) - 单引号, 无分号...
    - [@unocss/eslint-config](https://unocss.dev/integrations/eslint) - 用于UnoCSS的ESLint配置
    - [@uni-helper/eslint-config](https://github.com/uni-helper/eslint-config) - 适用于 uni-app 的 Anthony's ESLint 配置预设

### 各平台类型定义文件
- [✅] [uni-app 组件](https://www.npmjs.com/package/@uni-helper/uni-app-types)
- [✅] [微信小程序](https://www.npmjs.com/package/miniprogram-api-typings)
- [✅] [支付宝小程序](https://www.npmjs.com/package/@mini-types/alipay)
- [✅] [字节小程序](https://www.npmjs.com/package/@douyin-microapp/typings)
- [✅] [快手小程序](https://www.npmjs.com/package/ks-miniprogram-types/global)
- [✅] [百度小程序](https://www.npmjs.com/package/@types/baidu-app)
