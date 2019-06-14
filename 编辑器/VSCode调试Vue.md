作者：神仙朱

链接：https://zhuanlan.zhihu.com/p/53206857

来源：知乎

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## **进入VSCode调试界面**



是是是，让我们把眼睛移动到 VSCODE 左边活动栏 这边



1、有个小虫 ![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznuw36k9mj301c01c0sh.jpg)，点击进入调试界面

2、或者按快捷键， ctrl+shift+D



错！其实第一步你应该打开 VSCode



![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuw3xq0kj30go00a741.jpg)



## **创建调试配置文件**



点击这个小设置按钮

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuw4f5g3j308502iaa1.jpg)



之后，会弹窗，让你选择调试的类型，我们选择 Chrome ，骚年

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuw4t4vdj308u037wee.jpg)



Duang 的一声，你会发现自动生成了一个配置文件

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuw5sshrj308w04174a.jpg)





然后这一步你就成功了呗....到下一步了



![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuw3xq0kj30go00a741.jpg)



**配置调试配置文件**



配置文件有很多选项，我只给出最简单的可以使用的版本



```json
{    
    "version": "0.2.0",    
    "configurations": [
        {            
            "type": "chrome",            
            "request": "launch",            
            "name": "调试 Vue 的调用走向",            
            "file": "${workspaceRoot}/index.html",
        }
    ]
}
```



解释一下 ( • ̀ω•́ )✧



**type**

是你调试类型，你调试的是网页，还是调试 node。

现在我们调试网页，所以选择 Chrome

**name**

调试名称，随你起名字，起 个 xxxxxx

**file**

本地文件路径，调试 本地 文件（ workspaceRoot 是项目根目录，以此来确定你的 html 调试页面 相对路径）





![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuw3xq0kj30go00a741.jpg)



## **开始调试**



**打断点**

在 文件的 序号一栏 的左边，可以标记红色断点

然后可以在序号栏 左边，看到你打的所有断点

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwbzt9aj30b006emxl.jpg)



**启动调试**

点击下面的按钮，立即启动调试，等个几秒钟？？

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuweatokj306c02imx2.jpg)



**启动成功**

然后你发现 谷歌浏览器被自动启动了，然后你就成功了兄弟

看得到 浏览器 的 url 是你的 硬盘绝对路径，也就是你在配置文件里面配置的



![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuwhk8drj30f702x0sx.jpg)



TIP：如果你启动调试期间出现什么问题，不要怕，度娘 或者 谷哥，资料很多，我也碰到很多问题，很正常

(～￣▽￣)～ 



![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuw3xq0kj30go00a741.jpg)



## **调试工具栏**



启动调试成功之后，你可以看到 这个工具栏的出现



![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwiw45sj3069013q2r.jpg)





我们来一个个看 每个按钮都是什么作用



![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznuwjclt7j300u00r0gc.jpg)

**继续**，跳断点，从一个断点 跳到 另一个断点





![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwjsjk3j300u00u0gc.jpg)

**单步跳过**

​    跳过函数执行，就是 不进入函数内部，直接执行完函数，跳到函数下一个语句



![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuwkunfwj300y00o0pk.jpg)

​    TIP：但是如果你在这个函数的内部 打了断点，点击【单步跳过】你还是会进入函数内部，然后跳到函数内部最近那个断点那行

ヾ(●´∀｀●) 

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuwokxx4j300y00o0pu.jpg)



![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuwp24ksj300u00s0g0.jpg)

**单步调试**，一条条语句 执行 



![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwpmz4mj300w00s0fn.jpg)

**单步跳出**

跳出 单签函数体，如果当前调试已经进入了某个函数，那么立即执行完当前函数，并跳出这个函数

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwvlgmcj300y00o0pl.jpg)

TIP：但是如果你在这个函数的内部 打了断点，你可能跳不出去，而是跳到这个函数 内部最近的一个断点

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwwhym3j300y00o0pu.jpg)



![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuwxgkegj300x00x0hj.jpg)

**重启**，重新启动调试，从头开始



![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuwxwce3j300x00x0jt.jpg)

**停止**，关闭调试







![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuw3xq0kj30go00a741.jpg)



**举栗子 (´･ᴗ･`)**



准备好文件

index.html，越短越好

```text
<script src="./index.js"></script>
```



index.js

```js
function fn1(name){    
var result = name+" fn1 处理过 "
    fn2(result)
}
function fn2(arg){    
return arg +" fn2 处理过 "
}
fn1("hoho")
```



**01  新建调试文件 launch.json**

```text
{    
       "version": "0.2.0",    
       "configurations": [
        {            
           "type": "chrome",            
           "request": "launch",            
           "name": "调试Demo",            
           "file": "${workspaceRoot}/index.html",
        }
    ]
}
```





**02  打断点**

![img](https://ws2.sinaimg.cn/large/006tNc79gy1fznuwzaggwj3099027dfs.jpg)





**03  启动调试，来到第一个断点**

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuwzs6x5j306j01ldfo.jpg)





**04  开始调试**



**先讲按钮使用流程**

现在执行到 fn1 函数这一行，但是 **fn1** 还没执行



此时点击  

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznux36cocj300u00s0g0.jpg)

执行 **fn1**，进入 **fn1** 函数内部





**进入 fn1 之后**

一直点击 

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznux36cocj300u00s0g0.jpg)

 ，直到执行到 **fn2** 语句



像下面这样，有条黄线，就表示执行到哪条语句

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznux4jezij30ac01z0sp.jpg)





1、点击  

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznux5g7wjj300u00u0gc.jpg)



 ，会 立即执行完 **fn2** ，不进入 **fn2**

2、点击  

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuwp24ksj300u00s0g0.jpg)

 ，会 进入 **fn2**





**如果进入了 fn2 之后**



点击  

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwpmz4mj300w00s0fn.jpg)

 ，会立即执行完 **fn2** 函数，跳出 **fn2** 函数内部



现在，我们  



![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuwpmz4mj300w00s0fn.jpg)

![img](https://ws3.sinaimg.cn/large/006tNc79gy1fznuwp24ksj300u00s0g0.jpg)

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznux5g7wjj300u00u0gc.jpg)

 三个按钮都使用过了，还剩 

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuxahzl7j300u00r0gc.jpg)





我们在 fn2 处打多一个一个断点，然后重启   

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuwxgkegj300x00x0hj.jpg)







你能看到 现在又是停到了 第一个断点处

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuwzs6x5j306j01ldfo.jpg)





 此时，你的小手一按  

![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuxahzl7j300u00r0gc.jpg)

 ，于是你便跳到了刚打的第二个断点

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuxcu8skj308r02d3yh.jpg)





**观察变量值**

1、可以把鼠标移动到 某个变量上，会显示一个弹窗，弹窗内容是 变量的值

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuxdwb4bj308a0293yh.jpg)

2、或者可以查看 左栏 调试栏的 变量

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuxes4buj309r04uwej.jpg)





**观察函数调用流程**

同样是查看左边的 调试栏，中的调用堆栈，可以看到 函数调用的顺序

明显可以看到 先调用 fn1， 在调用 fn2

![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuxfp92aj30ah04idfz.jpg)





好的，如果你 有跟着做的，相信你已经入门了兄弟，是不是十分钟从入门到精通？？ 





![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuxgckbqj304d04g3yi.jpg)





![img](https://ws4.sinaimg.cn/large/006tNc79gy1fznuw3xq0kj30go00a741.jpg)



## **调试Vue准备**



index.html 

引用 vue 文件、引用 vue.test.js 文件

```html
<!DOCTYPE html>
<html lang="en"><head></head><body>
    <div class="a" >
        <testb></testb>
    </div>
    <script src="./vue.js"></script>
    <script src="./vue.test.js"></script>
</body>
</html>
```



vue.js

去官网下载生产版本即可



vue.test.js

作用是调用vue，创建一个简单的应用，现在给一个简单的模板

```js
new Vue({    
    el:".a",
    data(){        
        return {            
            name:1
        }
    },    
    methods:{
        getName(){            
            this.name="修改----我是父组件a"
        },
    },
})
```



现在，你可以尽情去 vue 里面去打断点啦，额..... 虽然现在你还不知道打什么断点，不过不用怕！后面每次讲一块内容，你就可以去自己尝试啦 



![img](https://ws1.sinaimg.cn/large/006tNc79gy1fznuxhzgk8j301k01gmwx.jpg)

