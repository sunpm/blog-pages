# CSS如何实现文字两端对齐

原文链接：[zhuanlan.zhihu.com](https://link.juejin.im/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F32354083)

最近在工作项目中接触到Web界面设计的问题，要实现文字两端对齐的效果。在网上搜索了一下，差不多都是互相转帖，用的都是类似的技巧：

```
text-align:justify;
text-justify:inter-ideograph;
```

但问题是，我怎么就看不到效果呢？无论是英文还是中文，在IE和chrome下都不起作用。后来，终于在StackOverflow上找到解决方法了。

```
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		<style type="text/css">
			.arter li {
				font-size: 14px;
				line-height: 24px;
				color: #4a4a4a;
			}
			
			.arter span {
				height: 24px;
				line-height: 24px;
				width: 65px;
				text-align: justify;
				display: inline-block;
				overflow: hidden;
				vertical-align: top;
			}
			
			.arter i {
				display: inline-block;
				width: 100%;
				height: 0;
			}
			
			
			
			
			.arter1 li {
				font-size: 14px;
				line-height: 24px;
				color: #4a4a4a;
			}
			
			
			
			.arter1 span {
				height: 24px;
				line-height: 24px;
				width: 65px;
				text-align: justify;
				display: inline-block;
				overflow: hidden;
				vertical-align: top;
			}
			.arter1 span:after {
				content: " ";
				display: inline-block;
				width: 100%;
				height: 0px;
			}
		</style>
	</head>

	<body>
		<ul class="arter">
			<li><span>作品名称<i></i></span>： 宝贝儿</li>
			<li><span>作品类型<i></i></span>： 油画</li>
			<li><span>艺术家<i></i></span>： 张玉瀛</li>
			<li><span>风格<i></i></span>： 超现实</li>
			<li><span>材质<i></i></span>： 布面油画</li>
			<li><span>题材<i></i></span>： 人物</li>
			<li><span>创作时间<i></i></span>： 2011</li>
			<li><span>所在位置<i></i></span>： 华东</li>
			<li><span>尺寸<i></i></span>： 78x78cm</li>
		</ul>
        <br /><br />
		<ul class="arter1">
			<li><span>作品名称</span>： 宝贝儿</li>
			<li><span>作品类型</span>： 油画</li>
			<li><span>艺术家</span>： 张玉瀛</li>
			<li><span>风格</span>： 超现实</li>
			<li><span>材质</span>： 布面油画</li>
			<li><span>题材</span>： 人物</li>
			<li><span>创作时间</span>： 2011</li>
			<li><span>所在位置</span>： 华东</li>
			<li><span>尺寸</span>： 78x78cm</li>
		</ul>
	</body>

</html>
```

样式：

![img](https://user-gold-cdn.xitu.io/2018/1/1/160b0ec627cb4ba6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

从效果图可以看到，除了要在块级元素加text-align:justify样式外，还需要在里面加一个空的span元素，并应用样式。另外，对于中文还必须用空格隔开汉字，否则也没有两端对齐的效果。英文每个单词都有空格隔开，所以没问题。

但是加入HTML元素又违反了结构表现分离的原则，我们可以改用after、before伪元素：

```
li:after {
    content: " ";
    display: inline-block;
    width: 100%;
}
```