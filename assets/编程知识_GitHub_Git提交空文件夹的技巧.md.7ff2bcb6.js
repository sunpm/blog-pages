import{_ as s,c as t,o as a,V as e}from"./chunks/framework.a7f1c75a.js";const m=JSON.parse('{"title":"Git提交空文件夹的技巧","description":"","frontmatter":{},"headers":[],"relativePath":"编程知识/GitHub/Git提交空文件夹的技巧.md","lastUpdated":1681627181000}'),o={name:"编程知识/GitHub/Git提交空文件夹的技巧.md"},n=e('<h1 id="git提交空文件夹的技巧" tabindex="-1"><a href="https://www.cnblogs.com/EasonJim/p/9152919.html" target="_blank" rel="noreferrer">Git提交空文件夹的技巧</a> <a class="header-anchor" href="#git提交空文件夹的技巧" aria-label="Permalink to &quot;[Git提交空文件夹的技巧](https://www.cnblogs.com/EasonJim/p/9152919.html)&quot;">​</a></h1><p>这个只能说是技巧不能说是方法，原理是在每个空文件夹新建一个.gitignore文件，然后提交。</p><blockquote><p>或者 <strong>.gitkeep</strong> (这是约定俗成的)</p></blockquote><p>快捷命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-empty</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">touch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{}/.gitignore</span><span style="color:#A6ACCD;"> \\;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在项目根目录运行。</p><p>参考：</p><p><a href="https://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository</a></p>',8),p=[n];function r(l,c,i,_,d,C){return a(),t("div",null,p)}const y=s(o,[["render",r]]);export{m as __pageData,y as default};
