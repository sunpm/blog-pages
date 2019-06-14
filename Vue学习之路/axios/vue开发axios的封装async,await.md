# vue 开发axios的封装async/await

难得的这周事情少，不要给领导看见了啊。嘿嘿 
这段时间计划把一个之前的PC项目avalon + gulp的框架重构为vue + element-ui。没有用vuex，我觉得这个东西目前还用不到。 
目前只是在做一些基本工作。其中最重要的就是网络请求部分了。今天就上班时间，记录下我的昨天封装的。和之前使用axios算是改变了。

项目基本目录结构

项目目录结构基本就是这样的，其实就是vue-cli新建项目是怎样的就是怎样的。

## 之前的网络请求

1.`main.js`文件

```js
// 引入 网络请求模块
import axios from 'axios'
Vue.prototype.$axios = axios;
```

2.具体页面中使用

```js
this.$axios.get('url',{
    params: {} // 参数
})
    .then((response) => {
    // 网络请求成功
})
    .catch((error) => {
    // 网络请求失败
});
```

## 现在的做法

1.在`static`目录下新建`http.js`文件，写入如下代码：

```js
// 引入 axios
import axios from 'axios'
// 测试地址
axios.defaults.baseURL = '';
// 线上地址
// axios.defaults.baseURL = '';
// request拦截器
// axios.interceptors.request.use(function (config) {
//     return config;
// }, function (error) {
//   
//   return Promise.reject(error);
// });
var http = {

    /** get 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
    get: function(url,params){
        return new Promise((resolve,reject) => {
            axios.get(url,{
                params:params
            })
                .then((response) => {
                resolve( response.data );
            })
                .catch((error) => {
                reject( error );
            });
        })
    },
    /** post 请求
   * @param  {接口地址} url
   * @param  {请求参数} params
   */
    post: function(url,params){
        return new Promise((resolve,reject) => {
            axios.post(url,params)
                .then((response) => {
                resolve( response.data );
            })
                .catch((error) => {
                reject( error );
            });
        })
    }
}
export default http
```

2.`main.js`文件

```js
// 引入 网络请求模块
import http from '../static/http.js';
Vue.prototype.$http = http;
```

3.具体页面中使用

```js
async textRequest(){
    var data = await this.$http.get('url');
    console.log(data);
}
```

上面就是这次的封装了，没有之前的那些`.then`和`.catch`分层了，就像回调那样的。现在直接一行代码搞定。

> 不过使用的时候发现了不足，请求异常时取data会报错 
>
> ```js
> async textRequest () {
>     try {
>         let data = await this.$http.get('url')
>         console.log(data)
>     } catch (err) { console.log(err) }
> }
> ```
>
> 

---------------------
作者：湖工电气 
来源：CSDN 
原文：https://blog.csdn.net/zhuming3834/article/details/80995859 
版权声明：本文为博主原创文章，转载请附上博文链接！