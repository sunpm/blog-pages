有很多人遇到这个问题, 也有很多人就在那胡说.
先来说说这个问题是由于webstorm格式化有问题,与eslint无关.不应该使用eslint的方式去解决.
我是这样解决的.
webstorm 设置页面->Editor->Code Style
里面的JavaScript右上有一个set from , 我设置成了我想要的Standard风格,然后HTML里面Other选项卡里面有个Do not indent children of ,加一个script,然后保存格式化一下看看效果





在 `.eslintrc.js` 上右键，菜单底部有一个 "Apply ESLint Code Style Rule" 点它，之后自动格式化就会按照 eslint 的规则了

补充：该功能从 WebStorm 2017.3 版本开始才有





![å¾çæè¿°](https://segmentfault.com/img/bVbeK40?w=2060&h=1392)