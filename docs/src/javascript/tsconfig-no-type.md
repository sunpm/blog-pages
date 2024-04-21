---
title: 修改tsconfig配置，让ts不写任何的类型
description: 如果你想在 TypeScript 文件中不强制写任何类型注解，可以通过修改 `tsconfig.json` 配置文件来实现。下面是修改的步骤：。
date: 2020-02-01 18:00:30
tags:
  - typescript
---

# 修改tsconfig配置，让ts不写任何的类型

如果你想在 TypeScript 文件中不强制写任何类型注解，可以通过修改 `tsconfig.json` 配置文件来实现。下面是修改的步骤：

1. 打开你的项目中的 `tsconfig.json` 文件。
2. 找到 `compilerOptions` 键，并确保它是一个对象类型。
3. 在 `compilerOptions` 对象中添加或修改以下属性：

```json
{
  // ...
  "compilerOptions": {
    // ...
    "noImplicitAny": false,
    "strictNullChecks": false,
    "strictFunctionTypes": false,
    "strictPropertyInitialization": false,
    "strictBindCallApply": false,
    "strict": false
  }
}
```

```
- `noImplicitAny`：设置为 `false`，允许隐式的 `any` 类型。
- `strictNullChecks`：设置为 `false`，允许对变量赋值为 `null` 或 `undefined`。
- `strictFunctionTypes`：设置为 `false`，允许函数参数之间的宽松类型检查。
- `strictPropertyInitialization`：设置为 `false`，允许类的属性不进行初始化赋值。
- `strictBindCallApply`：设置为 `false`，允许松散的函数绑定、调用和应用。
- `strict`：设置为 `false`，将同时禁用以上所有严格模式。
```

4. 保存 `tsconfig.json` 文件。

这样设置后，TypeScript 编译器将允许在文件中不写类型注解，而不会出现类型错误。请注意，关闭这些严格模式可能会导致代码质量下降，不推荐在生产环境中使用。建议在开发阶段仍然遵循良好的类型规范。
