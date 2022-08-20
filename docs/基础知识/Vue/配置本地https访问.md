# 前端使用Nuxt.js框架，配置本地https访问

## 需求：

因部分API需要https才能实现，所以需要配置本地开发环境的https访问；

## 步骤：

1、生成本地使用的https证书；
2、在nuxt.config.js中引入证书；

## 第一步：在cmd窗口下

**1、下载证书生成库**

```bash
npm install -g mkcert
```

**2、创建证书颁发机构**

```bash
mkcert create-ca
```

创建成功后如图所示
![创建证书颁发机构](https://img-blog.csdnimg.cn/20200401091410196.png)
**3、创建证书**

```bash
mkcert create-cert
```

创建成功后如图所示
![创建证书](https://img-blog.csdnimg.cn/2020040109145761.png)
**4、找到证书文件**
根据创建提示找到对应的证书文件，复制并粘贴至Nuxt项目的根目录下

## 第二步：Nuxt项目内的 nuxt.config.js文件内

**1、下载path和fs库**

```bash
npm i fs
npm i path
```

**2、引入fs和path**

```javascript
import path from 'path'
import fs from 'fs'
```

**3、配置https服务**

```javascript
module.exports = {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'cert.crt'))
    }
  }
}
```

**4、运行项目，https配置成功。**
![服务启动成功](https://img-blog.csdnimg.cn/20200401092520692.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3poYW5ndGlhbl90aWFu,size_16,color_FFFFFF,t_70)
