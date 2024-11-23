---
title: Unocss 常用属性
description: 记录 Unocss 常用属性，方便查阅，可在线预览。
date: 2024-02-22 18:00:30
tags: ['原子化', 'css', 'unocss']
---

<script setup>
import PlaygroundWithVariants from '../../.vitepress/theme/components/global/playground/PlaygroundWithVariants.vue'
</script>

# Unocss 常用属性

## Unocss超出显示省略号

| **类**              | **属性值**                                                   |
| ------------------- | ------------------------------------------------------------ |
| `line-clamp-${int}` | overflow: hidden;<br/>display: -webkit-box;<br/>-webkit-box-orient: vertical;<br/>-webkit-line-clamp: `${int};` |
| `line-clamp-none`   | -webkit-line-clamp: unset;                                   |

## 行高 line-height

<PlaygroundWithVariants
    variant='normal'
    :variants="['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '0', '1', '2', '3', '4', '5', '6']"
    prefix='leading'
    fixed='p-2 dark:text-white opacity-85'
/>

| **类**            | **属性值**                          |
|------------------|----------------------------------|
| `leading-${int}` | line-height: `${int * 0.25rem};` |
| `leading-1`      | line-height: 0.25rem;            |
| `leading-none`   | line-height: 1;                  |

未收录的欢迎在下方留言或评论补充，也可提交 pr 或 issue，在线秒回哦！！！
