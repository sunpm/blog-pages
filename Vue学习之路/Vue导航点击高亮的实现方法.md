# Vue导航点击高亮的实现方法

## 选项卡，设置一个变量等于下标的添加类名

```vue
<template>
<ul class="menu-container">
    <router-link tag="li" :to="v.url" :class="[activeIndex === k ? 'menu-active' : '']" v-for="(v,k) in menuData" :key="k" @click="menuClick(k)">
        <p class="menu-text">{{v.name}} --- {{k}}</p>
    </router-link>
    </ul>
</template>

<script>
    let vm
    export default {
        name: 'menus',
        data () {
            return {
                menuData: [
                    {
                        name: '项目管理',
                        url: '/main/projectManage'
                    },
                    {
                        name: '监测机构信息',
                        url: '/main/monitoringInfo'
                    },
                    {
                        name: '创建人员',
                        url: '/main/userInfo'
                    },
                    {
                        name: '个人中心',
                        url: '/main/createProject'
                    }
                ],
                activeIndex: 0
            }
        },
        mounted () {
            vm = this
        },
        methods: {
            menuClick: (key) => {
                vm.activeIndex = key
            }
        }
    }
</script>
<style scoped>
    .menu-active{
        background-color: #f0f;
    }
</style>
```





## 路由切换修改类名

```vue
<template>
<div id="app">
    <router-link v-for="(item, index) in routerList" :key="index" :to="item.url">{{item.name}}</router-link>
    <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                routerList: [
                    {
                        name: '导航',
                        url: '/menus'
                    },
                    {
                        name: '首页',
                        url: '/'
                    }
                ]
            }
        }
    }
</script>

<style>
    .router-link-exact-active{
        background-color: #f0f;
    }
</style>
```

> 也就是说路由会自动把两个class添加到一个被激活的router link组件上,可以借助这些class来完成自定义样式
>
> 比如有一个`routerlink`，他的`to`是`/foo`，那么当当前页面的地址是`/foo `或者`/foo/xxx`的时候，这个`routerlink`都会被加上`router-link-active`
>
> 如果要精确匹配 `/foo`就是`/foo`不允许后缀，那么这个`routerlink`会被加上`router-link-exact-active`
>
> 简而言之 如果你没有特殊需求 请这样写css：
>
> ```css
> .router-link-exact-active {
>     ...
> }
> ```

