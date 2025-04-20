# MACOS安装mongoDB

使用`brew`安装

```bash
brew tap mongodb/brew # 将mongodb添加到brew中
brew install mongodb-community@5.0 # 安装
```



## 安装成功

![image-20220829104541813](https://media.sunpm.me/uPic/2022-08-29/10:45:42-40XhzC_image-20220829104541813.png)





## 添加环境变量

```bash
echo 'export PATH="/usr/local/opt/mongodb-community@5.0/bin:$PATH"' >> ~/.zshrc
```



## 启动服务

```bash
brew services start mongodb-community@5.0
```

![image-20220829115027807](https://media.sunpm.me/uPic/2022-08-29/11:50:28-XDoH75_image-20220829115027807.png)

## 停止服务

```bash
brew services stop mongodb-community@5.0
```

![image-20220829115124999](https://media.sunpm.me/uPic/2022-08-29/11:51:25-h73cgq_image-20220829115124999.png)

## 系统登陆立即启动mongodb

```bash
brew services start mongodb/brew/mongodb-community@5.0
```



## 命令行连接mongodb

```bash
mongo
```

![image-20220829123433576](https://media.sunpm.me/uPic/2022-08-29/12:34:33-jUYvT7_image-20220829123433576.png)

## 报错信息

### 1

```bash
Error:
  homebrew-core is a shallow clone.
To `brew update`, first run:
  git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshallow
This command may take a few minutes to run due to the large size of the repository.
This restriction has been made on GitHub's request because updating shallow
clones is an extremely expensive operation due to the tree layout and traffic of
Homebrew/homebrew-core and Homebrew/homebrew-cask. We don't do this for you
automatically to avoid repeatedly performing an expensive unshallow operation in
CI systems (which should instead be fixed to not use shallow clones). Sorry for
the inconvenience!
```

![image-20220829103911383](https://media.sunpm.me/uPic/2022-08-29/10:39:12-Ol3EI9_image-20220829103911383.png)



只需按上述提示执行相应命令即可：

```bash
git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshallow
```

### 2

```bash
connecting to : mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Error: couldn’t connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:374:17
@(connect):2:6
exception: connect failed
exiting with code 1
```



![image-20220829120347600](https://media.sunpm.me/uPic/2022-08-29/12:03:47-HJiTr9_image-20220829120347600.png)

在你的主目录中创建一个 data/db

1. cd ～/
2. mkdir data
3. cd data
4. mkdir db
5. sudo mongod --dbpath ~/data/db
