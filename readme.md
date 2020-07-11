# 游戏内嵌页

## 成就百科
+ 线上地址：https://page.j3cx.com/wiki/1?player=浮烟
+ 测试地址：https://jx3box.github.io/?id=7089&player=浮烟@蝶恋花

## rewrite
```
rewrite ^/wiki/(\d+) /wiki/index.html?id=$1 permanent;
location /wiki {
    alias /www/wwwroot/wiki/;
}
location /macro/tops {
    alias /www/wwwroot/wiki/;
    index macros.html;
}
location /macro/details {
    alias /www/wwwroot/wiki/;
    index macro.html;
}
```