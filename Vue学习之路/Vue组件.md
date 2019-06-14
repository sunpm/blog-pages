#### 简单的组件声明:

> 在模板里面只能有一个根标签

```javascript
Vue.component("greeting",{
	template:"<p>组件的内容</p>"
})/* 在html上面使用greeting标签即可使用这个组件内的内容渲染在页面上 */
```

#### 添加组件的属性:

```javascript
Vue.component("greeting",{
	template:"<p>{{name}}的内容</p>",
  data:function(){
    return {
      name:"组件1"
    }
  }
})/* 组件1的内容 */
```

#### 添加组件的方法:

```javascript
Vue.component("greeting",{
	template:`
		<p>
			{{name}}的内容
			<button @click="changeName>改名</button>
		</p>
	`,
  data:function(){
    return {
      name:"组件1"
    }
  },
  methods:{
    changeName: function(){
      this.name = '组件改名了'
    }
  }
})/* 组件改名了的内容 */
```

