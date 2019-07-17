```js
// build/webpack.base.conf.js 后面  添加
const vuxLoader = require('vux-loader')
const webpackConfig = module.exports

module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})
```

```bash
~ yarn add babel-loader vux
```

