# [【教程】使用gitee搭建免费的图床](https://www.cnblogs.com/aflyun/p/10010319.html)

前几天七牛云的免费图床测试域名回收，导致我上传的图片都不能访问！要配置自定义域名，域名还要绑定主机。没有云主机的我开始想你们搞一个免费的图床，并且数据也不会丢失呢 ？

 想到之前自己在GitHub上搭建过一个GitHub Page ，里面可以上传图片并且图片也可以访问，这不是很好的图床吗，本地可以保存一份，并且上传到GitHub上云端也可以保存一份，还可以使用GitHub提供的地址在线访问图片，这不就解决了我目前的问题了。但是在经过几日的观察，Github page上的图片在线访问加载还是有点慢，就想到了Gitee（码云），这个可不可以搭建一个免费的page服务，托管我的图片呢？

一查Gitee官网真有，于是二话不说，开干！

### 一、准备工作

1、首先要有一个gitee帐户

2、然后在本地配置一下自己的SSH

3、最后本地有Git环境，用于后面图片的提交

准备工作这三步，就不具体展开了，没有环境的动起手来，先把环境搭好。

### 二、开始干活

#### 1、创建一个项目

 点击 `+`新建一个项目，填写项目名称，点击下面的 `创建`，如下图：

![新建项目](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_22-29-53.png)

![img](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_22-30-06.png)

#### 2、添加文件 index.html(名称必须是index.html)

![添加index.html](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_22-33-46.png)

![index.html](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_22-35-05.png)

#### 3、选择 pages 服务并启动

![选择page服务并启动](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_22-59-46.png)

#### 4、访问生成的网站地址

 已开启 Gitee Pages 服务后，访问page首页地址，这个是我的首页： <http://dufyun.gitee.io/images_bed>

**到此一个gitee page 已经搭建哦克 了！** 真正让图床起作用请继续往下看！

#### 5、将gitee图床项目拉取到本地

 这一步不做介绍，就是将gitee上刚才创建的项目拉取到本地。

#### 6、优化 gitee page 首页

因为我只是用来保存图片，所以就没有在集成博客系统。如果你需要你可以将此page 和 hexo等博客系统集成。

我这里只是为了首页好看，下载了一套 模板之家 的模板！ 如下：

![Graphic Design 模板](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_23-01-37.png)

然后自己修改了一下，删除不需要的文件，然后就直接放到 第五步 下载的 项目路径，commit、push！

![本地目录](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_23-02-23.png)

然后就可以访问感觉比较舒服的首页了！访问地址：<https://dufyun.gitee.io/images_bed/>

#### 7、日常使用

我是使用的有道云笔记存储笔记，有道云的Markdown如果不是会员是不能直接上传图片。书写Markdown我使用的是Typora，在要编辑一篇内容的时候，首先会建一个文件夹，将对应的图片放到一起，在Typora中直接引用本地路径的图片地址，然后等内容写好后将图片提交到gitee上，最后使用Typora的`启用源代码模式`，将内容拷贝到文本编辑器 后，本地图片地址全部替换成gitee的地址（只需要替换图片前面的路径）！如 我自己的

![内容替换](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_23-08-22.png)

```
F:\gitee_workspace\images_bed\images\techy\
替换为下面地址即可：
https://dufyun.gitee.io/images_bed/images/techy/
```

**==这样，如果哪一天gitee挂掉了，也可以直接在将gitee中地址替换为本地地址，图片依然可以访问！==**

下面是有道云markdown显示效果：

![有道云显示效果](https://dufyun.gitee.io/images_bed/images/techy/Snipaste_2018-11-23_23-20-44.png)

### 三、简单总结

看似整个过程很简单，但是还是建议想要一个免费的图床，自己有没有专门图片服务器的伙伴动手搞一下，小的积累，带来大个改变！

如果图床是公开的，建议不要上传比较隐私的图片，以及上传合法的图片！