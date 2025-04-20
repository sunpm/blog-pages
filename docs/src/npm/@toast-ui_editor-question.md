# @toast-ui_editor疑难杂症

> 发现全网都很难找到`@toast-ui/editor`的中文文档，而且网上的教程都是v1.x或v2.x的，现在最新使用v3.x的api差别还是有点，所以我就记录下踩坑的过程

## 通用获取`Editor`实例

```typescript
this.editor = new Editor({
  // 元素ID
  el: document.getElementById('id'),
  previewStyle: 'vertical',
  minHeight: '500px',
  language: 'zh-CN',
  height: '700px',
  initialEditType: 'markdown',
  useCommandShortcut: true,
  usageStatistics: true,
  hideModeSwitch: false,
  ideModeSwitch: false,
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
})
```

**下文统一使用`this.editor`代表当前实例**

## 自定义图片上传逻辑

tui.editor支持三种图片上传方式：弹窗、拖拽、截屏粘贴。查看文档并测试可知，三种上传方式最终都会被**addImageBlobHook**监听，并处理为Base64格式的图片。

```javascript
this.editor.eventEmitter.removeEventHandler('addImageBlobHook') // 删除默认监听事件
// 添加自定义监听事件
this.editor.eventEmitter.listen('addImageBlobHook', (blob, callback) => {
  // 此处填写自己的上传逻辑，url为上传后的图片地址
  this.upload(blob, url => {
    callback(url)
  })
})
```
## 国际化

`@toast-ui/editor`默认是英文，就算在`language`字段设置为`'zh-CN'`也还是英文

后来发现是需要引入语言包才可以使用相应的语言

```javascript
import '@toast-ui/editor/dist/i18n/zh-cn'
```

翻看源码发现，语言还是挺多的
![11:58:24-89MyvS_image](https://media.sunpm.me/uPic/2022-08-19/11:58:24-89MyvS_image.png)
