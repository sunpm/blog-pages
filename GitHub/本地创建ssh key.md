# 本地创建ssh key

# [SSH-keygen用法](https://www.cnblogs.com/yanglang/p/9563496.html)



很多朋友在用github管理项目的时候，都是直接使用https url克隆到本地，当然也有有些人使用 SSH url 克隆到本地。然而，为什么绝大多数人会使用https url克隆呢？

这是因为，使用https url克隆对初学者来说会比较方便，复制https url 然后到 git Bash 里面直接用clone命令克隆到本地就好了。而使用 SSH url 克隆却需要在克隆之前先配置和添加好 SSH key 。

因此，如果你想要使用 SSH url 克隆的话，你必须是这个项目的拥有者。否则你是无法添加 SSH key 的。

 

## https 和 SSH 的区别：

1、前者可以随意克隆github上的项目，而不管是谁的；而后者则是你必须是你要克隆的项目的拥有者或管理员，且需要先添加 SSH key ，否则无法克隆。

2、https url 在push的时候是需要验证用户名和密码的；而 SSH 在push的时候，是不需要输入用户名的，如果配置SSH key的时候设置了密码，则需要输入密码的，否则直接是不需要输入密码的。

## 在 github 上添加 SSH key 的步骤：

#### 1、首先需要检查你电脑是否已经有 SSH key 

运行 git Bash 客户端，输入如下代码：

```bash
$ cd ~/.ssh
$ ls
```

这两个命令就是检查是否已经存在 id_rsa.pub 或 id_dsa.pub 文件，如果文件已经存在，那么你可以跳过步骤2，直接进入步骤3。

 

#### 2、创建一个 SSH key 

```bash
$ ssh-keygen -t rsa -C "your_email@example.com"
```

代码参数含义：

-t 指定密钥类型，默认是 rsa ，可以省略。
-C 设置注释文字，比如邮箱。
-f 指定密钥文件存储文件名。

以上代码省略了 -f 参数，因此，运行上面那条命令后会让你输入一个文件名，用于保存刚才生成的 SSH key 代码，如：

```bash
Generating public/private rsa key pair.
# Enter file in which to save the key (/c/Users/you/.ssh/id_rsa): [Press enter]
```

当然，你也可以不输入文件名，使用默认文件名（推荐），那么就会生成 id_rsa 和 id_rsa.pub 两个秘钥文件。

 

接着又会提示你输入两次密码（该密码是你push文件的时候要输入的密码，而不是github管理者的密码），

当然，你也可以不输入密码，直接按回车。那么push的时候就不需要输入密码，直接提交到github上了，如：

```bash
Enter passphrase (empty for no passphrase): 
# Enter same passphrase again:
```

接下来，就会显示如下代码提示，如：

```bash
Your identification has been saved in /c/Users/you/.ssh/id_rsa.
# Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
# The key fingerprint is:
# 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com
```

当你看到上面这段代码的收，那就说明，你的 SSH key 已经创建成功，你只需要添加到github的SSH key上就可以了。

 

#### 3、添加你的 SSH key 到 github上面去

a、首先你需要拷贝 id_rsa.pub 文件的内容，你可以用编辑器打开文件复制，也可以用git命令复制该文件的内容，如：

```bash
$ clip < ~/.ssh/id_rsa.pub
```

b、登录你的github账号，从又上角的设置（ [Account Settings](https://github.com/settings) ）进入，然后点击菜单栏的 SSH key 进入页面添加 SSH key。

c、点击 Add SSH key 按钮添加一个 SSH key 。把你复制的 SSH key 代码粘贴到 key 所对应的输入框中，记得 SSH key 代码的前后不要留有空格或者回车。当然，上面的 Title 所对应的输入框你也可以输入一个该 SSH key 显示在 github 上的一个别名。默认的会使用你的邮件名称。

 

### 4、测试一下该SSH key

在git Bash 中输入以下代码

```bash
$ ssh -T git@github.com
```

当你输入以上代码时，会有一段警告代码，如：

```bash
The authenticity of host 'github.com (207.97.227.239)' can't be established.
# RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
# Are you sure you want to continue connecting (yes/no)?
```

这是正常的，你输入 yes 回车既可。如果你创建 SSH key 的时候设置了密码，接下来就会提示你输入密码，如：

```bash
Enter passphrase for key '/c/Users/Administrator/.ssh/id_rsa':
```

当然如果你密码输错了，会再要求你输入，知道对了为止。

注意：输入密码时如果输错一个字就会不正确，使用删除键是无法更正的。

密码正确后你会看到下面这段话，如：

```bash
Hi username! You've successfully authenticated, but GitHub does not
# provide shell access.
```

如果用户名是正确的,你已经成功设置SSH密钥。如果你看到 “access denied” ，者表示拒绝访问，那么你就需要使用 https 去访问，而不是 SSH 。

 

名称 
ssh-keygen - 生成、管理和转换认证密钥 
语法 
ssh-keygen [-q] [-b bits] -t type [-N new_passphrase] [-C comment] [-f output_keyfile] 
ssh-keygen -p [-P old_passphrase] [-N new_passphrase] [-f keyfile] 
ssh-keygen -i [-f input_keyfile] 
ssh-keygen -e [-f input_keyfile] 
ssh-keygen -y [-f input_keyfile] 
ssh-keygen -c [-P passphrase] [-C comment] [-f keyfile] 
ssh-keygen -l [-f input_keyfile] 
ssh-keygen -B [-f input_keyfile] 
ssh-keygen -D reader 
ssh-keygen -F hostname [-f known_hosts_file] 
ssh-keygen -H [-f known_hosts_file] 
ssh-keygen -R hostname [-f known_hosts_file] 
ssh-keygen -U reader [-f input_keyfile] 
ssh-keygen -r hostname [-f input_keyfile] [-g] 
ssh-keygen -G output_file [-v] [-b bits] [-M memory] [-S start_point] 
ssh-keygen -T output_file -f input_file [-v] [-a num_trials] [-W generator] 
描述 
ssh-keygen 用于为 
ssh(1) 
生成、管理和转换认证密钥，包括 RSA 和 DSA 两种密钥。 
密钥类型可以用 -t 选项指定。如果没有指定则默认生成用于SSH-2的RSA密钥。 
ssh-keygen 还可以用来产生 Diffie-Hellman group exchange (DH-GEX) 中使用的素数模数。 
参见模数和生成小节。 
一般说来，如果用户希望使用RSA或DSA认证，那么至少应该运行一次这个程序， 
在 ~/.ssh/identity, ~/.ssh/id_dsa 或 ~/.ssh/id_rsa 文件中创建认证所需的密钥。 
另外，系统管理员还可以用它产生主机密钥。 
通常，这个程序产生一个密钥对，并要求指定一个文件存放私钥，同时将公钥存放在附加了”.pub”后缀的同名文件中。 
程序同时要求输入一个密语字符串(passphrase)，空表示没有密语(主机密钥的密语必须为空)。 
密语和口令(password)非常相似，但是密语可以是一句话，里面有单词、标点符号、数字、空格或任何你想要的字符。 
好的密语要30个以上的字符，难以猜出，由大小写字母、数字、非字母混合组成。密语可以用 -p 选项修改。 
丢失的密语不可恢复。如果丢失或忘记了密语，用户必须产生新的密钥，然后把相应的公钥分发到其他机器上去。 
RSA1的密钥文件中有一个”注释”字段，可以方便用户标识这个密钥，指出密钥的用途或其他有用的信息。 
创建密钥的时候，注释域初始化为”user@host”，以后可以用 -c 选项修改。 
密钥产生后，下面的命令描述了怎样处置和激活密钥。可用的选项有： 
-a trials 
在使用 -T 对 DH-GEX 候选素数进行安全筛选时需要执行的基本测试数量。 
-B 显示指定的公钥/私钥文件的 bubblebabble 摘要。 
-b bits 
指定密钥长度。对于RSA密钥，最小要求768位，默认是2048位。DSA密钥必须恰好是1024位(FIPS 186-2 标准的要求)。 
-C comment 
提供一个新注释 
-c 要求修改私钥和公钥文件中的注释。本选项只支持 RSA1 密钥。 
程序将提示输入私钥文件名、密语(如果存在)、新注释。 
-D reader 
下载存储在智能卡 reader 里的 RSA 公钥。 
-e 读取OpenSSH的私钥或公钥文件，并以 RFC 4716 SSH 公钥文件格式在 stdout 上显示出来。 
该选项能够为多种商业版本的 SSH 输出密钥。 
-F hostname 
在 known_hosts 文件中搜索指定的 hostname ，并列出所有的匹配项。 
这个选项主要用于查找散列过的主机名/ip地址，还可以和 -H 选项联用打印找到的公钥的散列值。 
-f filename 
指定密钥文件名。 
-G output_file 
为 DH-GEX 产生候选素数。这些素数必须在使用之前使用 -T 选项进行安全筛选。 
-g 在使用 -r 打印指纹资源记录的时候使用通用的 DNS 格式。 
-H 对 known_hosts 文件进行散列计算。这将把文件中的所有主机名/ip地址替换为相应的散列值。 
原来文件的内容将会添加一个”.old”后缀后保存。这些散列值只能被 ssh 和 sshd 使用。 
这个选项不会修改已经经过散列的主机名/ip地址，因此可以在部分公钥已经散列过的文件上安全使用。 
-i 读取未加密的SSH-2兼容的私钥/公钥文件，然后在 stdout 显示OpenSSH兼容的私钥/公钥。 
该选项主要用于从多种商业版本的SSH中导入密钥。 
-l 显示公钥文件的指纹数据。它也支持 RSA1 的私钥。 
对于RSA和DSA密钥，将会寻找对应的公钥文件，然后显示其指纹数据。 
-M memory 
指定在生成 DH-GEXS 候选素数的时候最大内存用量(MB)。 
-N new_passphrase 
提供一个新的密语。 
-P passphrase 
提供(旧)密语。 
-p 要求改变某私钥文件的密语而不重建私钥。程序将提示输入私钥文件名、原来的密语、以及两次输入新密语。 
-q 安静模式。用于在 /etc/rc 中创建新密钥的时候。 
-R hostname 
从 known_hosts 文件中删除所有属于 hostname 的密钥。 
这个选项主要用于删除经过散列的主机(参见 -H 选项)的密钥。 
-r hostname 
打印名为 hostname 的公钥文件的 SSHFP 指纹资源记录。 
-S start 
指定在生成 DH-GEX 候选模数时的起始点(16进制)。 
-T output_file 
测试 Diffie-Hellman group exchange 候选素数(由 -G 选项生成)的安全性。 
-t type 
指定要创建的密钥类型。可以使用：”rsa1”(SSH-1) “rsa”(SSH-2) “dsa”(SSH-2) 
-U reader 
把现存的RSA私钥上传到智能卡 reader 
-v 详细模式。ssh-keygen 将会输出处理过程的详细调试信息。常用于调试模数的产生过程。 
重复使用多个 -v 选项将会增加信息的详细程度(最大3次)。 
-W generator 
指定在为 DH-GEX 测试候选模数时想要使用的 generator 
-y 读取OpenSSH专有格式的公钥文件，并将OpenSSH公钥显示在 stdout 上。 
模数生成 
ssh-keygen 可以生成用于 Diffie-Hellman Group Exchange (DH-GEX) 协议的 groups 。 
生成过程分为两步： 
首先，使用一个快速且消耗内存较多的方法生成一些候选素数。然后，对这些素数进行适应性测试(消耗CPU较多)。 
可以使用 -G 选项生成候选素数，同时使用 -b 选项制定其位数。例如： 
\# ssh-keygen -G moduli-2048.candidates -b 2048 
默认将从指定位数范围内的一个随机点开始搜索素数，不过可以使用 -S 选项来指定这个随机点(16进制)。 
生成一组候选数之后，接下来就需要使用 -T 选项进行适应性测试。 
此时 ssh-keygen 将会从 stdin 读取候选素数(或者通过 -f 选项读取一个文件)，例如： 
\# ssh-keygen -T moduli-2048 -f moduli-2048.candidates 
每个候选素数默认都要通过 100 个基本测试(可以通过 -a 选项修改)。 
DH generator 的值会自动选择，但是你也可以通过 -W 选项强制指定。有效的值可以是： 2, 3, 5 
经过筛选之后的 DH groups 就可以存放到 /etc/ssh/moduli 里面了。 
很重要的一点是这个文件必须包括不同长度范围的模数，而且通信双方双方共享相同的模数。 
文件 
~/.ssh/identity 
该用户默认的 RSA1 身份认证私钥(SSH-1)。此文件的权限应当至少限制为”600”。 
生成密钥的时候可以指定采用密语来加密该私钥(3DES)。