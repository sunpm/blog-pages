---
title: npm postinstall：安装依赖项后运行脚本
description: 当开发某些项目时，需要在安装依赖项后运行脚本来生成某些配置。这个手动过程非常乏味，因为大多数时候您都会忘记，并且最终会一次又一次地遇到某些错误。
date: 2024-11-11 09:46:42
tags: ['node', 'npm']
---

# npm postinstall：安装依赖项后运行脚本

例如，如果您使用[simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)，其他协作成员拉取仓库后，需要执行它`npx simple-git-hooks`以在 ./git/hooks 中创建或更新Git钩子。
然而大多数时候，可能会忘记初始化的操作，导致 git hooks 未能工作。

这个过程可以很容易地实现自动化。您需要做的是添加一个在安装**npm**依赖项后运行的脚本。这是通过添加`package.json`一个名为的脚本来实现的`postinstall`：

```json
{
  // ...
  "scripts": {
    // ...
    "postinstall": "npx simple-git-hooks"
  }
}
```

现在，当您运行时，`npm install`它`npm ci`会自动运行，节省时间和麻烦 😉

[npm 脚本文档。](https://docs.npmjs.com/cli/v10/using-npm/scripts)
