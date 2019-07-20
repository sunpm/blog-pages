# 巧用 Typescript (二)

## 🌀巧用Record类型

业务中，我们经常会写枚举和对应的映射:

```ts
type AnimalType = 'cat' | 'dog' | 'frog';
const AnimalMap = {
  cat: { name: '猫', icon: '🐱'},
  dog: { name: '狗', icon: '🐶' },
  forg: { name: '蛙', icon: '🐸' },
};
```

注意到上面 forg 拼错了吗？

![å·§ç¨ Typescript (äº)](https://pic3.zhimg.com/v2-26deed6b2a3f885d94b4b5a12038f7d4_1200x500.jpg)

`Record` 可以保证映射完整:

```ts
type AnimalType = 'cat' | 'dog' | 'frog';
interface AnimalDescription { name: string, icon: string }
const AnimalMap: Record<AnimalType, AnimalDescription> = {
  cat: { name: '猫', icon: '🐱'},
  dog: { name: '狗', icon: '🐶' },
  forg: { name: '蛙', icon: '🐸' }, // Hey!
};
```

还能有代码提示

![img](https://pic3.zhimg.com/80/v2-d6af609b666da5d3ca29cdb95cf3f912_hd.jpg)

如果你喜欢用 `enum` ，写法也一样的

```ts
enum AnimalType {
  CAT = 'cat',
  DOG = 'dog',
  FROG = 'frog',
}
const AnimalMap: Record<AnimalType, AnimalDescription>
```

## 🌀巧用Partial

就是部分的意思，很常用:

```ts
const mergeOptions = (options: Opt, patch: Partial<Opt>) {
  return { ...options, ...patch };
}

class MyComponent extends React.PureComponent<Props> {
  defaultProps: Partial<Props> = {};
}
```



## 🌀巧用tsx+extends

在 `.tsx` 文件里，泛型可能会被当做 jsx 标签

```ts
const toArray = <T>(element: T) => [element]; // Error in .tsx file.
```

加 `extends` 可破

```ts
const toArray = <T extends {}>(element: T) => [element]; // No errors.
```

## 🌀巧用ClassOf

有时候，我们要传入类本身，而不是类的实例

```ts
abstract class Animal extends React.PureComponent {
  /* Common methods here. */
}
class Cat extends Animal {}
class Dog extends Animal {}

// `AnimalComponent` must be a class of Animal.
const renderAnimal = (AnimalComponent: Animal) => {
  return <AnimalComponent/>; // WRONG!
}
```

上面的代码是错的，因为 `Animal` 是实例类型，不是类本身。应该

```ts
interface ClassOf<T> {
  new (...args: any[]): T;
}
const renderAnimal = (AnimalComponent: ClassOf<Animal>) => {
  return <AnimalComponent/>; // Good!
}

renderAnimal(Cat); // Good!
renderAnimal(Dog); // Good!
```

## 🌀巧用类型查找+类方法

我们通常会在 React 组件中把方法传下去

```ts
class Parent extends React.PureComponent {
  private updateHeader = (title: string, subTitle: string) => {
    // Do it.
  };
  render() {
    return <Child updateHeader={this.updateHeader}/>;
  }
}

interface ChildProps {
  updateHeader: (title: string, subTitle: string) => void;
}
class Child extends React.PureComponent<ChildProps> {
  private onClick = () => {
    this.props.updateHeader('Hello', 'Typescript');
  };
  render() {
    return <button onClick={this.onClick}>Go</button>;
  }
}
```

其实可以在 `ChildProps` 中直接引用类的方法

```ts
interface ChildProps {
  updateHeader: Parent['updateHeader'];
}
```

两个好处：不用重复写方法签名，能从方法调用跳到方法定义 。

传统的跳转:

![img](https://pic4.zhimg.com/v2-d2c8853ec018cfbac7ebaba05bd34c07_b.gif)

传统的跳转



神奇的跳转:

![img](https://pic1.zhimg.com/v2-38f8cc9b91b2ca4ba107897b1b2f2818_b.gif)

神奇的跳转

尤其在多层传递的场合，从孙子的一个方法调用，跳到爷爷的方法定义，爽。

巧用 Typescript (二) - 王亦斯的文章 - 知乎
https://zhuanlan.zhihu.com/p/64423022