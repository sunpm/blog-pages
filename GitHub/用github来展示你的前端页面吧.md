<https://segmentfault.com/a/1190000007544336>

## 前言

经常会有人问我如何才能将自己做的静态页面放到网上供他人欣赏，是不是需要自己有一个服务器，是不是还要搞个域名才能访问？对于以上问题我都会回答：用github来展示你的前端页面吧。

工欲善其事，必先利其器。github是一个很好的代码管理与协同开发平台，在程序界又被称为最大的“同性交友网站”。如果你不懂git，没有自己的github账户，那你就丢失了一把能够很好的展示自我，储存知识的利器。

当然知道github的人不在少数，但是大部分人可能仅知道它可以用于管理我们的项目代码，而不知道其还可以用于展示我们前端的静态页面。比如：

> [https://github.com/luozhihao/...](https://github.com/luozhihao/demo)

了解github的人都知道上方的地址指向的是一个github项目目录，同时你可能还会发现这样的一个地址：

> <https://luozhihao.github.io/demo>

上方的地址就是对应demo项目的展示页面了。

## 步骤

其实利用github来展示前端静态页面的例子很多，比如各种插件、框架的demo演示地址都会这样做，那么下面我们就来实际操作一下，体验一把展示自己前端项目成果的乐趣。

#### 1.安装git

如果你是mac用户，那么恭喜你mac自带git命令功能，你无须安装git。如果你是windows用户，你可以前往[windows地址](https://git-for-windows.github.io/index.html)下载并安装。

#### 2.建立仓库

在你的github主页，我们可以点击右上角的加号按钮下的“New repository”来新建一个项目仓库，如图所示：

![img](https://segmentfault.com/img/remote/1460000007544339?w=300&h=192)

点击之后我们给仓库取一个名字并进行相应的描述和配置后点击“Create repository”就ok了。

![img](https://segmentfault.com/img/remote/1460000007544340?w=746&h=616)

#### 3.上传代码

仓库建立完毕后，这时候就需要用我们之前安装的git命令来将本地的代码推送到github上了。如果你仅为了展示自己的前端页面，那么只要掌握如下命令即可（不熟悉git命令的可以参考[git - 简易指南](http://www.bootcss.com/p/git-guide/)）：

（1）打开你的目录

```
cd demo
```

（2）初始化版本库，用于生成.git文件

```
git init
```

（3）将所有文件添加到缓存区

```
git add *
```

（4）提交当前工作空间的修改内容

```
git commit -m "first commit"
```

（5）将仓库连接到远程服务器

```
git remote add origin <server>
```

（6）将改动推送到所添加的服务器上

```
git push -u origin master
```

上方server中的地址在github上创建仓库后可以找到，如下：

![img](https://segmentfault.com/img/remote/1460000007544341?w=645&h=132)

#### 4.创建gh-pages分支

之前的工作只是将我们的代码发布到了github上demo仓库的master分支上，当然你也可以不发布，而我们的展示页面代码必须发布到名为“gh-pages”的分支上。方法很简单，我们只需要在github的demo项目页面手动创建gh-pages分支即可。如图：

![img](https://segmentfault.com/img/remote/1460000007544342?w=525&h=420)

输入gh-pages后创建即可，这样的方式会直接拷贝master分支的所有文件到gh-pages分支，而你也可以用命令行的形式创建并重新上传一份新的代码：

（1）新建并切换到gh-pages分支

```
git checkout --orphan gh-pages
```

（2）之后的操作和之前一样，只是push的时候是gh-pages

```
git add *
git commit -m "update"
git push -u origin gh-pages
```

如此，我们的demo项目就多了一个gh-pages分支，里面的代码文件就可以用来展示页面了。

#### 5.访问页面

创建并上传文件至gh-pages之后，我们就可以访问如下url来查看自己的demo了：

```
http://(user_name|org_name).github.io/repo_name
```

这里我们的demo地址为：[https://luozhihao.github.io/d...](https://luozhihao.github.io/demo/,) 最终页面如图：

![img](https://segmentfault.com/img/remote/1460000007544343?w=767&h=422)

这样我们便实现了利用github来展示前端静态页面的目标。

## 结语

很多时候方法就摆在眼前，就看你会不会捅破那层隔膜，敢不敢进行钻研与尝试。github之所以经久不衰是因为其不仅解决了我们代码提交、版本管理的问题，还提供了其他实用而独特的功能。

本文只针对Github Pages提供给我们展示静态页面（不支持服务端语言）的功能做了基础的介绍，至于想真正掌握并了解更加深入内容的同学还请付诸于实践，比如利用gihub搭建博客等。

补充：根据读者反馈，现在github有一种更加简便的方式来实现上述功能，将代码上传至仓库后在settings里配置下GitHub Pages为你想展示的分支就行了。

本文为劳卜原创文章，首发于微信公众号：**前端呼啦圈（Love-FED）** 
转载请注明来自——微信公众号：前端呼啦圈（Love-FED）