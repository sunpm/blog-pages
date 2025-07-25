---
title: 出故障的文字
description: 故障文本看起来总是很酷。如果你想为你的网站添加小故障效果，请参考它。
date: 2020-02-01 18:00:30
tags: ['特效', 'css']
---

<script setup>
import { GlitchText } from './components'
</script>

# 出故障的文字

故障文本看起来总是很酷。如果你想为你的网站添加小故障效果，请参考它。

<GlitchText />

```html
<div class="glitch" data-text="SUNPM">SUNPM</div>
```

```css
body {
  background: black;
  font-family: 'Varela', sans-serif;
}

.glitch {
  color: white;
  font-size: 100px;
  position: relative;
  width: 400px;
  margin: 0 auto;
}

@keyframes noise-anim {
  0% {
    clip: rect(74px, 9999px, 30px, 0);
  }
  5% {
    clip: rect(86px, 9999px, 17px, 0);
  }
  10% {
    clip: rect(92px, 9999px, 28px, 0);
  }
  15% {
    clip: rect(78px, 9999px, 99px, 0);
  }
  20% {
    clip: rect(4px, 9999px, 72px, 0);
  }
  25% {
    clip: rect(52px, 9999px, 5px, 0);
  }
  30% {
    clip: rect(60px, 9999px, 31px, 0);
  }
  35% {
    clip: rect(71px, 9999px, 76px, 0);
  }
  40% {
    clip: rect(43px, 9999px, 73px, 0);
  }
  45% {
    clip: rect(16px, 9999px, 50px, 0);
  }
  50% {
    clip: rect(37px, 9999px, 79px, 0);
  }
  55% {
    clip: rect(24px, 9999px, 25px, 0);
  }
  60% {
    clip: rect(19px, 9999px, 89px, 0);
  }
  65% {
    clip: rect(87px, 9999px, 99px, 0);
  }
  70% {
    clip: rect(60px, 9999px, 64px, 0);
  }
  75% {
    clip: rect(49px, 9999px, 56px, 0);
  }
  80% {
    clip: rect(11px, 9999px, 23px, 0);
  }
  85% {
    clip: rect(59px, 9999px, 33px, 0);
  }
  90% {
    clip: rect(55px, 9999px, 49px, 0);
  }
  95% {
    clip: rect(26px, 9999px, 48px, 0);
  }
  100% {
    clip: rect(98px, 9999px, 21px, 0);
  }
}
.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(34px, 9999px, 82px, 0);
  }
  5% {
    clip: rect(75px, 9999px, 93px, 0);
  }
  10% {
    clip: rect(10px, 9999px, 21px, 0);
  }
  15% {
    clip: rect(23px, 9999px, 87px, 0);
  }
  20% {
    clip: rect(45px, 9999px, 78px, 0);
  }
  25% {
    clip: rect(29px, 9999px, 29px, 0);
  }
  30% {
    clip: rect(93px, 9999px, 15px, 0);
  }
  35% {
    clip: rect(11px, 9999px, 58px, 0);
  }
  40% {
    clip: rect(78px, 9999px, 87px, 0);
  }
  45% {
    clip: rect(70px, 9999px, 96px, 0);
  }
  50% {
    clip: rect(56px, 9999px, 56px, 0);
  }
  55% {
    clip: rect(33px, 9999px, 14px, 0);
  }
  60% {
    clip: rect(51px, 9999px, 89px, 0);
  }
  65% {
    clip: rect(88px, 9999px, 35px, 0);
  }
  70% {
    clip: rect(8px, 9999px, 48px, 0);
  }
  75% {
    clip: rect(12px, 9999px, 17px, 0);
  }
  80% {
    clip: rect(49px, 9999px, 28px, 0);
  }
  85% {
    clip: rect(28px, 9999px, 67px, 0);
  }
  90% {
    clip: rect(77px, 9999px, 69px, 0);
  }
  95% {
    clip: rect(15px, 9999px, 11px, 0);
  }
  100% {
    clip: rect(18px, 9999px, 88px, 0);
  }
}
.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
```
