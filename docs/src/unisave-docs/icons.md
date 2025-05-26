# 图标指南

本文系统梳理了图标在项目中的实现方式，主要涵盖 **UI库图标** 和 **UnoCSS Icons** 两种方案，帮助开发者快速选择并高效集成图标资源。

## UI库图标

若已使用UI框架且其内置图标库能满足需求，直接调用是最佳选择。以下是主流UI库的集成方案：

### UView-Plus Icons

**文档**：[Icon 图标](https://uview-plus.jiangruyi.com/components/icon.html)

#### 基础用法

```html
<up-icon name="photo"></up-icon>
```

#### 样式定制

通过`color`和`size`属性控制图标样式：

```html
<up-icon name="photo" color="#2979ff" size="28" />
```

#### 图片图标（特殊场景）

当需使用自定义图片时，`name`属性直接传入图片路径。注意：

- 路径需为完整URL或相对路径
- `size`定义图标宽度，`color`属性无效
- 推荐使用正方形PNG格式小图标

```html
<up-icon name="https://cdn.uviewui.com/uview/example/button.png" size="40" />
```

### NutUI-UNIAPP Icons

**文档**：[Icon 图标](https://nutui-uniapp.pages.dev/components/basic/icon.html)

#### 基础用法

```html
<template>
  <nut-icon name="dongdong" />
  <nut-icon name="JD" />
  <!-- 图片图标 -->
  <nut-icon
    name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
    size="40"
  />
</template>
```

#### 样式控制

```html
<template>
  <nut-icon name="dongdong" custom-color="#fa2c19" />
  <nut-icon name="JD" custom-color="#64b578" />
</template>
```

### Wot Design UNI Icons

**文档**：[Icon 图标](https://wot-design-uni.cn/component/icon.html)

#### 基础用法

```html
<wd-icon name="add-circle" />
```

#### 样式配置

```html
<wd-icon name="add-circle" color="#0083ff" size="20px" />
```

## UnoCSS Icons

通过 **Iconify** 生态实现图标按需加载，支持 **10万+** 图标，集成步骤如下：

### 安装图标集

> `unisave` 已经装好了 `carbon` 图标库，可以直接使用。

```bash
# 安装基础依赖（以carbon图标集为例）
npm install @iconify-json/carbon
```

### 使用图标

#### 代码示例

```html
<view class="i-carbon-sun dark:i-carbon-moon" />
```

- **语法规范**：类名格式为 `i-[库名]-[图标名]`
- **暗色模式**：通过`dark:`前缀实现图标自动切换

### 图标搜索与选择

访问 [Icones](https://icones.js.org/) 或 [Iconify](https://icon-sets.iconify.design/)：

1. 选择图标库（如`carbon`）
2. 复制图标名称（如`carbon-sun`）
3. 直接替换到类名中使用

### 开发辅助

- **VSCode插件**：安装 [antfu.iconify](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) 可实现图标实时预览
- **验证安装**：若图标未显示，检查是否正确安装对应图标集JSON包通过以上方案，开发者可根据项目需求选择最合适的图标实现方式，兼顾开发效率与资源管理。
