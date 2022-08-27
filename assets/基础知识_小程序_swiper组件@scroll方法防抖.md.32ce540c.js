import{_ as s,c as n,o as a,d as l}from"./app.271c8f13.js";const u=JSON.parse('{"title":"swiper\u7EC4\u4EF6@scroll\u65B9\u6CD5\u9632\u6296","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9700\u6C42","slug":"\u9700\u6C42"},{"level":2,"title":"\u89E3\u51B3","slug":"\u89E3\u51B3"},{"level":3,"title":"1.\u9632\u6296","slug":"_1-\u9632\u6296"},{"level":3,"title":"2.\u4F7F\u7528\u66FF\u8EAB","slug":"_2-\u4F7F\u7528\u66FF\u8EAB"}],"relativePath":"\u57FA\u7840\u77E5\u8BC6/\u5C0F\u7A0B\u5E8F/swiper\u7EC4\u4EF6@scroll\u65B9\u6CD5\u9632\u6296.md","lastUpdated":1661591721000}'),p={name:"\u57FA\u7840\u77E5\u8BC6/\u5C0F\u7A0B\u5E8F/swiper\u7EC4\u4EF6@scroll\u65B9\u6CD5\u9632\u6296.md"},o=l(`<h1 id="swiper\u7EC4\u4EF6-scroll\u65B9\u6CD5\u9632\u6296" tabindex="-1">swiper\u7EC4\u4EF6@scroll\u65B9\u6CD5\u9632\u6296 <a class="header-anchor" href="#swiper\u7EC4\u4EF6-scroll\u65B9\u6CD5\u9632\u6296" aria-hidden="true">#</a></h1><p>\u9632\u6296\u7684\u542B\u4E49\u662F\uFF1A\u5728\u8FDE\u7EED\u7684\u64CD\u4F5C\u4E2D\uFF0C\u65E0\u8BBA\u8FDB\u884C\u4E86\u591A\u957F\u65F6\u95F4\uFF0C\u53EA\u6709\u67D0\u4E00\u6B21\u7684\u64CD\u4F5C\u540E\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u5185\u6CA1\u6709\u518D\u64CD\u4F5C\uFF0C\u8FD9\u4E00\u6B21\u624D\u88AB\u5224\u5B9A\u6709\u6548\u3002</p><p>\u89E3\u51B3\u7684\u95EE\u9898\uFF1A\u9AD8\u9891\u52A8\u4F5C\u5E26\u6765\u7684\u51FD\u6570\u591A\u6B21\u8C03\u7528\u95EE\u9898</p><ul><li>\u76D1\u542C\u952E\u76D8\u6309\u952E</li><li>\u8F93\u5165\u6846input\u4E8B\u4EF6</li><li>\u6EDA\u52A8\u6761\u6EDA\u52A8</li><li>\u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F\u53D8\u5316</li></ul><h2 id="\u9700\u6C42" tabindex="-1">\u9700\u6C42 <a class="header-anchor" href="#\u9700\u6C42" aria-hidden="true">#</a></h2><p>\u5728uniapp \u7684swiper\u7EC4\u4EF6\u4E2D\uFF0C\u5982\u679C\u60F3\u8981\u4FEE\u6539<code>scrollTop</code>\u7684\u503C\uFF0C\u6BD4\u5982\u56DE\u5230\u9876\u90E8\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5C31\u9700\u8981\u7ED1\u5B9A<code>@scroll</code>\u4E8B\u4EF6\uFF0C\u5B9E\u65F6\u53BB\u4FEE\u6539<code>scrollTop</code>\u7684\u503C\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">  &lt;scroll-view :scroll-top=&quot;scrollTop&quot; @scroll=&quot;scroll&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo1&quot; class=&quot;scroll-view-item uni-bg-red&quot;&gt;A&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo2&quot; class=&quot;scroll-view-item uni-bg-green&quot;&gt;B&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo3&quot; class=&quot;scroll-view-item uni-bg-blue&quot;&gt;C&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/scroll-view&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				scrollTop</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">scroll</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">goTop</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u8FD9\u4E2A\u573A\u666F\u4E0B\uFF0C<code>scroll</code>\u51FD\u6570\u7684\u6267\u884C\u9891\u7387\u662F\u7279\u522B\u5927\u7684\uFF0C\u4F1A\u5F15\u8D77\u9875\u9762\u7684\u6296\u52A8\u3002</p><h2 id="\u89E3\u51B3" tabindex="-1">\u89E3\u51B3 <a class="header-anchor" href="#\u89E3\u51B3" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u6709\u4E24\u4E2A\u89E3\u51B3\u65B9\u6CD5</p><h3 id="_1-\u9632\u6296" tabindex="-1">1.\u9632\u6296 <a class="header-anchor" href="#_1-\u9632\u6296" aria-hidden="true">#</a></h3><p>\u9996\u5148\u5B9A\u4E49\u4E00\u4E2A\u9632\u6296\u7684\u65B9\u6CD5</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;">// \u8FDB\u6765\u5148\u6E05\u9664\u5B9A\u65F6\u5668</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">timeout</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timeout</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8BBE\u7F6E\u4E00\u6B21\u6027\u5B9A\u65F6\u5668\uFF0C\u5F53\u6700\u540E\u4E00\u6B21\u64CD\u4F5C\u540E\uFF0Ctimeout\u4E0D\u4F1A\u518D\u88AB\u6E05\u9664\uFF0C\u6240\u4EE5\u5728\u5EF6\u65F6wait\u6BEB\u79D2\u540E\u6267\u884Cfunc\u56DE\u8C03\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">timeout</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">func</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">func</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0A\u9762\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\uFF1A\u6BCF\u4E00\u6B21\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u90FD\u4F1A\u5148\u6E05\u9664\u5B9A\u65F6\u5668\uFF0C\u7136\u540E\u518D\u542F\u52A8\u4E00\u4E2A<code>wait</code>\u65F6\u95F4\u540E\u6267\u884C\u7684\u4E00\u6B21\u6027\u5B9A\u65F6\u5668\uFF0C\u5982\u679C\u5728<code>wait</code>\u65F6\u95F4\u5185\u8C03\u7528\u65B9\u6CD5\uFF0C\u5C31\u4F1A\u4E00\u76F4\u91CD\u590D\u8FD9\u4E2A\u903B\u8F91\uFF0C\u9664\u975E<code>wait</code>\u65F6\u95F4\u5185\u6CA1\u6709\u64CD\u4F5C\uFF0C\u624D\u4F1A\u6267\u884C<code>func</code>\u65B9\u6CD5\uFF0C\u8FD9\u5C31\u5B9E\u73B0\u4E86\u9632\u6296\u7684\u4F5C\u7528\u3002</p><p>\u6211\u4EEC\u5C06\u4F8B\u5B50\u4EE3\u7801\u6539\u9020\u4E00\u4E0B\uFF0C\u7528\u4E0A\u9632\u6296\u770B\u770B</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;scroll-view :scroll-top=&quot;scrollTop&quot; @scroll=&quot;scroll&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo1&quot; class=&quot;scroll-view-item uni-bg-red&quot;&gt;A&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo2&quot; class=&quot;scroll-view-item uni-bg-green&quot;&gt;B&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo3&quot; class=&quot;scroll-view-item uni-bg-blue&quot;&gt;C&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/scroll-view&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				scrollTop</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">scroll</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u4F7F\u7528bind\u65B9\u6CD5\u8BBE\u7F6Ethis\u6307\u5411\uFF0C\u5E76\u5C06\u53C2\u6570\u4F20\u9012\u8FC7\u53BB</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">debounce</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">updateScrollTop</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">updateScrollTop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">goTop</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u4F7F\u7528<code>goTop</code>\u65B9\u6CD5\u5C31\u53EF\u4EE5\u56DE\u5230\u9876\u90E8\u4E86</p><h3 id="_2-\u4F7F\u7528\u66FF\u8EAB" tabindex="-1">2.\u4F7F\u7528\u66FF\u8EAB <a class="header-anchor" href="#_2-\u4F7F\u7528\u66FF\u8EAB" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u5728<code>@scroll</code>\u65B9\u6CD5\u4E2D\uFF0C\u4E0D\u4FEE\u6539<code>scrollTop</code>\u7684\u503C\uFF0C\u6765\u5B9E\u73B0\u9875\u9762\u4E0D\u6296\u52A8\u7684\u9700\u6C42</p><div class="language-vue line-numbers-mode"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">  &lt;scroll-view :scroll-top=&quot;scrollTop&quot; @scroll=&quot;scroll&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo1&quot; class=&quot;scroll-view-item uni-bg-red&quot;&gt;A&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo2&quot; class=&quot;scroll-view-item uni-bg-green&quot;&gt;B&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;view id=&quot;demo3&quot; class=&quot;scroll-view-item uni-bg-blue&quot;&gt;C&lt;/view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/scroll-view&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				scrollTop</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u58F0\u660E\u66FF\u8EAB</span></span>
<span class="line"><span style="color:#F07178;">        old</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					scrollTop</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">scroll</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8FD9\u91CC\u5C31\u4E0D\u4FEE\u6539scrollTop\u7684\u503C\u4E86</span></span>
<span class="line"><span style="color:#89DDFF;">				</span><span style="color:#676E95;">// this.scrollTop = e.detail.scrollTop</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u4FEE\u6539\u66FF\u8EAB\u7684\u503C</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">old</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#82AAFF;">goTop</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">				</span><span style="color:#676E95;">// \u5C06\u66FF\u8EAB\u7684\u503C\u8D4B\u503C\u7ED9scrollTop</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">old</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollTop</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u5C06scrollTop\u5F52\u96F6\uFF0C\u5B9E\u73B0\u56DE\u5230\u9876\u90E8\u7684\u9700\u6C42</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$nextTick</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">					</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">scrollTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,20),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};
