# vscode 云同步配置

幕后主使： [插件文档](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

Sync : 上传完成. GIST ID : 5A191D3E99909487579FA330260EC28F .请在其他计算机上复制并使用此ID以下载设置.

github 令牌   d0e52a6788277603bef63efbd024b6d34051308d





## 从GitHub获取个人访问令牌的步骤

此扩展程序需要您的GitHub帐户中的个人访问令牌。您只需按照下图所示的步骤即可创建一个。确保在范围中添加**Gist**。

**转到[设置](https://github.com/settings) / [开发人员设置](https://github.com/settings/tokens) / [个人访问令牌](https://github.com/settings/tokens) /生成新令牌**

![](https://ws2.sinaimg.cn/large/006tNc79gy1fznuxn94nzj30rs091tbf.jpg)



**从范围中选择Gist。**

![](https://ws2.sinaimg.cn/large/006tNc79gy1fznuy0a611j30rs0x5qbk.jpg)

**获取访问令牌。**

![](https://ws2.sinaimg.cn/large/006tNc79gy1fznuycbyqoj30rs0c2wiz.jpg)

>  将令牌保存在某处以备将来使用（即从其他计算机上传）。

## 第一次上传您的设置

 **按Shift + Alt + U，它将询问您的GitHub帐户访问令牌。**

>  在命令选项板中键入“>同步”以下载/上传订单
>
> Type ">Sync" In Command Palette into order download / upload

这将自动打开您的GitHub设置页面，允许您为应用程序生成新令牌，如上一节中所述。此令牌将允许扩展程序创建要点。



在窗口中输入GitHub令牌，然后单击Enter。

![](https://ws2.sinaimg.cn/large/006tNc79gy1fznuyexf2nj30rw03qwey.jpg)



**自动上传您的设置，扩展程序会在系统消息中为您提供Gist ID。** 需要Gist ID才能访问您使用令牌上传的数据。复制此Gist ID以将设置下载到其他计算机。

![](https://ws3.sinaimg.cn/large/006tNc79gy1fznuyiaw5yj30we06p3z9.jpg)

您始终可以在以下网址上**验证已创建的要点**：

> [https://gist.github.com/{your_userName}/{gist_id}](https://gist.github.com/%7Byour_userName%7D/%7Bgist_id%7D)

这是执行Upload命令时完整过程的GIF（可能需要一些时间加载）

![](https://ws2.sinaimg.cn/large/006tNc79gy1fznuzbfpdqg30hs0991l0.gif)

## 下载您的设置

**按Shift + Alt + D，它将询问您的GitHub Gist ID。**

> 在命令选项板中键入“>同步”以下载/上传订单

**输入您的GitHub令牌。**

在窗口中输入GitHub令牌，然后单击Enter。

![github帐户访问令牌](https://ws2.sinaimg.cn/large/006tNc79gy1fznuyexf2nj30rw03qwey.jpg)

**输入您的Gist ID。**

您需要输入您的Gist ID才能下载使用Shift + Alt + U上传的文件。

![输入您的Gist ID](https://ws3.sinaimg.cn/large/006tNc79gy1fznuzdgixtj30we06pmxu.jpg)

**设置已下载。** 你完成了！您的所有文件都已下载

![输入您的Gist ID](https://ws3.sinaimg.cn/large/006tNc79gy1fznuzeiicaj30we06p752.jpg)

执行下载命令时，这是完整过程的GIF（可能需要一段时间才能加载）

![下载](https://ws4.sinaimg.cn/large/006tNc79gy1fznuzkaipbg30hs099e81.gif)

## 重置令牌/吉斯特设置

> 在命令选项板中键入“> Sync”，然后选择“重置令牌和主旨设置”
>
> Type ">Sync" In Command Palette and select Reset Token and Gist Settings

## 切换自动下载

**默认情况下禁用**自动下载。它会在编辑器启动时默认同步所有设置。请确保您拥有有效的github令牌和Gist，以使其正常工作。

选择命令**“同步：高级选项>切换启动时自动下载”**命令以打开/关闭自动下载。

> **Sync : Advanced Options > Toggle Auto-Download On Startup**



# vscode+EasyLESS

## 使用方法

[官方](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)的自然是最完整的,所有高阶技巧都可以从这里捕捉。

这里只给大家介绍一种最基本的使用方法：

在less文件开头添加如下注释



```javascript
// out: ../style.css, compress: true, sourceMap: true
```

out 填写生成路径，相对于当前less文件 
compress css压缩，true生成压缩代码 
sourceMap 生成 `*.map` 文件 true为生成

还有其他参数例如：sourceMapFileInline（行内map）、relativeUrls（@import相对路径）、autoprefixer（自动补全前缀[需要node插件支持]）等就需要大家在实例中探索了



## 修改npm安装路径

嘿嘿，我知道有人肯定不知道怎么改npm安装路径 
贴个链接吧 [Node.js模块全局安装路径配置](http://blog.csdn.net/williamfan21c/article/details/55517558) 
主要的命令



```javascript
npm config set prefix d:\xxx
```



# css - vscode 双击选中连字符 - 

```json
// 执行文字相关的导航或操作时将用作文字分隔符的字符
  "editor.wordSeparators": "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
```