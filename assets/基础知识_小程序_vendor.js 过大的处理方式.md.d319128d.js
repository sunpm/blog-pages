import{_ as e,o,c as d,V as t}from"./chunks/framework.5a3bb230.js";const v=JSON.parse('{"title":"vendor.js 过大的处理方式","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/小程序/vendor.js 过大的处理方式.md","filePath":"基础知识/小程序/vendor.js 过大的处理方式.md","lastUpdated":1688197748000}'),c={name:"基础知识/小程序/vendor.js 过大的处理方式.md"},i=t('<h1 id="vendor-js-过大的处理方式" tabindex="-1">vendor.js 过大的处理方式 <a class="header-anchor" href="#vendor-js-过大的处理方式" aria-label="Permalink to &quot;vendor.js 过大的处理方式&quot;">​</a></h1><p>小程序工具提示<code>vendor.js</code>过大，已经跳过es6向es5转换。这个转换问题本身不用理会，因为<code>vendor.js</code>已经是es5的了。</p><p>关于体积控制，参考如下：</p><ul><li>使用运行时代码压缩 <ul><li><code>HBuilderX</code>创建的项目勾选<code>运行--&gt;运行到小程序模拟器--&gt;运行时是否压缩代码</code></li><li><code>cli</code>创建的项目可以在<code>package.json</code>中添加参数<code>--minimize</code>，示例：<code>&quot;dev:mp-weixin&quot;: &quot;cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize&quot;</code></li></ul></li><li>使用分包优化，<a href="https://uniapp.dcloud.io/collocation/manifest?id=%E5%85%B3%E4%BA%8E%E5%88%86%E5%8C%85%E4%BC%98%E5%8C%96%E7%9A%84%E8%AF%B4%E6%98%8E" target="_blank" rel="noreferrer">关于分包优化的说明</a></li></ul>',4),a=[i];function n(r,s,_,l,p,u){return o(),d("div",null,a)}const E=e(c,[["render",n]]);export{v as __pageData,E as default};
