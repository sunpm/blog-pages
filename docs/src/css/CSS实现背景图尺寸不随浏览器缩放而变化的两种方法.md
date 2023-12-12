# CSS实现背景图尺寸不随浏览器缩放而变化的两种方法

```css
body {
  margin: 0;
  padding: 0;
}

#con {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url("maskimg/star.jpg");
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;/* 兼容Webkit内核浏览器如Chrome和Safari */
  -o-background-size: cover;/* 兼容Opera */
  zoom: 1;
}
```

