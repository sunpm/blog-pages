# this指向

> this是谁和函数在哪里定义的和在哪里执行的都没有任何关系

1. 函数执行，首先看函数名前面是否有"."，有的话，"."前面是谁，this就是谁，没有的话this就是windo	

   ```js
   function fn () {
       console.log(this)
   }
   
   let obj = { fn: fn }
   
   fn() // this -> window
   obj.fn() // thit -> obj
   
   function sum () {
       // this -> window
       fn()
   }
   
   sum() // this -> window
   
   let oo = {
       //this -> oo
       sum: function () {
           fn()
       }
   }
   oo.sum() //this -> window
   ```
   > 你以为的，你以为的，就是你以为的
   
2. 自执行函数中的this永远是window

3. 给元素的某一个事件绑定方法，当事件触发的时候，执行对应的方法，方法中的this是当前的元素





