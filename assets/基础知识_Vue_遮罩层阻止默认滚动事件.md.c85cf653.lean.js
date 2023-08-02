import{_ as s,v as e,b as a,R as t}from"./chunks/framework.f9e03a9a.js";const m=JSON.parse('{"title":"遮罩层阻止默认滚动事件","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/Vue/遮罩层阻止默认滚动事件.md","filePath":"基础知识/Vue/遮罩层阻止默认滚动事件.md","lastUpdated":1690941204000}'),n={name:"基础知识/Vue/遮罩层阻止默认滚动事件.md"},o=t('<h1 id="遮罩层阻止默认滚动事件" tabindex="-1">遮罩层阻止默认滚动事件 <a class="header-anchor" href="#遮罩层阻止默认滚动事件" aria-label="Permalink to &quot;遮罩层阻止默认滚动事件&quot;">​</a></h1><p>在写移动端页面的时候，弹出遮罩层后，我们仍然可以滚动页面。vue中提供@touchmove.prevent.stop，@mousewheel.prevent方法可以完美解决这个问题。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dialog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@touchmove.prevent.stop</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@mousewheel.prevent</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果不使用vue的话，可以给body添加overflow:hidden属性解决。</p>',4),l=[o];function p(r,c,i,d,_,u){return e(),a("div",null,l)}const D=s(n,[["render",p]]);export{m as __pageData,D as default};
