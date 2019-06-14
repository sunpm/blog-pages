# axios安装配置





# 安装

根目录运行

```
npm install axios -S
```

# 配置

在src/main.js配置 axios
导入 axios 并在　new Vue()中配置

```javascript
import axios from '../node_modules/axios'

Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
```

简单使用:

```javascript
 .then 里是后台返回结果
 .catch 里是网络错误或后台服务器出bug等等


get方式
this.$axios.get('/user', {
      数据
  })
  .then(function (response) {
  })
  .catch(function (error) {
  });

post方式
this.$axios.post('/user' , {
  params: {
    数据对象(此处根据情况)
  }
})
  .then(function (response) {
  })
  .catch(function (error) {
  });
```

vue 中配置跨域访问后台

```javascript
	proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:18080', // 后台访问地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
```

![img](https://ws4.sinaimg.cn/large/006tNc79gy1g27ph6hllhj30ub0fsq4b.jpg)
配置后可直接在npm run dev 时直接访问后台地址
前缀比真实后台是多了个 /api ,就是

```javascript
this.$axios.post('/api/login/login', user)
	.then(function (response) {
	})
	.catch(function (error) {
	});
```