# 在webstorm中配置less的自动编译

上一篇说了使用webstorm自动编译sass,这篇说说怎么自动编译less,其实是差不多的.

由于我的hexo从原来的windows搬到了mac os 上,顺便也当练练手,试一下.

首先,需要下载编译less的包,执行 *npm install -g less* (如果是mac下,需要加上sudo)

安装完以后它会显示你安装的路径,这个路径需要记下来,后面会用到.

下面几步和sass是一样的,只是选择的是less

点击左上角的`File`→`Settings`→`File Watchers`

> 在mac os下,应该是`WebStorm`→`Preferences`→`Tools`→`File Watchers`

在弹窗的窗口的右上角点击绿色的 ‘+’ 号,然后选择less

按照下图进行配置:

![webstorm配置less自动编译1](https://puui.qpic.cn/fans_admin/0/3_1655376438_1559642720321/0)

其中有两个选项是需要修改配置的:

1.*Program*:

这里填写的是less编译包安装的路径,就是前面一开始要记下来的那个路径.

2.*Outputpaths to refresh*:

这里填写的是less编译后的css文件的路径,和sass里的Arguments参数一样,这里的`$FileParentDir$`表示的是less文件所在的文件夹的父级文件夹,而不是less文件的父文件夹.

和sass一样,它只能编译你打开的项目里的文件

比如打开`test1`项目,就可以自动编译less:

![webstorm配置less自动编译2](https://puui.qpic.cn/fans_admin/0/3_1655376438_1559642735998/0)

**下面说个比较复杂的功能,sass和其它file watcher都一样用**

在配置*Outputpaths to refresh*这个参数,以及sass里配置*Arguments*参数的时候,都用到了’$FileParentDir$’这个参数,那么这个是哪里来的? 如果我还有其它配置路径的需求,要怎么做呢?

再回去看下的配置的图:

![webstorm配置less自动编译1](https://ae01.alicdn.com/kf/HTB1hUvAbqWs3KVjSZFx761WUXXaq.png)

可以看到,在每个参数的后面都有个按钮,叫 `insert macro...` 打开这个,就可以看到有哪些参数是可以配置的,选中以后,它会按照你当前打开的文件来举例说明这个参数的结果是什么.

![webstorm配置less自动编译3](https://puui.qpic.cn/fans_admin/0/3_1655376438_1559642765504/0)

比如这个 $FileName 就是当前文件的名字,其它的每个都可以点击查看,点击insert就插入这个参数.

举个栗子,我工作中需要用到这样的路径: less文件夹下按照模块分,公共部分直接在less文件夹下,其它的各个板块分别在各自的文件夹下,比如index模块,就在index文件夹下,最后编译出来的css都到css文件夹下:

![webstorm配置less自动编译4](https://puui.qpic.cn/fans_admin/0/3_1655376438_1559642786828/0)

就可以这样配置*Outputpaths to refresh*:

*\$ProjectFileDir\$/css/\$FileNameWithoutExtension\$.css*

> 这样,webstorm自带的配置方法已经可以满足很多需求了,如果项目架构实在太复杂,那只能移步grunt或者fis了,后续会继续学习grunt.