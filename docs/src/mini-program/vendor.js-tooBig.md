---
title: vendor.js 过大的处理方式
description: 小程序工具提示`vendor.js`过大，已经跳过es6向es5转换。这个转换问题本身不用理会，因为`vendor.js`已经是es5的了。
date: 2020-02-01 18:00:30
tags:
  - 小程序
  - uniapp
---

# vendor.js 过大的处理方式

小程序工具提示`vendor.js`过大，已经跳过es6向es5转换。这个转换问题本身不用理会，因为`vendor.js`已经是es5的了。

关于体积控制，参考如下：

- 使用运行时代码压缩
    - `HBuilderX`创建的项目勾选`运行-->运行到小程序模拟器-->运行时是否压缩代码`
    - `cli`创建的项目可以在`package.json`中添加参数`--minimize`，示例：`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`
- 使用分包优化，[关于分包优化的说明](//blog.fassr.com/src/mini-program/uniapp-subcontract.md)
