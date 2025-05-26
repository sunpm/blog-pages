# 使用脚手架vue-cli安装依赖报错

```bash
➜ npm install dayjs uview-ui
npm WARN deprecated puppeteer@3.3.0: < 19.4.0 is no longer supported
npm ERR! code 1
npm ERR! path /Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer
npm ERR! command failed
npm ERR! command sh /var/folders/1p/3dxsr9hn6cq85d1bw6j0jmtm0000gn/T/install-d69deaeb.sh
npm ERR! ERROR: Failed to set up Chromium r756035! Set "PUPPETEER_SKIP_DOWNLOAD" env variable to skip download.
npm ERR! TypeError [ERR_INVALID_PROTOCOL]: Protocol "https:" not supported. Expected "http:"
npm ERR!     at new NodeError (node:internal/errors:387:5)
npm ERR!     at new ClientRequest (node:_http_client:177:11)
npm ERR!     at Object.request (node:https:357:10)
npm ERR!     at httpRequest (/Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer/lib/BrowserFetcher.js:402:17)
npm ERR!     at downloadFile (/Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer/lib/BrowserFetcher.js:262:21)
npm ERR!     at BrowserFetcher.download (/Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer/lib/BrowserFetcher.js:157:19)
npm ERR!     at async download (/Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer/install.js:54:3)
npm ERR!   -- ASYNC --
npm ERR!     at BrowserFetcher.<anonymous> (/Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer/lib/helper.js:94:19)
npm ERR!     at fetchBinary (/Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer/install.js:148:8)
npm ERR!     at download (/Users/pmun/Project/lizilaw/lawyer-pc-app/lawyer-user-app/node_modules/puppeteer/install.js:54:9) {
npm ERR!   code: 'ERR_INVALID_PROTOCOL'
npm ERR! }

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/pmun/.npm/_logs/2023-09-14T02_29_57_147Z-debug-0.log
```

![image-20230914103440044](https://media.sunpm.me/uPic/2023-09-14/10:34:40-HWAwp8_image-20230914103440044.png)

## 解决

在 stackoverflow 搜了一下，使用下面方法解决了

### **Mac**

```
export PUPPETEER_SKIP_DOWNLOAD='true'
```

### **Windows**

```
SET PUPPETEER_SKIP_DOWNLOAD='true'
```
