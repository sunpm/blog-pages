# linux 基本命令

1. 进入目录

```text
cd 目录名
```

2. 显示当前路径

```text
pwd
```

3. 显示路径下的文件

```text
ls
ls -a  显示隐藏文件。隐藏文件以 . 开头命名
```

4. 查看创建文本

```text
touch abc.txt 查看abc.txt 如果不存在则自动创建
```

5. 创建文件夹

```text
mkdir 文件名 			 		当前目录创建一个文件夹
mkdir -p name1/name2  			当期目录递归创建name1/name2文件
如 提示 mkdir: xxx: Permission denied
则需要admin账号  sudo -i 输入密码 即可
```

6. 重命名操作

```text
mv test test1						把test文件的名字修改为test1
mv test1 /home/wechat/  			将test1文件 移动到/home/wechat 目录下
```

7. 删除操作

```text
rm file 						删除file文件(存在子文件时不可删除)
rm -r /file				 	    删除file文件下的所有目录文件
rm -rf ./*  					删库跑路专用命令
```

8. 复制

```text
cp file /home  				    复制file命令至home目录下
cp -r test /home/wechat  		复制test文件夹和其所有子文件 至 /home/wechat目录下
cp -r test /home/wechat/test2  	复制test文件夹和其所有子文件 至 /home/wechat目录下并重命名为test2
```

9. 压缩、解压

```text
解压tar
tar xvf test.tar
压缩tar
tar cvf test1.tar name   		将name文件夹压缩为test1.tar

解压tar.gz
tar zxvf test.tar.gz
压缩
tar zxvf test.tar.gz name
```

## 查找 && 日志

1. cat、more、less命令

```text
cat test.log  				查看test.log 的文件内容
cat -n test.log 			查看test.log的文件内容并显示行号

more、less和cat作用基本相同，只不过more可以按页码来查看。 都是按q退出查看
使用命令时，空格键翻页(显示下一屏内容)
回车：显示下一行内容
```

2. find命令

```text
.代表当前目录
find . -name '*.txt'  		查找当前目录及其子目录下扩展名为txt的文件
find . -mtime -2 			列出两天内修改过的文件
find . -atime -3 			列出三天内被存取的文件
find . -mmin +30 			半个小时内被修改过的文件
find . -amin +40  			四十分钟内被存取过的文件
find . -size +1M  			查找当前目录超过1M的文件
find .  -size -1M  		    查找当前目录小于1M的文件
find .  -size   +512k  	    超过512k的文件
find . -empty  			    查找当前目录为空的文件或者文件夹
```

3. whereis命令

```text
whereis name/  搜索name文件的路径
```

4. grep命令

```text
ps -ef|grep nginx  			    查看nginx的进程
ps -ef|grep nginx -c			查看nginx的进程个数
cat test.log | grep ^a  		查找test.log 中以o开头的内容
cat test.log | grep $k  		查找test.log中以K结尾的内容
cat test.log | grep 'bd4f63cc918611e8a14f7c04d0d7fdcc' --color     在test.log中搜索bd4f63cc918611e8a14f7c04d0d7fdcc并高亮
等同于 grep 'bd4f63cc918611e8a14f7c04d0d7fdcc' test.log --color

grep -n 'abc' test.log  		搜索结果显示行数
grep 'abc' test1.log test2.log  	从多个文件中查找abc
```

5. tail命令

```text
tail -f  xxx.log   查看xxx.log 默认显示最后10行
tail -f 100 xx.log /tail -100f xx.log  查看100行
```

6. vim命令

```text
vim
vim file 查看文本
vim file1 file2 ... 查看多个文本
正常模式/vim模式 通过ESC进行切换
vim模式下
i：在当前位置插入
dd： 删除光标所在行
D:删除光标所在行
2dd: 删除光标之后的2行
G：切换光标至末尾
w! 强制写入
wq 保存并退出
q！ 强制退出 不保存
/abc  在文本中查找abc
set nu 显示文本行数
移动光标 k(上)、j(下)、h(左)、l(右)
yy 复制光标所在行
p粘贴复制的
o:另起一行  
```

## 其他常用操作

1. 查看用户信息

```text
w
who
```

2. 修改文件权限

```text
chmod 777 file1 		每个人都可以对file文件进行读写和执行的权限
chmod 666 file1 		每个人都可以对file文件进行读写操作
```

3. 系统级别

```text
top 实时显示系统资源使用情况
dh -h 查看当前那磁盘使用情况
du -sh /usr 计算usr文件大小

netstat –a 列出 tcp, udp 和 unix 协议下所有套接字的所有连接

kill 端口号 终止该端口
kill -9 端口 立即强制终止端口
rz lz 上传 和下载文件
```
