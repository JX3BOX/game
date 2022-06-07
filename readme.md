# 游戏内嵌页

## Dev
```
$ npm i
$ npm run serve
```

## Test
### 百科
type 缺省时默认为 achievement

#### 正式服
- 百科：https://page.j3cx.com/index.html?type=achievement&id=5081
- 普通：https://page.j3cx.com/index.html?type=item&id=5_24428  
- 书籍：https://page.j3cx.com/index.html?type=item&id=5_8029_482  
- 宠物：https://page.j3cx.com/index.html?type=pet&id=228  

#### 怀旧服
- 成就：http://localhost:8080/?type=cj&id=493&L=classic_yq
- 物品：http://localhost:8080/?type=item&id=5_21&L=classic_yq
- 宠物：http://localhost:8080/?type=pet&id=1&L=classic_yq


### 花价
- 本地：http://localhost:8080/flowers/5/10000?server=长安城&item=红玫瑰
- 花价：https://page.j3cx.com/flowers/5/10000?server=长安城&item=红玫瑰

## Nginx
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

## rewrite
```
rewrite ^/game/(.*) /?$1 permanent;
```
