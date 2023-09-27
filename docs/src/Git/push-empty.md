# [Git提交空文件夹的技巧](https://www.cnblogs.com/EasonJim/p/9152919.html)

这个只能说是技巧不能说是方法，原理是在每个空文件夹新建一个.gitignore文件，然后提交。

> 或者 **.gitkeep** (这是约定俗成的)

快捷命令：

```bash
find . -type d -empty -exec touch {}/.gitignore \;
```

在项目根目录运行。

参考：

<https://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository>
