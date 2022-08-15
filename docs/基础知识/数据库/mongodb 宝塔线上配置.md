# mongodb 宝塔线上配置

最近想要用node和mongodb写一个个人博客的后台接口，在本地测试没有问题以后就想部署到线上试试。

#### 1.在宝塔的软件商店中安装mongodb

![image.png](https://segmentfault.com/img/bVcR9Fj)

#### 2.配置连接外网

- 设置监听端口为`0.0.0.0`，原来的是`127.0.0.1`只允许本地访问，现在变成允许外网访问

![image.png](https://segmentfault.com/img/bVcR9Fx)

- 在宝塔的【安全】配置项中，放行27017端口

![image.png](https://segmentfault.com/img/bVcR9FF)

- 在腾讯云【管理控制台】中的防火墙中添加规则，允许27017端口出入。

![image.png](https://segmentfault.com/img/bVcR9FJ)

#### 3.配置账号密码

- 进入mongodb安装目录，下面是宝塔面板的默认目录

  ```bash
  cd /www/server/mongodb/bin
  ```

  

- 输入命令行mongo，进入mongodb环境

  ```bash
  mongo
  ```

  

- 为admin数据库设置账号密码

  - 切换到 admin 数据库

    ```bash
    use admin
    ```

    

  - 设置用户和密码

    ```reasonml
    db.createUser({user:'root',pwd:'admin_mima',roles:['root']})
    ```

  - 验证是否添加成功，db.auth(用户名，用户密码)

    ```bash
    db.auth('root', 'admin_mima')
    ```

    

- 为其他数据库设置账号和密码

  - 切换到 myblog 数据库

    ```bash
    use myblog
    ```

    

  - 设置用户和密码

    ```reasonml
    db.createUser({user:'test',pwd:'123456',roles:['readWrite']})
    ```

  - 验证是否添加成功，db.auth(用户名，用户密码)

    ```bash
    db.auth('test', '123456')
    ```

    

#### 4.开启安全登入

`authorization`由disable改为enable
![image.png](https://segmentfault.com/img/bVcR9G8)

#### 5.项目中的设置

- 项目位置

![image.png](https://segmentfault.com/img/bVcR9Ho)

- 修改后台项目连接数据库配置

![image.png](https://segmentfault.com/img/bVcR9If)

- 启动后台项目

下载并启动PM2管理器
![image.png](https://segmentfault.com/img/bVcR9Iq)

添加运行项目
![image.png](https://segmentfault.com/img/bVcR9IA)

#### 6.测试

![image.png](https://segmentfault.com/img/bVcR9I0)

解决宝塔mongodb无法启动问题：
在宝塔命令行进入mongodb目录

```bash
cd /www/server/mongodb/bin
```

输入命令：`mongod`
问题解决，原因不明