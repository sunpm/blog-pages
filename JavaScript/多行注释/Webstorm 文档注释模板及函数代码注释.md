养成良好的代码习惯，规范化代码，规范的注释便于后续维护。

文档说明注释 
Webstorm js中，自定义js说明注释(文档描述、作者、创建日期等)： 
快捷键 `Ctrl + Shift + S `打开Webstorm设置，搜索‘`Live Template`’，找到JavaScript，如下：

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/2018032711584963?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

点击右上角“`+`”-> `Live Template`，添加注释模板,出现以下界面，填写相关的信息： 


模板内容，如我需要定义文档描述、作者、创建日期：

```js
/**
 * @Description: 
 * @author Tsukiis Chen
 * @date $date$ 
 */
```

定义应用的内容，点击下方蓝色字‘`Define`’，选择`JavaScript`； 

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/20180327121707627?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

变量的设置：如日期变量`$date$`，点击右侧‘`Edit variables`’中设置具体内容， 

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/20180327121808147?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)


最后点击右下角“Apply”“OK”,设置完成。

使用 
在JS文档中，键入刚刚设置的模板简写（如‘des’）,此时出现补全提示 

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/20180327122129902?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

再点击`Tab`键或`Enter`键（有补全提示时）即可。 

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/20180327122404115?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

**函数说明注释** 
在函数声明上方键入 `/**` ,再按回车键： 

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/2018032712311447?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

第一行默认留空，此处手动填写函数用途说明，参数名后面的数据。类型说明需要手动添加（如果需要）： 

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/20180327142005280?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

添加注解后，调用函数时将鼠标光标放于括号内，按`Ctrl + P `可以查看函数调用所需要的参数提示（在键入参数的过程中自

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/20180327144947821?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)动显示提示）： 

如果注解中设置了参数类型，Webstorm将在开发过程中调用函数时对参数进行类型检测，如果不符合预定义的类型，将给予警告提示： 

![è¿éåå¾çæè¿°](https://img-blog.csdn.net/20180327145406643?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA4NDY2/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

关于JS的其他简要开发规范，参考：<https://www.cnblogs.com/polk6/p/4660195.html>
--------------------- 
作者：Tsukiis 
来源：CSDN 
原文：https://blog.csdn.net/qq_39108466/article/details/79712547 
版权声明：本文为博主原创文章，转载请附上博文链接！