# Window.sessionStorage

`sessionStorage` 属性允许你访问一个 session [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象。它与 [`localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 相似，不同之处在于 localStorage 里面存储的数据没有过期时间设置，而存储在 sessionStorage 里面的数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。**在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话，**这点和 session cookies 的运行方式不同。

应该注意，存储在sessionStorage或localStorage中的数据**特定于该页面的协议**。

## 语法[节](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage#语法)

```js
// 保存数据到 sessionStorage
sessionStorage.setItem('key', 'value');

// 从 sessionStorage 获取数据
let data = sessionStorage.getItem('key');

// 从 sessionStorage 删除保存的数据
sessionStorage.removeItem('key');

// 从 sessionStorage 删除所有保存的数据
sessionStorage.clear();
```

 

### 返回值[节](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage#返回值)

一个 [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象。

## 示例[节](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage#示例)

下面的代码访问当前域名的 session [`Storage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage) 对象，并使用 [`Storage.setItem()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem) 访问往里面添加一个数据条目。

```js
sessionStorage.setItem('myCat', 'Tom');
```

下面的示例会自动保存一个文本输入框的内容，如果浏览器因偶然因素被刷新了，文本输入框里面的内容会被恢复，因此写入的内容不会丢失。

```js
// 获取文本输入框
let field = document.getElementById("field");
 
// 检测是否存在 autosave 键值
// (这个会在页面偶然被刷新的情况下存在)
if (sessionStorage.getItem("autosave")) {
  // 恢复文本输入框的内容
  field.value = sessionStorage.getItem("autosave");
}
 
// 监听文本输入框的 change 事件
field.addEventListener("change", function() {
  // 保存结果到 sessionStorage 对象中
  sessionStorage.setItem("autosave", field.value);
});
```

**备注：**完整的使用示例可以查看[使用 Web Storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)一文。

<https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage>