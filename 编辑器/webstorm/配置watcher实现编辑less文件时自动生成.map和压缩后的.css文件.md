# [在WebStorm里配置watcher实现编辑less文件时自动生成.map和压缩后的.css文件](https://www.cnblogs.com/liaojie970/p/7155374.html)

1.操作前确定成功安装less，检测方法，在命令行（cmd）,输入lessc -v，看到如下类似内容，则说明安装过了。 
![这里写图片描述](http://img.blog.csdn.net/20170205190158610?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGh0emJqMTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 
如果需要生成压缩后的css的文件，则需要通过以下命令安装插件

```bash
npm install less-plugin-clean-css
```

【注：】可能遇到的问题
![img](https://images2015.cnblogs.com/blog/697878/201707/697878-20170712145424900-22631190.png)

解决方案：在E:\Program Files\nodejs\node_modules\npm进行安装     ps: ??不懂

2.打开WebStrom，随便新建一个工程，在工程名上右键，【新建】-【Stylesheet】,输入文件名，Kind值选择Less File,【确定】，会自动提示是否将less加入watcher，点击【Add watcher】
![这里写图片描述](http://img.blog.csdn.net/20170205190332470?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGh0emJqMTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 
![这里写图片描述](http://img.blog.csdn.net/20170205190342657?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGh0emJqMTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 
打开New Watcher配置界面，如果没有提示，也可以通过【文件(File)】-【设置(Settings)】-【工具(Tools)】-【File Watchers】-【+】-【Less】打开New Watcher配置界面。 
![这里写图片描述](http://img.blog.csdn.net/20170205190423454?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGh0emJqMTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

3.此时，如果直接点击【确定】，则当我们修改less文件时，会自动生成相应的css文件，当然我们为了让其功能更强大，生成压缩后的css和相应的map文件，就需要修改

Arguments和Output paths to refresh两个参数（注意Program值是自动获取的，每个人电脑环境不同，路径类似）。按照下面的表中值进行配置，完成相应的功能。 
**修改前**

| 参数名                  | 参数值(下面no之前是两个“-”)    |
| ----------------------- | ------------------------------ |
| Arguments               | –no-color $FileName$           |
| Output paths to refresh | $FileNameWithoutExtension$.css |

**修改后（不启用css压缩）**

| 参数名                  | 参数值(下面no和source之前是两个“-”)                          |
| ----------------------- | ------------------------------------------------------------ |
| Arguments               | –no-color $FileName$ $FileNameWithoutExtension$.css –source-map=$FileNameWithoutExtension$.css.map |
| Output paths to refresh | 留空                                                         |

**修改后（启用css压缩，需要给less安装插件less-plugin-clean-css，详见《安装Nodejs、npm、Less（支持生成压缩后的css）》）**

| 参数名                  | 参数值(下面no、clean和source之前是两个“-”)                   |
| ----------------------- | ------------------------------------------------------------ |
| Arguments               | –no-color $FileName$ $FileNameWithoutExtension$.min.css –clean-css –source-map=$FileNameWithoutExtension$.min.css.map |
| Output paths to refresh | 留空                                                         |

修改后点击【确定】保存，回到less文件编辑界面，随意输入css代码，立即会生成css和map文件。 
![这里写图片描述](http://img.blog.csdn.net/20170205191943415?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvbGh0emJqMTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) 
Arguments里还可添加其他参数实现更多的功能，点击后面的【Insert maro…】可以添加更多的宏值

<https://www.cnblogs.com/liaojie970/p/7155374.html#top>



# 自己研究

打开New Watcher配置界面，如果没有提示，也可以通过【文件(File)】-【设置(Settings)】-【工具(Tools)】-【File Watchers】-【+】-【Less】打开New Watcher配置界面。 

> Auto-save edited files to trigger the watcher
> Trigger the watcher on external changes
> Trigger the watcher regardless of syntax errors
> Create outout file from stdout
>
> ↓
>
> 自动保存编辑的文件以触发观察程序
>
> 在外部更改时触发观察程序
>
> 无论语法错误如何，都触发观察程序
>
> 从stdout创建outout文件

