```javascript
let mySwiper = new Swiper('.swiper-container', {
  loop: true, //循环播放
  autoplay: { //播放时间间隔
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
mySwiper.el.onmouseover = function() { //鼠标放上暂停轮播
  mySwiper.autoplay.stop();
}
mySwiper.el.onmouseleave = function() {
  mySwiper.autoplay.start();
}
```

