# [使用码云和github分布更新](https://www.liaoxuefeng.com/wiki/896043488029600/1163625339727712#0)

使用GitHub时，国内的用户经常遇到的问题是访问速度太慢，有时候还会出现无法连接的情况（原因你懂的）。

如果我们希望体验Git飞一般的速度，可以使用国内的Git托管服务——[码云](https://gitee.com/)（[gitee.com](https://gitee.com/)）。

和GitHub相比，码云也提供免费的Git仓库。此外，还集成了代码质量检测、项目演示等功能。对于团队协作开发，码云还提供了项目管理、代码托管、文档管理的服务，5人以下小团队免费。

 码云的免费版本也提供私有库功能，只是有5人的成员上限。

使用码云和使用GitHub类似，我们在码云上注册账号并登录后，需要先上传自己的SSH公钥。选择右上角用户头像 -> 菜单“修改资料”，然后选择“SSH公钥”，填写一个便于识别的标题，然后把用户主目录下的`.ssh/id_rsa.pub`文件的内容粘贴进去：

![gitee-add-ssh-key](https://www.liaoxuefeng.com/files/attachments/1163452910422880/l)

点击“确定”即可完成并看到刚才添加的Key：

![gitee-key](https://www.liaoxuefeng.com/files/attachments/1163453163108928/l)

如果我们已经有了一个本地的git仓库（例如，一个名为learngit的本地库），如何把它关联到码云的远程库上呢？

首先，我们在码云上创建一个新的项目，选择右上角用户头像 -> 菜单“控制面板”，然后点击“创建项目”：

![gitee-new-repo](https://www.liaoxuefeng.com/files/attachments/1163453517527296/l)

项目名称最好与本地库保持一致：

然后，我们在本地库上使用命令`git remote add`把它和码云的远程库关联：

```bash
git remote add origin git@gitee.com:liaoxuefeng/learngit.git
```

之后，就可以正常地用`git push`和`git pull`推送了！

如果在使用命令`git remote add`时报错：

```bash
git remote add origin git@gitee.com:liaoxuefeng/learngit.git
fatal: remote origin already exists.
```

这说明本地库已经关联了一个名叫`origin`的远程库，此时，可以先用`git remote -v`查看远程库信息：

```bash
git remote -v
origin	git@github.com:michaelliao/learngit.git (fetch)
origin	git@github.com:michaelliao/learngit.git (push)
```

可以看到，本地库已经关联了`origin`的远程库，并且，该远程库指向GitHub。

我们可以删除已有的GitHub远程库：

```bash
git remote rm origin
```

再关联码云的远程库（注意路径中需要填写正确的用户名）：

```bash
git remote add origin git@gitee.com:liaoxuefeng/learngit.git
```

此时，我们再查看远程库信息：

```bash
git remote -v
origin	git@gitee.com:liaoxuefeng/learngit.git (fetch)
origin	git@gitee.com:liaoxuefeng/learngit.git (push)
```

现在可以看到，origin已经被关联到码云的远程库了。通过`git push`命令就可以把本地库推送到Gitee上。

有的小伙伴又要问了，一个本地库能不能既关联GitHub，又关联码云呢？

答案是肯定的，因为git本身是分布式版本控制系统，可以同步到另外一个远程库，当然也可以同步到另外两个远程库。

使用多个远程库时，我们要注意，git给远程库起的默认名称是`origin`，如果有多个远程库，我们需要用不同的名称来标识不同的远程库。

仍然以`learngit`本地库为例，我们先删除已关联的名为`origin`的远程库：

```bash
git remote rm origin
```

然后，先关联GitHub的远程库：

```bash
git remote add github git@github.com:michaelliao/learngit.git
```

注意，远程库的名称叫`github`，不叫`origin`了。

接着，再关联码云的远程库：

```bash
git remote add gitee git@gitee.com:liaoxuefeng/learngit.git
```

同样注意，远程库的名称叫`gitee`，不叫`origin`。

现在，我们用`git remote -v`查看远程库信息，可以看到两个远程库：

```bash
git remote -v
gitee	git@gitee.com:liaoxuefeng/learngit.git (fetch)
gitee	git@gitee.com:liaoxuefeng/learngit.git (push)
github	git@github.com:michaelliao/learngit.git (fetch)
github	git@github.com:michaelliao/learngit.git (push)
```

如果要推送到GitHub，使用命令：

```bash
git push github master
```

如果要推送到码云，使用命令：

```bash
git push gitee master
```

这样一来，我们的本地库就可以同时与多个远程库互相同步：

```ascii
┌─────────┐ ┌─────────┐
│ GitHub  │ │  Gitee  │
└─────────┘ └─────────┘
     ▲           ▲
     └─────┬─────┘
           │
    ┌─────────────┐
    │ Local Repo  │
    └─────────────┘
```



## 可能出现的错误

### [git 出现 fatal: refusing to merge unrelated histories 错误](https://www.centos.bz/2018/03/git-出现-fatal-refusing-to-merge-unrelated-histories-错误/)

git pull 失败 ,提示：`fatal: refusing to merge unrelated histories`

其实这个问题是因为 两个 根本不相干的 git 库， 一个是本地库， 一个是远端库， 然后本地要去推送到远端， 远端觉得这个本地库跟自己不相干， 所以告知无法合并

具体的方法， 一个种方法： 是 从远端库拉下来代码 ， 本地要加入的代码放到远端库下载到本地的库， 然后提交上去 ， 因为这样的话， 你基于的库就是远端的库， 这是一次[update](https://www.centos.bz/tag/update/)了

第二种方法：
使用这个强制的方法

```
git pull origin master --allow-unrelated-histories
```

后面加上 `--allow-unrelated-histories` ， 把两段不相干的 分支进行强行合并

后面再push就可以了 `git push gitlab master:init`

> **gitlab是别名**





## GitHub报错master->master（fetch first)的解决方法

- 问题的起因是 
  ![这里写图片描述](https://img-blog.csdn.net/20160513223141502)
- 出现这个原因是仓库中的代码和本地中的代码不一致，需要先将仓库里的代码pull下来 
  ![这里写图片描述](https://img-blog.csdn.net/20160513223018955)
- 然后在add 再commit 
  ![这里写图片描述](https://img-blog.csdn.net/20160513223211798)
- 接着再push即OK啦！ 
  ![这里写图片描述](https://img-blog.csdn.net/20160513222614875)
- 在此感谢以下大神 
  [参考](http://blog.csdn.net/gjswxhb/article/details/23221197) 
  [参考](http://www.crifan.com/git_github_git_push_origin_master_error_failed_to_push_some_refs_to/)

