# VUE点击遮罩层内功能区以外的地方，遮罩层关闭

```html
<div v-show="visible" @touchmove.stop.prevent @mousewheel.prevent class="login-mark" @click="closeMark($event)">
    <div class="login-box" ref="loginBox">
      
    </div>
  </div>
```

```js
data() {
    return {
      visible: false,
    }
  },
  methods: {
    closeMark(e) {
      if (!this.$refs.loginBox.contains(e.target)) {
        this.visible = false;
      }
    }
  }
```

```scss
.login-mark {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,.3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
}
```

