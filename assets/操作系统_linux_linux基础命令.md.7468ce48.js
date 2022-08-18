import{_ as s,c as n,o as a,a as l}from"./app.50e83971.js";const D=JSON.parse('{"title":"\u67E5\u627E && \u65E5\u5FD7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u67E5\u627E && \u65E5\u5FD7","slug":"\u67E5\u627E-\u65E5\u5FD7"},{"level":2,"title":"\u5176\u4ED6\u5E38\u7528\u64CD\u4F5C","slug":"\u5176\u4ED6\u5E38\u7528\u64CD\u4F5C"}],"relativePath":"\u64CD\u4F5C\u7CFB\u7EDF/linux/linux\u57FA\u7840\u547D\u4EE4.md","lastUpdated":1660793000000}'),p={name:"\u64CD\u4F5C\u7CFB\u7EDF/linux/linux\u57FA\u7840\u547D\u4EE4.md"},t=l(`<ol><li>\u8FDB\u5165\u76EE\u5F55</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">cd \u76EE\u5F55\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u663E\u793A\u5F53\u524D\u8DEF\u5F84</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">pwd</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>\u663E\u793A\u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">ls</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -a  \u663E\u793A\u9690\u85CF\u6587\u4EF6\u3002\u9690\u85CF\u6587\u4EF6\u4EE5 . \u5F00\u5934\u547D\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>\u67E5\u770B\u521B\u5EFA\u6587\u672C</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">touch abc.txt \u67E5\u770Babc.txt \u5982\u679C\u4E0D\u5B58\u5728\u5219\u81EA\u52A8\u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li>\u521B\u5EFA\u6587\u4EF6\u5939</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir \u6587\u4EF6\u540D 			 		\u5F53\u524D\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p name1/name2  			\u5F53\u671F\u76EE\u5F55\u9012\u5F52\u521B\u5EFAname1/name2\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982 \u63D0\u793A mkdir: xxx: Permission denied</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5219\u9700\u8981admin\u8D26\u53F7  sudo -i \u8F93\u5165\u5BC6\u7801 \u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="6"><li>\u91CD\u547D\u540D\u64CD\u4F5C</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">mv test test1						\u628Atest\u6587\u4EF6\u7684\u540D\u5B57\u4FEE\u6539\u4E3Atest1</span></span>
<span class="line"><span style="color:#A6ACCD;">mv test1 /home/wechat/  			\u5C06test1\u6587\u4EF6 \u79FB\u52A8\u5230/home/wechat \u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="7"><li>\u5220\u9664\u64CD\u4F5C</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">rm file 						\u5220\u9664file\u6587\u4EF6(\u5B58\u5728\u5B50\u6587\u4EF6\u65F6\u4E0D\u53EF\u5220\u9664)</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -r /file				 	    \u5220\u9664file\u6587\u4EF6\u4E0B\u7684\u6240\u6709\u76EE\u5F55\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">rm -rf ./*  					\u5220\u5E93\u8DD1\u8DEF\u4E13\u7528\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="8"><li>\u590D\u5236</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">cp file /home  				    \u590D\u5236file\u547D\u4EE4\u81F3home\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">cp -r test /home/wechat  		\u590D\u5236test\u6587\u4EF6\u5939\u548C\u5176\u6240\u6709\u5B50\u6587\u4EF6 \u81F3 /home/wechat\u76EE\u5F55\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">cp -r test /home/wechat/test2  	\u590D\u5236test\u6587\u4EF6\u5939\u548C\u5176\u6240\u6709\u5B50\u6587\u4EF6 \u81F3 /home/wechat\u76EE\u5F55\u4E0B\u5E76\u91CD\u547D\u540D\u4E3Atest2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="9"><li>\u538B\u7F29\u3001\u89E3\u538B</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u89E3\u538Btar</span></span>
<span class="line"><span style="color:#A6ACCD;">tar xvf test.tar</span></span>
<span class="line"><span style="color:#A6ACCD;">\u538B\u7F29tar</span></span>
<span class="line"><span style="color:#A6ACCD;">tar cvf test1.tar name   		\u5C06name\u6587\u4EF6\u5939\u538B\u7F29\u4E3Atest1.tar</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u89E3\u538Btar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">tar zxvf test.tar.gz</span></span>
<span class="line"><span style="color:#A6ACCD;">\u538B\u7F29</span></span>
<span class="line"><span style="color:#A6ACCD;">tar zxvf test.tar.gz name</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u67E5\u627E-\u65E5\u5FD7" tabindex="-1">\u67E5\u627E &amp;&amp; \u65E5\u5FD7 <a class="header-anchor" href="#\u67E5\u627E-\u65E5\u5FD7" aria-hidden="true">#</a></h2><ol><li>cat\u3001more\u3001less\u547D\u4EE4</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">cat test.log  				\u67E5\u770Btest.log \u7684\u6587\u4EF6\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">cat -n test.log 			\u67E5\u770Btest.log\u7684\u6587\u4EF6\u5185\u5BB9\u5E76\u663E\u793A\u884C\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">more\u3001less\u548Ccat\u4F5C\u7528\u57FA\u672C\u76F8\u540C\uFF0C\u53EA\u4E0D\u8FC7more\u53EF\u4EE5\u6309\u9875\u7801\u6765\u67E5\u770B\u3002 \u90FD\u662F\u6309q\u9000\u51FA\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F7F\u7528\u547D\u4EE4\u65F6\uFF0C\u7A7A\u683C\u952E\u7FFB\u9875(\u663E\u793A\u4E0B\u4E00\u5C4F\u5185\u5BB9)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u56DE\u8F66\uFF1A\u663E\u793A\u4E0B\u4E00\u884C\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>find\u547D\u4EE4</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">.\u4EE3\u8868\u5F53\u524D\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -name &#39;*.txt&#39;  		\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u53CA\u5176\u5B50\u76EE\u5F55\u4E0B\u6269\u5C55\u540D\u4E3Atxt\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -mtime -2 			\u5217\u51FA\u4E24\u5929\u5185\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -atime -3 			\u5217\u51FA\u4E09\u5929\u5185\u88AB\u5B58\u53D6\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -mmin +30 			\u534A\u4E2A\u5C0F\u65F6\u5185\u88AB\u4FEE\u6539\u8FC7\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -amin +40  			\u56DB\u5341\u5206\u949F\u5185\u88AB\u5B58\u53D6\u8FC7\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -size +1M  			\u67E5\u627E\u5F53\u524D\u76EE\u5F55\u8D85\u8FC71M\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find .  -size -1M  		    \u67E5\u627E\u5F53\u524D\u76EE\u5F55\u5C0F\u4E8E1M\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find .  -size   +512k  	    \u8D85\u8FC7512k\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -empty  			    \u67E5\u627E\u5F53\u524D\u76EE\u5F55\u4E3A\u7A7A\u7684\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>whereis\u547D\u4EE4</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">whereis name/  \u641C\u7D22name\u6587\u4EF6\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>grep\u547D\u4EE4</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">ps -ef|grep nginx  			    \u67E5\u770Bnginx\u7684\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef|grep nginx -c			\u67E5\u770Bnginx\u7684\u8FDB\u7A0B\u4E2A\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">cat test.log | grep ^a  		\u67E5\u627Etest.log \u4E2D\u4EE5o\u5F00\u5934\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">cat test.log | grep $k  		\u67E5\u627Etest.log\u4E2D\u4EE5K\u7ED3\u5C3E\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">cat test.log | grep &#39;bd4f63cc918611e8a14f7c04d0d7fdcc&#39; --color     \u5728test.log\u4E2D\u641C\u7D22bd4f63cc918611e8a14f7c04d0d7fdcc\u5E76\u9AD8\u4EAE</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7B49\u540C\u4E8E grep &#39;bd4f63cc918611e8a14f7c04d0d7fdcc&#39; test.log --color</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">grep -n &#39;abc&#39; test.log  		\u641C\u7D22\u7ED3\u679C\u663E\u793A\u884C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">grep &#39;abc&#39; test1.log test2.log  	\u4ECE\u591A\u4E2A\u6587\u4EF6\u4E2D\u67E5\u627Eabc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li>tail\u547D\u4EE4</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">tail -f  xxx.log   \u67E5\u770Bxxx.log \u9ED8\u8BA4\u663E\u793A\u6700\u540E10\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">tail -f 100 xx.log /tail -100f xx.log  \u67E5\u770B100\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="6"><li>vim\u547D\u4EE4</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">vim</span></span>
<span class="line"><span style="color:#A6ACCD;">vim file \u67E5\u770B\u6587\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">vim file1 file2 ... \u67E5\u770B\u591A\u4E2A\u6587\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6B63\u5E38\u6A21\u5F0F/vim\u6A21\u5F0F \u901A\u8FC7ESC\u8FDB\u884C\u5207\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">vim\u6A21\u5F0F\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">i\uFF1A\u5728\u5F53\u524D\u4F4D\u7F6E\u63D2\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">dd\uFF1A \u5220\u9664\u5149\u6807\u6240\u5728\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">D:\u5220\u9664\u5149\u6807\u6240\u5728\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">2dd: \u5220\u9664\u5149\u6807\u4E4B\u540E\u76842\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">G\uFF1A\u5207\u6362\u5149\u6807\u81F3\u672B\u5C3E</span></span>
<span class="line"><span style="color:#A6ACCD;">w! \u5F3A\u5236\u5199\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">wq \u4FDD\u5B58\u5E76\u9000\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">q\uFF01 \u5F3A\u5236\u9000\u51FA \u4E0D\u4FDD\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">/abc  \u5728\u6587\u672C\u4E2D\u67E5\u627Eabc</span></span>
<span class="line"><span style="color:#A6ACCD;">set nu \u663E\u793A\u6587\u672C\u884C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u79FB\u52A8\u5149\u6807 k(\u4E0A)\u3001j(\u4E0B)\u3001h(\u5DE6)\u3001l(\u53F3)</span></span>
<span class="line"><span style="color:#A6ACCD;">yy \u590D\u5236\u5149\u6807\u6240\u5728\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">p\u7C98\u8D34\u590D\u5236\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">o:\u53E6\u8D77\u4E00\u884C  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5176\u4ED6\u5E38\u7528\u64CD\u4F5C" tabindex="-1">\u5176\u4ED6\u5E38\u7528\u64CD\u4F5C <a class="header-anchor" href="#\u5176\u4ED6\u5E38\u7528\u64CD\u4F5C" aria-hidden="true">#</a></h2><ol><li>\u67E5\u770B\u7528\u6237\u4FE1\u606F</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">w</span></span>
<span class="line"><span style="color:#A6ACCD;">who</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u4FEE\u6539\u6587\u4EF6\u6743\u9650</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">chmod 777 file1 		\u6BCF\u4E2A\u4EBA\u90FD\u53EF\u4EE5\u5BF9file\u6587\u4EF6\u8FDB\u884C\u8BFB\u5199\u548C\u6267\u884C\u7684\u6743\u9650</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod 666 file1 		\u6BCF\u4E2A\u4EBA\u90FD\u53EF\u4EE5\u5BF9file\u6587\u4EF6\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li>\u7CFB\u7EDF\u7EA7\u522B</li></ol><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;">top \u5B9E\u65F6\u663E\u793A\u7CFB\u7EDF\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">dh -h \u67E5\u770B\u5F53\u524D\u90A3\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5</span></span>
<span class="line"><span style="color:#A6ACCD;">du -sh /usr \u8BA1\u7B97usr\u6587\u4EF6\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">netstat \u2013a \u5217\u51FA tcp, udp \u548C unix \u534F\u8BAE\u4E0B\u6240\u6709\u5957\u63A5\u5B57\u7684\u6240\u6709\u8FDE\u63A5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">kill \u7AEF\u53E3\u53F7 \u7EC8\u6B62\u8BE5\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -9 \u7AEF\u53E3 \u7ACB\u5373\u5F3A\u5236\u7EC8\u6B62\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">rz lz \u4E0A\u4F20 \u548C\u4E0B\u8F7D\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,38),e=[t];function o(c,i,r,A,C,d){return a(),n("div",null,e)}const g=s(p,[["render",o]]);export{D as __pageData,g as default};
