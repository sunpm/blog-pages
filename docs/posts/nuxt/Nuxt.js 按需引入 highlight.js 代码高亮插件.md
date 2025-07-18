# Nuxt.js 按需引入 highlight.js 代码高亮插件

本篇按需引入代码高亮教程基于 highlight.js 10.1.1 实现。

## 1. 正常引入

### 1.1 安装highlight.js

```bash
npm install highlight --save
```

### 1.2 配置自定义指令

在nuxt的plugins文件夹内添加一个 highlight.client.js 文件，文件内容如下

```js
// highlight.js  代码高亮指令
import Hljs from 'highlight.js'
import Vue from 'vue'
import 'highlight.js/styles/default.css' // 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
const Highlight = {}
// 自定义hig配置
// 自定义插件
Highlight.install = function (Vue) {
  // 自定义指令 v-highlight
  Vue.directive('highlight', {
    // 被绑定元素插入父节点时调用
    inserted(el) {
      const blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightBlock(blocks[i])
      }
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated(el) {
      const blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightBlock(blocks[i])
      }
    }
  })
}

export default Highlight
Vue.use(Highlight)
```

在nuxt.config.js文件中引入该文件，如下：

```js
plugins: [
  '~/plugins/highlight.client.js',
],
```

## 2. 按需引入

按需引入主要是为了只引入对自己需要的语言执行代码高亮的部分，只需修改vue-highlight.js 文件即可。具体配置如下：

```js
// 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
// 需要哪些语言直接手动引入，不再直接通过 import Hljs from 'highlight.js' 引入所有语言。
import Vue from 'vue'
import 'highlight.js/styles/default.css' const hljs = require('highlight.js/lib/core')
hljs.registerLanguage('c-like', require('highlight.js/lib/languages/c-like'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
hljs.registerLanguage('dos', require('highlight.js/lib/languages/dos'))
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'))
hljs.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'))
hljs.registerLanguage('http', require('highlight.js/lib/languages/http'))
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hljs.registerLanguage('python-repl', require('highlight.js/lib/languages/python-repl'))
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))

const Highlight = {}
// 自定义hig配置
// 自定义插件
Highlight.install = function (Vue) {
  // 自定义指令 v-highlight
  Vue.directive('highlight', {
    // 被绑定元素插入父节点时调用
    inserted(el) {
      const blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightBlock(blocks[i])
      }
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated(el) {
      const blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightBlock(blocks[i])
      }
    }
  })
}

export default Highlight
Vue.use(Highlight)
```

## 3. 可用语言列表

```js
const hljs = require('./core')
hljs.registerLanguage('1c', require('highlight.js/lib/languages/1c'))
hljs.registerLanguage('abnf', require('highlight.js/lib/languages/abnf'))
hljs.registerLanguage('accesslog', require('highlight.js/lib/languages/accesslog'))
hljs.registerLanguage('actionscript', require('highlight.js/lib/languages/actionscript'))
hljs.registerLanguage('ada', require('highlight.js/lib/languages/ada'))
hljs.registerLanguage('angelscript', require('highlight.js/lib/languages/angelscript'))
hljs.registerLanguage('apache', require('highlight.js/lib/languages/apache'))
hljs.registerLanguage('applescript', require('highlight.js/lib/languages/applescript'))
hljs.registerLanguage('arcade', require('highlight.js/lib/languages/arcade'))
hljs.registerLanguage('c-like', require('highlight.js/lib/languages/c-like'))
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'))
hljs.registerLanguage('arduino', require('highlight.js/lib/languages/arduino'))
hljs.registerLanguage('armasm', require('highlight.js/lib/languages/armasm'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
hljs.registerLanguage('aspectj', require('highlight.js/lib/languages/aspectj'))
hljs.registerLanguage('autohotkey', require('highlight.js/lib/languages/autohotkey'))
hljs.registerLanguage('autoit', require('highlight.js/lib/languages/autoit'))
hljs.registerLanguage('avrasm', require('highlight.js/lib/languages/avrasm'))
hljs.registerLanguage('awk', require('highlight.js/lib/languages/awk'))
hljs.registerLanguage('axapta', require('highlight.js/lib/languages/axapta'))
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'))
hljs.registerLanguage('basic', require('highlight.js/lib/languages/basic'))
hljs.registerLanguage('bnf', require('highlight.js/lib/languages/bnf'))
hljs.registerLanguage('brainfuck', require('highlight.js/lib/languages/brainfuck'))
hljs.registerLanguage('c', require('highlight.js/lib/languages/c'))
hljs.registerLanguage('cal', require('highlight.js/lib/languages/cal'))
hljs.registerLanguage('capnproto', require('highlight.js/lib/languages/capnproto'))
hljs.registerLanguage('ceylon', require('highlight.js/lib/languages/ceylon'))
hljs.registerLanguage('clean', require('highlight.js/lib/languages/clean'))
hljs.registerLanguage('clojure', require('highlight.js/lib/languages/clojure'))
hljs.registerLanguage('clojure-repl', require('highlight.js/lib/languages/clojure-repl'))
hljs.registerLanguage('cmake', require('highlight.js/lib/languages/cmake'))
hljs.registerLanguage('coffeescript', require('highlight.js/lib/languages/coffeescript'))
hljs.registerLanguage('coq', require('highlight.js/lib/languages/coq'))
hljs.registerLanguage('cos', require('highlight.js/lib/languages/cos'))
hljs.registerLanguage('crmsh', require('highlight.js/lib/languages/crmsh'))
hljs.registerLanguage('crystal', require('highlight.js/lib/languages/crystal'))
hljs.registerLanguage('csharp', require('highlight.js/lib/languages/csharp'))
hljs.registerLanguage('csp', require('highlight.js/lib/languages/csp'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('d', require('highlight.js/lib/languages/d'))
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
hljs.registerLanguage('dart', require('highlight.js/lib/languages/dart'))
hljs.registerLanguage('delphi', require('highlight.js/lib/languages/delphi'))
hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'))
hljs.registerLanguage('django', require('highlight.js/lib/languages/django'))
hljs.registerLanguage('dns', require('highlight.js/lib/languages/dns'))
hljs.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'))
hljs.registerLanguage('dos', require('highlight.js/lib/languages/dos'))
hljs.registerLanguage('dsconfig', require('highlight.js/lib/languages/dsconfig'))
hljs.registerLanguage('dts', require('highlight.js/lib/languages/dts'))
hljs.registerLanguage('dust', require('highlight.js/lib/languages/dust'))
hljs.registerLanguage('ebnf', require('highlight.js/lib/languages/ebnf'))
hljs.registerLanguage('elixir', require('highlight.js/lib/languages/elixir'))
hljs.registerLanguage('elm', require('highlight.js/lib/languages/elm'))
hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
hljs.registerLanguage('erb', require('highlight.js/lib/languages/erb'))
hljs.registerLanguage('erlang-repl', require('highlight.js/lib/languages/erlang-repl'))
hljs.registerLanguage('erlang', require('highlight.js/lib/languages/erlang'))
hljs.registerLanguage('excel', require('highlight.js/lib/languages/excel'))
hljs.registerLanguage('fix', require('highlight.js/lib/languages/fix'))
hljs.registerLanguage('flix', require('highlight.js/lib/languages/flix'))
hljs.registerLanguage('fortran', require('highlight.js/lib/languages/fortran'))
hljs.registerLanguage('fsharp', require('highlight.js/lib/languages/fsharp'))
hljs.registerLanguage('gams', require('highlight.js/lib/languages/gams'))
hljs.registerLanguage('gauss', require('highlight.js/lib/languages/gauss'))
hljs.registerLanguage('gcode', require('highlight.js/lib/languages/gcode'))
hljs.registerLanguage('gherkin', require('highlight.js/lib/languages/gherkin'))
hljs.registerLanguage('glsl', require('highlight.js/lib/languages/glsl'))
hljs.registerLanguage('gml', require('highlight.js/lib/languages/gml'))
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'))
hljs.registerLanguage('golo', require('highlight.js/lib/languages/golo'))
hljs.registerLanguage('gradle', require('highlight.js/lib/languages/gradle'))
hljs.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'))
hljs.registerLanguage('haml', require('highlight.js/lib/languages/haml'))
hljs.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'))
hljs.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'))
hljs.registerLanguage('haxe', require('highlight.js/lib/languages/haxe'))
hljs.registerLanguage('hsp', require('highlight.js/lib/languages/hsp'))
hljs.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'))
hljs.registerLanguage('http', require('highlight.js/lib/languages/http'))
hljs.registerLanguage('hy', require('highlight.js/lib/languages/hy'))
hljs.registerLanguage('inform7', require('highlight.js/lib/languages/inform7'))
hljs.registerLanguage('ini', require('highlight.js/lib/languages/ini'))
hljs.registerLanguage('irpf90', require('highlight.js/lib/languages/irpf90'))
hljs.registerLanguage('isbl', require('highlight.js/lib/languages/isbl'))
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('jboss-cli', require('highlight.js/lib/languages/jboss-cli'))
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
hljs.registerLanguage('julia', require('highlight.js/lib/languages/julia'))
hljs.registerLanguage('julia-repl', require('highlight.js/lib/languages/julia-repl'))
hljs.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'))
hljs.registerLanguage('lasso', require('highlight.js/lib/languages/lasso'))
hljs.registerLanguage('latex', require('highlight.js/lib/languages/latex'))
hljs.registerLanguage('ldif', require('highlight.js/lib/languages/ldif'))
hljs.registerLanguage('leaf', require('highlight.js/lib/languages/leaf'))
hljs.registerLanguage('less', require('highlight.js/lib/languages/less'))
hljs.registerLanguage('lisp', require('highlight.js/lib/languages/lisp'))
hljs.registerLanguage('livecodeserver', require('highlight.js/lib/languages/livecodeserver'))
hljs.registerLanguage('livescript', require('highlight.js/lib/languages/livescript'))
hljs.registerLanguage('llvm', require('highlight.js/lib/languages/llvm'))
hljs.registerLanguage('lsl', require('highlight.js/lib/languages/lsl'))
hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
hljs.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'))
hljs.registerLanguage('mathematica', require('highlight.js/lib/languages/mathematica'))
hljs.registerLanguage('matlab', require('highlight.js/lib/languages/matlab'))
hljs.registerLanguage('maxima', require('highlight.js/lib/languages/maxima'))
hljs.registerLanguage('mel', require('highlight.js/lib/languages/mel'))
hljs.registerLanguage('mercury', require('highlight.js/lib/languages/mercury'))
hljs.registerLanguage('mipsasm', require('highlight.js/lib/languages/mipsasm'))
hljs.registerLanguage('mizar', require('highlight.js/lib/languages/mizar'))
hljs.registerLanguage('perl', require('highlight.js/lib/languages/perl'))
hljs.registerLanguage('mojolicious', require('highlight.js/lib/languages/mojolicious'))
hljs.registerLanguage('monkey', require('highlight.js/lib/languages/monkey'))
hljs.registerLanguage('moonscript', require('highlight.js/lib/languages/moonscript'))
hljs.registerLanguage('n1ql', require('highlight.js/lib/languages/n1ql'))
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'))
hljs.registerLanguage('nim', require('highlight.js/lib/languages/nim'))
hljs.registerLanguage('nix', require('highlight.js/lib/languages/nix'))
hljs.registerLanguage('nsis', require('highlight.js/lib/languages/nsis'))
hljs.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'))
hljs.registerLanguage('ocaml', require('highlight.js/lib/languages/ocaml'))
hljs.registerLanguage('openscad', require('highlight.js/lib/languages/openscad'))
hljs.registerLanguage('oxygene', require('highlight.js/lib/languages/oxygene'))
hljs.registerLanguage('parser3', require('highlight.js/lib/languages/parser3'))
hljs.registerLanguage('pf', require('highlight.js/lib/languages/pf'))
hljs.registerLanguage('pgsql', require('highlight.js/lib/languages/pgsql'))
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'))
hljs.registerLanguage('php-template', require('highlight.js/lib/languages/php-template'))
hljs.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'))
hljs.registerLanguage('pony', require('highlight.js/lib/languages/pony'))
hljs.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'))
hljs.registerLanguage('processing', require('highlight.js/lib/languages/processing'))
hljs.registerLanguage('profile', require('highlight.js/lib/languages/profile'))
hljs.registerLanguage('prolog', require('highlight.js/lib/languages/prolog'))
hljs.registerLanguage('properties', require('highlight.js/lib/languages/properties'))
hljs.registerLanguage('protobuf', require('highlight.js/lib/languages/protobuf'))
hljs.registerLanguage('puppet', require('highlight.js/lib/languages/puppet'))
hljs.registerLanguage('purebasic', require('highlight.js/lib/languages/purebasic'))
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
hljs.registerLanguage('python-repl', require('highlight.js/lib/languages/python-repl'))
hljs.registerLanguage('q', require('highlight.js/lib/languages/q'))
hljs.registerLanguage('qml', require('highlight.js/lib/languages/qml'))
hljs.registerLanguage('r', require('highlight.js/lib/languages/r'))
hljs.registerLanguage('reasonml', require('highlight.js/lib/languages/reasonml'))
hljs.registerLanguage('rib', require('highlight.js/lib/languages/rib'))
hljs.registerLanguage('roboconf', require('highlight.js/lib/languages/roboconf'))
hljs.registerLanguage('routeros', require('highlight.js/lib/languages/routeros'))
hljs.registerLanguage('rsl', require('highlight.js/lib/languages/rsl'))
hljs.registerLanguage('ruleslanguage', require('highlight.js/lib/languages/ruleslanguage'))
hljs.registerLanguage('rust', require('highlight.js/lib/languages/rust'))
hljs.registerLanguage('sas', require('highlight.js/lib/languages/sas'))
hljs.registerLanguage('scala', require('highlight.js/lib/languages/scala'))
hljs.registerLanguage('scheme', require('highlight.js/lib/languages/scheme'))
hljs.registerLanguage('scilab', require('highlight.js/lib/languages/scilab'))
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'))
hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
hljs.registerLanguage('smali', require('highlight.js/lib/languages/smali'))
hljs.registerLanguage('smalltalk', require('highlight.js/lib/languages/smalltalk'))
hljs.registerLanguage('sml', require('highlight.js/lib/languages/sml'))
hljs.registerLanguage('sqf', require('highlight.js/lib/languages/sqf'))
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'))
hljs.registerLanguage('stan', require('highlight.js/lib/languages/stan'))
hljs.registerLanguage('stata', require('highlight.js/lib/languages/stata'))
hljs.registerLanguage('step21', require('highlight.js/lib/languages/step21'))
hljs.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'))
hljs.registerLanguage('subunit', require('highlight.js/lib/languages/subunit'))
hljs.registerLanguage('swift', require('highlight.js/lib/languages/swift'))
hljs.registerLanguage('taggerscript', require('highlight.js/lib/languages/taggerscript'))
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
hljs.registerLanguage('tap', require('highlight.js/lib/languages/tap'))
hljs.registerLanguage('tcl', require('highlight.js/lib/languages/tcl'))
hljs.registerLanguage('thrift', require('highlight.js/lib/languages/thrift'))
hljs.registerLanguage('tp', require('highlight.js/lib/languages/tp'))
hljs.registerLanguage('twig', require('highlight.js/lib/languages/twig'))
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'))
hljs.registerLanguage('vala', require('highlight.js/lib/languages/vala'))
hljs.registerLanguage('vbnet', require('highlight.js/lib/languages/vbnet'))
hljs.registerLanguage('vbscript', require('highlight.js/lib/languages/vbscript'))
hljs.registerLanguage('vbscript-html', require('highlight.js/lib/languages/vbscript-html'))
hljs.registerLanguage('verilog', require('highlight.js/lib/languages/verilog'))
hljs.registerLanguage('vhdl', require('highlight.js/lib/languages/vhdl'))
hljs.registerLanguage('vim', require('highlight.js/lib/languages/vim'))
hljs.registerLanguage('x86asm', require('highlight.js/lib/languages/x86asm'))
hljs.registerLanguage('xl', require('highlight.js/lib/languages/xl'))
hljs.registerLanguage('xquery', require('highlight.js/lib/languages/xquery'))
hljs.registerLanguage('zephir', require('highlight.js/lib/languages/zephir'))
```
