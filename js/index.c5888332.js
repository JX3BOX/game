(function(t){function e(e){for(var n,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={index:0},o={index:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-1b241f1a":"94ac45f6"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={"chunk-1b241f1a":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-1b241f1a":"887bdf03"}[t]+".css",o=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===n||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],h.parentNode.removeChild(h),r(i)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(h);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[t]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="https://console.cnyixun.com/static/game/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var h=l;i.push([1,"chunk-vendors"]),r()})({1:function(t,e,r){t.exports=r("c19f")},"17db":function(t,e,r){},2014:function(t,e,r){"use strict";r("17db")},c19f:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("5c96"),o=r.n(a),i=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),c=function(){return r.e("chunk-1b241f1a").then(r.bind(null,"dd3d"))};n["default"].use(i["a"]);var u=new i["a"]({mode:"history",routes:[{name:"wiki",path:"/",component:c},{path:"*",redirect:"wiki"}]}),s=function(){var t=this,e=t._self._c;return e("Fragment",[e("header",{staticClass:"m-header"},[e("ul",{staticClass:"m-header-left"},[e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"macro/")}},[t._v("宏库")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"jx3dat/")}},[t._v("插件")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"fb/")}},[t._v("副本")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"bps/")}},[t._v("职业")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"team/")}},[t._v("团队")])])]),e("ul",{staticClass:"m-header-right"},[e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"cj/")}},[t._v("成就")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"item/")}},[t._v("物品")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"share/")}},[t._v("捏脸")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"tool/")}},[t._v("工具")])]),e("li",[e("a",{attrs:{href:"".concat(t.rootPath,"bbs/")}},[t._v("茶馆")])])]),e("a",{staticClass:"m-header-center",attrs:{href:t.rootPath}},[e("img",{staticClass:"u-logo",attrs:{src:"/img/logo.png",alt:"JX3BOX"}}),e("strong",{staticClass:"u-title"},[t._v("JX3BOX")])])]),e("main",{staticClass:"m-main"},[e("div",{attrs:{id:"app"}},[e("Wiki")],1)]),e("div",{staticClass:"m-footer"},[t._v(" © "),e("a",{attrs:{href:t.rootPath}},[t._v("剑三魔盒")]),t._v(" [ "),e("a",{staticClass:"u-link",attrs:{href:t.rootPath}},[t._v(t._s(t.rootDomain))]),t._v(" ] ")])])},l=[],f=(r("9861"),r("ac1f"),r("841c"),r("5319"),r("3f08")),h=r("65c2"),d=function(){var t=this,e=t._self._c;return e("router-view")},p=[],m={name:"Wiki"},v=m,g=r("2877"),b=Object(g["a"])(v,d,p,!1,null,null,null),_=b.exports,y={name:"App",data:function(){return{params:new URLSearchParams(location.search)}},computed:{client:function(){var t="classic_yq"==this.params.get("L")?"origin":"std";return t},rootPath:function(){return"origin"==this.client?h["__OriginRoot"]:h["__Root"]},rootDomain:function(){return this.rootPath.replace(/^http[s\u017F]?:\/\//i,"").replace(/\/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*$/i,"")}},components:{Fragment:f["a"],Wiki:_}},P=y,F=(r("2014"),Object(g["a"])(P,s,l,!1,null,null,null)),w=F.exports;n["default"].config.productionTip=!1,n["default"].use(o.a),new n["default"]({router:u,render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=index.c5888332.js.map