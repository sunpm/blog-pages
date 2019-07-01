# 巧用 Typescript

记录一些有趣、实用的写法。不定期更新。

## 🌀巧用注释

```ts
/** A cool guy. */
interface Person {
  /** A cool name. */
  name: string,
}
```

通过`/** */`形式的注释可以给 TS 类型做标记，编辑器会有更好的提示：



![img](https://pic2.zhimg.com/80/v2-71e2676bc2d1237d9134b7fa96e41ba9_hd.jpg)

注：*Don't do this*:



![img](https://pic4.zhimg.com/80/v2-bc71fdcb2b3a9e5d2be6ed203eb997fb_hd.jpg)

## 🌀巧用注释 进阶

注释有很多规范的字段，基本和 JSDOC 一致。但不用着急翻文档，在 `/** */` 里输入 `@` 就可以看到丰富的选择：



![img](https://pic4.zhimg.com/80/v2-8e205450a1a99d64c2e9a61479819453_hd.jpg)

## 🌀巧用 typeof

我们一般先写类型，再使用：

```ts
interface Opt {
  timeout: number
}
const defaultOption: Opt = {
  timeout: 500
}
```

有时候可以反过来：

```ts
const defaultOption = {
  timeout: 500
}
type Opt = typeof defaultOption
```

当一个 interface 总有一个字面量初始值时，可以考虑这种写法以减少重复代码。

## 🌀巧用联合类型

`Dinner` 要么有 `fish` 要么有 `bear` 。

```ts
// 🙁 Not good.
interface Dinner1 {
  fish?: number,
  bear?: number,
}

// 🙂 Awesome!
type Dinner2 = {
  fish: number,
} | {
  bear: number,
}
```

一些区别：

```ts
let d1: Dinner1 = {}  // Opps
d1 = {fish:1, bear:1} // Opps

let d2: Dinner2 = {}  // Protected!
d2 = {fish:1, bear:1} // Protected!

if ('fish' in d2) {
  // `d2` has `fish` and no `bear` here.
} else {
  // `d2` has `bear` and no `fish` here.
}
```

## 🌀巧用查找类型

```ts
interface Person {
  addr: {
    city: string,
    street: string,
    num: number,
  }
}
```

当需要使用 `addr` 的类型时，除了把类型提出来

```ts
interface Address {
  city: string,
  street: string,
  num: number,
}
interface Person {
  addr: Address,
}
```

还可以

```ts
Person["addr"] // This is Address.
```

有些场合后者会让代码更整洁、易读。

## 🌀巧用查找类型+泛型+keyof

```ts
interface API {
  '/user': { name: string },
  '/menu': { foods: Food[] },
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}
```

上面的定义极大地增强了代码提示：



![img](https://pic4.zhimg.com/80/v2-63267cfcf9fd1704007adabe0618232b_hd.jpg)



![img](https://pic3.zhimg.com/80/v2-f329659f9d616cfe1e6f3ea27cac038e_hd.jpg)

## 🌀巧用显式泛型

`$('button')` 是个 DOM 元素选择器，可是返回值的类型是运行时才能确定的，除了返回 `any`，还可以

```ts
function $<T extends HTMLElement>(id: string):T {
  return document.getElementById(id)
}

// Tell me what element it is.
$<HTMLInputElement>('input').value
```

函数泛型不一定非得自动推导出类型，有时候显式指定类型就好。

## 🌀巧用 DeepReadonly

```ts
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
}

const a = { foo: { bar: 22 } }
const b = a as DeepReadonly<typeof a>
b.foo.bar = 33 // Hey, stop!
```

## 🌀巧用 Omit

```ts
import { Button, ButtonProps } from './components/button'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type BigButtonProps = Omit<ButtonProps, 'size'>

function BigButton(props: BigButtonProps) {
  return Button({ ...props, size: 'big' })
}
```

高阶组件比较常用。



巧用 Typescript - 王亦斯的文章 - 知乎
https://zhuanlan.zhihu.com/p/39620591