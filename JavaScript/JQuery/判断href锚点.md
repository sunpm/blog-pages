```javascript
let widthHref = window.location.href.split('#')[1];
$(obj).each(function (i) {
  if($(this).attr('id') == widthHref){
    $(this).click();
    return false;
  }
})
```



