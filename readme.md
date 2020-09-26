# 游戏内嵌页

## 访问地址
+ 成就百科：https://page.j3cx.com/wiki/index.html?type=achievement&id=5081
+ 物品百科：https://page.j3cx.com/wiki/index.html?type=item&id=67115_7764
type缺省时默认为achievement

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