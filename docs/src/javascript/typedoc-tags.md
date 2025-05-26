---
title: TypeDoc 标签的区别和建议
description: TypeDoc 标签的区别和建议
date: 2025-04-23 09:42:27
tags: ['JsDoc', 'TypeDoc']
---

# TypeDoc 标签的区别和建议

> 例如现在有个 date 相关的工具方法集合

这几个标签的主要用途和区别是：

### @module（模块）

[@module](https://typedoc.org/documents/Tags._module.html)

- **作用范围**：用于标记整个文件/模块的名称和描述，通常在文件顶部使用一次

- **主要用途**：定义或标识代码的模块结构

- 特点：

  - 反映代码的实际组织结构

  - 与 JavaScript/TypeScript 模块系统关联

  - 通常用于组织代码库的高级结构

```ts
/**
 * @module DateHandling
 */
export function formatDate(date: Date): string {
    // ...
}
```

### @category（类别）

[@category](https://typedoc.org/documents/Tags._category.html)

- **作用范围**：作用于类、接口、枚举、函数等顶级声明

- **主要用途**：在文档中创建逻辑分类，将相关元素归为一组

- 特点：

  - 纯粹是为了文档组织，不影响代码结构

  - 允许跨文件和跨模块的元素归入同一分类

  - 在导航侧边栏中以类别形式展示

```ts
/**
 * @category Utilities
 */
export function formatDate(date: Date): string {
    // ...
}
```

### @group（组）

[Group Tags](https://typedoc.org/documents/Tags._group.html)

- **作用范围**：通常作用于类或接口内部的成员（方法、属性）

- **主要用途**：在单个类或接口内对成员进行分组

- 特点：

  - 仅用于类或接口内部组织

  - 帮助整理大型类的文档结构

  - 让相关的方法或属性在文档中显示为一组

```ts
class DateUtility {
    /**
     * @group Formatting
     */
    public formatDate(date: Date): string {
        // ...
    }

    /**
     * @group Parsing
     */
    public parseDate(dateString: string): Date {
        // ...
    }
}
```

## 建议的使用方式

1. 使用一致的标签体系：要么全部使用@group，要么全部使用@category

2. 避免重复标记：不要在同一函数上同时使用@group和@category

3. 不过对于大部分只有函数的工具库，@module 和 @category 通常已经足够了。
