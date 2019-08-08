# better-scroll封装的scroll回到顶部

方法：
scrollTo(x, y, time, easing)
参数：
{Number} x 横轴坐标（单位 px）
{Number} y 纵轴坐标（单位 px）
{Number} time 滚动动画执行的时长（单位 ms）
{Object} easing 缓动函数，一般不建议修改，如果想修改，参考源码中的 ease.js 里的写法

例子：
this.scroll.scrollTo(0, 0, 500)
//this.scroll为实例化的BScroll对象
//scrollTo()为方法
//(0, 0, 500)以500毫秒的速度滚动到坐标为（0，0）的位置，也就是顶部。