# [vue播放video插件vue-video-player实现hls， rtmp播放全过程](https://www.cnblogs.com/wr1991/p/9957147.html)

### 1. 安装插件

```bash
npm install vue-video-player -S
```

### 2.配置插件 
在main.js里添加

```js
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
```

### 3.使用插件 
在vue的组件页面里

```vue
<template>
    <video-player  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"
                  ></video-player>
</template>
<script>
    export default {
        name: 'BusImg',
        data () {
            return {
                // 视频播放
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    techOrder: ['flash', 'html5'],      // 兼容顺序
                    flash: {
                        hls: { withCredentials: false },
                        swf: './static/media/video-js.swf'         // 引入静态文件swf
                    },
                    html5: { hls: { withCredentials: false } },
                    sources: [{ // 流配置，数组形式，会根据兼容顺序自动切换
                        type: 'rtmp/hls',
                        src: 'rtmp://192.168.1.199:10935/hls/stream_1'
                    }, {
                        withCredentials: false,
                        type: 'application/x-mpegURL',
                        src: 'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8'
                    }],
                    poster: "", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        }
    }
</script>
```

## 注意点

下面说说用这个插件来直播的一些坑和注意点吧：

首先，常用的 demo 在 `vue-video-player` 中官方已经给出了，按要求来就可以，其中

1. 如果需要播放 HLS 流，需要安装 [videojs-contrib-hls](https://github.com/videojs/videojs-contrib-hls) 插件，非原生支持的浏览器，直播服务端需要开启 CORS
2. 如果需要播放 RTMP 流，需要安装 [videojs-flash](https://github.com/videojs/videojs-flash) 插件
3. 如果两个流都需要播放，flash 插件需要安装到 hls 插件之前
4. 安装vue-video-player插件一定要用npm安装，不可使用cnpm安装，否则会报“The "flash" tech is undefined. Skipped browser support check for that tech”

