Vue的核心是数据与视图的双向绑定，当我们修改数组时，Vue会检测到数据变化，所以用v-for渲染的视图也会立即更新。Vue包含了一组观察数组变异的方法，使用他们改变数组也会触发视图更新。

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

比如以下例子：

```html
<div id="app">
	<ul>
		<li v-for="book in books">{{ book.name }}</li>
	</ul>
</div>
```

JavaScript代码：

```js
var app = new Vue({
	el: '#app',
	data:{
		books:[
			{ name: '《Vue.js实战》' },
			{ name: '《JavaScript语言精粹》' },
			{ name: '《JavaScript高级程序设计》' }
		]
	}
});
```

然后，我再给数据books添加一项：

```js
app.books.push({
	name: '《css解密》'
});
```

使用上面的方法会改变原始数组，当然也有些方法不会改变原数组，例如：

- filter()
- concat()
- slice()

他们返回的是一个新数组，在使用这些非变异方法时，可以用新数组来替换原数组，以下例子，我们找出含有JavaScript关键词的数目，例如：

```html
<div id="app">
	<ul>
		<template v-for="book in books">
			<li>书名：{{ book.name }}</li>
			<li>作者：{{ book.author }}</li>
		</template>
 
	</ul>
</div>
<script>
	var app = new Vue({
		el: '#app',
		data:{
			books:[
				{
					name: '《Vue.js实战》',
					author: '梁灏'
				},
				{
					name: '《JavaScript语言精粹》',
					author: 'Douglas Crockford'
				},
				{
					name: '《JavaScript高级程序设计》',
					author: 'Nicholas C.Zakas'
				}
			]
		}
	});
 
	app.books = app.books.filter(function (item){
		return item.name.match(/JavaScript/);
	});
</script>
```

![Vue数组更新方法](http://www.mybj123.com/wp-content/uploads/2019/01/vueshuzu.png)

渲染的结果中，第一项《Vue.js实战》被过滤到了，只显示书名中含有JavaScript的选项。

Vue在检测到数组变化时，并不是直接重新渲染整个列表，而是最大化的复用DOM元素。替换的数组中，含有相同元素的项不会被重新渲染，因此可以大胆地用新数组来替换旧数组，不用担心新能问题。

需要注意的是，以下变动的数组中，Vue是不能检测到的，也不会触发视图更新：

- 通过索引直接设置项，比如app.books[3] = {…}。
- 修改数组长度，比如app.books.length = 1。

解决第一个问题可以用两种方法实现同样的效果，第一种是使用Vue内置的set方法：

```js
Vue.set(app.books, 3, {
	name: '《css解密》',
	author: '[希] Lea Verou'
});
```

如果是在webpack中使用组件化的方式，默认是没有导入Vue的，这时可以使用$set，例如：

```js
this.$set(app.books, 3, {
	name: '《css解密》',
	author: '[希] Lea Verou'
});
```

//这里的this指向的就是当前组件实例，即app。在非webpack模式下也可以用$set方法，例如app.$set(…)

另一种方法：

```js
app.books.splice(3, 1, {
	name: '《css解密》',
	author: '[希] Lea Verou'
});
```

第二个问题也可以直接用splice来解决：

```js
app.books.splice(1);
```

未经允许不得转载：[码云笔记](http://www.mybj123.com/) » [Vue数组更新方法](http://www.mybj123.com/2374.html)