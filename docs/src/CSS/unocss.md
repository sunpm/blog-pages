# unocss 常用文档

## Unocss超出显示省略号

| **类**              | **属性值**                                                   |
| ------------------- | ------------------------------------------------------------ |
| `line-clamp-${int}` | overflow: hidden;<br/>display: -webkit-box;<br/>-webkit-box-orient: vertical;<br/>-webkit-line-clamp: `${int};` |
| `line-clamp-none`   | -webkit-line-clamp: unset;                                   |

