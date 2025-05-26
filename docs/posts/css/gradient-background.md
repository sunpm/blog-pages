---
title: 渐变背景动画效果
description: 动画对于网站来说是一个臭名昭着的问题。如果优化不佳，可能会导致速度大服务放缓。这个美丽的动画渐变效果非常轻巧，更不用说它能让你很容易的就能编辑和添加自己的颜色。
date: 2020-02-01 18:00:30
tags:
  - 特效
  - css
---

<script setup>
import { GradientBackground } from './components'
</script>

# 渐变背景动画效果

动画对于网站来说是一个臭名昭着的问题。如果优化不佳，可能会导致速度大服务放缓。这个美丽的动画渐变效果非常轻巧，更不用说它能让你很容易的就能编辑和添加自己的颜色。

<GradientBackground />

```css
body {
  width: 100wh;
  height: 90vh;
  color: #fff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```
