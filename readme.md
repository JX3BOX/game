# 游戏内嵌页

## Dev
```
$ npm i
$ npm run serve
$ open localhost:8080/index.html?id=5081
$ open localhost:8080/flowers/5/10000?server=长安城&item=红玫瑰
```

## Test
### 百科
type 缺省时默认为 achievement
-   百科：https://page.j3cx.com/wiki/index.html?type=achievement&id=5081
-   普通：https://page.j3cx.com/wiki/index.html?type=item&id=5_7764  
-   书籍：https://page.j3cx.com/wiki/index.html?type=item&id=5_8029_482  
-   宠物：https://page.j3cx.com/wiki/index.html?type=pet&id=228  
### 花价
-   花价：https://page.j3cx.com/flowers/5/10000?server=长安城&item=红玫瑰

## Rewrite
```
    rewrite ^/flowers/(\d+)/(\d+)?(.*) /flower/?$3 permanent;
    rewrite ^/wiki/(\d+) /game/index.html?id=$1 permanent;
    rewrite ^/pet/(\d+) /game/index.html?type=pet&id=$1 permanent;
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
