# uniapp 分包

## 分包加载配置，此配置为小程序的分包加载机制。

因小程序有体积和资源加载限制，各家小程序平台提供了分包方式，优化小程序的下载和启动速度。

所谓的主包，即放置默认启动页面/TabBar 页面，以及一些所有分包都需用到公共资源/JS 脚本；而分包则是根据pages.json的配置进行划分。

在小程序启动时，默认会下载主包并启动主包内页面，当用户进入分包内某个页面时，会把对应分包自动下载下来，下载完成后再进行展示。此时终端界面会有等待提示。

App默认为整包。从uni-app 2.7.12+ 开始，也兼容了小程序的分包配置。其目的不用于下载提速，而用于首页是vue时的启动提速。App下开启分包，除在pages.json中配置分包规则外，还需要在manifest中设置在app端开启分包设置，详见：https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization

subPackages 节点接收一个数组，数组每一项都是应用的子包，其属性值如下：

| 属性  | 类型   | 是否必填 | 描述                                                         |
| :---- | :----- | :------- | :----------------------------------------------------------- |
| root  | String | 是       | 子包的根目录                                                 |
| pages | Array  | 是       | 子包由哪些页面组成，参数同 [pages](https://uniapp.dcloud.io/collocation/pages?id=pages) |

**注意：**

- `subPackages` 里的pages的路径是 `root` 下的相对路径，不是全路径。
- 微信小程序每个分包的大小是2M，总体积一共不能超过20M。
- 百度小程序每个分包的大小是2M，总体积一共不能超过8M。
- 支付宝小程序每个分包的大小是2M，总体积一共不能超过8M。
- QQ小程序每个分包的大小是2M，总体积一共不能超过24M。
- 字节小程序每个分包的大小是2M，总体积一共不能超过16M（字节小程序基础库 1.88.0 及以上版本开始支持，字节小程序开发者工具请使用大于等于 2.0.6 且小于 3.0.0 的版本）。
- 分包下支持独立的 `static` 目录，用来对静态资源进行分包。
- `uni-app`内支持对`微信小程序`、`QQ小程序`、`百度小程序`、`支付宝小程序`、`字节小程序(HBuilderX 3.0.3+)`分包优化，即将静态资源或者js文件放入分包内不占用主包大小。详情请参考：[关于分包优化的说明](https://uniapp.dcloud.io/collocation/manifest?id=关于分包优化的说明)
- 针对`vendor.js`过大的情况可以使用运行时压缩代码
    - `HBuilderX`创建的项目勾选`运行-->运行到小程序模拟器-->运行时是否压缩代码`
    - `cli`创建的项目可以在`package.json`中添加参数`--minimize`，示例：`"dev:mp-weixin": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch --minimize"`

**使用方法：**

假设支持分包的 `uni-app` 目录结构如下：

```
┌─pages               
│  ├─index
│  │  └─index.vue    
│  └─login
│     └─login.vue    
├─pagesA   
│  ├─static
│  └─list
│     └─list.vue 
├─pagesB    
│  ├─static
│  └─detail
│     └─detail.vue  
├─static             
├─main.js       
├─App.vue          
├─manifest.json  
└─pages.json            
    
```

则需要在 pages.json 中填写

```javascript
{
    "pages": [{
        "path": "pages/index/index",
        "style": { ...}
    }, {
        "path": "pages/login/login",
        "style": { ...}
    }],
    "subPackages": [{
        "root": "pagesA",
        "pages": [{
            "path": "list/list",
            "style": { ...}
        }]
    }, {
        "root": "pagesB",
        "pages": [{
            "path": "detail/detail",
            "style": { ...}
        }]
    }],
    "preloadRule": {
        "pagesA/list/list": {
            "network": "all",
            "packages": ["__APP__"]
        },
        "pagesB/detail/detail": {
            "network": "all",
            "packages": ["pagesA"]
        }
    }
}
```



## 分包预载配置

配置preloadRule后，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度

`preloadRule` 中，`key` 是页面路径，`value` 是进入此页面的预下载配置，每个配置有以下几项：

| 字段     | 类型        | 必填 | 默认值 | 说明                                                         |
| -------- | ----------- | ---- | ------ | ------------------------------------------------------------ |
| packages | StringArray | 是   | 无     | 进入页面后预下载分包的 `root` 或 `name`。`__APP__` 表示主包。 |
| network  | String      | 否   | wifi   | 在指定网络下预下载，可选值为：all（不限网络）、wifi（仅wifi下预下载） |

app的分包，同样支持preloadRule，但网络规则无效。

