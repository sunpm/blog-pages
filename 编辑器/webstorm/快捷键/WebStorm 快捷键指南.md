# WebStorm 快捷键指南

之前练习过一段时间的WebStorm的快捷键的使用，但是，因为我好久没有用，只记得大概的几个。所以现在整理下，对于WebStorm快捷键的使用。

## 快捷键使用

### 编写模式（Editing）

|       快捷键       |                     英文说明                      |                   中文说明                   |
| :----------------: | :-----------------------------------------------: | :------------------------------------------: |
|    ctrl + space    |               Basic code completion               |                基本的代码完成                |
|    Alt + Enter     |      Show intention actions and quick-fixes       |              意图行动、快速见效              |
|      Ctrl + P      |   Parameter info (within method call arguments)   |             显示方法中的参数信息             |
|      Ctrl + Q      |            Quick documentation lookup             |                 快速文档查找                 |
| Ctrl + mouse over  |                  code Brief Info                  |                  简单的信息                  |
|     Ctrl + F1      |  Show descriptions of error or warning at caret   |     显示光标所在位置的错误信息或警告信息     |
|    Alt + Insert    |                   Generate code                   |    生成代码（如set、get方法或构造函数等）    |
|   Ctrl + Alt + T   | Surround with...(if..else, try..catch, for, etc.) | 将选中的代码放在if else里，或try catch里等等 |
|      Ctrl + J      |               Insert Live template                |                 插入模板代码                 |
|      Ctrl + /      |        Comment/uncomment with line comment        |               注释或取消注释行               |
|  Ctrl + Shift + /  |       Comment/uncomment with block comment        |          注释或取消注释选中的块语句          |
|      Ctrl + W      |    Select successively increasing code blocks     |         选择代码块（一般，增量选择）         |
|  Ctrl + Shift + W  |   Decrease current selection to previous state    |      Ctrl + W快捷键的回退，减量选择代码      |
|      Alt + Q       |                   Context Info                    |                  上下文信息                  |
|   Ctrl + Alt + L   |                   Reformat code                   |                  格式化代码                  |
|   Ctrl + Alt + I   |                Auto-indent line(s)                |                 格式化行代码                 |
|        Tab         |               Indent selected lines               |                 缩进选定的行                 |
|    Shift + Tab     |              Unindent selected lines              |                 撤销缩进处理                 |
|  Ctrl + Shift + V  |             Paste from recent buffers             |              粘贴缓冲区的新内容              |
|      Ctrl + D      |     Duplicate current line or selected block      |           复制当前行或选中的块语句           |
|      Ctrl + Y      |               Delete line at caret                |               删除光标所在的行               |
|  Alt + Shift + Up  |                   Move line up                    |            将光标所在的行往上移动            |
| Alt + Shift + Down |                  Move line Down                   |            将光标所在的行往下移动            |
|  Ctrl + Shift + J  |                    Join lines                     |           将多行语句折叠成一行语句           |
|    Ctrl + Enter    |                    Split lines                    |                    分离行                    |
|   Shift + Enter    |                  Start new line                   |                   另起一行                   |
|  Ctrl + Shift + U  |  Toggle case for word at caret or selected block  | 切换大小写在光标所在位置的字符或选定的语句块 |
|  Ctrl + Shift + ]  |            Select till code block end             |              选择直到代码块结束              |
|  Ctrl + Shift + [  |           Select till code block start            |              选择直到代码块开始              |
|   Ctrl + Delete    |                Delete to word end                 |               删除字符直到结束               |
|  Ctrl + Backspace  |               Delete to word start                |               删除字符直到开始               |
|     Ctrl + F4      |              Close active editor tab              |                关闭当前的窗口                |
|   Ctrl + NumPad+   |                 Expand code block                 |                  展开代码块                  |
|   Ctrl + NumPad-   |                Collapse code block                |                  折叠代码块                  |

### 多个插入符号和选择（Multiple carets and selections）

|         快捷键         |              英文说明              |      中文说明      |
| :--------------------: | :--------------------------------: | :----------------: |
|      Alt + Click       |        Add or remove caret         | 复制光标或删除光标 |
| Shift + Ctrl + Alt + J |       Select all occurrences       |  选择所有的检索词  |
|        Alt + J         |       Select next occurrence       |  选择下一个检索词  |
|    Alt + Shift + J     |        Unselect occurrence         |  撤销选择的检索词  |
|          Esc           | Unselect all occurrences or carets |    撤销上次动作    |

### 运行模式（Running）

|       快捷键       |               英文说明                |        中文说明         |
| :----------------: | :-----------------------------------: | :---------------------: |
| Alt + Shift + F10  |     Select configuration and run      |      配置并且运行       |
|  Alt + Shift + F9  |    Select configuration and debug     |      配置并且调试       |
|    Shift + F10     |                  Run                  |          运行           |
|     Shift + F9     |                 Debug                 |          调试           |
| Ctrl + Shift + F10 | Run context configuration from editor | 运行编辑器的上下文配置  |
|  Alt + Shift + R   |              Rerun tests              |      重新运行测试       |
|     Alt + F11      |       Run Gulp/Grunt/npm tasks        | 运行Gulp/Grunt/npm 任务 |

### 调试模式（Debugging）

|      快捷键       |      英文说明       |       中文说明       |
| :---------------: | :-----------------: | :------------------: |
|        F8         |      Step over      |       一步一步       |
|        F7         |      Step into      |       一步生成       |
|    Shift + F7     |   Smart step into   |       智能生成       |
|    Shift + F8     |      Step out       |       退出调试       |
|     Alt + F9      |    Run to cursor    | 运行到光标所在的位置 |
|     Alt + F8      | Evaluate expression |    计算表达式的值    |
|        F9         |   Resume program    |       重新开始       |
|     Ctrl + F8     |  Toggle breakpoint  |    设置/取消断点     |
| Ctrl + Shift + F8 |  View breakpoints   |     查看所有断点     |

### 导航模式（Navigation）

|          快捷键          |                 英文说明                  |           中文说明           |
| :----------------------: | :---------------------------------------: | :--------------------------: |
| Ctrl + B , Ctrl + Click  |             Go to declaration             |  定位到变量或方法声明的位置  |
|         Ctrl + N         |                Go to class                |     定位到输入的类名位置     |
|     Ctrl + Shift + N     |                Go to file                 |    通过文件名快速查找文件    |
|  Ctrl + Alt + Shift + N  |               Go to symbol                |     通过字符快速查找位置     |
|       Alt + Right        |           Go to next editor tab           |     切换到下一个编辑框中     |
|        Alt + Left        |         Go to previous editor tab         |     切换到上一个编辑框中     |
|           F12            |      Go back to previous tool window      |    打开最新关闭的工具窗口    |
|           Esc            |      Go to editor (from tool window)      |        光标到编辑框中        |
|         Ctrl + G         |                Go to line                 |            查找行            |
|         Ctrl + E         |            Recent files popup             |        最近打开的文件        |
| Ctrl + Alt + Right/Left  |           Navigate forward/back           |     返回到上次浏览的位置     |
| Ctrl + Shift + Backspace |      Navigate to last edit location       |         自动补全代码         |
|         Alt + F1         | Select current file or symbol in any view |      查找代码所在的位置      |
|      Ctrl + Alt + B      |          Go to implementation(s)          |       跳转到方法实现处       |
|     Ctrl + Shift + I     |       Open quick definition lookup        |       快速打开定义查找       |
|     Ctrl + Shift + B     |          Go to type declaration           |       定位到类型声明处       |
|         Ctrl + U         |      Go to super-method/super-class       |  定位到父级方法中或父级类中  |
|         Alt + Up         |           Go to previous method           |      定位到上一个方法中      |
|        Alt + Down        |             Go to next method             |      定位到下一个方法中      |
|       Ctrl + ] / [       |       Move to code block end/start        |  光标在代码块的前面或者后面  |
|     Ctrl + Shift + M     |       Move caret to matching brace        | 重构选中代码块为一个新的函数 |
|        Ctrl + F12        |           File structure popup            |         显示文件结构         |
|         Ctrl + H         |              Type hierarchy               |         显示类结构图         |
|      Ctrl + Alt + H      |              Call hierarchy               |             未知             |
|     F2 / Shift + F2      |      Next/previous highlighted error      |         高亮显示错误         |
|    F4 , Ctrl + Enter     |              Jump to source               |             未知             |
|        Alt + Home        |          Jump to navigation bar           |      跳转到文件导航bar       |
|           F11            |              Toggle bookmark              |           切换书签           |
|    Ctrl + Shift + F11    |       Toggle bookmark with mnemonic       |       跟随记忆切换书签       |
|      Ctrl + #[0-9]       |          Go to numbered bookmark          |     定位到数字对应的书签     |
|       Shift + F11        |              Show bookmarks               |         展示所有书签         |

### 搜索/替换模式（Search/Replace）

|      快捷键      |    英文说明     |        中文说明        |
| :--------------: | :-------------: | :--------------------: |
|     Ctrl + F     |      Find       |       文件中查找       |
|        F3        |    Find next    |       查找下一个       |
|    Shift + F3    |  Find previous  |       查找上一个       |
| Ctrl + Shift + F |  Find in path   | 根据指定的路径全局搜索 |
|     Ctrl + R     |     Replace     |       文件中替换       |
| Ctrl + Shift + R | Replace in path | 根据指定的路径全局替换 |

### 用法搜索模式（Usage Search）

|      快捷键       |         英文说明         |         中文说明         |
| :---------------: | :----------------------: | :----------------------: |
|     Alt + F7      |       Find usages        |       全局查找用法       |
|     Ctrl + F7     |   Find usages in file    |      文件中查找用法      |
| Ctrl + Shift + F7 | Highlight usages in file | 文件中高亮显示选中的字符 |
|  Ctrl + Alt + F7  |       Show usages        |         显示使用         |

### 重构代码模式（Refactoring）

|        快捷键         |         英文说明          |        中文说明        |
| :-------------------: | :-----------------------: | :--------------------: |
| Ctrl + Alt + Shift +T |       Refactor this       | 重构光标所在位置的代码 |
|        F5 / F6        |        Copy / Move        |     复制/粘贴文件      |
|     Alt + Delete      |       Alt + Delete        |        安全删除        |
|      Shift + F6       |          Rename           |         重命名         |
|       Ctrl + F6       | Change function signature |     改变方法的结构     |
|    Ctrl + Alt + N     |      Inline Variable      |        内联变量        |
|    Ctrl + Alt + M     |      Extract Method       |   选中代码块抽取方法   |
|    Ctrl + Alt + V     |     Extract Variable      |   选中代码块抽取变量   |
|    Ctrl + Alt + C     |     Extract Constant      |   选中代码块抽取常量   |
|    Ctrl + Alt + P     |     Extract Parameter     |   选中代码块抽取参数   |

### 代码管理模式（VCS/Local History）

|       快捷键        |        英文说明         |      中文说明       |
| :-----------------: | :---------------------: | :-----------------: |
| Alt + BackQuote (`) |    ‘VCS’ quick popup    |   弹出VCS操作窗口   |
|      Ctrl + K       |  Commit project to VCS  |    提交代码到VCS    |
|      Ctrl + T       | Update project from VCS | 同步VCS与本地的代码 |
|   Alt + Shift + C   |   View recent changes   |   查看最近的变化    |

### 常用模式（General）

|        快捷键        |                 英文说明                  |        中文说明        |
| :------------------: | :---------------------------------------: | :--------------------: |
|     Double Shift     |             Search everywhere             |      全局搜索文件      |
|   Ctrl + Shift + A   |                Find Action                |        查找动作        |
|     Alt + #[0-9]     |      Open corresponding tool window       |   打开对应的工具窗口   |
|  Ctrl + Shift + F12  |         Toggle maximizing editor          |    最大区域显示代码    |
|   Alt + Shift + F    |             Add to Favorites              |        添加收藏        |
|   Alt + Shift + I    | Inspect current file with current profile | 用配置文件检查当前文件 |
| Ctrl + BackQuote (`) |        Quick switch current scheme        |  快速地打开当前的主题  |
|    Ctrl + Alt + S    |           Open Settings dialog            |      打开设置窗口      |
|      Ctrl + Tab      |    Switch between tabs and tool window    |     切换代码选项卡     |

## 快捷键设置

用`Ctrl+Alt+S`打开`Setting`，选择`Keymap`，之后选中需要修改的快捷键右键点击，弹出菜单栏，以此进行设置，见下图。



![img](https://upload-images.jianshu.io/upload_images/3126944-b0d02312bbde462a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)