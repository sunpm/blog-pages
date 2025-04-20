---
title: 获取参数和返回值类型
description: 介绍 Parameters 和 ReturnType 获取参数和返回值类型。
date: 2024-04-22 21:06:00
tags:
  - typescript
  - utility-types
---

# 获取参数和返回值类型
有时候，我们将请求 API 接口的方法放在一个名为 `api` 的文件夹中进行维护。调用这些接口时需要传递参数，但是参数类型并没有被导出。在调用时，可能会在一开始就声明好这些参数，就像下面的例子一样：

```typescript
// login.ts
interface LoginParam {
  username: string
  password: string
}

interface LoginResult {
  token: string
}

export function login(param: LoginParam): LoginResult {
  return {
    token: 'token'
  }
}
```

```typescript
// 调用
import { login } from './login.ts'

const userInfo = {}
const userResult = login(userInfo)
```

在上述例子中，由于参数类型和返回类型没有被导出，我们无法知道 `login` 方法的第一个参数类型以及调用后返回的类型。这种情况在使用第三方库时经常会遇到。然而，在 TypeScript 中有两个专门解决这个问题的类型工具，它们分别是 [Parameters](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) 和 [ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)。



从文档中可以发现，这两个工具的泛型参数是类型，而不是函数本身。我们可以使用 `typeof functionName` 来获取函数的类型。



让我们将这些类型工具应用到上面的例子中：

```typescript
const userInfo: Parameters<typeof login> = {}
```

![image-20240422205702604](https://media.sunpm.me/uPic/2024-04-22/20:57:02-LM38nZ_image-20240422205702604.png)

从上图可以看出，`Parameters` 返回的是所有参数类型的元组，我们只需要第一个参数的类型，所以可以通过添加索引来获取第一个类型

```typescript
const userInfo: Parameters<typeof login>[0] = {}
```

最后，结合这两个类型工具，我们可以这样写：

```typescript
const userInfo: Parameters<typeof login>[0] = {}

const userResult: ReturnType<typeof login> = login(userInfo)
```



以后在使用第三方库时，如果没有类型提示，我们可以直接使用这些类型工具来生成所需的类型，而无需导出类型信息。
