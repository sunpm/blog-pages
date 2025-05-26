---
title: VSC为什么自动补全后引号内变成灰色，导致引号内智能感知失效？
description: VSC为什么自动补全后引号内变成灰色，导致引号内智能感知失效？有两种可能：。
date: 2020-02-01 18:00:30
tags:
  - 编辑器
  - VS Code
---

# VSC为什么自动补全后引号内变成灰色，导致引号内智能感知失效？

> VS Code版本：**version 1.36.1** 操作系统：**win10**

**自动补全后引号内背景变成灰色，导致引号内的输入智能感知失效**

1. 自动补全后引号内背景变成灰色：如下图

![img](https://pic2.zhimg.com/v2-6452992e66ad5df6120ee5aa83efaf59_b.jpg)此时选择自动补全

![img](https://pic4.zhimg.com/v2-3a4b607ba9df2d52adc10ab527667077_b.jpg)自动补全后(除了提示符以外出现了额外的一条线在引号外)

2. 此时继续输入，引号内的内容变成灰色，引号内智能感知失效

![img](https://pic1.zhimg.com/v2-2f359eecb33065ae1866782df6b3228c_b.jpg)

3. 如果不采用自动补全，用键盘敲出class=""，引号内智能感知仍有效

![img](https://pic4.zhimg.com/v2-2ec0ad643519b0936c4b82601cf9f643_b.jpg)直接用键盘敲后不会出现额外的竖线

![img](https://pic2.zhimg.com/v2-7bc39213a010ed5199e7823f86cb5ca5_b.jpg)在引号内输入内容不会出现灰色背景，智能感知仍然有效

4. 在状态1和2下移动提示符到引号外后可以变为状态3，恢复智能感知

作者：谭九鼎
链接：https://www.zhihu.com/question/335637208/answer/753693134
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
有两种可能：

```json
{
  "editor.quickSuggestions": { "other": true, "comments": false, "strings": true },
  "editor.suggest.snippetsPreventQuickSuggestions": false
}
```

或者什么也不改，手动按ctrl加space也能触发（前提是你用的是纯英文输入法）。

变成灰色那是snippets的效果，按tab就能跳到下一个点去。
