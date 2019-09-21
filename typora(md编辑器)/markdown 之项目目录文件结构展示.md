# markdown 之项目目录文件结构展示

一般来说，我们为项目写readme文档时，都会对整个目录的项目结构做个说明。

例如这样的：

![img](https://upload-images.jianshu.io/upload_images/6854447-bcd4feb4a49601e0.png?imageMogr2/auto-orient/strip|imageView2/2/w/450)

我们可以用mddir来生成项目目录结构：[mddir](https://vimsky.com/link.php?source=https%3A//www.npmjs.com/package/mddir)

### 使用命令

```bash
node mddir "../relative/path/"
```

### 例子

打开终端或命令提示符，并cd进入mddir /src文件夹。

使用说明：

```ruby
$ cd ~/Documents/demo-project
$ pwd
Users/username/Documents/demo-project
$ npm install mddir --save
$ cd node_modules/mddir/src
$ pwd
Users/username/Documents/node_modules/mddir/src
$ ls
mddir.js
$ node mddir "../../../"
// Exports 'directoryList.md' in mddir/src folder
```

如果没有指定路径，mddir将默认为mddir/src文件夹之上上的三个文件夹

(假设mddir安装在：project/node_modules/mddir/src中)。

生成的目录会忽略node_modules和.git文件夹。