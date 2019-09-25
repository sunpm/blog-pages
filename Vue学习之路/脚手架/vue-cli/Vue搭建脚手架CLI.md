- `vue init webpack my-project`
- Project description  -->  项目描述
- Author  -->  作者
- Vue build  --> 运行时编译，选第一个 
- Install vue-router -->  Vue路由
- Use ESLint to lint your code  -->  ESLint代码检测,格式规范
- Pick an ESLint preset  —>  选择一个ESLint预置
- Setup unit tests with Karma + Mocha  -->  单元测试
- Setup e2e tests with Nightwatch  -->  测试





# [eslint加不加分号](https://www.cnblogs.com/beimingbingpo/p/9517831.html)



使用 vue-cli 构建的项目，模版是 webpack ，默认的 eslint 配置是以 standard 为基础的，要求是不使用分号。

如果我们希望要使用分号，则在 rules 字段增加配置：

```js
'semi': ["error", "always"]
```
这样，你的 js 代码每一个表达式的结尾就应该以分号结尾，否则 eslint 会给出错误提示。

如果你希望 eslint 不检查分号这一项，这个时候结尾的分号，你加也可以，不加也可以，在 rules 字段配置：
```js
'semi': 0
```
