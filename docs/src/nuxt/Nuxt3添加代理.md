# Nuxt3 添加代理

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/proxy/**': { proxy: { to: 'http://localhost:9300/**' } },
  }
})
```

`key` 和 代理的地址后面都需要加上 `/**`，

在接口请求的地方，都需要加上`/proxy`才可以启用代理。

也可以使用环境变量的方式设置代理值：

```typescript
routeRules: {
  [process.env.NUXT_BASE_API as string]: {
    proxy: {
      to: `${process.env.NUXT_HTTP_URL}${process.env.NUXT_BASE_API}`,
    },
  },
},
```

使用环境变量会更好维护。
