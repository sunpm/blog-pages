# shadowsocks-添加PAC自定义规则

shadowsocks 默认使用的 [GFWList](https://github.com/gfwlist/gfwlist)规则。

shadowsocks 默认使用的是 adblock plus 的引擎，要想自己添加规则最好熟悉一下其规则，下面是shadowsocks 的 pac 规则。

中文版： [Adblock Plus 过滤规则](https://adblockplus.org/zh_CN/filters)

英文版： [Adblock Plus filters explained](https://adblockplus.org/en/filter-cheatsheet)

# 规则大概描述

1. 通配符支持，如 `*.example.com/*` 实际书写时可省略 * 如 `.example.com/` 意即 `*.example.com/*`
2. 正则表达式支持，以\开始和结束， 如 `\[\w]+:\/\/example.com\`
3. 例外规则 @@，如 `@@*.example.com/*` 满足@@后规则的地址不使用代理
4. 匹配地址开始和结尾 |，如 `|http://example.com、example.com|` 分别表示以 `http://example.com` 开始和以 `example.com` 结束的地址
5. || 标记，如 `||example.com` 则 `http://example.com` 、`https://example.com` 、`ftp://example.com` 等地址均满足条件，只用于匹配地址开头
6. 注释 ! 如 ! Comment
7. 分隔符^，表示除了字母、数字或者 _ - . % 之外的任何字符。如 `http://example.com^` ，`http://example.com/` 和`http://example.com:8000/` 均满足条件，而 `http://example.com.ar/` 不满足条件

# 如何使用自定义规则

如果 GFWList 的自带规则无法满足你的需求，那么你需要PAC自定义规则。你可以点击 shadowsocks 选择『编辑GFWList的用户规则』项，使用编辑器打开`user-rule.txt`文件，在文件中加入你的规则，格式如下：

```
! Put user rules line by line in this file.

! See https://adblockplus.org/en/filter-cheatsheet

||amazonaws.com

atom.io
```

如上面的注释说明，`user-rule.txt` 一行只能有一条代理规则，上面的示例中 `||amazonaws.com` 和 `artstation.com` 这种直接写的语法都是可以的，生效后被配置的域名及其子域名都会经过代理访问。

~~`user-rule.txt`中的规则并不能直接被shadowsocks使用，如要添加到`user-rule.txt`中的规则生效，你还要执行下面重要的一步：更新本地的`PAC`，更新后`user-rule.txt`中的自定义规则会添加到`PAC.txt`文件内。每次编辑完`user-rule.txt`后，均需执行`从GFWList更新本地PAC`，使本次规则也生效。~~
最新版本的Shadowsocks客户端，在保存`user-rule.txt`的时候将会自动完成更新到`pac.txt`。

# 其他

科学爬梯相关可见本站文章存档：[shadowsocks](https://sobaigu.com/tags/shadowsocks/)