# Vue项目中跨域问题解决

## 方法

- 后台更改header
- 使用http-proxy-middleware 代理解决（项目使用vue-cli脚手架搭建）
- Jquery jsonp

### 后台更改header

```javascript
header('Access-Control-Allow-Origin:*');//允许所有来源访问 
header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
```

### 使用http-proxy-middleware 代理解决（项目使用vue-cli脚手架搭建）

#### 打开config/index.js,在proxyTable中添写如下代码：

```javascript
proxyTable: { 
  '/api': { 
    target: '填写请求源地址', //源地址 
    changeOrigin: true, //是否跨域
    pathRewrite: { 
      '^/api': '' //路径重写 
      } 
  } 
}
```

#### 使用axios

```javascript
 this.$axios.post("/api/地址",{
 	//发送的数据
 }).then(data=>{
 	console.log(data);
 })
```

#### axios的配置（main.js）

```javascript
axios.defaults.headers.post["Content-type"]="application/json";
Vue.prototype.$axios=axios;
```

#### 使用ES6fetch请求

```javascript
fetch("/api/test/testToken.php",{
    method:"post",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify({/* 发送数据 */})
}).then(result=>{
    return result.json()
}).then(data=>{
    console.log(data);
})
```

### 使用jquery jsonp



```javascript
methods: { 
  getData () { 
    var self = this 
    $.ajax({ 
      url: '地址', 
      type: 'GET', 
      dataType: 'JSONP', 
      success: function (res) { 
        self.data = res.data.slice(0, 3)
        self.opencode = res.data[0].opencode.split(',') 
      } 
    }) 
  } 
} 
```