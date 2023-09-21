import{_ as s,v as a,b as n,R as l}from"./chunks/framework.f9e03a9a.js";const d=JSON.parse('{"title":"MACOS安装mongoDB","description":"","frontmatter":{},"headers":[],"relativePath":"编程知识/mongoDB/MACOS安装mongoDB.md","filePath":"编程知识/mongoDB/MACOS安装mongoDB.md","lastUpdated":1695268816000}'),o={name:"编程知识/mongoDB/MACOS安装mongoDB.md"},p=l(`<h1 id="macos安装mongodb" tabindex="-1">MACOS安装mongoDB <a class="header-anchor" href="#macos安装mongodb" aria-label="Permalink to &quot;MACOS安装mongoDB&quot;">​</a></h1><p>使用<code>brew</code>安装</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongodb/brew</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 将mongodb添加到brew中</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongodb-community@5.0</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装成功" tabindex="-1">安装成功 <a class="header-anchor" href="#安装成功" aria-label="Permalink to &quot;安装成功&quot;">​</a></h2><p><img src="https://upic.fassr.com/uPic/2022-08-29/10:45:42-40XhzC_image-20220829104541813.png" alt="image-20220829104541813"></p><h2 id="添加环境变量" tabindex="-1">添加环境变量 <a class="header-anchor" href="#添加环境变量" aria-label="Permalink to &quot;添加环境变量&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">export PATH=&quot;/usr/local/opt/mongodb-community@5.0/bin:$PATH&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="启动服务" tabindex="-1">启动服务 <a class="header-anchor" href="#启动服务" aria-label="Permalink to &quot;启动服务&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongodb-community@5.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://upic.fassr.com/uPic/2022-08-29/11:50:28-XDoH75_image-20220829115027807.png" alt="image-20220829115027807"></p><h2 id="停止服务" tabindex="-1">停止服务 <a class="header-anchor" href="#停止服务" aria-label="Permalink to &quot;停止服务&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongodb-community@5.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://upic.fassr.com/uPic/2022-08-29/11:51:25-h73cgq_image-20220829115124999.png" alt="image-20220829115124999"></p><h2 id="系统登陆立即启动mongodb" tabindex="-1">系统登陆立即启动mongodb <a class="header-anchor" href="#系统登陆立即启动mongodb" aria-label="Permalink to &quot;系统登陆立即启动mongodb&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongodb/brew/mongodb-community@5.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="命令行连接mongodb" tabindex="-1">命令行连接mongodb <a class="header-anchor" href="#命令行连接mongodb" aria-label="Permalink to &quot;命令行连接mongodb&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mongo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://upic.fassr.com/uPic/2022-08-29/12:34:33-jUYvT7_image-20220829123433576.png" alt="image-20220829123433576"></p><h2 id="报错信息" tabindex="-1">报错信息 <a class="header-anchor" href="#报错信息" aria-label="Permalink to &quot;报错信息&quot;">​</a></h2><h3 id="_1" tabindex="-1">1 <a class="header-anchor" href="#_1" aria-label="Permalink to &quot;1&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Error:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">homebrew-core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shallow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone.</span></span>
<span class="line"><span style="color:#FFCB6B;">To</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">brew</span><span style="color:#C3E88D;"> update</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">first</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unshallow</span></span>
<span class="line"><span style="color:#FFCB6B;">This</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">command</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">may</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">take</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">few</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">minutes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">due</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">large</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repository.</span></span>
<span class="line"><span style="color:#FFCB6B;">This</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restriction</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">has</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">been</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">made</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GitHub</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s request because updating shallow</span></span>
<span class="line"><span style="color:#C3E88D;">clones is an extremely expensive operation due to the tree layout and traffic of</span></span>
<span class="line"><span style="color:#C3E88D;">Homebrew/homebrew-core and Homebrew/homebrew-cask. We don</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">do</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">this</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span></span>
<span class="line"><span style="color:#FFCB6B;">automatically</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">avoid</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repeatedly</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">performing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">an</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">expensive</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unshallow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">operation</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span></span>
<span class="line"><span style="color:#FFCB6B;">CI</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systems</span><span style="color:#A6ACCD;"> (which </span><span style="color:#C3E88D;">should</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">instead</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fixed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shallow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clones</span><span style="color:#A6ACCD;">). Sorry </span><span style="color:#89DDFF;font-style:italic;">for</span></span>
<span class="line"><span style="color:#FFCB6B;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">inconvenience!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="https://upic.fassr.com/uPic/2022-08-29/10:39:12-Ol3EI9_image-20220829103911383.png" alt="image-20220829103911383"></p><p>只需按上述提示执行相应命令即可：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unshallow</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2" tabindex="-1">2 <a class="header-anchor" href="#_2" aria-label="Permalink to &quot;2&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">connecting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mongodb://127.0.0.1:27017/?compressors=disabled</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">gssapiServiceName</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">mongodb</span></span>
<span class="line"><span style="color:#FFCB6B;">Error:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">couldn’t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0</span><span style="color:#C3E88D;">.0.1:27017,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connection</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SocketException:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Error</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connecting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">127.0</span><span style="color:#C3E88D;">.0.1:27017</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">::</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">caused</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">by</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">::</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Connection</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">refused</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span></span>
<span class="line"><span style="color:#FFCB6B;">connect@src/mongo/shell/mongo.js:374:17</span></span>
<span class="line"><span style="color:#89DDFF;">@(</span><span style="color:#FFCB6B;">connect</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">:2:6</span></span>
<span class="line"><span style="color:#FFCB6B;">exception:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connect</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span></span>
<span class="line"><span style="color:#FFCB6B;">exiting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="https://upic.fassr.com/uPic/2022-08-29/12:03:47-HJiTr9_image-20220829120347600.png" alt="image-20220829120347600"></p><p>在你的主目录中创建一个 data/db</p><ol><li>cd ～/</li><li>mkdir data</li><li>cd data</li><li>mkdir db</li><li>sudo mongod --dbpath ~/data/db</li></ol>`,29),e=[p];function r(t,c,C,i,y,D){return a(),n("div",null,e)}const m=s(o,[["render",r]]);export{d as __pageData,m as default};
