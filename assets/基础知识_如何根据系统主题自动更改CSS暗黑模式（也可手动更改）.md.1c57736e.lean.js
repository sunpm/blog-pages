import{_ as s,v as a,b as n,R as l}from"./chunks/framework.f9e03a9a.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/如何根据系统主题自动更改CSS暗黑模式（也可手动更改）.md","filePath":"基础知识/如何根据系统主题自动更改CSS暗黑模式（也可手动更改）.md","lastUpdated":1690941204000}'),e={name:"基础知识/如何根据系统主题自动更改CSS暗黑模式（也可手动更改）.md"},o=l(`<p>现在在很多的网站上面都可以看到主题的切换，这也不是什么复杂的东西。有一些网站的主题还可以根据系统去自动切换，例如：<a href="https://taro-docs.jd.com/taro/docs/README" target="_blank" rel="noreferrer">Taro</a>、<a href="https://www.lodashjs.com/" target="_blank" rel="noreferrer">Lodash 中文文档</a>、<a href="https://surmon.me/" target="_blank" rel="noreferrer">surmon.me</a><strong>、</strong><a href="https://macwk.com/" target="_blank" rel="noreferrer">MacWk</a>。。。</p><h2 id="媒体查询-prefers-color-scheme" tabindex="-1">媒体查询 prefers-color-scheme <a class="header-anchor" href="#媒体查询-prefers-color-scheme" aria-label="Permalink to &quot;媒体查询 prefers-color-scheme&quot;">​</a></h2><p><strong>prefers-color-scheme</strong> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank" rel="noreferrer">CSS</a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#media_features" target="_blank" rel="noreferrer">媒体特性</a>用于检测用户是否有将系统的主题色设置为亮色或者暗色。</p><p>该媒体查询常见的值有：</p><ul><li><strong><code>no-preference</code></strong>：表示用户未指定操作系统主题。其作为布尔值时以<code>false</code>输出</li><li><strong><code>light</code></strong>：表示用户的操作系统是浅色主题（<code>light</code>）</li><li><strong><code>dark</code></strong>：表示用户的操作系统是深色主题（<code>dark</code>）</li></ul><p>目前，若结果为 <code>no-preference</code>，无法通过此媒体特性获知用户的系统是否支持设置主题色，或者用户是否主动将其设置为无偏好。出于隐私保护等方面的考虑，用户或用户代理也可能在一些情况下在浏览器内部将其设置为 <code>no-preference</code>。</p><h2 id="默认样式" tabindex="-1">默认样式 <a class="header-anchor" href="#默认样式" aria-label="Permalink to &quot;默认样式&quot;">​</a></h2><p><strong>可以是light，也可以是dark，个人喜好即可。默认是light主题。</strong></p><p>先给根标签加一些变量，定制主题的颜色。这样后期修改可以更加的方便也简单。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    --background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">333</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    --link-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">b52</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><strong><code>:root</code></strong> 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，<strong><code>:root</code></strong> 表示 <code>&lt;html&gt;</code>元素，除了优先级更高之外，与 <code>html</code> 选择器相同。</p></blockquote><p>在默认的主题下面，你的样式可能长这样</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--background-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--text-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">var</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">--link-color</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这只是举例了两个，剩下的可以按照HTML结构，页面设计去编写CSS</p><h2 id="dark模式" tabindex="-1">dark模式 <a class="header-anchor" href="#dark模式" aria-label="Permalink to &quot;dark模式&quot;">​</a></h2><p>如果只有两个主题，需要根据系统主题去更换而改变，可以使用媒体查询。</p><p>如果设置多种主题，需要让用户手动去切换，可以使用修改class切换变量的值达到切换主题颜色的效果。</p><h3 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-label="Permalink to &quot;媒体查询&quot;">​</a></h3><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prefers-color-scheme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> dark</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        --background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">111416</span></span>
<span class="line"><span style="color:#A6ACCD;">        --text-color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        --link-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f96</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>深色模式自动响应，如果当前系统是dark模式，就使用里面的css，从而覆盖了默认的css变量</p><h3 id="class" tabindex="-1">class <a class="header-anchor" href="#class" aria-label="Permalink to &quot;class&quot;">​</a></h3><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">dark</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  --background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">111416</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --link-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f96</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>一般在最外层的容器添加<code>.dark</code>类名，它的后代元素使用的到对应的css变量，都会覆盖<code>:root</code>的值</p><h2 id="javascript更改主题" tabindex="-1">Javascript更改主题 <a class="header-anchor" href="#javascript更改主题" aria-label="Permalink to &quot;Javascript更改主题&quot;">​</a></h2><p>在进来页面的时候，可以先判断一下当前是否为dark主题</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">matchMedia</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(prefers-color-scheme: dark)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">matches)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//深色主题, 可以在这里给某个DOM添加dark的class的逻辑</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia" target="_blank" rel="noreferrer"><code>matchMedia</code> (opens new window)</a>方法返回一个<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList" target="_blank" rel="noreferrer"><code>MediaQueryList</code> (opens new window)</a>对象，该对象具有属性<code>matches</code>、<code>media</code>，具有方法<code>addListener</code>、<code>removeListener</code>。</p></blockquote><p><img src="https://upyun.fassr.com/image/picgo/image-20210607114219629.png" alt="image-20210607114219629"></p><p>系统是可以自动去切换主题，这个时候，我们就需要监听，然后切换</p><p><code>addListener</code>接收一个<code>MediaQueryList</code>对象作为参数。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> darkModeMediaQuery </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">matchMedia</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(prefers-color-scheme: dark)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">darkModeMediaQuery</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">darkModeOn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">matches</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Dark mode is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">darkModeOn </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">&#39;}</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">darkModeOn</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 深色模式</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>细节其实还有很多，单单修改字体颜色和背景颜色只是完成了大部分的工作。还有图片的亮度、切换的国度</p><p>、图标的处理等等。。。。</p><p>如果是多主题，还需要在监听系统主题事件的时候判断是否用户自己设置了主题。毕竟不能在用户设置了<strong>中国红</strong>主题的时候，突然又根据电脑系统主题变成深色模式。</p><p><strong>我相信，当用户访问了你的网站后，会发出惊艳的叫声。</strong></p>`,36),p=[o];function r(c,t,i,D,y,F){return a(),n("div",null,p)}const A=s(e,[["render",r]]);export{C as __pageData,A as default};
