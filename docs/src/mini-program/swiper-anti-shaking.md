---
title: swiper组件@scroll方法防抖
description: 防抖的含义是：在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效。
date: 2020-02-01 18:00:30
tags:
  - 小程序
  - uniapp
  - 组件化
  - javascript
---

# swiper组件@scroll方法防抖

防抖的含义是：在连续的操作中，无论进行了多长时间，只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效。


解决的问题：高频动作带来的函数多次调用问题

- 监听键盘按键
- 输入框input事件
- 滚动条滚动
- 浏览器窗口大小变化



## 需求

在uniapp 的swiper组件中，如果想要修改`scrollTop`的值，比如回到顶部，这种情况下，就需要绑定`@scroll`事件，实时去修改`scrollTop`的值，比如下面的例子

```vue
  <scroll-view :scroll-top="scrollTop" @scroll="scroll">
    <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
    <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
    <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
  </scroll-view>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
			}
		},
		methods: {
			scroll: function(e) {
				this.scrollTop = e.detail.scrollTop
			},
			goTop: function() {
				this.scrollTop = 0
			}
		}
	}
</script>
```



这个场景下，`scroll`函数的执行频率是特别大的，会引起页面的抖动。



## 解决

我们有两个解决方法

### 1.防抖

首先定义一个防抖的方法

```js
function debounce(func, wait = 500) {
	// 进来先清除定时器
	if (timeout !== null) clearTimeout(timeout);
  // 设置一次性定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
  timeout = setTimeout(function() {
    typeof func === 'function' && func();
  }, wait);
}
```

上面方法的作用是：每一次调用这个函数，都会先清除定时器，然后再启动一个`wait`时间后执行的一次性定时器，如果在`wait`时间内调用方法，就会一直重复这个逻辑，除非`wait`时间内没有操作，才会执行`func`方法，这就实现了防抖的作用。



我们将例子代码改造一下，用上防抖看看

```vue
<scroll-view :scroll-top="scrollTop" @scroll="scroll">
    <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
    <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
    <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
  </scroll-view>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
			}
		},
		methods: {
			scroll: function(e) {
        // 使用bind方法设置this指向，并将参数传递过去
        debounce(this.updateScrollTop.bind(this, e))
			},
      updateScrollTop(e) {
        this.scrollTop = e.detail.scrollTop;
      },
			goTop: function() {
				this.scrollTop = 0
			}
		}
	}
</script>
```

这个时候使用`goTop`方法就可以回到顶部了



### 2.使用替身

我们可以在`@scroll`方法中，不修改`scrollTop`的值，来实现页面不抖动的需求



```vue
  <scroll-view :scroll-top="scrollTop" @scroll="scroll">
    <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
    <view id="demo2" class="scroll-view-item uni-bg-green">B</view>
    <view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
  </scroll-view>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
        // 声明替身
        old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			scroll: function(e) {
        // 这里就不修改scrollTop的值了
				// this.scrollTop = e.detail.scrollTop
        // 修改替身的值
        this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function() {
				// 将替身的值赋值给scrollTop
				this.scrollTop = this.old.scrollTop
        // 将scrollTop归零，实现回到顶部的需求
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			}
		}
	}
</script>
```

