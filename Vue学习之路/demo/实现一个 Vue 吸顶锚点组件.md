# [实现一个 Vue 吸顶锚点组件](https://zhuanlan.zhihu.com/p/59317112)

![实现一个 Vue 吸顶锚点组件](https://pic3.zhimg.com/50/v2-fc4d2449b8dd78b3757cd3764179bda2_hd.jpg)

## 前言

> 近期产品小哥哥给我提了一个新需求，在一个页面的滚动区中添加一组锚点定位按钮，点击按钮将对应的元素显示在页面的可视区中。当按钮组超出页面可视区的时候将其固定在滚动区域的头部，当滚动区滚动时，高亮距离滚动区顶部最近的元素所匹配的锚点按钮。

![img](https://pic1.zhimg.com/v2-bdcf73abeaaadbbc2f70e729b1c89542_b.jpg)

![img](https://pic3.zhimg.com/v2-c66c802a3b9b1f607b56eeff0b0ba553_b.jpg)

## 拆分功能点

现在我们已经明确需求了，接下来我们总结一下这个需求有哪些功能点：

1. 按钮组要有吸顶效果
2. 点击按钮要有锚点定位功能
3. 滚动内容区需要找到对应的按钮并高亮

## 吸顶组件

要做一个吸顶效果最简单的方式是将 css 的 position 属性设置为 sticky， 这样就实现粘性布局。

```scss
.sticky-container {
  position: sticky;
  top: 0px;
}
```

上面的示例仅仅用了两行 css 的代码就实现了粘性布局，但由于 IE 浏览器完全不支持粘性布局，而我的项目又需要支持一部分的 IE 浏览器，所以就需要手动去实现这样一个功能。

MDN 官方对粘性布局的解释是这样的，粘性布局元素默认是相对定位的，当粘性元素超出父元素的指定值（如 `top` 、`left` 等），例如上面的示例，当元素粘性元素改为固定定位。关于父级元素 MDN 描述的不是很精确，这里的父级元素指的是父级滚动元素，如果没有父级滚动元素则将 `body` 元素作为父级元素。

既然需要自己实现一个吸顶的效果，思考到其他页面可能也会使用的吸顶的功能，所以决定将其单独抽离成一个通用组件。首先我们知道粘性布局是对父级滚动元素定位，所以我们要先找到父级滚动元素，这个功能我们可以通过两种方式实现，一种是向上查找，一种是通过 props 传递一个唯一标识的 css 选择器。

我觉得其他项目可能也会遇到这个功能，所以我定义组件 尽量向着开源靠拢，所以我这里同时支持两种方案。首先我们要实现一个查找父级滚动元素的功能，如何判断一个元素是滚动元素呢？很简单判断其 `overflow` 是否是 `auto` 或者 `scroll`。

```js
// util.js 文件
// 判断一个元素是否是滚动元素
const scrollList = ['auto', 'scroll']

export function hasScrollElement(el, direction = 'vertical') {
  if (!el) return
  const style = window.getComputedStyle(el)
  if (direction === 'vertical') {
    return scrollList.includes(style.overflowY)
  } else if (direction === 'horizontal') {
    return scrollList.includes(style.overflowX)
  }
}

// 获取第一个滚动元素
export function getFirstScrollElement(el, direction = 'vertical') {
  if (!el) return
  if (hasScrollElement(el, direction)) {
    return el
  } else {
    return getFirstScrollElement(el && el.parentElement, direction)
  }
}
```

这里说下实现吸顶效果所需要的一些基础知识：

- fixed 定位是相对于浏览器的可视区进行定位，这意味着即使页面滚动，它还是会固定在相同的位置
- offsetTop 是一个只读的属性，它返回当前元素相对于距离它最近的父级定位元素顶部的距离。
- scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素值，`scrollTop` 表示这个元素达到父级滚动元素顶部的距离。

```html
<template>
  <div class="cpt-sticky" :class="fixedClass" :style="{ top: top + 'px', zIndex }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    top: Number,
    parent: String,
    zIndex: Number
  },

  data() {
    return {
      fixedClass: '',
      scrollElement: null
    }
  },

  mounted() {
    this.initScrollElement()
  },

  destroyed() {
    this.removeScrollEvent()
  },

  methods: {
    handleScroll() {
      const scrollOffsetTop = this.$el.offsetTop - this.top
      if (this.scrollElement.scrollTop >= scrollOffsetTop) {
        this.fixedClass = 'top-fixed'
      } else {
        this.fixedClass = ''
      }
    },

    initScrollElement() {
      const element = document.querySelector(this.parent)
      if (element) {
        this.removeScrollEvent()
        this.scrollElement = element
        this.scrollElement.addEventListener('scroll', this.handleScroll)
      }
    }，

    removeScrollEvent() {
      if (this.scrollElement) {
        this.scrollElement.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style lang="scss">
.cpt-sticky {
  .top-fixed {
    position: fixed;
    width: 100%;
    background: #fff;
  }
}
</style>
```

就像上面的示例代码一样，短短几十行就实现了一个吸顶组件，不过它实现了吸顶的功能，但是还有一些缺陷。

1. 在慢速滚动页面，吸顶组件在固定与非固定的时候有明显的卡顿现象。
2. 由于我的需求有一些是需要做锚点定位功能，但是直接用锚点定位会改变路由所以改为了滚动定位（后面会细说）。但是由于吸顶组件在 `fixed` 之后会脱离文档流，导致定位的元素会有一部分（吸顶组件高度 ）被卡在吸顶组件下方。就像下面这张图的效果，右边的锚点定位2区域的标题被隐藏了。

![img](https://pic2.zhimg.com/v2-55a6b357476271f4aa73119717010e74_b.jpg)

这些问题也很好解决，使用一个和吸顶组件相同大小的占位元素，当吸顶组件脱离文档流之后，占位元素插入吸顶组件原来的 DOM 位置中，然后顺便带上一些小优化。由于占位元素需要和组件高度一致，所以必须要保证 `slot` 插槽中的 DOM 元素已经被加载完成，另外放在 slot 元素中可能发生变更，所以我在吸顶状态变更之前获取其高度。

```html
<template>
  <div class="cpt-sticky">
    <div class="sticky-container" :class="fixedClass" :style="{ top: top + 'px', zIndex }">
      <slot></slot>
    </div>
    <div v-if="showPlaceholder" class="sticky-placeholder" :style="{ height: offsetHeight + 'px' }"></div>
  </div>
</template>

<script>
import { getFirstScrollElement } from 'util.js'

export default {
  props: {
    top: {
      type: Number,
      default: 0
    },
    zIndex: {
        type: Number,
      default: 0
      },
    parent: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isMounted: false,
      fixedClass: '',
      offsetHeight: 0,
      scrollElement: null,
      showPlaceholder: false
    }
  },

  mounted() {
    this.isMounted = true
    this.initScrollElement()
  },

  watch: {
    wrapper: {
      immediate: true,
      handler: 'getScrollElement'
    },

    fixedClass(v) {
      if (v && !this.offsetHeight) {
        this.offsetHeight = this.$el.offsetHeight
      }
      this.showPlaceholder = !!v
    }
  },

  destroyed() {
    this.removeScrollEvent()
  },

  methods: {
    handleScroll(e) {
      const scrollOffsetTop = this.$el.offsetTop - this.top
      if (this.scrollElement.scrollTop >= scrollOffsetTop) {
        this.fixedClass = 'top-fixed'
      } else {
        this.fixedClass = ''
      }
    },

    initScrollElement() {
      if (!this.isMounted) return
      const parent = this.parent
      let element = null
      if (parent) {
        element = document.querySelector(parent)
        if (element === this.scrollElement) return
      } else if (this.$el) {
        element = getFirstScrollElement(this.$el)
      }
      if (element) {
        this.removeScrollEvent()
        this.scrollElement = element
        this.scrollElement.addEventListener('scroll', this.handleScroll)
      }
    },

    removeScrollEvent() {
      if (this.scrollElement) {
        this.scrollElement.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
}
</script>

<style lang="scss">
.cpt-sticky {
  .top-fixed {
    position: fixed;
    width: 100%;
    background: #fff;
  }
}
</style>
```

## 锚点定位

网页中经常会有用到锚点定位的场景，例如百度知道的目录，我目前知道有三种方式可以实现这种功能。

1. 使用 a 标签定位
2. 使用 js 定位

## 使用 a 标签定位

先说说 a 标签定位，这是一种最常用的定位方式。它有两种实现方式，一种是通过 herf 属性链接的指定元素的 id。另一种是添加一个 a 标签，再将 href 属性链接到这个 a 标签的 name 属性。

```html
<a href="#view1">按钮1</a>
<a href="#view2">按钮1</a>
...
<div id="view1">视图1</div>
<div><a name="view2">视图2</a></div>
```

这种定位方式很简单，它支持任意标签定位。不过它也存在一些问题，例如如果滚动区内有固定或绝对定位，会出现遮罩问题，还有瞬间滚动到顶部，交互不是很好，当然这些都可以通过 css 解决。但最主要问题是，a 标签定位会改变路由的 hash，如果有相应的路由的话会进行路由跳转。

![img](https://pic4.zhimg.com/v2-f784fc10a9de45654ea99e6e3578917b_b.jpg)

![img](https://pic3.zhimg.com/v2-174c1c60eb75698054b64a5ac521cd3f_b.jpg)

## 通过 js 模拟锚点定位

通过 js 去操作元素的 `scrollTop` 等属性，使其滚动到父级滚动元素指定的位置，就能实现定位效果。这里简单提一下 `scrollIntoView()` 这个方法，根据 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) 的描述，`Element.scrollIntoView()` 方法让当前的元素滚动到浏览器窗口的可视区域内。`scrollIntoView()` 还支持动画的选项，通过 `behavior` 设置，不过遗憾的是它遇到固定定位也会出现遮盖的问题，所以最终选择手动去撸码，不过 `scrollIntoView()` 倒是很适合做回到顶部这种功能。

首先我们需要让按钮和滚动区内容元素建立对应关系，在按钮的值中放入对应的内容区元素的 css 选择器，根据点击按钮的值找到对应的元素。所以计算规则是这个元素距离滚动区的高度加上这个元素上边距的高度(我在内容区加了外边距，我希望显示它)，减去滚动区距离可视区的高度（我的页面没有定位，所以 offsetTop 对应可视区），再减去按钮组件的高度，就可以得出需要滚动的位置。

```html
<template>
  <div class="cpt-anchor">
    <el-radio-group
      v-model="selector"
      size="mini"
      @change="handleMenuChange">
      <el-radio-button
        v-for="menu in menus"
        :key="menu.value"
        :label="menu.value">
        {{ menu.label }}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
// 添加缓动函数
import { tween } from 'shifty'
// 类似 lodash.get 但处理了 null 类型
import { get as _get } from 'noshjs'
import { getFirstScrollElement } from 'util.js'

export default {
  props: {
    // 滚动区距离可视区顶部的高度
    top: {
      type: Number,
      default: 0
    },
    menus: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      selector: ''
    }
  },

  watch: {
       menus: {
      immediate: true,
      handler(list) {
        this.selector = _get(list, [0, 'value'], '')
      }
    }
  },

  methods: {
    handleMenuChange(selector) {
      const scrollElement = document.querySelector(select)
      const rootScrollElement = getFirstScrollElement(scrollElement)
      if (scrollElement && rootScrollElement) {
        const offsetTop = scrollElement.offsetTop + scrollElement.clientTop
        const offsetHeight = _get(this.$el, ['parentElement', 'offsetHeight'], 0)
        const top = offsetTop - this.top - offsetHeight

        // 做一个缓动处理
        tween({
          from: { x: rootScrollElement.scrollTop },
          to: { x: top },
          duration: 500,
          easing: 'easeOutQuint',
          step: ({ x }) => {
            rootScrollElement.scrollTop = x
          }
        }).then(({ x }) => {
          rootScrollElement.scrollTop = x
        })
      }
    }
  }
}
</script>
```

## 锚点与视图联动

接下来我们来看看最后一个功能，当用户滚动内容区时，高亮距离按钮组件最近的那个元素所对应的按钮。这个功能我可以看成是目录导航，当我们查看不同内容时高亮对应的目录。

这个功能如何实现呢，我们来分析一下，当查看不同内容时会滚动屏幕，所以我们要给按钮的父级滚动元素绑定 `scroll` 事件。判断当前滚动区距离按钮最近的元素，我们需要在这个元素上添加与按钮中的值对应的 css 选择器。当内容区发生滚动时根据按钮获取内容区中所有的元素，然后将滚动区元素的 `scrollTop` 减去按钮元素的高度，即得出按钮下方的滚动高度，然后再遍历这些元素头部和尾部是否包含了这个滚动高度，然后找到这个元素对应的按钮。

上面的结论已经可以完成，但存在一些问题，先说第一个问题导致按钮导航失效，只导航到下一个按钮边结束。这个问题不一定会所有人都遇到，之所以我会遇到这个问题，是因为我用了 `Element` 的 `Radio` 组件，要高亮的时候变更了 v-model 的值导致。而点击按钮时会触发滚动，就会和联动高亮的事件冲突了，所以用一个 `isScroll` 变量标记当前是否是锚点定位状态，定位状态不触发滚动操作。

```html
<template>
  <div class="cpt-anchor">
    <el-radio-group
      v-model="selector"
      size="mini"
      @change="handleMenuChange">
      <el-radio-button
        v-for="menu in menus"
        :key="menu.value"
        :label="menu.value">
        {{ menu.label }}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
import { tween } from 'shifty'
import { get as _get } from 'noshjs'
import { getFirstScrollElement } from 'util.js'

import TabMenus from 'components/tab-menus.vue'

export default {
  props: {
    top: {
      type: Number,
      default: 0
    },
    menus: {
      type: Array,
      default: []
    },
    parent: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      menu: '',
      isScroll: true,
      isMounted: false,
      scrollTop: 0,
      anchorChange: false,
      rootScrollElement: ''
    }
  },

  mounted() {
    this.isMounted = true
    this.getScrollElement()
  },

  watch: {
    wrapper: {
      immediate: true,
      handler: 'getScrollElement'
    },

    menus: {
      immediate: true,
      handler(list) {
        this.menu = _get(list, [0, 'prop'], '')
      }
    },

    scrollTop(v) {
      if (this.anchorChange) {
        // 切换按钮会滚动视图，$nextTick 之后按钮值改变了，但滚动可能还没有结束，所以需要打个标记。
        this.isScroll = true
      }
    }
  },

  methods: {
    handleMenuChange(select) {
      this.isScroll = false
      this.anchorChange = false
      // 滚动高度等于元素距离可视区头部高度减去元素自身高度与元素上边框高度以及滚动区距离可视区头部的高度。
      const scrollElement = document.querySelector(select)
      if (scrollElement && this.rootScrollElement) {
        const offsetTop = scrollElement.offsetTop + scrollElement.clientTop
        const offsetHeight = _get(
          this.$el,
          ['parentElement', 'offsetHeight'],
          0
        )
        const top = offsetTop - this.top - offsetHeight

        // 做一个缓动处理
        tween({
          from: { x: this.rootScrollElement.scrollTop },
          to: { x: top },
          duration: 500,
          easing: 'easeOutQuint',
          step: ({ x }) => {
            this.rootScrollElement.scrollTop = x
          }
        }).then(({ x }) => {
          this.rootScrollElement.scrollTop = x
        })

        this.$nextTick(() => {
          this.anchorChange = true
        })
      }
    },

    getScrollElement() {
      if (!this.isMounted) return
      // 如果没有传入 parent 默认取第一个父级滚动元素
      const parent = this.parent
      let element = null
      if (wrapper) {
        element = document.querySelector(wrapper)
        // mount 之后 rootScrollElement 可能已经存在了，如果和上次一样就不做任何操作。
        if (element === this.rootScrollElement) return
      } else if (this.$el) {
        element = getFirstScrollElement(this.$el.parentElement)
      }
      if (element) {
        this.removeScrollEvent()
        this.rootScrollElement = element
        this.rootScrollElement.addEventListener('scroll', this.handleScroll)
      }
    },

    removeScrollEvent() {
      if (this.rootScrollElement) {
        this.rootScrollElement.removeEventListener('scroll', this.handleScroll)
      }
    },

    handleScroll(event) {
      const scrollTop = this.rootScrollElement.scrollTop
      this.scrollTop = scrollTop
      if (!this.isScroll) return
      const { data, top } = this
      const offsetHeight = _get(this.$el, ['parentElement', 'offsetHeight'], 0)
      const scrollList = []
      data.forEach(item => {
        const element = document.querySelector(item.prop)
        if (element) {
          const top = element.offsetTop
          const rect = {
            top: top + element.clientTop - top - offsetHeight,
            bottom: top + element.offsetHeight - top - offsetHeight
          }
          scrollList.push(rect)
        }
      })
      // 遍历按钮元素的 top 和 bottom，查看当前滚动在那个元素的区间内。
      scrollList.some((it, index) => {
        if (index && scrollTop >= it.top && top < it.bottom) {
          const menu = _get(data, [index, 'prop'], '')
          if (menu) this.menu = menu
          return true
        } else {
          // 当小于最小高度时，就等于最小高度
          if (scrollTop >= 0 && scrollTop < it.bottom) {
            const menu = _get(data, [index, 'prop'], '')
            if (menu) this.menu = menu
            return true
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.cpt-anchor {
  padding-top: 4px;
  .cpt-tab-menus {
    margin: 0;
    .el-radio-button {
      margin-left: 10px;
      .el-radio-button__inner {
        border: none;
        border-radius: 5px 5px 0 0;
        border-bottom: 2px solid #e4e7ed;
        background-color: #f6f6f8;
        font-size: 16px;

        &:hover {
          border-bottom: 2px solid #409eff;
        }
      }

      &.is-active {
        .el-radio-button__inner {
          color: #fff;
          border: none;
          border-radius: 5px 5px 0 0;
          background-color: #409eff;
          border-bottom: 2px solid #409eff;
          box-shadow: none;
        }
      }
    }
  }
}
</style>
```

## 吸顶锚点组件

最后将上面两个组件合并到一起就是我们所需要的吸顶锚点组件了。

```html
<template>
  <div class="cpt-sticky-anchor">
    <sticky :top="top" :z-index="zIndex">
      <sticky-menu :top="top" :data="menus" :parent="parent"></sticky-menu>
    </sticky>
    // 滚动区内容存放位置
    <slot></slot>
  </div>
</template>

<script>
import Sticky from './sticky.vue'
import StickyMenu from './menu.vue'

export default {
  // 这里简写了，因为上面已经有了。
  props: {
    top,
    menus,
    parent,
    zIndex,
    offsetHeight
  },

  components: {
    Sticky,
    StickyMenu
  }
}
</script>
```

## 使用示例

```html
<template>
  <div class="page-demo">
    ... 其他内容
    <sticky-anchor menus="menus" parent=".page-demo">
      <ul>
        <li class="button-1">视图一</li>
         <li class="button-2">视图二</li>
      </ul>
       </sticky-anchor>
  </div>
</template>

<script>
import StickyAnchor from 'components/sticky-anchor.vue'

export default {
  data() {
    return {
      menus: [
        { label: '按钮一', value: '.button-1' },
        { label: '按钮二', value: '.button-2' }
      ]
    }
  },

  components: {
    StickyAnchor
  }
}
</script>
```

## 总结

到这里整个功能已经全部实现了，我们来总结一下。

- 吸顶效果用两种解决方案，如果浏览支持 sticky 布局，使用 css 更加方便。
- 使用 a 标签做锚点定位更加简单，但遇到定位布局需要特殊处理，但会改变路由 hash。
- 做锚点与滚动联动时需要注意按钮点击事件与滚动事件冲突。