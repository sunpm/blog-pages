# js给json对象添加、删除、修改属性

```html
<script type="text/javascript">
    //json对象
    var json={ "firstName":"Bill" , "lastName":"Gates"};
    //给json对象添加新的属性并赋值
    json.sex="man";
    //也可以如下添加新的属性并赋值
    json["sex"]="man";


    //删除json对象的firstName属性
    delete json.firstName;
    //也可以如下删除firstName属性的值
    delete json["firstName"];


    //修改json对象的firstName属性的值
    json.firstName="Thomas";
    //也可以如下修改firstName属性的值
    json["firstName"]="Thomas";
</script>
```

---------------------
版权声明：本文为CSDN博主「LLL_LH」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/LLL_liuhui/article/details/79525113