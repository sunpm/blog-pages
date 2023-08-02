import{_ as e,v as a,b as r,R as t}from"./chunks/framework.f9e03a9a.js";const m=JSON.parse('{"title":"1. 图片加cdn并解决图床防盗链","description":"","frontmatter":{},"headers":[],"relativePath":"工程实践/图床/图片加cdn并解决图床防盗链.md","filePath":"工程实践/图床/图片加cdn并解决图床防盗链.md","lastUpdated":1690941204000}'),o={name:"工程实践/图床/图片加cdn并解决图床防盗链.md"},n=t('<h1 id="_1-图片加cdn并解决图床防盗链" tabindex="-1">1. 图片加cdn并解决图床防盗链 <a class="header-anchor" href="#_1-图片加cdn并解决图床防盗链" aria-label="Permalink to &quot;1. 图片加cdn并解决图床防盗链&quot;">​</a></h1><p>以前说到免费图床，就不得不提到新浪微博图床。</p><p>对于大多数个人博客维护者而言，免费的图床即使节省成本，也能够提升页面访问速度的最佳手段，而新浪微博图床则成了首选。</p><p>新浪微博图床具备全网 CDN 加速，支持 HTTPS，速度很不错，并且大厂不会随便删资源，妥妥的稳字当头。</p><p>隐约记得在 2019 年的时候，微博图床就添加了防盗链，然后其他的互联网大厂也陆陆续续添加了防盗链，就连 gitee 也在今年添加了防盗链。</p><p>微博图床直接打开图片地址可以访问，但是带上 <code>referer</code> 头就禁止访问 403 了。</p><p>在对比<strong>失效的图标</strong>和<strong>在浏览器可以正常访问的图标</strong>的<code>Request Headers</code>后，我发现，失效的图标请求头中多了个<code>referer</code>标头，是不是意味着，服务端校验了<code>referer</code>请求头，发现请求头不是来源于该本站，便拒绝访问呢？</p><p>后来发现了一个不但解决了防盗链问题，并且能添加全国200多个cdn节点的加速，而且还是开源产品。 详情请👉<a href="https://github.com/weserv/images" target="_blank" rel="noreferrer">github</a></p><h2 id="_1-1-使用" tabindex="-1">1.1. 使用 <a class="header-anchor" href="#_1-1-使用" aria-label="Permalink to &quot;1.1. 使用&quot;">​</a></h2><p>使用方法也很简单，比如我现在有一个已经无法使用的防盗链图片链接：<code>https://wx2.sinaimg.cn/orj360/415f82b9ly1h59oqn5sl1j20jg0jawn9.jpg</code></p><p>只需要把在图片链接前面加上<code>//images.weserv.nl/?url=</code>即可（<code>//</code>如果你的站点是https，图片就会走https协议，和站点的协议是一致的）</p><p>最终结果为：<code>//images.weserv.nl/?url=https://wx2.sinaimg.cn/orj360/415f82b9ly1h59oqn5sl1j20jg0jawn9.jpg</code></p><p>这样就可以使用防盗链的图片，但是如果以为这个开源项目的作用只有这一个，那就错了</p><h2 id="_1-2-修改图片属性" tabindex="-1">1.2. 修改图片属性 <a class="header-anchor" href="#_1-2-修改图片属性" aria-label="Permalink to &quot;1.2. 修改图片属性&quot;">​</a></h2><p>上方的链接还可以加上参数实现修改图片的属性，比如图片的宽高</p><h2 id="_1-3-宽高" tabindex="-1">1.3. 宽高 <a class="header-anchor" href="#_1-3-宽高" aria-label="Permalink to &quot;1.3. 宽高&quot;">​</a></h2><p>如果想返回一个<strong>高度300，宽度300</strong>的图片，只需要<code>//images.weserv.nl/?url=https://wx2.sinaimg.cn/orj360/415f82b9ly1h59oqn5sl1j20jg0jawn9.jpg&amp;w=300&amp;h=300</code></p><h3 id="_1-3-1-像素比" tabindex="-1">1.3.1. 像素比 <a class="header-anchor" href="#_1-3-1-像素比" aria-label="Permalink to &quot;1.3.1. 像素比&quot;">​</a></h3><p>在链接后面加上<code>&amp;dpr=</code>，等号后面填入<code>0-8</code>之间的数值就行</p><h2 id="_1-4-更多" tabindex="-1">1.4. 更多 <a class="header-anchor" href="#_1-4-更多" aria-label="Permalink to &quot;1.4. 更多&quot;">​</a></h2><p>想要更多好玩的参数，<a href="https://images.weserv.nl/docs/" target="_blank" rel="noreferrer">可以翻阅文档</a></p>',21),s=[n];function d(c,p,h,i,l,_){return a(),r("div",null,s)}const f=e(o,[["render",d]]);export{m as __pageData,f as default};
