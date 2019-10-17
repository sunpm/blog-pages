# webstorm自定义console.log补全

刚学代码的时候，用的DW感觉自动提示好酷啊，都省的记单词了。后来偶然看到了一款叫HBuilder的编辑器。发现这才叫快啊，甩DW几条街。for循环用fori就一下子打出来了。

再后来，想看看大家都用什么编辑器，都说厉害的都用webstorm。于是就下了个用，的确很酷。提示很方便，能看懂vue，这玩意才关键。

可是我很疑惑的好像没有for循环代码块啊，每次都是手敲。甚至看大牛视频的时候，他们打for循环好像也是手敲。甚至为了省事用for..in来遍历数组了。可能就是无法快捷输入吧，不过map，forEach也够用了。后来，总打console.log（）每次都是console打完再打log，很是麻烦啊。于是就想找个一次成型的方法。

后来查了，真有！竟然也有for循环的快捷键，原来不是没有，只是你没深究而已。

点击File或者Ctrl+Alt+S打开设置

![img](https://user-gold-cdn.xitu.io/2017/11/9/df7bbc5fe22080d74e107bbd3dbe6937?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

找到Editor–live Templates

![img](https://user-gold-cdn.xitu.io/2017/11/9/441f3b4ba0f1c994d55679dc8cc9d578?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

点击JavaScript，突然发现原来快捷输入都在这里！那个iter就是for循环的快捷输入，iter+Tab，就会生成for循环。

![img](https://user-gold-cdn.xitu.io/2017/11/9/777c7b904a772f127c03b669d8af283d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

点击右侧的加号，添加一个Live Templates。

![img](https://user-gold-cdn.xitu.io/2017/11/9/fa6a75d99e22d4c81c441618f8991ef7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

如图设置

![img](https://user-gold-cdn.xitu.io/2017/11/9/1b32295d7e617de527899e9b0732b142?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

这三个输入框，分别是简写，提示和补全。

在Abbreviation栏里协商你要简写的代码，

在Template栏里写上，你要补全的代码，

$PARAM$为光标停留的位置。如图填完之后。

点击最下面的蓝色的Define，选择JavaScript，才会好用。

![img](https://user-gold-cdn.xitu.io/2017/11/9/5c9105d290a521f66b065d1e0840d3ab?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

设置完毕点击ok，就可以在打代码的时候，输入con+Tab键，就能生成console.log

注意LiveTemplates还有一些有用的快捷输入。

iter是for递增循环

ritar是for递减循环

itar是es6的for..of循环

itin是for..in循环