# [像烟雾一样的渐变](http://grace.hcoder.net/)

```css
@-webkit-keyframes gradient {
  50% {
    background-position: 100% 0
  }
}

@keyframes gradient {
  50% {
    background-position: 100% 0
  }
}


el{
  background: -webkit-linear-gradient(45deg,#5a3694 0,#13bdce 33%,#0094d9 66%,#6fc7b5 100%);
  background: linear-gradient(45deg,#5a3694 0,#13bdce 33%,#0094d9 66%,#6fc7b5 100%);
  background-size: 400%;
  background-position: 0 100%;
  -webkit-animation: gradient 7.5s ease-in-out infinite;
  animation: gradient 7.5s ease-in-out infinite;
}
```



[张鑫旭首页书籍广告的a标签字体颜色渐变，骚](https://www.zhangxinxu.com/)

```css
@supports (-webkit-transform: scale(0)) {
	.colorful {
		/*-webkit-mask-image: linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple);*/
		background-image: linear-gradient(to right, red, orange, yellow, green, yellow, orange, red, orange, yellow, green, yellow, orange, red);
	    -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
	    -webkit-background-size: 200% 100%;
	    animation: bgp 5s infinite linear;
	}
}
@-webkit-keyframes bgp {
    0%  { background-position: 0 0;}
    100% { background-position: -100% 0;}
}
```













