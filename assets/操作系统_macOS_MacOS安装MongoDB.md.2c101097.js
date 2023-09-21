import{_ as s,v as n,b as a,R as e}from"./chunks/framework.f9e03a9a.js";const g=JSON.parse('{"title":"MacOS 安装 MongoDB","description":"","frontmatter":{},"headers":[],"relativePath":"操作系统/macOS/MacOS安装MongoDB.md","filePath":"操作系统/macOS/MacOS安装MongoDB.md","lastUpdated":1695268816000}'),l={name:"操作系统/macOS/MacOS安装MongoDB.md"},o=e(`<h1 id="macos-安装-mongodb" tabindex="-1">MacOS 安装 MongoDB <a class="header-anchor" href="#macos-安装-mongodb" aria-label="Permalink to &quot;MacOS 安装 MongoDB&quot;">​</a></h1><h4 id="系统要求" tabindex="-1">系统要求 <a class="header-anchor" href="#系统要求" aria-label="Permalink to &quot;系统要求&quot;">​</a></h4><p>MongoDB 4.4 社区版支持 macOS 10.13 或更高版本</p><h3 id="安装-homebrew" tabindex="-1">安装 Homebrew <a class="header-anchor" href="#安装-homebrew" aria-label="Permalink to &quot;安装 Homebrew&quot;">​</a></h3><p>Homebrew 是一个软件包管理器。它的作用就是将软件包安装到自己的目录中，然后将其文件符号链接到 /usr/local。更多信息，请自行进入官网查看</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://brew.sh/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在将下面代码复制进终端</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="安装社区版的-mongodb" tabindex="-1">安装社区版的 MongoDB <a class="header-anchor" href="#安装社区版的-mongodb" aria-label="Permalink to &quot;安装社区版的 MongoDB&quot;">​</a></h3><h4 id="下载-mongodb-和数据库工具" tabindex="-1">下载 MongoDB 和数据库工具 <a class="header-anchor" href="#下载-mongodb-和数据库工具" aria-label="Permalink to &quot;下载 MongoDB 和数据库工具&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">brew tap mongodb/brew</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://img2020.cnblogs.com/blog/1896874/202105/1896874-20210530121931276-548779979.png" target="_blank" rel="noreferrer"><img src="https://img2020.cnblogs.com/blog/1896874/202105/1896874-20210530121931276-548779979.png" alt="img"></a></p><h4 id="安装-mongodb" tabindex="-1">安装 MongoDB <a class="header-anchor" href="#安装-mongodb" aria-label="Permalink to &quot;安装 MongoDB&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongodb-community@4.4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">==&gt; Installing mongodb-community@4.4 from mongodb/brew</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Downloading https://fastdl.mongodb.org/tools/db/mongodb-database-tools-macos-x86_64-100.5.1.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">Already downloaded: /Users/pmun/Library/Caches/Homebrew/downloads/740538df19d67cf44c84c95b5054c6d80733db1c9a8ac0e40ce76d4fe834e1de--mongodb-database-tools-macos-x86_64-100.5.1.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Downloading https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-4.4.10.tgz</span></span>
<span class="line"><span style="color:#A6ACCD;">Already downloaded: /Users/pmun/Library/Caches/Homebrew/downloads/46a7d0bd6c2f7583590a5e4d6e505440b8e2b772bba54d0b1a14ecc99a388013--mongodb-macos-x86_64-4.4.10.tgz</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Installing dependencies for mongodb/brew/mongodb-community@4.4: mongodb-database-tools</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Installing mongodb/brew/mongodb-community@4.4 dependency: mongodb-database-tools</span></span>
<span class="line"><span style="color:#A6ACCD;">🍺  /usr/local/Cellar/mongodb-database-tools/100.5.1: 13 files, 115.7MB, built in 3 seconds</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Installing mongodb/brew/mongodb-community@4.4</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Caveats</span></span>
<span class="line"><span style="color:#A6ACCD;">mongodb-community@4.4 is keg-only, which means it was not symlinked into /usr/local,</span></span>
<span class="line"><span style="color:#A6ACCD;">because this is an alternate version of another formula.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">If you need to have mongodb-community@4.4 first in your PATH run:</span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &#39;export PATH=&quot;/usr/local/opt/mongodb-community@4.4/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To have launchd start mongodb/brew/mongodb-community@4.4 now and restart at login:</span></span>
<span class="line"><span style="color:#A6ACCD;">  brew services start mongodb/brew/mongodb-community@4.4</span></span>
<span class="line"><span style="color:#A6ACCD;">Or, if you don&#39;t want/need a background service you can just run:</span></span>
<span class="line"><span style="color:#A6ACCD;">  mongod --config /usr/local/etc/mongod.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Summary</span></span>
<span class="line"><span style="color:#A6ACCD;">🍺  /usr/local/Cellar/mongodb-community@4.4/4.4.10: 11 files, 156.8MB, built in 3 seconds</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; Caveats</span></span>
<span class="line"><span style="color:#A6ACCD;">==&gt; mongodb-community@4.4</span></span>
<span class="line"><span style="color:#A6ACCD;">mongodb-community@4.4 is keg-only, which means it was not symlinked into /usr/local,</span></span>
<span class="line"><span style="color:#A6ACCD;">because this is an alternate version of another formula.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">If you need to have mongodb-community@4.4 first in your PATH run:</span></span>
<span class="line"><span style="color:#A6ACCD;">  echo &#39;export PATH=&quot;/usr/local/opt/mongodb-community@4.4/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To have launchd start mongodb/brew/mongodb-community@4.4 now and restart at login:</span></span>
<span class="line"><span style="color:#A6ACCD;">  brew services start mongodb/brew/mongodb-community@4.4</span></span>
<span class="line"><span style="color:#A6ACCD;">Or, if you don&#39;t want/need a background service you can just run:</span></span>
<span class="line"><span style="color:#A6ACCD;">  mongod --config /usr/local/etc/mongod.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>最新5.0，先不做小白鼠</p><h4 id="添加-mongodb-到-path-中" tabindex="-1">添加 MongoDB 到 PATH 中 <a class="header-anchor" href="#添加-mongodb-到-path-中" aria-label="Permalink to &quot;添加 MongoDB 到 PATH 中&quot;">​</a></h4><p>打开.bash_profile文件</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">open</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bash_profile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加配置:<code>PATH=$PATH:/usr/local/Cellar/mongodb-community@4.4/4.4.10/bin</code>(注意这个路径就是mongodb安装包的路径，不要写错了)</p><p><img src="https://cdn.nlark.com/yuque/0/2021/png/322441/1640138656332-7fa0cb8e-e94b-43df-8855-3354e875bef0.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0" alt="image.png"></p><p>在~/.zshrc文件最后，增加一行：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bash_profile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://cdn.nlark.com/yuque/0/2021/png/322441/1640138695985-e7dd7be0-69f3-4e94-aafe-5d9c1b32ebf8.png?x-oss-process=image%2Fresize%2Cw_750%2Climit_0" alt="image.png"></p><h3 id="验证-mongodb-安装成功" tabindex="-1">验证 MongoDB 安装成功 <a class="header-anchor" href="#验证-mongodb-安装成功" aria-label="Permalink to &quot;验证 MongoDB 安装成功&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mongo --version</span></span>
<span class="line"><span style="color:#A6ACCD;">mongod --version </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 均显示</span></span>
<span class="line"><span style="color:#A6ACCD;">MongoDB shell version v4.4.10</span></span>
<span class="line"><span style="color:#A6ACCD;">Build Info: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;version&quot;: &quot;4.4.10&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;gitVersion&quot;: &quot;58971da1ef93435a9f62bf4708a81713def6e88c&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;modules&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;allocator&quot;: &quot;system&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;environment&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;distarch&quot;: &quot;x86_64&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;target_arch&quot;: &quot;x86_64&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>安装完毕后，我们需要配置一下mongoDB才能使其正常启动</p><blockquote><p>你们的系统是不是升级到Catalina以上了？ 这是因为Catalina及Big Sur的系统做了限制，不能直接操作 / 下的一级目录。Mongo 的日志/数据看上去使用到了 /data 目录，一般如果没有这个目录它会创建的。但系统做了限制就创建失败了，所以报这个错。 解决思路是把 /data 目录软链接到 ～/data （其他有权限的目录都行）目录，网上有教程。</p></blockquote><p>1、首先我们在根目录下创建data/db目录</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/data/db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、给 /data/db设置读写权限</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前所系统在的username</span></span>
<span class="line"><span style="color:#FFCB6B;">whoami</span></span>
<span class="line"><span style="color:#FFCB6B;">-&gt;username</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置权限</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">username</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/data/db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="启动mongodb" tabindex="-1">启动mongodb <a class="header-anchor" href="#启动mongodb" aria-label="Permalink to &quot;启动mongodb&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mongod</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>出现等待链接，则启动正常</p><p>如果启动报错，如下：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/8/16daa6d06faedcb3~tplv-t2oaga2asx-watermark.awebp" alt="img"></p><p>可能是dbpath错误，设置一下dbpath应该就可以了</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mongod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dbpath</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/data/db</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#设置dbpath后再启动</span></span>
<span class="line"><span style="color:#FFCB6B;">mongod</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果还出错，检查一下环境变量，如果报权限相关错误可以执行如下命令启动</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongod</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>mongod成功启动之后，再新开一个命令窗口执行如下命令就可以了</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mongo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="退出mongo" tabindex="-1">退出mongo <a class="header-anchor" href="#退出mongo" aria-label="Permalink to &quot;退出mongo&quot;">​</a></h3><p>在mongo的那个窗口</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#先停止mongod服务</span></span>
<span class="line"><span style="color:#FFCB6B;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">db.shutdownServer</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#然后退出mongo</span></span>
<span class="line"><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;">；</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,47),p=[o];function r(t,c,i,b,d,m){return n(),a("div",null,p)}const C=s(l,[["render",r]]);export{g as __pageData,C as default};
