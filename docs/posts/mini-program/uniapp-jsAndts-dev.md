---
title: uniapp项目中JS和TS混合使用
description: 作用是.js和.ts可以互相引入并使用内部资源，例如可以将vuex使用ts编写并在vue中使用（这个很重要了：不是在vue模板中添加lang=ts去使用ts语法）
date: 2020-02-01 18:00:30
tags:
  - 小程序
  - typescript
  - uniapp
  - javascript
---

# uniapp项目中JS和TS混合使用

> 重点：作用是.js和.ts可以互相引入并使用内部资源，例如可以将vuex使用ts编写并在vue中使用（这个很重要了：不是在vue模板中添加lang=ts去使用ts语法）

> 重点：作用是.js和.ts可以互相引入并使用内部资源，例如可以将vuex使用ts编写并在vue中使用（这个很重要了：不是在vue模板中添加lang=ts去使用ts语法）

> 重点：作用是.js和.ts可以互相引入并使用内部资源，例如可以将vuex使用ts编写并在vue中使用（这个很重要了：不是在vue模板中添加lang=ts去使用ts语法）

## 添加依赖

根据您的包管理器去安装相应的ts依赖插件

```bash
# yarn
yarn add typescript @vue/cli-plugin-typescript @babel/plugin-syntax-typescript@^7.2.0 -D

# npm
npm install typescript @vue/cli-plugin-typescript @babel/plugin-syntax-typescript@^7.2.0 -D
```

## 配置tsconfig.json

这个可以按照您以往的ts习惯去配置，我只是从uniapp官方的ts模板中copy下来直接使用

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "types": [
      "webpack-env",
      "@dcloudio/types",
      "miniprogram-api-typings",
      "mini-types"
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "exclude": [
    "node_modules",
    "unpackage",
    "src/**/*.nvue"
  ]
}
```

## 搞定，下班

现在可以尽情的在编写ts的逻辑，例如但不限于：工具方法，Vuex，请求拦截和相应逻辑，封装uni的api等等。。。。
