# 彻底解决eslint与webstorm针对vue的script标签缩进处理方式冲突问题

背景不多介绍了，直接上代码。

打开项目根上下的`.eslintrc.js`，将`rules`节点中添加以下配置项。

```js
rules: {
  'vue/script-indent': ['error', 2, {'baseIndent': 1}]
}
```

其中第1个`2`是指统一缩进2个空格，第2个`1`是指1倍缩进。

另外需要添加以下节点，与`rules`同级：

```js
overrides: [
  {
    'files': ['*.vue'],
    'rules': {
      'indent': 'off'
    }
  }
]
```

注：这里是针对eslint的`4.15.0`版本。

