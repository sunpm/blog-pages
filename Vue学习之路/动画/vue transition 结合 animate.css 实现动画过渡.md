# vue transition 结合 animate.css 实现动画过渡

> 在vue组件中实现一些过渡动画是很常见的，有时候使用一些css库也是很正常的，今天就简单的说一下在vue组件中使用transition与animate.css结合的用法

1. 安装animate.css

   > cnpm install animate.css –save

   当然也可以将animate.css文件下载下来 
   [下载animate.css](https://raw.github.com/daneden/animate.css/master/animate.css) 
   放进assets文件夹以供调用

2. 调用animate.css

   > import ‘animate.css’

   或者

   > import ‘../../assets/animate.css’

3. 设置类名 
   在transition 标签中设置自定义css类名，详情看[这里](https://cn.vuejs.org/v2/guide/transitions.html) ,如下：

   ```vue
   <template>
       <div id="app">
           <button @click="show = !show">隐藏/显示</button>
            <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight" >
               <p v-if="show">hello word,I love China</p>
           </transition>
       </div>
   </template>
   <script>
       import $ from 'jquery'
       import 'animate.css'
       export default {
           data(){
               return {
                   show:true,
               }
           },
           components:{
               tabA,
               tabB
           }
       }
   </script>
   <style scoped>
       #app{
           margin-left: 500px;
       }
   </style>
   ```

   具体animate.css的api可以看这里，生动形象具体随意选择 [animate.css API](https://daneden.github.io/animate.css/)

   ---------------------
   版权声明：本文为CSDN博主「maindek」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
   原文链接：https://blog.csdn.net/maindek/article/details/81871960

