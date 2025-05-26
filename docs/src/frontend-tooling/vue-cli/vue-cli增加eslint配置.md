# Vue CLI 增加 eslint 配置

## 安装

```bash
vue add @vue/eslint
```

出现 eslint 配置选项

```bash
? Pick an ESLint config: (Use arrow keys)
❯ Error prevention only
  Airbnb
  Standard
  Prettier
```

我们选择 `Prettier` 规则

终端询问 eslint 的功能。

选择 `lint on save`

```bash
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ Lint on save
 ◯ Lint and fix on commit
```

然后就会自动安装 eslint 的配置和配置文件，并且将当前项目代码都通过 eslint 格式化一遍
