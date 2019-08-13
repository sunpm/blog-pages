文章参考：<https://www.npmjs.com/package/vue-cookies>

首先执行 ：

```bash
npm install vue-cookies --save
```

在main.js全局引用

```js
import Vue from 'Vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
```

```js
// require
var Vue = require('vue')
Vue.use(require('vue-cookies'))

// es2015 module
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// set default config
VueCookies.config('7d')

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');
```

## Api

- Set a cookie

```js
this.$cookies.set(keyName, value[, expireTimes[, path[, domain[, secure]]]])   //return this
```

- Get a cookie

```js
this.$cookies.get(keyName)       // return value                             
```

- Remove a cookie

```js
this.$cookies.remove(keyName [, path [, domain]])   // return  false or true , warning： next version return this； use isKey(keyname) return true/false,please
```

- Exist a `cookie name`

```js
this.$cookies.isKey(keyName)        // return false or true
```

- Get All `cookie name`

```js
this.$cookies.keys()  // return a array
```

## Example Usage

set expire times

**Suppose the current time is : Sat, 11 Mar 2017 12:25:57 GMT**

**Following equivalence: 1 day after, expire**

**Support chaining sets together**

```js
// default expire time: 1 day
this.$cookies.set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX")
        // number + d , ignore case
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX","1d")
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX","1D")
        // Base of second
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX",60 * 60 * 24)
        // input a Date, + 1day
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", new Date(2017, 03, 12))
        // input a date string, + 1day
        .set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX", "Sat, 13 Mar 2017 12:25:57 GMT")
```

set expire times, input number type

```js
this.$cookies.set("default_unit_second","input_value",1);            // 1 second after, expire
this.$cookies.set("default_unit_second","input_value",60 + 30);      // 1 minute 30 second after, expire
this.$cookies.set("default_unit_second","input_value",60 * 60 * 12); // 12 hour after, expire
this.$cookies.set("default_unit_second","input_value",60 * 60 * 24 * 30); // 1 month after, expire
```

set expire times - end of browser session

```js
this.$cookies.set("default_unit_second","input_value","0");          // end of session - use string!
```

set expire times , input string type

| Unit | full name |
| :--- | :-------- |
| y    | year      |
| m    | month     |
| d    | day       |
| h    | hour      |
| min  | minute    |
| s    | second    |

**Unit Names Ignore Case**

**not support the combination**

**not support the double value**

```js
this.$cookies.set("token","GH1.1.1689020474.1484362313","60s");  // 60 second after, expire
 
this.$cookies.set("token","GH1.1.1689020474.1484362313","30MIN");  // 30 minute after, expire, ignore case
 
this.$cookies.set("token","GH1.1.1689020474.1484362313","24d");  // 24 day after, expire
 
this.$cookies.set("token","GH1.1.1689020474.1484362313","4m");  // 4 month after, expire
 
this.$cookies.set("token","GH1.1.1689020474.1484362313","16h");  // 16 hour after, expire
 
this.$cookies.set("token","GH1.1.1689020474.1484362313","3y");  // 3 year after, expire
 
 
 
// input date string 
 
this.$cookies.set('token',"GH1.1.1689020474.1484362313", new Date(2017,03,13).toUTCString());
 
this.$cookies.set("token","GH1.1.1689020474.1484362313", "Sat, 13 Mar 2017 12:25:57 GMT ");
```

set expire support date

```js
var date = new Date;
date.setDate(date.getDate() + 1);
this.$cookies.set("token","GH1.1.1689020474.1484362313", date);
```

set never expire

```js
this.$cookies.set("token","GH1.1.1689020474.1484362313", Infinity);  // never expire
// never expire , only -1,Other negative Numbers are invalid
this.$cookies.set("token","GH1.1.1689020474.1484362313", -1);
```

set other arguments

```js
// set path
this.$cookies.set("use_path_argument","value","1d","/app");  
 
// set domain
this.$cookies.set("use_path_argument","value",null, null, "domain.com");   // default 1 day after,expire
 
// set secure
this.$cookies.set("use_path_argument","value",null, null, null,true);
```

other operation

```js
// check a cookie exist
this.$cookies.isKey("token")
 
// get a cookie
this.$cookies.get("token");
 
// remove a cookie
this.$cookies.remove("token");
 
// get all cookie key names, line shows
this.$cookies.keys().join("\n"); 
 
// vue-cookies global
[this | Vue | window].$cookies.[method]
```

## Warning

**$cookies key names Cannot be set to ['expires','max-age','path','domain','secure']**

## explain

**vue-cookies no dependencies, It can exist independently, Friendly to vuejs**

```js
window.$cookies.get
window.$cookies.set
window.$cookies.isKey
window.$cookies.remove
window.$cookies.keys
```