---
title: Unocss 常用属性
description: 记录 Unocss 常用属性，方便查阅。
date: 2024-02-22 18:00:30
tags:
  - 原子化
  - css
  - unocss
---

<script setup>
import PlaygroundWithVariants from '../../.vitepress/theme/components/global/playground/PlaygroundWithVariants.vue'
</script>

# Unocss 常用属性

<PlaygroundWithVariants
    variant='sans'
    :variants="['sans', 'serif', 'mono']"
    prefix='font'
    fixed='text-lg p-2 dark:text-white opacity-85'
    html="The quick brown fox jumps over the lazy dog"
/>
## Unocss超出显示省略号

| **类**              | **属性值**                                                   |
| ------------------- | ------------------------------------------------------------ |
| `line-clamp-${int}` | overflow: hidden;<br/>display: -webkit-box;<br/>-webkit-box-orient: vertical;<br/>-webkit-line-clamp: `${int};` |
| `line-clamp-none`   | -webkit-line-clamp: unset;                                   |

## 行高 line-height

| **类**            | **属性值**                          |
|------------------|----------------------------------|
| `leading-${int}` | line-height: `${int * 0.25rem};` |
| `leading-1`      | line-height: 0.25rem;            |
| `leading-none`   | line-height: 1;                  |

欢迎在下方留言或评论补充，也可提交 pr 或 issue
