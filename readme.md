# 剑三百科
+ 境内测试地址：https://wiki.jx3box.com/?id=7089&player=苦瓜糖水@大姨妈
+ 境外测试地址：https://jx3box.github.io/?id=7089&player=浮烟@蝶恋花

## 🌏 成就请求
+ ***type*** : cj-成就,item-物品
+ ***id*** : 成就ID,ItemID
+ ***player*** : 角色名@服务器

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