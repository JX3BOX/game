# 游戏内嵌页

## 访问地址
+ 成就百科：https://page.j3cx.com/wiki/index.html?type=achievement&id=5081
+ 物品百科：  
普通：https://page.j3cx.com/wiki/index.html?type=item&id=5_7764   
书籍：https://page.j3cx.com/wiki/index.html?type=item&id=5_8029_482  
type缺省时默认为achievement

## rewrite
```
rewrite ^/wiki/(\d+) /wiki/index.html?id=$1 permanent;
rewrite ^/item/(\d+)/(\d+) /wiki/index.html?type=item&id=$1_$2 permanent;
rewrite ^/item/(\d+)/(\d+)/(\d+) /wiki/index.html?type=item&id=$1_$2_$3 permanent;
location /wiki {
    add_header Cache-Control no-cache;
    expires 0;
    alias /www/wwwroot/wiki/;
}
location /macro/tops {
    add_header Cache-Control no-cache;
    expires 0;
    alias /www/wwwroot/wiki/;
    index macros.html;
}
location /macro/details {
    add_header Cache-Control no-cache;
    expires 0;
    alias /www/wwwroot/wiki/;
    index macro.html;
}
```
