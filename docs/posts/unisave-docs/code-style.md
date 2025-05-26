# 代码规范

本项目使用 [ESLint](https://eslint.org/) 和 [Stylelint](https://stylelint.io/) 来确保代码质量和风格的一致性。同时，我们使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 和 [lint-staged](https://github.com/okonet/lint-staged) 来在提交代码前自动运行代码检查，确保所有提交到代码库的代码都符合规范。

## 工具配置与作用

### ESLint

[ESLint](https://eslint.org/) 是一个用于识别和报告 JavaScript/TypeScript 代码中发现的模式的工具，目标是使代码更加一致并避免错误。配置文件位于项目根目录的 `eslint.config.js`。

ESLint 可以：

- 自动检查代码中的语法错误
- 检查代码风格是否符合规范
- 修复简单的代码问题
- 通过插件系统扩展其功能

我们的 ESLint 配置：

```js
const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-plugin')

module.exports = uni(
  {
    overrides: {
      uni: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      },
    },
    ignores: [
      'pages.json',
      'manifest.json',
      '*.nvue',
      'dist',
    ],
  },
  unocss.configs.flat,
  {
    rules: {
      'no-debugger': require('node:process').env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': 'off',
      'vue/multiline-html-element-content-newline': ['warn', {
        ignores: ['pre', 'textarea', 'text'],
      }],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off', // 未使用的变量显示警告
      'vue/prop-name-casing': 'off',
      'no-async-promise-executor': 'off', // 允许 promise 参数回调中使用 async-await
    },
  },
)
```

主要特点：

- 基于 [@uni-helper/eslint-config](https://github.com/uni-helper/eslint-config) 配置，专为 uni-app 项目定制
- 集成了 [UnoCSS](https://github.com/unocss/unocss) 的 ESLint 插件，支持 UnoCSS 语法检查
- 自定义规则：
  - 强制组件名称使用 PascalCase 命名法
  - 生产环境中警告 debugger 语句，开发环境允许使用
  - 允许使用 console 语句
  - 对多行 HTML 元素内容换行进行警告（忽略特定标签）
  - 严格检查未使用的 TypeScript 变量
  - 放宽对 prop 命名风格的限制
  - 允许在 Promise executor 中使用 async-await

### Stylelint

[Stylelint](https://stylelint.io/) 是一个强大的现代化 CSS 代码检查器，可以帮助您避免错误并强制执行约定的代码风格。我们使用了以下配置：

- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)：提供 SCSS 的标准配置，确保 SCSS 代码符合最佳实践
- [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)：按照一致的顺序对 CSS 属性进行排序，提高代码可读性
- [stylelint-config-standard-vue](https://github.com/ota-meshi/stylelint-config-standard-vue)：专门为 Vue 文件中的样式提供检查规则
- [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss)：为 Stylelint 提供 SCSS 特定语法的支持

Stylelint 可以：

- 检查 CSS/SCSS/Less 语法错误
- 确保样式代码遵循设定的规范
- 自动修复样式问题
- 统一团队的样式编写风格

## Git Hooks 配置

我们使用 [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) 来管理 Git hooks。相比 husky，它更轻量且性能更好。在 `package.json` 中配置了 pre-commit hook：

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  }
}
```

simple-git-hooks 的主要优势：

- 轻量级，无依赖
- 比 husky 更快的执行速度
- 简单直观的配置方式

## Lint Staged 配置

[lint-staged](https://github.com/okonet/lint-staged) 允许我们只对 Git 暂存区中的文件运行 linter，而不是检查整个项目，大大提高了效率。

在 `.lintstagedrc` 文件中配置了以下规则：

```json
{
  "*.{js,ts,vue}": "eslint --cache --fix",
  "*.{css,scss,vue}": "stylelint --cache --fix"
}
```

这意味着：

- 在提交代码时，只会对当前更改的文件进行检查
- 针对 JavaScript/TypeScript/Vue 文件会运行 ESLint 并尝试自动修复问题
- 对于 CSS/SCSS 文件和 Vue 文件中的样式部分会运行 Stylelint 并尝试自动修复
- 使用 `--cache` 参数加速后续的检查过程

lint-staged 的主要优势：

- 只检查已修改的文件，大大节省时间
- 与 Git workflow 无缝集成
- 支持多种文件类型和多个 linters

## 工作流程

当你开发完成，执行 `git commit` 时会发生以下步骤：

1. Git 触发 pre-commit hook
2. simple-git-hooks 执行配置的命令 `pnpm lint-staged`
3. lint-staged 识别暂存区中的文件，根据文件类型执行相应的检查
4. 如果检查通过或问题已自动修复，提交成功；否则提交失败并显示错误信息

## 手动运行代码检查

虽然 Git 提交时会自动检查代码，但有时你可能想手动运行检查：

```bash
# 检查 JavaScript/TypeScript/Vue 文件
pnpm run lint

# 检查样式文件
pnpm run styleslint
```

## 相关依赖

- [eslint](https://eslint.org/) - JavaScript/TypeScript 代码检查工具
- [@uni-helper/eslint-config](https://github.com/uni-helper/eslint-config) - uni-app 项目的 ESLint 预设配置
- [@unocss/eslint-plugin](https://github.com/unocss/unocss/tree/main/packages/eslint-plugin) - UnoCSS 的 ESLint 插件
- [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) - 轻量级的 Git hooks 管理工具
- [lint-staged](https://github.com/okonet/lint-staged) - 针对暂存文件运行 linters 的工具
- [stylelint](https://stylelint.io/) - 强大的 CSS 代码检查器
- [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) - CSS 属性排序规则
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) - SCSS 标准配置
- [stylelint-config-standard-vue](https://github.com/ota-meshi/stylelint-config-standard-vue) - Vue 文件样式检查配置
- [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss) - Stylelint 的 SCSS 插件
