# MacOS 安装 MongoDB

#### 系统要求

MongoDB 4.4 社区版支持 macOS 10.13 或更高版本

 

### 安装 Homebrew

Homebrew 是一个软件包管理器。它的作用就是将软件包安装到自己的目录中，然后将其文件符号链接到 /usr/local。更多信息，请自行进入官网查看



```
https://brew.sh/
```

 

在将下面代码复制进终端



```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

 

### 安装社区版的 MongoDB

#### 下载 MongoDB 和数据库工具



```
brew tap mongodb/brew
```

[![img](https://img2020.cnblogs.com/blog/1896874/202105/1896874-20210530121931276-548779979.png)](https://img2020.cnblogs.com/blog/1896874/202105/1896874-20210530121931276-548779979.png)

 

#### 安装 MongoDB

```bash
brew install mongodb-community@4.4
```



```
==> Installing mongodb-community@4.4 from mongodb/brew
==> Downloading https://fastdl.mongodb.org/tools/db/mongodb-database-tools-macos-x86_64-100.5.1.zip
Already downloaded: /Users/pmun/Library/Caches/Homebrew/downloads/740538df19d67cf44c84c95b5054c6d80733db1c9a8ac0e40ce76d4fe834e1de--mongodb-database-tools-macos-x86_64-100.5.1.zip
==> Downloading https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-4.4.10.tgz
Already downloaded: /Users/pmun/Library/Caches/Homebrew/downloads/46a7d0bd6c2f7583590a5e4d6e505440b8e2b772bba54d0b1a14ecc99a388013--mongodb-macos-x86_64-4.4.10.tgz
==> Installing dependencies for mongodb/brew/mongodb-community@4.4: mongodb-database-tools
==> Installing mongodb/brew/mongodb-community@4.4 dependency: mongodb-database-tools
🍺  /usr/local/Cellar/mongodb-database-tools/100.5.1: 13 files, 115.7MB, built in 3 seconds
==> Installing mongodb/brew/mongodb-community@4.4
==> Caveats
mongodb-community@4.4 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have mongodb-community@4.4 first in your PATH run:
  echo 'export PATH="/usr/local/opt/mongodb-community@4.4/bin:$PATH"' >> ~/.zshrc


To have launchd start mongodb/brew/mongodb-community@4.4 now and restart at login:
  brew services start mongodb/brew/mongodb-community@4.4
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
==> Summary
🍺  /usr/local/Cellar/mongodb-community@4.4/4.4.10: 11 files, 156.8MB, built in 3 seconds
==> Caveats
==> mongodb-community@4.4
mongodb-community@4.4 is keg-only, which means it was not symlinked into /usr/local,
because this is an alternate version of another formula.

If you need to have mongodb-community@4.4 first in your PATH run:
  echo 'export PATH="/usr/local/opt/mongodb-community@4.4/bin:$PATH"' >> ~/.zshrc


To have launchd start mongodb/brew/mongodb-community@4.4 now and restart at login:
  brew services start mongodb/brew/mongodb-community@4.4
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
```

最新5.0，先不做小白鼠

 

#### 添加 MongoDB 到 PATH 中

打开.bash_profile文件

```bash
open ~/.bash_profile
```

添加配置:`PATH=$PATH:/usr/local/Cellar/mongodb-community@4.4/4.4.10/bin`(注意这个路径就是mongodb安装包的路径，不要写错了)

![image.png](https://cdn.nlark.com/yuque/0/2021/png/322441/1640138656332-7fa0cb8e-e94b-43df-8855-3354e875bef0.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0)



在~/.zshrc文件最后，增加一行：

```bash
source ~/.bash_profile
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/322441/1640138695985-e7dd7be0-69f3-4e94-aafe-5d9c1b32ebf8.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0)

 

### 验证 MongoDB 安装成功



```
mongo --version
mongod --version 

# 均显示
MongoDB shell version v4.4.10
Build Info: {
    "version": "4.4.10",
    "gitVersion": "58971da1ef93435a9f62bf4708a81713def6e88c",
    "modules": [],
    "allocator": "system",
    "environment": {
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}
```

 

### 配置

安装完毕后，我们需要配置一下mongoDB才能使其正常启动

> 你们的系统是不是升级到Catalina以上了？ 这是因为Catalina及Big Sur的系统做了限制，不能直接操作 / 下的一级目录。Mongo 的日志/数据看上去使用到了 /data 目录，一般如果没有这个目录它会创建的。但系统做了限制就创建失败了，所以报这个错。 解决思路是把 /data 目录软链接到 ～/data （其他有权限的目录都行）目录，网上有教程。

1、首先我们在根目录下创建data/db目录

```bash
sudo mkdir -p ~/data/db
```

2、给 /data/db设置读写权限

```bash
# 查看当前所系统在的username
whoami
->username

# 设置权限
sudo chown username ~/data/db
```



### 启动mongodb

```bash
mongod
```

出现等待链接，则启动正常

如果启动报错，如下：



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/8/16daa6d06faedcb3~tplv-t2oaga2asx-watermark.awebp)



可能是dbpath错误，设置一下dbpath应该就可以了

```bash
mongod --dbpath ~/data/db
#设置dbpath后再启动
mongod
```

如果还出错，检查一下环境变量，如果报权限相关错误可以执行如下命令启动

```bash
sudo mongod
```

mongod成功启动之后，再新开一个命令窗口执行如下命令就可以了

```bash
mongo
```

### 退出mongo

在mongo的那个窗口

```bash
#先停止mongod服务
use admin;
db.shutdownServer();

#然后退出mongo
exit；
```