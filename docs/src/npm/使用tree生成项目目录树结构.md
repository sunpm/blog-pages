# 使用tree生成项目目录树结构

### 基于node的treer

全局安装：`npm install -g treer`

使用示例：`treer -e ./result.txt -i node_modules`

> 遍历到result.txt文件，忽略node_modules
>
> **缺陷**:格式固定,参数顺序前后顺序不可随意调换，不能选择目录层级

npm详细使用文档：[www.npmjs.com/package/tre…](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Ftreer)

### 基于node的tree-node-cli （推荐）

全局安装：`npm install -g tree-node-cli`

使用示例：`tree -L 3 -I "node_modules" > tree.md`

> 遍历三层目录结构，忽略node_modules，输出到tree.md
>
> **缺点**:依赖node,得装tree-node-cli工具

npm详细使用文档：[www.npmjs.com/package/tre…](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Ftree-node-cli)

### 基于node的tree-cli

**注意**:如果你之前安装了 `tree-node-cli`,而现在又继续安装 `tree-cli`,现在安装的会覆盖之前安装的,避免命令的冲突,可以先卸载之前的 `tree-node-cli`,使用的命令是: `npm uninstall -g tree-node-cli`,反过来也是一样

全局安装：`npm install -g tree-cli`

使用示例：`tree -l 3 -o out.txt -d --ignore 'node_modules/'`

> 此时你可以把你整理好的readme文档更改提交到代码仓库当中了,然而当你发现把生成号的目录结构上传到github或者公司的gitlab项目上,你会发现,**生成的目录结构并没有如本地的一样,以树状图展示的,而是挤在一块的**
>
> 非常粗暴的解决办法就是:**把目录结构用反引号给包裹起来**（markdown语法）

npm详细使用文档：[www.npmjs.com/package/tre…](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Ftree-cli)


作者：叽歪小Q
链接：https://juejin.cn/post/6869586796435472397
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。