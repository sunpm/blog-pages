# [eslint缩进配置](https://segmentfault.com/q/1010000013682009)

# 修改`package.json`文件

安装`eslint-plugin-vue`，删除`eslint-plugin-html`。

# 修改`.eslintrc.js`文件

把`parser: 'babel-eslint',`挪到`parserOptions`里。
在`plugins`里删除`html`。
在`extends`里添加`'plugin:vue/recommended'`。
在`rules`里添加：

```js
'indent': 'off',
    'vue/script-indent': [
        'error',
        4,
        {
            'baseIndent': 1
        }
    ]
```



# 示例



```js
module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    extends: ['airbnb-base', 'plugin:vue/recommended'],
    plugins: [],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js',
            },
        },
    },
    // add your custom rules here
    rules: {
        // don't require .vue extension when importing
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                vue: 'never',
            },
        ],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: ['test/unit/index.js'],
            },
        ],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'indent': 'off',
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 1
            }
        ]
    },
};
```