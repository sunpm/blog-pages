# 解决uni实例没有set()方法修改数组和对象数据

## 自己的解决方法

![1539844389392](https://ws1.sinaimg.cn/large/006tKfTcgy1g0r0nirznej30fb068dgb.jpg) 

> 生命周期 mounted的时候 定义一个全局变量  = this 
>
> 看看这个this是不是指向当前vue实例

![1539844440066](https://ws2.sinaimg.cn/large/006tKfTcgy1g0r0njoo5nj304o0203yc.jpg)

![1539844470949](https://ws3.sinaimg.cn/large/006tKfTcgy1g0r0nld0v6j30jm0nbacj.jpg)

> 指向实例了

然后 `vm.$set()`就可以使用`Vue.$set()`的方法了

## 官方回答

![img](http://olv6wm3nj.bkt.clouddn.com/18-3-19/38442253.jpg)![img](http://olv6wm3nj.bkt.clouddn.com/18-3-19/52644173.jpg)

> 因为vue实现双向数据绑定的机制是数据劫持，也就是在所有对象上有个`Object.defineProperty()`方法，通过监听`set`，`get`方法去实现，而数组没有这两个方法，所以就不会更新`view`；解决方案就是，需要我们主动通知`vue`；

##### 解决方案1

```javascript
methods:{
    change(){
        this.aas[3] = 444;
        // 在vm实例上通知
        vm.$set(this.aas,3,this.aas[3])
    }
}
```

##### 解决方案2

```javascript
methods:{
    change(){
        this.aas[3] = 444;
        // 在全局对象上通知
        Vue.set(this.aas,3,this.aas[3])
    }
}
```

##### 解决方案3

```javascript
methods:{
    change(){
        // vue本身可以监听到数组的一些方法,例如:
        // push(),pop(),shift(),unshift(),splice(),sort(),reverse()
        this.aas.splice(3,1,"444");
    }
}
```

