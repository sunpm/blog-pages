## 背景

作为一名前端工作人员，相信大家在开发系统的时候，经常有遇到需要这么一种需求，就是需要为用户保存上传的图片，很多小白遇到这个问题的时候，都会虎躯一震，以为会是一个棘手的问题，当你读完这篇文章的时候，你会发现都是你瞎操作了，真相就是这么简单，下面进入正题：

## 图片文件上传

现在很多项目实现在系统内保存图片，大多数只是在系统数据库内保存对应图片的url，而实际的图片资源会放在阿里等图片服务器上，当然，也有一些项目会选择在自己的数据库中保存图片base64格式的字符串，下面讲一些这两种方法的具体实现，实现以一个vue实例来说明：

![clipboard.png](https://segmentfault.com/img/bVbjIBf?w=498&h=335)

首先，我们先要从用户那里获取图片资源，这个时候，我们需要用到html的<input>标签，type值为file,指定input标签为文件类型的表单输入，并将其 accept属性设置为"image/*",指定只接受图片资源的文件；

```html
<input type="file" accept="image/*" />
```

接下来，我们就要获取用户选择的文件，当用户选择完文件的时候，就会触发input标签的change事件，我们可以通过监听该事件，并获取事件对象event，来获取图片文件：

```html
<input accept="image/*" style="display: none;" :name="'img-'+index" type="file" :id="'img-'+index"
       @change="fileChange($event,index)"/>
```

当点击获取文件后，我们可以通过$event对象，获取$event.target.files[0]来获取图片资源文件对象，至于为什么要加索引值，是因为文件上传input表单是支持多文件上传的，只需要在input标签上增加multiple属性；我们可以看看下图文件对象的一些属性：

![clipboard.png](https://segmentfault.com/img/bVbjMyA?w=516&h=162)

观察后发现，文件对象中存在一个size属性，表明图片的大小，我们可以通过验证该属性的值是否为空，来达到检验文件是否已经被我们获取到指定操作；

```js
fileChange(el, index) {
    if (!el.target.files[0].size) return;
}
```

至此，我们已经获取到我们想要的文件对象，接下来，我们实现图片压缩功能，命名为compress函数：

## 图片压缩

首先，我们要对我们的图片资源进行压缩，第一步肯定是获取图片资源呐，获取后对其简单的校验；

```js
compress(event) {
    var file = event.target.files;
    var reader = new FileReader(), imgFile = file[0];
    if (imgFile.type.indexOf('image') == 0) {
        reader.readAsDataURL(imgFile);
    } else {
        this.$Message.infor('文件类型仅为图片')
    }
}
```

这里可能有些人对FileReader对象不了解，[FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader) 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据，这里我们主要是用于监听onload来判断是否读取完成，读取完成时，我们把读取的结果赋值给我们新创建的Image对象，作为后面压缩的对象；这是时候，我们会发现，我们读取后的结果其实是一个base64格式的字符串
（很长..,我就意思意思）

![clipboard.png](https://segmentfault.com/img/bVbjMAB?w=716&h=109)

此时，我们会发现，base64的字符串在这里就出现了，它可以作为一个值复制给<img>标签的src属性，同样可以达到渲染图片的目标，因此也有人选择保存该格式的图片；但是着并非主流的方式，同时也会造成我们数据库过于冗余；

```js
compress(event) {
    var file = event.target.files;
    var reader = new FileReader(), imgFile = file[0];
    if (imgFile.type.indexOf('image') == 0) {
        reader.readAsDataURL(imgFile);
    } else {
        this.$Message.infor('文件类型仅为图片')
    }
    let img = new Image();
    reader.onload = function (e) {
        img.src = e.target.result;
    };
}
```

图片进行压缩，我们主要是利用canvas是实现该功能，通过canvas.getContext('2d').drawImage()方法重新绘制图片，并利用canvas.toDataURL(type, encoderOptions)方法返回一个包含图片展示的 dataURI，type为图片格式，encoderOptions为图片的清晰度，0到1递增，这个压缩的过程不难理解，思路就是获取图片的高宽，计算其像素大小，并与以一个自己设定的界限值进行比较，来看一下我们大小是否需要压缩，如例子中的ratio表示图片宽高的压缩比例 ，我们是可以实现不改宽高来修改图片的文件大小，通过drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)重新绘制图片，他可以传进九个参数,分别代表着绘制到上下文的元素，源图像的矩形选择框的左上角 X 坐标，源图像的矩形选择框的左上角 Y 坐标，源图像的矩形选择框的宽度，源图像的矩形选择框的高度，目标画布的左上角在目标canvas上 X 轴的位置，目标画布的左上角在目标canvas上 Y 轴的位置，在目标画布上绘制图像的宽度，在目标画布上绘制图像的高度；

![clipboard.png](https://segmentfault.com/img/bVbjMBI?w=284&h=273)

整个函数实现如下：

```js
compress(event) {
    var file = event.target.files;
    var reader = new FileReader(), imgFile = file[0];
    if (imgFile.type.indexOf('image') == 0) {
        reader.readAsDataURL(imgFile);
    } else {
        this.$Message.infor('文件类型仅为图片')
    }
    let img = new Image();
    reader.onload = function (e) {
        img.src = e.target.result;
    };
    var imgP = new Promise((resolve, reject) => {
        img.onload = () => {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext('2d');
            //    瓦片canvas
            var tCanvas = document.createElement("canvas");
            var tctx = tCanvas.getContext("2d");
            var initSize = img.src.length;
            var width = img.width;
            var height = img.height;
            //图片像素大于400万像素，计算压缩到400万以下
            var ratio;
            if ((ratio = width * height / 4000000) > 1) {
                ratio = Math.sqrt(ratio);
                width /= ratio;
                height /= ratio;
            } else {
                ratio = 1;
            }
            canvas.width = width;
            canvas.height = height;
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            //如果图片太大则使用瓦片绘制
            var count;
            if ((count = width * height / 1000000 > 1)) {
                count = ~~(Math.sqrt(count) + 1);//计算分成的瓦片数
                var nw = ~~(width / count);
                var nh = ~~(height / count);
                tCanvas.width = nw;
                tCanvas.height = nh;
                for (var i = 0; i < count; i++) {
                    for (var j = 0; j < count; j++) {
                        tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                        ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh)
                    }
                }
            } else {
                ctx.drawImage(img, 0, 0, width, height)
            }
            //进行最小压缩
            var ndata = canvas.toDataURL('image/jpeg', 0.3);
            tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
            resolve(ndata)
        }
    })
    return Promise.all([imgP])
}
```

## 图片拼接

需要注意的一点了，上面压缩的过程使用了瓦片绘制，可能会导致拼接过程中不紧凑而产生一条间隙，这个只需要调整一下绘制瓦片的坐标位置即可，该思想同样可以用于处理图片拼接的问题，可按照上面思路进行拼接，这里就不再举例子说明了，瓦片绘制就是图片拼接的过程；

## 图片旋转

压缩和拼接都讲完啦，在对图片进行处理，大家都有自己的见解了，或许你们还会这么说，那如果我上传图片的时候，像把那些横着排的照片，也放成竖起来，要怎么处理，竟调整图片放置的方向，该怎么处理，这就需要用到canvas的rotate方法去实现了，老方法，我们先获取图片对象，因为之前的压缩是放回一个promise对象，data参数为img的base64格式，所以我们把旋转函数的参数定义为图片来源；

```js
rotate(imgData) {
    var img = new Image();
    img.src = imgData;
    var imgR = new Promise((resolve, reject) => {
        img.onload = ()=>{
            console.log(img.width)
            console.log(img.naturalWidth)
        }
    })
    },
```

这里需要注意的是，每次我们新建一个image对象，想要获取其一些响应的属性值，一定要在onload方法中，确保图片已经加载完毕，上面的console中输出了两个值，width和naturalWidth，在某中条件下，他们会是相等的，比如我们上面，也会存在不一致的时候，因为naturalWidth返回的依然是图片的真实尺寸，而width返回的是给img标签规定的尺寸，所以我们需要获取的是naturalWidth；

```js
rotate(imgData) {
    var img = new Image();
    img.src = imgData;
    var imgR = new Promise((resolve, reject) => {
        img.onload = () => {
            let degree = 0, drawHeight, drawWidth;
            drawHeight = img.naturalHeight;
            drawWidth = img.naturalWidth;
            let maxSide = Math.max(drawWidth, drawHeight);
            if (maxSide === drawWidth) {//判断需要旋转的角度
                degree = 90;
            } else {
                degree = 360;
            }
            var canvas = document.createElement('canvas');
            canvas.width = drawWidth;
            canvas.height = drawHeight;
            var context = canvas.getContext('2d');
            context.translate(drawWidth/2,drawHeight/2)//这一行和下下一行的作用是修改选择中心
            context.rotate(degree*Math.PI/180);//旋转图片
            context.translate(-drawWidth/2,-drawHeight/2)//这一行和上上一行的作用是修改选择中心
            context.drawImage(img, 0, 0, drawWidth, drawHeight);
            var ndata = canvas.toDataURL('image/jpeg', 1);
            context.width = context.height = 0;
            resolve(ndata)

        }
    })

    return Promise.all([imgR])
}
```

旋转效果如下，宽大于高的，即是横排的图片，就会发生旋转；
![clipboard.png](https://segmentfault.com/img/bVbj2nj?w=523&h=189)

## 总结

在vue下利用canvas实现上述功能后，发现了canvas在图片处理这块的强大功能，对于前端上传图片性能的优化会有很大的帮助；经过上述的时间，发现要实现用户的上传图片前的裁剪功能，以及可以利用canvas来实现，主要是利用drawImage控制裁剪的长度，起点坐标就可以实现，着实好用！