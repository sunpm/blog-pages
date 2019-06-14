## prototype与面向对象取舍

使用prototype原型继承和使用面向对象，都可以实现闭包的效果。那么这两个的选择点，就是**方法会不会产生多个实例**。

例如，我们需要做一个闭包数组，并给他提供一个添加方法。

```javascript
!(function () {
  //原型继承写法
  var Validator = function(){
    this.cache = [];
  };
  Validator.prototype.add = function(item){
    this.cache.push(item);
  };
  var validator = new Validator(),validatorr = new Validator();
  validator.add("test1"); console.log(validator.cache);
  validatorr.add("test2"); console.log(validatorr.cache);
  //面向对象写法
  var Validator2 = {
    cache : [],
    add : function(item){
      this.cache.push(item);
    }
  };
  Validator2.add("test3"); console.log(Validator2.cache);
  Validator2.add("test4"); console.log(Validator2.cache);
})()
```

这两种写法都可以实现闭包，但是面向对象的写法，只能存在一个。我们无法对他进行初始化，而原型继承写法，我们则可以对他进行初始化操作。

所以当，我们认为这个方法，在整个程序中，是唯一的存在。我们可以使用面向对象的写法，如果可以存在多个，则使用prototype这种写法。



## 调用父类构造函数

继承关系的两个对象，在实例的过程中，可以通过修改指向，来调整调用构造函数。

```javascript
!(function () {
  var A = function (light) {
    this.light1 = light;
  };
  var B = function (light) {
    this.light = light;
    A.apply(this,arguments);//你需要手动调用A的构造方法
  };
  //给B赋值的同时，给A赋值
  B.prototype = new A();
  var C = new B(123);
  console.log(C.light);
  console.log(C.light1);
})()
```

## 单例模式

保证一个类仅有一个实例，并提供一个访问它的全局访问点。例如：线程池，全局缓存，登录浮窗。

首先我们需要把单例的逻辑代码单独提取，然后使用惰性单例的方式，也就是返回方法。只有在点击的时候，才会进行执行。

javascript的单例，跟类不一样。无需创建多余的构造函数这些，直接创建全局变量即可。

```javascript
!(function () {
  //管理单例的逻辑代码，如果没有数据则创建，有数据则返回
  var getSingle = function(fn){ //参数为创建对象的方法
    var result;
    return function(){ //判断是Null或赋值
      return result || (result = fn.apply(this,arguments));
    };
  };
  //创建登录窗口方法
  var createLoginLayer = function(){
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
  };
  //单例方法
  var createSingleLoginLayer = getSingle(createLoginLayer);

  //使用惰性单例，进行创建
  document.getElementById('loginBtn').onclick = function(){
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
  };
})()
```

## 策略模式

定义一系列的算法，把它们一个一个封装起来。将算法的使用与算法的实现分离开来。

javascript的策略模式很简单，把算法直接定义成函数即可。

```javascript
!(function () {
  //定义算法方法
  var strategies = {
    "S":function(salary){
      return salary * 4;
    },
    "A":function(salary){
      return salary * 3;
    },
    "B":function(salary){
      return salary * 2;
    }
  };
  //执行算法
  var calculateBouns = function(level,salary){
    return strategies[level](salary);
  };
  console.log(calculateBouns('S',2000));
})() 
```

### undefined终止循环

（写具体代码之前，先记录一个知识点）。当循环表达式为undefined时，循环会终止。

```javascript
!(function(){
  var cale = [1,2,3];
  for(var i= 0,validate;validate=cale[i];)
  {
    cale.shift();
    console.log(validate);
  }
})() //1,2,3
```

### 登录验证表单

下面写一个使用策略模式，制作的验证表单登录效果。

传统的表单登录效果，会在提交后进行一系列的判断验证。这样提交方法很庞大，而且缺少弹性，复用性也很差。

我们可以使用策略模式，来避免这些问题。

```html
<form action="post" id="registerForm">
  <input type="text" name="userName" />
  <input type="text" name="password" />
  <input type="text" name="phoneNumber" />
  <button>提交</button>
</form>
```

```javascript
!(function () {
  //定义验证规则，使用策略模式，直接通过 strategies[isNonEmpty]()可以访问
  var strategies = {
    isNonEmpty: function (value, errorMsg) { //不为空
      if (value === "") {
        return errorMsg;
      }
    },
    minLength: function (value, length, errorMsg) { //最小长度
      if (value.length < length) {
        return errorMsg;
      }
    },
    isMobile: function (value, errorMsg) { //手机号码格式
      if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
        return errorMsg;
      }
    }
  };
  //创建验证逻辑，使用闭包定义全局数组，存放验证方法
  var Validator = function () {
    this.cache = [];
  };
  //添加验证逻辑方法，参数：元素，验证名称，错误信息
  Validator.prototype.add = function (dom, rules) {
    var self = this;
    for (var i = 0, rule; rule = rules[i++];) {
      (function (rule) {
        var ary = rule.strategy.split(":"); //限制最小数值，进行分割。如没有:号，则直接返回
        var errorMsg = rule.errorMsg;
        self.cache.push(function () { //将操作方法封装到全局数组中
          var strategy = ary.shift(); //获取验证方法名称，并删除
          ary.unshift(dom.value); //往开头添加待验证元素
          ary.push(errorMsg); //添加验证失败错误信息
          return strategies[strategy].apply(dom, ary); //传递数组给方法，因为不涉及this，dom也可传递null
        });
      })(rule)
    }
  };
  //添加启动方法
  Validator.prototype.start = function () {
    //将数组中的方法，分别执行。数组undefined，则跳出循环
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
      var msg = validatorFunc();
      //又失败就进行跳出
      if (msg) {
        return msg;
      }
    }
  };
  //处理校验
  var validatorFunc = function () {
    var validator = new Validator(); //创建验证逻辑\
    //添加验证条件
    validator.add(registerForm.userName, [
      {
        strategy: 'isNonEmpty',
        errorMsg: '用户不能为空'
      }, {
        strategy: 'minLength:2',
        errorMsg: '用户不能少于2位'
      }]);
    validator.add(registerForm.password, [
      {
        strategy: 'minLength:6',
        errorMsg: '密码长度不能少于6位'
      }]);
    validator.add(registerForm.phoneNumber, [
      {
        strategy: 'isMobile',
        errorMsg: '手机号码格式不正确'
      }]);
    var errorMsg = validator.start();
    return errorMsg;
  };
  var registerForm = document.getElementById("registerForm");
  registerForm.onsubmit = function () {
    var errorMsg = validatorFunc();
    if (errorMsg) { //判断是否有这个参数
      alert(errorMsg);
      return false;
    }
  };
})()
```

果然，有逻辑的js，非常好玩。比CSS好玩多了。感觉有很多委托、多态的思想。

策略模式的优点与缺点

1. 有效的避免许多重复的复制粘贴作业。
2. 开闭原则的完美支持，算法完全独立易于切换、理解、拓展。
3. 算法复用性强
4. 使用组合和委托让Validator类拥有执行算法的能力，也是继承的一种轻便替代方式

缺点

1. 会增加许多策略类或策略对象。
2. 违反迪米特法则，会将strategy暴露给客户所有实现。

## 代理模式

为一个对象提供一个代用品或占位符，以便控制对它的访问。当客户不方便直接访问一个对象的时候，需要提供一个替身对象来控制对这个对象的访问。

代理模式分为：虚拟代理和保护代理

虚拟代理：把一些开销很大的对象，延迟到真正需要它的时候才去创建。

保护代理：用于控制不同权限的对象对目标对象的访问。

### 图片预加载

使用虚拟代理可以完成图片预加载功能，先用一张loading图片占位，然后用异步方式加载图片，等图片加载完毕后填充到img节点里。

因为javascript事件，均为异步事件。所以当执行proxyImage时，会先设置loading.gif，等图片加载完毕后，会执行myImage操作。

```javascript
var myImage = (function(){
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc:function(src){
      imgNode.src = src;
    }
  };
})();
//预加载方法
var proxyImage = (function(){
  var img = new Image();
  img.onload = function(){
    myImage.setSrc(this.src);
  }
  return {
    setSrc:function(src){
      myImage.setSrc("loading.gif");
      img.src = src;
    }
  };
})();
proxyImage.setSrc('实际图片.jpg'); //预加载
myImage.setSrc('实际图片'.jpg); //普通加载
```

注意：加载方法和预加载方法，必须使用立即执行函数，不然setSrc方法调用不到。

如上预加载功能，之所以使用代理模式，主要是为了避免违反，单一职责设计原则。

如不使用代理模式，会执行加载图片和预加载操作。当我们不需要预加载功能的时候，无法进行快速隔离。

### 虚拟代理中的惰性加载

将虚拟代理运用到惰性加载中，可以让真实的代码延迟到真正实用的时候才进行添加。

```javascript
var miniConsole = (function () {
  var cache = [];
  var handler = function (ev) { //监听按键事件
    if (ev.keyCode === 113) {
      var script = document.createElement('script');
      script.onload = function () {
        for (var i = 0, fn; fn = cache[i++];) {
          fn();
        }
      };
      script.src = 'minConsole.js';
      document.getElementsByTagName('head')[0].appendChild(script);
      document.body.removeEventListener('keydown', handler); //只加载一次
    }
  };
  document.body.addEventListener('keydown', handler, false);
  return {
    log: function () {
      var args = arguments;
      cache.push(function () {
        return miniConsole.log.apply(miniConsole, args);
      });
    }
  };
})();
miniConsole.log(11);
miniConsole = {
  log: function () {
    console.log(Array.prototype.join.call(arguments));
  }
};
```

### 缓存代理

缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，可以使用之前的计算结果。

例如使用缓存代理计算乘积

```javascript
var mult = function () {
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
}
//不使用缓存mult(2,3);
var proxyMult = (function () {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ','); //把参数放在一个字符串里
    if (args in cache) {
      return cache[args];
    }
    return cache[args] = mult.apply(this,arguments);
  };
})();
//使用缓存proxyMult(2,3)
```

### 代理工厂 

传入高阶函数可以为各种计算方法创建缓存代理。将计算方法传入专门用于创建缓存代理的工厂中，这样就可以创建缓存代理了。

这是使用策略模式，进行创建的一种写法。可以直接定义方法即可。

```javascript
var strate = {
  mult: function () {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i];
    }
    return a;
  },
  plus: function () {
    var a = 0;
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a + arguments[i];
    }
    return a;
  }
};
var createProxyFactory = function (fn) {
  var cache = {};
  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    return cache[args] = fn.apply(this, arguments);
  };
};
var proxyMult = createProxyFactory(strate["mult"]);
console.log(proxyMult(1,2,3,4));
```

## 观察者模式

定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知。

例如事件绑定，就是一个标准的观察者模式。

```javascript
document.body.addEventListener('click',function(){
  console.log(2);
},false);
document.body.click();
```

下面进行一个实际的例子，售楼处可以接受买房登记，登记后的用户如果有房源，则会逐一告知。 并且可以进行取消登记操作。

为了彻底结束耦合性，可以使用全局变量制作监听事件。

```javascript
var ObserverEvent = (function () {
  var clientList = [], listen, trigger, remove;
  listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  };
  trigger = function () {
    var key = Array.prototype.shift.call(arguments), fns = clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }
    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  };
  remove = function (key, fn) {
    var fns = clientList[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l];
        if (_fn === fn) {
          fns.splice(l, 1);
        }
      }
    }
  };
  return {
    listen:listen,
    trigger:trigger,
    remove:remove
  }
})();
ObserverEvent.listen('squareMeter88', fn1 = function (price) {
  console.log('价格=' + price);
});
ObserverEvent.listen('squareMeter100', function (price) {
  console.log('价格=' + price);
});
ObserverEvent.trigger('squareMeter88', 200000);
ObserverEvent.trigger('squareMeter100', 300000);
ObserverEvent.remove('squareMeter88', fn1);
ObserverEvent.trigger('squareMeter88', 200000);
```

当然这种售楼处只是一个例子，在现实中，登录页面登录后，会需要刷新各个模块的信息（头像、nav）这类。我们也可以使用观察者模式进行刷新操作。

我们直接改用调用方法即可，而且是完全的解耦合

```javascript
var header = (function () {
  ObserverEvent.listen('loginSucc', function (data) {
    header.setAvatar(data.avatar);
  });
  return {
    setAvatar: function (data) {
      console.log(data + "设置header成功");
    }
  }
})();
var nav = (function () {
  ObserverEvent.listen('loginSucc', function (data) {
    nav.setAvatar(data.avatar)
  });
  return {
    setAvatar: function (data) {
      console.log(data + '设置nav成功');
    }
  }
})();
var data = {};
data.avatar = "参数";
ObserverEvent.trigger('loginSucc', data);
```

观察者模式的优点很明显：时间上的解耦，对象之间的解耦。

## 命令模式

命令模式指的是一个执行某些特定事情的指令。常见的应用场景是：有时候需要向对象发送请求，但不知道接受者是谁，也不知道请求的操作是什么。

例如：订餐，客人需要给厨师发送请求，至于那个厨师做，做的步骤。客人不知道。这就是命令模式。

命令模式的一个简单例子

```javascript
//定义命令模式执行
var setCommand = function (button, func) {
  button.onclick = function () {
    func.execute();
  };
};
var MenuBar = {
  refresh: function () {
    console.log("刷新页面");
  }
};
var RefreshMenuBarCommand = function (receiver) {
  return {
    execute: function () {
      receiver.refresh();
    }
  }
};
var refreshMenuBarCommand = RefreshMenuBarCommand("MenuBar");
setCommand(button1,refreshMenuBarCommand);
```

命令模式的用处很大，也可以做撤销命令，回放这种功能。比如，我们把用户按键命令做一个封装，制作一个播放功能。

以下代码可以执行并记录按键，当点击按钮时，会执行按键对应动作。

```javascript
//定义按键动作
var Ryu = {
  W: function () {
    console.log("用户按下W");
  },
  S: function () {
    console.log("用户按下S");
  }
};
//创建命令
var makeCommand = function (receiver, state) {
  return function () {
    if(receiver[state])
      receiver[state]();
  }
};
//可执行按键Json
var commands = {
  "119": "W",
  "115": "S"
};
//保存按键记录
var commandStack = [];
document.onkeypress = function (ev) {
  var keyCode = ev.keyCode, command = makeCommand(Ryu, commands[keyCode]);
  if (command) {
    command();
    commandStack.push(command);
  }
};
//注册按键监听
document.getElementById("replay").addEventListener('click', function () {
  var commad;
  while (command = commandStack.shift()) {
    command();
  }
}, false);
```

### 宏命令

宏命令可以一次执行一组命令。我们定义了各种指令，定义了如何执行指令。就可以做成一组命令的这种模式了。

针对不同的步骤，也可以只用此方法。例如： 

```javascript
var macroCommand2 = new MacroCommand();
macroCommand2.add(macroCommand);
macroCommand2.execute();
```
可以指定不同命令。

```javascript
!(function () {
  var closeDoorCommand = {
    execute: function () {
      console.log("关门");
    }
  };
  var openPcCommand = {
    execute: function () {
      console.log("开电脑");
    }
  };
  var openQQCommand = {
    execute: function () {
      console.log("登录QQ");
    }
  };
  var MacroCommand = function(){
    return {
      commandsList:[],
      add:function(command){
        this.commandsList.push(command);
      },
      execute:function(){
        for(var i= 0,command;command=this.commandsList[i++];){
          command.execute();
        }
      }
    };
  };
  var macroCommand = new MacroCommand();
  macroCommand.add(closeDoorCommand);
  macroCommand.add(openPcCommand);
  macroCommand.execute();
})()
```

## 模板方法模式

模板方法是一种只需要继承就可以实现的非常简单的模式。封装了子类的算法框架，包含一些公共方法一级封装子类中的所有方法执行顺序。

咖啡与茶。咖啡的步骤：1.烧水，2.冲泡，3.倒进杯子，4.放牛奶。茶叶的步骤：1.烧水，2.浸泡，3.倒进杯子，4.加柠檬

我们分离不同点：2,4。然后使用抽象父类定义，并实现对应方法。其中的init方法，就是模板方法，因为他封装了子类算法框架就，作为一个算法的模板。

```javascript
!(function () {
  var Beverage = function(){};
  Beverage.prototype.boilWater = function(){ //烧水
    console.log("把水煮沸");
  };
  Beverage.prototype.brew = function(){}; //第二步，方法
  Beverage.prototype.pourInCup = function(){};
  Beverage.prototype.addCondiments=function(){};
  Beverage.prototype.init = function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  };
  //创建咖啡子类
  var Coffee = function(){};
  Coffee.prototype = new Beverage();
  Coffee.prototype.brew = function(){
    console.log("用沸水冲泡咖啡");
  };
  Coffee.prototype.pourInCup = function(){
    console.log("把咖啡倒进杯子");
  };
  Coffee.prototype.addCondiments = function(){
    console.log("加糖加牛奶");
  };
  var Coffee = new Coffee();
  Coffee.init();
})()
```

针对模板方法，有一些个性的子类，不打算接受模板约束。那么可以使用钩子方法来创建。

我们修改模板方法让他适应钩子方法。

```javascript
Beverage.prototype.customerWantsCondiments = function () {
  return true;
};
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  if (this.customerWantsCondiments()) {
    this.addCondiments();
  }
};
//创建咖啡子类
var Coffee = function () {
};
Coffee.prototype = new Beverage();
Coffee.prototype.customerWantsCondiments = function(){
  return window.confirm("请问需要调料吗");
}
```

## 享元模式 

享元模式的核心是运用共享技术来有效支持大量细粒度的对象。

例如，现在有50件男装和50件女装，分别需要模特穿上并且拍照。如果我们不使用享元模式，那么就需要new 100个模特。

使用享元模式，只需要new 2个模特，然后让他们穿上不同的衣服即可。

```javascript
!(function () {
  var Model = function (sex) {
    this.sex = sex;
  };
  Model.prototype.takePhoto = function () {
    console.log("sex=" + this.sex + " underwear=" + this.underwear);
  };
  var maleModel = new Model("male");
  var femaleModel = new Model("female");
  for(var i=1;i<=50;i++){
    maleModel.underwear = "underwear"+i;
    maleModel.takePhoto();
  }
})()
```

享元模式的使用取决于：一个程序中使用了大量相似对象。造成很大的内存开销。大多数状态是外部状态。可以用较少的功效对象取代大量对象。

### 对象池 

对象池维护一个装载空闲对象的池子，如果需要对象的时候，不是直接new，而是转从对象池里获取。如果没有空闲对象则创建，完成职责后再次进入池子。

我们做一个公用的对象池，来维护新建dom对象。

```javascript
!(function () {
  var objectPoolFactory = function (createObjFn) {
    var objectPool = [];
    return {
      create: function () {
        var obj = objectPool.length === 0 ? createObjFn.apply(this, arguments) : objectPool.shift();
        return obj;
      },
      recover: function (obj) {
        objectPool.push(obj);
      }
    };
  };
  var iframeFactory = objectPoolFactory(function () {
    var iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    iframe.onload = function () {
      iframe.onload = null;
      iframeFactory.recover(iframe);
    }
    return iframe
  });
  var iframe1 = iframeFactory.create();
  iframe1.src = "http://www.baidu.com";

  setTimeout(function(){
    var iframe2 = iframeFactory.create();
    iframe2.src = "http://www.baidu.com";
  },2000);
})()
```

## 职责链模式

使多个对象都有机会处理请求，从而避免请求的发送者和接受者之间的耦合关系。将对象形成一条链，并沿着这条链传递请求。

使用orderType和pay来控制流向。分别进行不同对象的流转。

```javascript
!(function () {
  var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
      console.log("500元定金");
    } else {
      order200(orderType, pay, stock);
    }
  };
  var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
      console.log("200元定金");
    } else {
      orderNormal(orderType, pay, stock);
    }
  };
  var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
      console.log("普通购买");
    } else {
      console.log("手机库存不足");
    }
  };
  order500(1,true,500);
})()
```

但是这种责任链体系，耦合度比较高，例如500对象与200对象，耦合度很高。

```javascript
!(function () {
  var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
      console.log("500元定金");
    } else {
      return "nextSuccessor";
    }
  };
  var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
      console.log("200元定金");
    } else {
      return "nextSuccessor";
    }
  };
  var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
      console.log("普通购买");
    } else {
      console.log("手机库存不足");
    }
  };
  var Chain = function(fn){
    this.fn = fn;
    this.success = null;
  };
  Chain.prototype.setNextSuccessor = function(successor){
    return this.success = successor;
  };
  Chain.prototype.passRequest = function(){
    var ret = this.fn.apply(this,arguments);
    if(ret === "nextSuccessor"){
      return this.success && this.success.passRequest.apply(this.success,arguments);
    }
  };
  var chainOrder500 = new Chain(order500);
  var chainOrder200 = new Chain(order200);
  chainOrder500.setNextSuccessor(chainOrder200);
  chainOrder500.passRequest(2,true,200);
})()
```

## 中介者模式

中介者模式的作用是解除对象与对象之间的紧耦合关系。增加中介者后，所有的相关对象都通过中介者对象来通信。

泡泡堂例子

```javascript
!(function () {
  var playerDirector = (function () {
    var players = {}, operations = {};
    operations.addPlayer = function (player) {
      var teamColor = player.teamColor;
      players[teamColor] = players[teamColor] || [];
      players[teamColor].push(player);
    };
    operations.removePlayer = function (player) {
      var teamColor = player.teamColor, teamPlayers = players[teamColor] || [];
      for (var i = teamPlayers.length - 1; i >= 0; i++) {
        if (teamPlayers[i] === player) {
          teamPlayers.splice(i, 1);
        }
      }
    };
    operations.changeTeam = function (player, newTeamColor) {
      operations.removePlayer(player);
      player.teamColor = newTeamColor;
      operations.addPlayer(player);
    };
    operations.playerDead = function (player) {
      var teamColor = player.teamColor, teamPlays = players[teamColor];
      var all_dead = true;
      for (var i = 0, player; player = teamPlays[i++];) {
        if (player.state !== "dead") {
          all_dead = false;
          break;
        }
      }
      if (all_dead === true) {
        for (var i = 0, player; player = teamPlays[i++];) {
          player.lose();
        }
        for (var color in players) {
          if (color != teamColor) {
            var teamPlayers = players[color];
            for (var i = 0, player; player = teamPlayers[i++];) {
              player.win();
            }
          }
        }
      }
    };
    var ReceiveMessage = function () {
      var message = Array.prototype.shift.call(arguments);
      operations[message].apply(this, arguments);
    };
    return {
      ReceiveMessage:ReceiveMessage
    };
  })();
  function Player(name, teamColor) {
    this.name = name;
    this.teamColor = teamColor;
    this.state = "alive";
  }
  Player.prototype.win = function () {
    console.log(this.name + " win ");
  };
  Player.prototype.lose = function () {
    console.log(this.name + " lose ");
  }
  Player.prototype.die = function () {
    this.state = "dead";
    playerDirector.ReceiveMessage("playerDead", this);
  };
  Player.prototype.remove = function () {
    playerDirector.ReceiveMessage("removePlayer", this);
  };
  Player.prototype.changeTeam = function (color) {
    playerDirector.ReceiveMessage("changeTeam", this, color);
  };
  var PlayerFacotry = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor);
    playerDirector.ReceiveMessage("addPlayer", newPlayer);
    return newPlayer;
  };

  //测试
  var player1 = PlayerFacotry("皮蛋","red"),
      player2 = PlayerFacotry("小乖","red");
  var player3 = PlayerFacotry("黑妞","blue"),
      player4 = PlayerFacotry("葱头","blue");
  player1.die();player2.die();
})()
```

中介者模式是迎合迪米特法则的一种实现。指一个对象应该尽可能的少了解另外的对象。如果对象之间的耦合性太高，一个对象改变后，会影响其他对象。

## 装饰者模式

装饰者模式可以动态的给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。

```javascript
!(function () {
  var plance = {
    fire:function(){
      console.log("发射普通子弹");
    }
  };
  var missileDecorator = function(){
    console.log("发射导弹");
  };
  var fire1 = plance.fire;
  plance.fire = function(){
    fire1();
    missileDecorator();
  };
  plance.fire();
})()
```

或者使用装饰函数（AOP）Function的after或者before

```java
!(function () {
  var plance = function () { };
  plance.prototype.fire = function () {
    console.log("发射普通子弹");
  };
  var missileDecorator = function () {
    console.log("发射导弹");
  };
  Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
      var ret = _self.apply(this, arguments);
      afterfn.apply(this, arguments);
      return ret;
    };
  };
  var pl = new plance();
  pl.fire = pl.fire.after(missileDecorator);
  pl.fire();
})()
```

装饰函数是一个很实用的功能，例如我们制作插件式的表单验证，就可以使用装饰函数。

```javascript
!(function () {
  var registerForm = document.getElementById("registerForm");
  Function.prototype.before = function(beforeFn){
    var _self = this;
    return function(){
      if(beforeFn.apply(this,arguments) === false){
        return;
      }
      return _self.apply(this,arguments);
    };
  }
  var validata = function () {
    if(registerForm.userName.value === ""){
      alert("用户名不能为空");
      return false;
    }
  };
  var formSubmit = function(){
    console.log("成功");
  }
  formSubmit = formSubmit.before(validata);
  registerForm.onsubmit = function(){
    formSubmit();
    return false;
  };
})()
```

### 代理模式OR装饰器模式

代理模式和装饰器模式相似的地方很多，都是有单独的一个对象提供间接访问。他们最大的不同就是设计的意图和目的。

代理模式的目的是：当直接访问本体不方便或者不符合需求时，为这个本体提供一个替代者。

装饰器模式的目的是：为对象动态加入一些行为。

例如图片预加载，代理提供预加载功能是调用原来的方法也就是跟本体做的事情一样，而装饰器模式则是添加新的职责和行为。

## 状态模式

状态模式关键是区分事物内部的状态，事物内部状态改变会带来事物行为的改变。

第一个例子：电灯开关，同样是按下开关，电灯亮或者不亮，表达的行为是不一样的。buttonWasPressed 方法是变化的点。

```javascript
!(function () {
  var LightEvent = {
    on:function(){
      console.log("关灯");
      this.state = "off";
    },
    off:function(){
      console.log("开灯");
      this.state = "on";
    }
  };
  var Light = function () {
    this.state = "off";
    this.button = null;
  };
  Light.prototype.init = function(){
    var button = document.createElement("button"),self=this;
    button.innerHTML = "开关";
    this.button = document.body.appendChild(button);
    this.button.onclick = function(){
      self.buttonWasPressed();
    };
  };
  Light.prototype.buttonWasPressed = function(){
    LightEvent[this.state].apply(this,arguments);
  };
  var light = new Light();
  light.init();
})()
```

上一个例子使用策略模式来完成的，我们来说一下策略模式与状态模式的区别

策略模式中各个策略类是平等又平行的，他们之间没有任何联系。状态类的行为早已被封装好了，改变行为发生在状态模式内部。

那么我是使用状态模式，来完成上面电灯的例子。

```javascript
!(function () {
  var delegate = function(client,delegation){
    return {
      buttonWasPressed:function(){
        return delegation.buttonWasPressed.apply(client,arguments);
      }
    };
  };
  var FSM = {
    off: {
      buttonWasPressed: function () {
        console.log("关灯");
        this.currState = this.onState;
      }
    },
    on: {
      buttonWasPressed: function () {
        console.log("开灯");
        this.currState = this.offState;
      }
    }
  };
  var Light = function () {
    this.offState = delegate(this,FSM.off);
    this.onState = delegate(this,FSM.on);
    this.currState = FSM.off;
    this.button = null;
  };
  Light.prototype.init = function () {
    var button = document.createElement("button"), self = this;
    button.innerHTML = "开关";
    this.button = document.body.appendChild(button);
    this.button.onclick = function () {
      self.currState.buttonWasPressed.call(self);
    };
  };
  var light = new Light();
  light.init();
})()
```




