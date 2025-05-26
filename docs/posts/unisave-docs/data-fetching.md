# 数据获取

你也可以使用你喜欢的第三方请求库来获取数据。

在 `services` 目录下模板基于 [`@uni-helper/uni-network`](https://github.com/uni-helper/uni-network) 封装通用的请求

## 普通请求

预设的请求 `config`:

```js
{
  // h5 需要添加代理，根据业务需求自行判断环境后处理
  baseUrl: getHttpUrl(),
  /**
   * 由于小程序兼容性问题，统一请求方式 POST，根据业务需求在请求中传递 config 修改
   * 例如：request('', {}, {
   *     method: 'GET',
   *   })
   */
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
  data: {},
  // 默认展示全局 loading
  loading: true,
}
```

### GET 请求

```ts
request('/**/**', {}, {
  method: 'GET',
})
```

### 传递头信息

```ts
request('/**/**', {}, {
  headers: {
    token: '**************'
  }
})
```

### 传递 body 体

```ts
request('/**/**', {
  id: 1
})
```

### 请求不展示全局 loading

```ts
request('/**/**', {}, {
  headers: {
    loading: false
  }
})
```

## 类型（泛型内类型都是可不传）

uni-network 默认类型，[uni-network TypeScript 支持](https://uni-network.netlify.app/advanced/typescript-support.html)

```ts
un<
    UnResponse<UnData, UnData>, // 对应 response.data 类型
    Record<string, any>, // 对应传参中 data 类型
    UnResponse<UnData, UnData> // 对应 response 类型
>()
```

封装后，预设的请求数据类型和响应数据类型

```ts
request<
    UnResponse<UnData, UnData>, // 对应 response.data 类型 --> 响应数据类型
    Record<string, any> // 对应传参中 data 类型 --> 请求数据类型
>()
```

![image-20240816145230571](https://upic.fassr.com/uPic/2024-08-16/14:52:32-i9WmGZ_image-20240816145230571.png)

![image-20240816145326013](https://upic.fassr.com/uPic/2024-08-16/14:53:27-T02Q9y_image-20240816145326013.png)

请求响应类型：

![image-20240816142652093](https://upic.fassr.com/uPic/2024-08-16/14:26:54-0YBOc4_image-20240816142652093.png)

## 请求拦截器

[查看 uni-network 文档](https://uni-network.netlify.app/advanced/interceptors.html)

```ts
instance.interceptors.request.use((config) => {
  loading.show(config.loading)
  // 例如可增加 token 到头信息
  config.header.token = '**********' // 从缓存或其他地方获取，随意你😊
  return config
})
```

## 响应拦截器

```ts
instance.interceptors.response.use((response: any) => {
  const { errno } = response
  if (errno) {
    showToast({
      title: '服务器出错，请稍后再试。',
    })
    loading.hide(true)
    return Promise.reject(response)
  }
  loading.hide(response.config.loading)
  // TODO 返回数据根据业务需求修改
  return response.data
}, (error) => {
  loading.hide(error.config.loading)
  return Promise.reject(error)
})
```

假设接口返回：

```ts
{
    code: 1, // 1 为正常请求
    data: {}, // 请求结果数据
    msg: '成功', // 请求提示信息
}
```

拦截器可改为：

```ts
instance.interceptors.response.use((response: any) => {
  const { errno } = response
  if (errno) {
    showToast({
      title: '服务器出错，请稍后再试。',
    })
    loading.hide(true)
    return Promise.reject(response)
  }
  loading.hide(response.config.loading)
  // 返回数据根据业务需求修改
  const { code, data, msg } = response.data
  // 1 为正确，其他值为异常
  if (code === 1)
    return data

   uni.showToast({
    title: msg,
  })
  handleError(response) // 处理错误的方法，源码在 src/services/request/helper.ts，具体实现根据业务需求更改
  return Promise.reject(response.data)
}, (error) => {
  loading.hide(error.config.loading)
  return Promise.reject(error)
})
```

## 使用方法

```vue
<script setup lang="ts">
import { request } from '@/services/request'

export interface GithubReposRes {
  name: string
  description: string
  html_url: string
}
const repos = ref<GithubReposRes | null>(null)
async function getData() {
  const result = await request<GithubReposRes>('/repos/sunpm/unisave', {}, {
    method: 'GET',
  })
  repos.value = result
}
onLoad(() => {
  getData()
})
</script>

<template>
  <view flex="~ col items-center justify-center" p-50px>
    <view v-if="repos" border="1 solid" mt-4>
      <h2>
        请求返回结果：
      </h2>
      <p>{{ repos.name }}</p>
      <p>{{ repos.description }}</p>
      <a icon-btn :href="repos.html_url" target="_blank">仓库地址</a>
    </view>
  </view>
</template>
```
