import{_ as s,c as a,o as n,V as p}from"./chunks/framework.a7f1c75a.js";const A=JSON.parse('{"title":"uni-app获取当前页参数","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/小程序/uniapp获取当前页参数.md","lastUpdated":1681627181000}'),l={name:"基础知识/小程序/uniapp获取当前页参数.md"},e=p(`<h1 id="uni-app获取当前页参数" tabindex="-1">uni-app获取当前页参数 <a class="header-anchor" href="#uni-app获取当前页参数" aria-label="Permalink to &quot;uni-app获取当前页参数&quot;">​</a></h1><p>正常vue页面中，在onLoad()获取，uni-app文档中有，不赘述</p><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">onLoad</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">option</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//option为object类型，会序列化上个页面传递的参数</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//打印出上个页面传递的参数。</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">option</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//打印出上个页面传递的参数。</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="getcurrentpages" tabindex="-1">getCurrentPages <a class="header-anchor" href="#getcurrentpages" aria-label="Permalink to &quot;getCurrentPages&quot;">​</a></h2><p><code>getCurrentPages()</code> 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。</p><p><strong>注意：</strong> <code>getCurrentPages()</code>仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。</p><p>每个页面实例的方法属性列表：</p><table><thead><tr><th>方法</th><th>描述</th><th>平台说明</th></tr></thead><tbody><tr><td>page.$getAppWebview()</td><td>获取当前页面的webview对象实例</td><td>App</td></tr><tr><td>page.route</td><td>获取当前页面的路由</td><td></td></tr></tbody></table><div class="language-jsx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/*获取当前路由*/</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> curPage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCurPage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在微信小程序或是app中，通过curPage.options；如果是H5，则需要curPage.$route.query（H5中的curPage.options为undefined，所以刚好就不需要条件编译了）</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> curParam </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> curPage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">options </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> curPage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$route</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCurPage</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pages</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getCurrentPages</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curPage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pages</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">pages</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curPage</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,9),o=[e];function t(r,c,i,y,F,D){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{A as __pageData,u as default};
