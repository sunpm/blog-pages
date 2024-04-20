# NPM 国内加速，修改镜像源

执行 npm 各种命令的时候，默认是去 npm 官方镜像源获取需要安装的具体软件信息

以下命令查看当前使用的镜像源

```bash
npm config get registry
```



> 默认源地址在国外，从国内访问的速度肯定比较慢

### 如何修改镜像源

阿里旗下维护着一个完整的 npm 镜像源 [https://npmmirror.com](https://npmmirror.com)



1. 临时修改
  ```bash
  npm install 软件名 --registry https://registry.npmmirror.com
  ```

  
2. 全局修改
  ```bash
  npm config set registry https://registry.npmmirror.com
  ```

  

3. 使用第三方软件快速修改、切换 npm 镜像源
[nrm](https://github.com/Pana/nrm) NPM registry manager
nrm 不仅可以快速切换镜像源，还可以测试自己网络访问不同源的速度

安装 nrm
```bash
npm install -g nrm
```

列出当前可用的所有镜像源

```bash
➜ nrm ls
* npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
```

##### 使用淘宝镜像源

```shell
nrm use taobao
```

##### 测试访问速度

```shell
nrm test taobao
```

更多用法查看 [nrm](https://github.com/Pana/nrm) GitHub
