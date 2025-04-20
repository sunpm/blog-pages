# node16版本支持的sass

本来项目好好的，node升级到16之后，运行项目发生了报错

```bash
Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime.
```



![img](https://media.sunpm.me/uPic/2022-08-21/09:19:58-uqTfQV_1033257-20201218110049235-1805662407.jpeg)

意思是**sass**尚不支持当前环境：**64位OS X**运行时不受支持。



## 解决方法

我们node也不需要切换版本，可以直接使用最新的sass预处理依赖

```bash
npm install node-sass sass-loader -D
# or
yarn add node-sass sass-loader -D
```

