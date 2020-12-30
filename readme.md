# 游戏内嵌页

## 访问地址
+ 成就百科：https://page.j3cx.com/wiki/index.html?type=achievement&id=5081
+ 物品百科：  
普通：https://page.j3cx.com/wiki/index.html?type=item&id=5_7764   
书籍：https://page.j3cx.com/wiki/index.html?type=item&id=5_8029_482  
type缺省时默认为achievement
+ 花价：https://page.j3cx.com/flowers/5/10000?name=%E8%8D%A7%E5%85%89%E8%8F%8C
/flower?server=长安城&item=绿玫瑰

## rewrite
```
rewrite ^/flowers/(\d+)/(\d+)?(.*) /flower/?$3 permanent;
rewrite ^/wiki/(\d+) /game/index.html?id=$1 permanent;
rewrite ^/item/(\d+)/(\d+) /game/index.html?type=item&id=$1_$2 permanent;
rewrite ^/item/(\d+)/(\d+)/(\d+) /game/index.html?type=item&id=$1_$2_$3 permanent;
location /game {
    add_header Cache-Control no-cache;
    expires 0;
    alias /www/wwwroot/jx3box/game/;
}
location /macro/tops {
    add_header Cache-Control no-cache;
    expires 0;
    alias /www/wwwroot/jx3box/game/;
    index macros.html;
}
location /macro/details {
    add_header Cache-Control no-cache;
    expires 0;
    alias /www/wwwroot/jx3box/game/;
    index macro.html;
}
location /flowers {
    add_header Cache-Control no-cache;
    expires 0;
    alias /www/wwwroot/jx3box/game/;
    index flower.html;
}
```
