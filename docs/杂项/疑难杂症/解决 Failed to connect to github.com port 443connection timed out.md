# 解决 Failed to connect to github.com port 443:connection timed out



![img](https://cdn.nlark.com/yuque/0/2022/png/322441/1641435066694-e0149dd1-d12b-4e7e-bf3b-1f39762e20d5.png)



重新设置代理，将你的代理端口号，设置上去。 ps: 我的代理端口号 7890 设置如下： 

```bash
git config --global http.proxy [http://127.0.0.1](http://127.0.0.1/):7890
git config --global https.proxy [http://127.0.0.1](http://127.0.0.1/):7890
```

