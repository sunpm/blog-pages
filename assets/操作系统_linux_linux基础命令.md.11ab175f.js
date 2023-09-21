import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.a9d1f0e8.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"操作系统/linux/linux基础命令.md","filePath":"操作系统/linux/linux基础命令.md","lastUpdated":1695268643000}'),l={name:"操作系统/linux/linux基础命令.md"},p=e(`<ol><li>进入目录</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cd 目录名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cd 目录名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>显示当前路径</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pwd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pwd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>显示路径下的文件</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ls</span></span>
<span class="line"><span style="color:#e1e4e8;">ls -a  显示隐藏文件。隐藏文件以 . 开头命名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ls</span></span>
<span class="line"><span style="color:#24292e;">ls -a  显示隐藏文件。隐藏文件以 . 开头命名</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>查看创建文本</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">touch abc.txt 查看abc.txt 如果不存在则自动创建</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">touch abc.txt 查看abc.txt 如果不存在则自动创建</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>创建文件夹</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mkdir 文件名 			 		当前目录创建一个文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir -p name1/name2  			当期目录递归创建name1/name2文件</span></span>
<span class="line"><span style="color:#e1e4e8;">如 提示 mkdir: xxx: Permission denied</span></span>
<span class="line"><span style="color:#e1e4e8;">则需要admin账号  sudo -i 输入密码 即可</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mkdir 文件名 			 		当前目录创建一个文件夹</span></span>
<span class="line"><span style="color:#24292e;">mkdir -p name1/name2  			当期目录递归创建name1/name2文件</span></span>
<span class="line"><span style="color:#24292e;">如 提示 mkdir: xxx: Permission denied</span></span>
<span class="line"><span style="color:#24292e;">则需要admin账号  sudo -i 输入密码 即可</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="6"><li>重命名操作</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mv test test1						把test文件的名字修改为test1</span></span>
<span class="line"><span style="color:#e1e4e8;">mv test1 /home/wechat/  			将test1文件 移动到/home/wechat 目录下</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mv test test1						把test文件的名字修改为test1</span></span>
<span class="line"><span style="color:#24292e;">mv test1 /home/wechat/  			将test1文件 移动到/home/wechat 目录下</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="7"><li>删除操作</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">rm file 						删除file文件(存在子文件时不可删除)</span></span>
<span class="line"><span style="color:#e1e4e8;">rm -r /file				 	    删除file文件下的所有目录文件</span></span>
<span class="line"><span style="color:#e1e4e8;">rm -rf ./*  					删库跑路专用命令</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">rm file 						删除file文件(存在子文件时不可删除)</span></span>
<span class="line"><span style="color:#24292e;">rm -r /file				 	    删除file文件下的所有目录文件</span></span>
<span class="line"><span style="color:#24292e;">rm -rf ./*  					删库跑路专用命令</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="8"><li>复制</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cp file /home  				    复制file命令至home目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">cp -r test /home/wechat  		复制test文件夹和其所有子文件 至 /home/wechat目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">cp -r test /home/wechat/test2  	复制test文件夹和其所有子文件 至 /home/wechat目录下并重命名为test2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cp file /home  				    复制file命令至home目录下</span></span>
<span class="line"><span style="color:#24292e;">cp -r test /home/wechat  		复制test文件夹和其所有子文件 至 /home/wechat目录下</span></span>
<span class="line"><span style="color:#24292e;">cp -r test /home/wechat/test2  	复制test文件夹和其所有子文件 至 /home/wechat目录下并重命名为test2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="9"><li>压缩、解压</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">解压tar</span></span>
<span class="line"><span style="color:#e1e4e8;">tar xvf test.tar</span></span>
<span class="line"><span style="color:#e1e4e8;">压缩tar</span></span>
<span class="line"><span style="color:#e1e4e8;">tar cvf test1.tar name   		将name文件夹压缩为test1.tar</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">解压tar.gz</span></span>
<span class="line"><span style="color:#e1e4e8;">tar zxvf test.tar.gz</span></span>
<span class="line"><span style="color:#e1e4e8;">压缩</span></span>
<span class="line"><span style="color:#e1e4e8;">tar zxvf test.tar.gz name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">解压tar</span></span>
<span class="line"><span style="color:#24292e;">tar xvf test.tar</span></span>
<span class="line"><span style="color:#24292e;">压缩tar</span></span>
<span class="line"><span style="color:#24292e;">tar cvf test1.tar name   		将name文件夹压缩为test1.tar</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">解压tar.gz</span></span>
<span class="line"><span style="color:#24292e;">tar zxvf test.tar.gz</span></span>
<span class="line"><span style="color:#24292e;">压缩</span></span>
<span class="line"><span style="color:#24292e;">tar zxvf test.tar.gz name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="查找-日志" tabindex="-1">查找 &amp;&amp; 日志 <a class="header-anchor" href="#查找-日志" aria-label="Permalink to &quot;查找 &amp;&amp; 日志&quot;">​</a></h2><ol><li>cat、more、less命令</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cat test.log  				查看test.log 的文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;">cat -n test.log 			查看test.log的文件内容并显示行号</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">more、less和cat作用基本相同，只不过more可以按页码来查看。 都是按q退出查看</span></span>
<span class="line"><span style="color:#e1e4e8;">使用命令时，空格键翻页(显示下一屏内容)</span></span>
<span class="line"><span style="color:#e1e4e8;">回车：显示下一行内容</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cat test.log  				查看test.log 的文件内容</span></span>
<span class="line"><span style="color:#24292e;">cat -n test.log 			查看test.log的文件内容并显示行号</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">more、less和cat作用基本相同，只不过more可以按页码来查看。 都是按q退出查看</span></span>
<span class="line"><span style="color:#24292e;">使用命令时，空格键翻页(显示下一屏内容)</span></span>
<span class="line"><span style="color:#24292e;">回车：显示下一行内容</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2"><li>find命令</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.代表当前目录</span></span>
<span class="line"><span style="color:#e1e4e8;">find . -name &#39;*.txt&#39;  		查找当前目录及其子目录下扩展名为txt的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find . -mtime -2 			列出两天内修改过的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find . -atime -3 			列出三天内被存取的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find . -mmin +30 			半个小时内被修改过的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find . -amin +40  			四十分钟内被存取过的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find . -size +1M  			查找当前目录超过1M的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find .  -size -1M  		    查找当前目录小于1M的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find .  -size   +512k  	    超过512k的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find . -empty  			    查找当前目录为空的文件或者文件夹</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.代表当前目录</span></span>
<span class="line"><span style="color:#24292e;">find . -name &#39;*.txt&#39;  		查找当前目录及其子目录下扩展名为txt的文件</span></span>
<span class="line"><span style="color:#24292e;">find . -mtime -2 			列出两天内修改过的文件</span></span>
<span class="line"><span style="color:#24292e;">find . -atime -3 			列出三天内被存取的文件</span></span>
<span class="line"><span style="color:#24292e;">find . -mmin +30 			半个小时内被修改过的文件</span></span>
<span class="line"><span style="color:#24292e;">find . -amin +40  			四十分钟内被存取过的文件</span></span>
<span class="line"><span style="color:#24292e;">find . -size +1M  			查找当前目录超过1M的文件</span></span>
<span class="line"><span style="color:#24292e;">find .  -size -1M  		    查找当前目录小于1M的文件</span></span>
<span class="line"><span style="color:#24292e;">find .  -size   +512k  	    超过512k的文件</span></span>
<span class="line"><span style="color:#24292e;">find . -empty  			    查找当前目录为空的文件或者文件夹</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="3"><li>whereis命令</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">whereis name/  搜索name文件的路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">whereis name/  搜索name文件的路径</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>grep命令</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ps -ef|grep nginx  			    查看nginx的进程</span></span>
<span class="line"><span style="color:#e1e4e8;">ps -ef|grep nginx -c			查看nginx的进程个数</span></span>
<span class="line"><span style="color:#e1e4e8;">cat test.log | grep ^a  		查找test.log 中以o开头的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">cat test.log | grep $k  		查找test.log中以K结尾的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">cat test.log | grep &#39;bd4f63cc918611e8a14f7c04d0d7fdcc&#39; --color     在test.log中搜索bd4f63cc918611e8a14f7c04d0d7fdcc并高亮</span></span>
<span class="line"><span style="color:#e1e4e8;">等同于 grep &#39;bd4f63cc918611e8a14f7c04d0d7fdcc&#39; test.log --color</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">grep -n &#39;abc&#39; test.log  		搜索结果显示行数</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &#39;abc&#39; test1.log test2.log  	从多个文件中查找abc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ps -ef|grep nginx  			    查看nginx的进程</span></span>
<span class="line"><span style="color:#24292e;">ps -ef|grep nginx -c			查看nginx的进程个数</span></span>
<span class="line"><span style="color:#24292e;">cat test.log | grep ^a  		查找test.log 中以o开头的内容</span></span>
<span class="line"><span style="color:#24292e;">cat test.log | grep $k  		查找test.log中以K结尾的内容</span></span>
<span class="line"><span style="color:#24292e;">cat test.log | grep &#39;bd4f63cc918611e8a14f7c04d0d7fdcc&#39; --color     在test.log中搜索bd4f63cc918611e8a14f7c04d0d7fdcc并高亮</span></span>
<span class="line"><span style="color:#24292e;">等同于 grep &#39;bd4f63cc918611e8a14f7c04d0d7fdcc&#39; test.log --color</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">grep -n &#39;abc&#39; test.log  		搜索结果显示行数</span></span>
<span class="line"><span style="color:#24292e;">grep &#39;abc&#39; test1.log test2.log  	从多个文件中查找abc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="5"><li>tail命令</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">tail -f  xxx.log   查看xxx.log 默认显示最后10行</span></span>
<span class="line"><span style="color:#e1e4e8;">tail -f 100 xx.log /tail -100f xx.log  查看100行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tail -f  xxx.log   查看xxx.log 默认显示最后10行</span></span>
<span class="line"><span style="color:#24292e;">tail -f 100 xx.log /tail -100f xx.log  查看100行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="6"><li>vim命令</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vim</span></span>
<span class="line"><span style="color:#e1e4e8;">vim file 查看文本</span></span>
<span class="line"><span style="color:#e1e4e8;">vim file1 file2 ... 查看多个文本</span></span>
<span class="line"><span style="color:#e1e4e8;">正常模式/vim模式 通过ESC进行切换</span></span>
<span class="line"><span style="color:#e1e4e8;">vim模式下</span></span>
<span class="line"><span style="color:#e1e4e8;">i：在当前位置插入</span></span>
<span class="line"><span style="color:#e1e4e8;">dd： 删除光标所在行</span></span>
<span class="line"><span style="color:#e1e4e8;">D:删除光标所在行</span></span>
<span class="line"><span style="color:#e1e4e8;">2dd: 删除光标之后的2行</span></span>
<span class="line"><span style="color:#e1e4e8;">G：切换光标至末尾</span></span>
<span class="line"><span style="color:#e1e4e8;">w! 强制写入</span></span>
<span class="line"><span style="color:#e1e4e8;">wq 保存并退出</span></span>
<span class="line"><span style="color:#e1e4e8;">q！ 强制退出 不保存</span></span>
<span class="line"><span style="color:#e1e4e8;">/abc  在文本中查找abc</span></span>
<span class="line"><span style="color:#e1e4e8;">set nu 显示文本行数</span></span>
<span class="line"><span style="color:#e1e4e8;">移动光标 k(上)、j(下)、h(左)、l(右)</span></span>
<span class="line"><span style="color:#e1e4e8;">yy 复制光标所在行</span></span>
<span class="line"><span style="color:#e1e4e8;">p粘贴复制的</span></span>
<span class="line"><span style="color:#e1e4e8;">o:另起一行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vim</span></span>
<span class="line"><span style="color:#24292e;">vim file 查看文本</span></span>
<span class="line"><span style="color:#24292e;">vim file1 file2 ... 查看多个文本</span></span>
<span class="line"><span style="color:#24292e;">正常模式/vim模式 通过ESC进行切换</span></span>
<span class="line"><span style="color:#24292e;">vim模式下</span></span>
<span class="line"><span style="color:#24292e;">i：在当前位置插入</span></span>
<span class="line"><span style="color:#24292e;">dd： 删除光标所在行</span></span>
<span class="line"><span style="color:#24292e;">D:删除光标所在行</span></span>
<span class="line"><span style="color:#24292e;">2dd: 删除光标之后的2行</span></span>
<span class="line"><span style="color:#24292e;">G：切换光标至末尾</span></span>
<span class="line"><span style="color:#24292e;">w! 强制写入</span></span>
<span class="line"><span style="color:#24292e;">wq 保存并退出</span></span>
<span class="line"><span style="color:#24292e;">q！ 强制退出 不保存</span></span>
<span class="line"><span style="color:#24292e;">/abc  在文本中查找abc</span></span>
<span class="line"><span style="color:#24292e;">set nu 显示文本行数</span></span>
<span class="line"><span style="color:#24292e;">移动光标 k(上)、j(下)、h(左)、l(右)</span></span>
<span class="line"><span style="color:#24292e;">yy 复制光标所在行</span></span>
<span class="line"><span style="color:#24292e;">p粘贴复制的</span></span>
<span class="line"><span style="color:#24292e;">o:另起一行</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="其他常用操作" tabindex="-1">其他常用操作 <a class="header-anchor" href="#其他常用操作" aria-label="Permalink to &quot;其他常用操作&quot;">​</a></h2><ol><li>查看用户信息</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">w</span></span>
<span class="line"><span style="color:#e1e4e8;">who</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">w</span></span>
<span class="line"><span style="color:#24292e;">who</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>修改文件权限</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">chmod 777 file1 		每个人都可以对file文件进行读写和执行的权限</span></span>
<span class="line"><span style="color:#e1e4e8;">chmod 666 file1 		每个人都可以对file文件进行读写操作</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">chmod 777 file1 		每个人都可以对file文件进行读写和执行的权限</span></span>
<span class="line"><span style="color:#24292e;">chmod 666 file1 		每个人都可以对file文件进行读写操作</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>系统级别</li></ol><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">top 实时显示系统资源使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;">dh -h 查看当前那磁盘使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;">du -sh /usr 计算usr文件大小</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">netstat –a 列出 tcp, udp 和 unix 协议下所有套接字的所有连接</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">kill 端口号 终止该端口</span></span>
<span class="line"><span style="color:#e1e4e8;">kill -9 端口 立即强制终止端口</span></span>
<span class="line"><span style="color:#e1e4e8;">rz lz 上传 和下载文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">top 实时显示系统资源使用情况</span></span>
<span class="line"><span style="color:#24292e;">dh -h 查看当前那磁盘使用情况</span></span>
<span class="line"><span style="color:#24292e;">du -sh /usr 计算usr文件大小</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">netstat –a 列出 tcp, udp 和 unix 协议下所有套接字的所有连接</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">kill 端口号 终止该端口</span></span>
<span class="line"><span style="color:#24292e;">kill -9 端口 立即强制终止端口</span></span>
<span class="line"><span style="color:#24292e;">rz lz 上传 和下载文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,38),t=[p];function c(i,o,r,d,b,m){return n(),a("div",null,t)}const h=s(l,[["render",c]]);export{y as __pageData,h as default};
