(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],m=0,p=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://console.cnyixun.com/static/wiki/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("5c96"),i=n.n(a),r=n("2ba4"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Content",{ref:"content",attrs:{query:t.query},on:{setPostId:t.setPostId}}),n("Relation",{ref:"relation",attrs:{query:t.query}}),n("Revision",{ref:"revision",attrs:{query:t.query},on:{setPostId:t.setPostId}}),n("Comment",{ref:"comment",attrs:{query:t.query}})],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-content-wrapper"},[n("div",{staticClass:"m-meta"},[n("span",{staticClass:"u-title"},[n("img",{staticClass:"u-icon",attrs:{src:t.resolveIconPath(t.achievement.IconID)},on:{"~error":function(e){return t.iconErrorHandler(e)}}}),n("span",{staticClass:"u-text"},[t._v(t._s(t.achievement.Name))])]),t._m(0)]),n("div",{staticClass:"m-block m-content"},[n("div",{staticClass:"m-warning",class:{hide:!t.warning}},[t._v(" ❌ 您的浏览器版本太低,将无法正常使用本应用 ")]),n("div",{staticClass:"m-title",attrs:{id:"title"}},[n("span",{staticClass:"u-label"},[t._v("✔️ 成就攻略")]),n("a",{staticClass:"u-zhtr",class:{on:t.isTW},attrs:{id:"translator"},on:{click:t.translateHandler,"~click":function(e){return t.translateTrigger(e)}}},[t._v(" 🌸[ "),n("span",{staticClass:"u-tr"},[t._v("繁體")]),n("span",{staticClass:"u-cn"},[t._v("简体")]),t._v(" ] ")]),n("span",{staticClass:"u-star"},[n("span",[t._v("难度")]),n("span",{attrs:{id:"stars"}},[t._v(t._s(this.stars))])]),n("span",{staticClass:"u-date"},[n("span",[t._v("最后更新于")]),n("em",{attrs:{id:"updatetime"}},[t._v(t._s(this.updatetime))])]),n("a",{staticClass:"u-edit",class:{on:t.isEditMode},attrs:{id:"edit"},on:{click:function(e){return t.editHandler(e)}}},[t._v("📝编辑修订")])]),n("div",{staticClass:"m-section u-content",class:{"u-null":t.isnull,isEditable:t.isEditMode,hide:t.isTW},attrs:{contenteditable:!!t.isEditMode,id:"content"},on:{"~input":function(e){return t.changeHandler(e)}}},[t.content?n("Article",{attrs:{content:t.content}}):n("div",[t._v(" 💧 暂无攻略 , "),n("a",{staticClass:"u-edit",on:{click:function(e){return t.editHandler(e)}}},[t._v("我来写")])])],1),n("div",{staticClass:"m-section u-content",class:{hide:!t.isTW},attrs:{id:"content-tw"},domProps:{innerHTML:t._s(t.content_tw)}}),n("div",{staticClass:"m-tips",class:{hide:!t.isEditMode}},[t._v(" 游戏内仅支持简易文本修订,如需上传图片等,请至"),n("a",{attrs:{href:"https://www.jx3box.com"}},[t._v("JX3BOX网站")]),t._v("操作 ")]),n("div",{staticClass:"m-author isEditable",class:{hide:!t.isEditMode}},[n("div",{staticClass:"u-level"},[t._v(" 难度"),n("span",[t._v("(1-5)")]),t._v(" : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.publish.level,expression:"publish.level"}],attrs:{type:"number",id:"level",min:"1",max:"5"},domProps:{value:t.publish.level},on:{input:function(e){e.target.composing||t.$set(t.publish,"level",e.target.value)}}})]),n("div",{staticClass:"u-author"},[t._v(" 作者 : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.publish.author,expression:"publish.author"}],attrs:{type:"text",id:"author",autocomplete:"off"},domProps:{value:t.publish.author},on:{input:function(e){e.target.composing||t.$set(t.publish,"author",e.target.value)}}})]),n("div",{staticClass:"u-remark"},[t._v(" 修订说明 : "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.publish.remark,expression:"publish.remark"}],attrs:{type:"text",id:"remark",autocomplete:"off"},domProps:{value:t.publish.remark},on:{input:function(e){e.target.composing||t.$set(t.publish,"remark",e.target.value)}}})]),n("div",{staticClass:"u-btn"},[n("a",{staticClass:"u-btn-cancel",attrs:{id:"cancel"},on:{click:function(e){return t.cancelHandler(e)}}},[t._v("取消")]),n("a",{staticClass:"u-btn-submit",attrs:{id:"submit"},on:{click:function(e){return t.submitHanlder(e)}}},[t._v("提交")])])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"u-group"},[n("em",[t._v("【意见反馈QQ群】")]),n("b",[t._v("614370825")])])}];n("99af"),n("d3b7"),n("38cf");function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{polished:!0,separator:"-"},n=new Date(1e3*parseInt(t)),s=n.getFullYear(),a=n.getMonth()+1,i=n.getDate(),r=e.polished?"".concat(s).concat(e.separator).concat(p(a)).concat(e.separator).concat(p(i)):"".concat(s).concat(e.separator).concat(a).concat(e.separator).concat(i);return r}function p(t){return t<10?"0"+t:t}var d=m,v=(n("c975"),n("ac1f"),function(){var t=window.navigator.userAgent.toLowerCase(),e={isPC:!0,isMobile:!1,platform:"pc"},n=document.documentElement.className,s=["micromessenger","android","iphone","symbianOS","windows phone","ipad","ipod"],a=["wx","android","iphone","symbian","wp","ipad","ipod"],i=(function(){for(var i=0;i<s.length;i++)if(t.indexOf(s[i])>0){e.isPC=!1,e.isMobile=!0,e.platform=a[i],n+=" ua-mobile ua-"+a[i],document.documentElement.className=n;break}e.isPC&&(n+=" ua-pc",document.documentElement.className=n)}(),/(micromessenger|opr|edge|firefox)[ \/]([\w.]+)/.exec(t)||/(chrome)[ \/]([\w.]+)/.exec(t)||/(safari)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||/(trident).+rv:(\w.)+/.exec(t)||[]),r={micromessenger:"wx",opr:"oprea",edge:"edge",firefox:"firefox",chrome:"chrome",safari:"safari",trident:"ie",msie:"ie"};(function(){var t=i[1];e.browser=r[t];var s=i[2];e.version=parseInt(s),n+=" browser-"+e.browser,"ie"==e.browser&&(e.isIE=!0,n+=" ie-"+e.version),document.documentElement.className=n})();return window._ua=e,e}),_=(n("a15b"),n("b85c")),h=n("d239"),f=function(t){if(t.length){var e,n=new Array(t.length),s=-1,a=Object(_["a"])(t);try{for(a.s();!(e=a.n()).done;){var i=e.value;s=h["cn"].indexOf(i),s>-1?n.push(h["tw"][s]):n.push(i)}}catch(r){a.e(r)}finally{a.f()}return n.join("")}return""},g=n("ee8f"),C=g.JX3BOX,y=g.Utils,b=n("bc3a"),k=n("2ef0"),w=n("4328"),P={name:"Content",props:["query"],data:function(){return{achievement:{},post_id:null,post:{},isEditMode:!1,isChanged:!1,isTW:!1,publish:{level:1,author:this.$options.filters.playerName(this.query.player),remark:""},ua:{},content_tw:""}},computed:{stars:function(){return this.post?this.renderStars(this.post.level):"⭐️⭐️⭐️⭐️⭐️"},updatetime:function(){return this.post?d(this.post.updated):"0000-00-00"},content:function(){return this.post&&k.get(this.post,"content")&&y.resolveImagePath(k.get(this.post,"content"))},isnull:function(){return!this.post.content},warning:function(){return"ie"==this.ua.browser&&this.ua.version<9}},methods:{setPostId:function(t){this.post_id=t,this.$emit("setPostId",t)},renderStars:function(t){return"⭐️".repeat(this.resolveLevelValue(t))},editHandler:function(t){t.preventDefault(),this.isTW=!1,this.isEditMode=!0},cancelHandler:function(t){t.preventDefault(),this.isEditMode=!1},submitHanlder:function(t){var e=this;if(t.preventDefault(),this.isChanged)if(this.publish.remark){var n=this.resolveLevelValue(this.publish.level?this.publish.level:this.post.level),s=this.$options.filters.playerName(this.publish.author);b({method:"POST",url:"".concat(C.__helperUrl,"api/achievement/").concat(this.query.id,"/post"),headers:{Accept:"application/prs.helper.v2+json"},data:w.stringify({post:{level:n,user_nickname:s,content:document.getElementById("content").innerHTML,remark:this.publish.remark}})}).then((function(t){t=t.data,200===t.code?alert("✔️ 提交成功,请等待审核"):alert("⚠️ ".concat(t.message))})).catch((function(t){alert("⚠️ 网络异常,提交失败")})).finally((function(){e.isEditMode=!1}))}else alert("请简单描述本次修订说明");else alert("没有任何改动，请勿滥提交")},changeHandler:function(t){this.isChanged=!0},translateHandler:function(t){t.preventDefault(),this.isTW=!this.isTW},translateTrigger:function(){this.content_tw=f(this.content)},stat:function(t,e){b.post("".concat(C.__spider,"jx3stat/cj"),{cjid:t,title:e||"----",ua:JSON.stringify(this.ua)})},resolveLevelValue:function(t){return Math.min(Math.max(1,parseInt(t)),5)},get_achievement_newest_post:function(){var t=this;b({url:"".concat(C.__helperUrl,"api/achievement/").concat(this.query.id,"/post"),headers:{Accept:"application/prs.helper.v2+json"}}).then((function(e){t.post=e.data.data.post||{},t.publish.level=t.resolveLevelValue(k.get(t.post,"level")),t.achievement=e.data.data.achievement,t.setPostId(t.post.id)})).catch((function(e){t.isnull=!0,t.post.content="⚠️ 数据加载异常"})).finally((function(){t.stat(t.query.id,t.achievement.Name)}))},get_achievement_post:function(){var t=this;this.post_id&&b({url:"".concat(C.__helperUrl,"api/achievement/post/").concat(this.post_id),headers:{Accept:"application/prs.helper.v2+json"}}).then((function(e){t.post=e.data.data.post||{},t.publish.level=t.resolveLevelValue(k.get(t.post,"level"))})).catch((function(e){t.isnull=!0,t.post.content="⚠️ 数据加载异常"}))},resolveIconPath:function(t){return t?C.__iconPath+"icon/"+t+".png":C.__imgPath+"image/common/nullicon.png"},iconErrorHandler:function(t){t.target.src=C.__imgPath+"image/common/nullicon.png"}},mounted:function(){this.ua=v(),this.query.id&&this.get_achievement_newest_post()},watch:{post_id:function(){this.get_achievement_post()}}},x=P,S=n("2877"),M=Object(S["a"])(x,l,u,!1,null,null,null),I=M.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-block m-revision",attrs:{id:"revision"}},[t._m(0),n("div",{staticClass:"m-section"},[null===t.versions?n("span",[t._v("Loading...")]):t._e(),!1===t.versions?n("span",[t._v("⚠️ 数据加载异常")]):t._e(),t.versions&&!t.versions.length?n("span",[t._v("💧 暂无数据")]):t._e(),t.versions&&t.versions.length?n("table",{attrs:{id:"histories"}},[t._m(1),t._l(t.versions,(function(e,s){return n("tr",{key:s,staticClass:"history"},[n("td",[n("span",{staticClass:"u-version",class:{bold:t.post_id==e.id},domProps:{textContent:t._s("v"+(t.versions.length-s))},on:{click:function(n){return t.setPostId(e.id)}}})]),n("td",[t._v(t._s(t._f("dateFormat")(e.updated)))]),n("td",{domProps:{textContent:t._s(e.user_nickname)}}),n("td",{domProps:{textContent:t._s(e.remark)}})])}))],2):t._e()])])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-title",attrs:{id:"title"}},[n("span",{staticClass:"u-label"},[t._v("📄 历史版本")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("版本")]),n("th",[t._v("更新时间")]),n("th",[t._v("贡献者")]),n("th",[t._v("修订说明")])])}],q=n("ee8f"),O=q.JX3BOX,j=n("bc3a"),H={name:"Revision",props:["query"],data:function(){return{versions:null,post_id:null}},computed:{},methods:{setPostId:function(t){this.post_id=t,this.$emit("setPostId",t)},getVersions:function(){var t=this;j({method:"GET",url:"".concat(O.__helperUrl,"api/achievement/").concat(this.query.id,"/versions"),headers:{Accept:"application/prs.helper.v2+json"}}).then((function(e){e=e.data,200===e.code&&(t.versions=e.data.versions)}),(function(){t.versions=!1}))}},mounted:function(){this.getVersions()}},$=H,L=(n("bb51"),Object(S["a"])($,E,N,!1,null,null,null)),T=L.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRelations,expression:"hasRelations"}],staticClass:"m-block m-boss",attrs:{id:"relation"}},[n("div",{staticClass:"m-title",attrs:{id:"title"}},[t._m(0),n("span",{staticClass:"u-boss",class:{on:!t.isPrimary},on:{click:t.bossHandler}},[t._v("BOSS属性参考")])]),n("div",{staticClass:"m-section",class:{hide:!t.isPrimary}},[null===t.relations?n("span",[t._v("Loading...")]):t._e(),!1===t.relations?n("span",[t._v("⚠️ 数据加载异常")]):t._e(),t.relations&&!t.relations.length?n("span",[t._v("💧 无相关数据")]):t._e(),t.relations&&t.relations.length?n("ul",{staticClass:"m-relations"},t._l(t.relations,(function(e,s){return n("li",{key:s},[n("a",{staticClass:"u-title",attrs:{href:t.resolveCjLink(e.ID)}},[n("img",{staticClass:"u-icon",attrs:{src:t.resolveIconPath(e.IconID)},on:{"~error":function(e){return t.iconErrorHandler(e)}}}),n("span",{staticClass:"u-text"},[t._v(t._s(e.Name))])])])})),0):t._e()]),n("ul",{staticClass:"m-section m-bossinfo",class:{hide:t.isPrimary}},[n("li",{staticClass:"u-id"},[t._v("ID:"+t._s(t.npc.ID))]),n("li",{staticClass:"u-name"},[t._v(t._s(t.npc.Name))]),n("li",{staticClass:"u-desc"},[t._v("称谓"),n("em",[t._v("Title")]),t._v(t._s(t.npc.Title))]),n("li",{staticClass:"u-desc"},[t._v("等级"),n("em",[t._v("Level:")]),t._v(t._s(t.npc.Level))]),n("li",{staticClass:"u-desc"},[t._v("强度"),n("em",[t._v("Intensity")]),t._v(t._s(t.npc.Intensity))]),n("li",{staticClass:"u-desc"},[t._v("地图"),n("em",[t._v("MapName")]),t._v(t._s(t.npc.MapName))]),n("li",{staticClass:"u-desc"},[t._v("备注"),n("em",[t._v("_Notation")]),t._v(t._s(t.npc._Notation))]),n("li",{staticClass:"u-desc"},[t._v("血量"),n("em",[t._v("MaxLife")]),t._v(t._s(t.npc.MaxLife))]),n("li",{staticClass:"u-desc"},[t._v("蓝量"),n("em",[t._v("MaxMana")]),t._v(t._s(t.npc.MaxMana))]),n("li",{staticClass:"u-desc"},[t._v("跑速"),n("em",[t._v("RunSpeed")]),t._v(t._s(t.npc.RunSpeed))]),n("li",{staticClass:"u-desc"},[t._v("移速"),n("em",[t._v("WalkSpeed")]),t._v(t._s(t.npc.WalkSpeed))]),n("li",{staticClass:"u-desc",attrs:{title:"攻击补偿距离/64"}},[t._v(" 体积"),n("em",[t._v("TouchRange")]),t._v(t._s(t.npc.TouchRange)+" ")]),n("li",{staticClass:"u-desc"},[t._v("识破"),n("em",[t._v("Sense")]),t._v(t._s(t.npc.Sense))]),n("li",{staticClass:"u-desc"},[t._v("闪避"),n("em",[t._v("Dodge")]),t._v(t._s(t.npc.Dodge))]),n("li",{staticClass:"u-desc"},[t._v(" 外功防御"),n("em",[t._v("PhysicsShieldBase")]),t._v(t._s(t.npc.PhysicsShieldBase)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 混元防御"),n("em",[t._v("NeutralMagicDefence")]),t._v(t._s(t.npc.NeutralMagicDefence)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 阳性防御"),n("em",[t._v("SolarMagicDefence")]),t._v(t._s(t.npc.SolarMagicDefence)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 阴性防御"),n("em",[t._v("LunarMagicDefence")]),t._v(t._s(t.npc.LunarMagicDefence)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 毒性防御"),n("em",[t._v("PoisonMagicDefence")]),t._v(t._s(t.npc.PoisonMagicDefence)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 外功会心"),n("em",[t._v("PhysicsCriticalStrike")]),t._v(t._s(t.npc.PhysicsCriticalStrike)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 混元会心"),n("em",[t._v("NeutralCriticalStrike")]),t._v(t._s(t.npc.NeutralCriticalStrike)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 阳性会心"),n("em",[t._v("SolarCriticalStrike")]),t._v(t._s(t.npc.SolarCriticalStrike)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 阴性会心"),n("em",[t._v("LunarCriticalStrike")]),t._v(t._s(t.npc.LunarCriticalStrike)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 毒性会心"),n("em",[t._v("PoisonCriticalStrike")]),t._v(t._s(t.npc.PoisonCriticalStrike)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 外功命中"),n("em",[t._v("PhysicsAttackHit")]),t._v(t._s(t.npc.PhysicsAttackHit)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 混元命中"),n("em",[t._v("NeutralMagicHit")]),t._v(t._s(t.npc.NeutralMagicHit)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 阳性命中"),n("em",[t._v("SolarMagicHit")]),t._v(t._s(t.npc.SolarMagicHit)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 阴性命中"),n("em",[t._v("LunarMagicHit")]),t._v(t._s(t.npc.LunarMagicHit)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 毒性命中"),n("em",[t._v("PoisonMagicHit")]),t._v(t._s(t.npc.PoisonMagicHit)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 血条是否可见"),n("em",[t._v("CanSeeLifeBar")]),t._v(t._s(t.npc.CanSeeLifeBar)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 是否可被选择"),n("em",[t._v("IsSelectable")]),t._v(t._s(t.npc.IsSelectable)+" ")]),n("li",{staticClass:"u-desc"},[t._v(" 复活时间"),n("em",[t._v("ReviveTime")]),t._v(t._s(t.npc.ReviveTime)+" ")])])])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"u-label"},[t._v("🔗 相关成就 "),n("em",[t._v("同BOSS其它成就")])])}],A=n("ee8f"),B=A.JX3BOX,X=n("bc3a"),J={name:"Relation",props:["query"],data:function(){return{relations:{},isPrimary:!0,npcid:0,dungeon_id:null,npc:{},hasRelations:!0}},computed:{},methods:{getRelationList:function(){var t=this,e=this;X({method:"GET",url:"".concat(B.__helperUrl,"api/achievement/").concat(this.query.id,"/relations"),headers:{Accept:"application/prs.helper.v2+json"}}).then((function(n){if(200===n.data.code&&n.data.data.relations.length){var s=n.data.data;e.npcid=s.boss_id,e.dungeon_id=s.dungeon_id,e.relations=s.relations,t.getBossInfo(e.npcid)}else t.hasRelations=!1}),(function(){e.relations=!1}))},resolveIconPath:function(t){return t?B.__iconPath+"icon/"+t+".png":B.__imgPath+"image/common/nullicon.png"},iconErrorHandler:function(t){t.target.src=B.__imgPath+"image/common/nullicon.png"},resolveCjLink:function(t){var e=t||0,n=this.query.player||"";return"/?id=".concat(e)+(n?"&player=".concat(n):"")},bossHandler:function(){this.isPrimary=!this.isPrimary},getBossInfo:function(t){var e=this;t&&X.get("".concat(B.__node,"npc/id/").concat(t)).then((function(t){e.npc=t.data.length&&t.data[0]||{}}))}},mounted:function(){this.getRelationList()}},W=J,U=(n("81af"),Object(S["a"])(W,D,R,!1,null,null,null)),V=U.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-block m-comment",attrs:{id:"comment"}},[t._m(0),n("div",{staticClass:"m-section"},[null===t.comments?n("span",[t._v("Loading...")]):t._e(),!1===t.comments?n("span",[t._v("⚠️ 数据加载异常")]):t._e(),t.comments&&!t.comments.length?n("span",[t._v("💧 暂无评论")]):t._e(),n("div",{staticClass:"m-comments"},[n("CommentItem",{attrs:{comments:t.comments,query:t.query}}),n("div",{staticClass:"m-reply-form"},[n("h4",{staticClass:"u-title"},[t._v("📰 回复")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reply_form.content,expression:"reply_form.content"}],staticClass:"u-reply-content",staticStyle:{resize:"vertical"},domProps:{value:t.reply_form.content},on:{input:function(e){e.target.composing||t.$set(t.reply_form,"content",e.target.value)}}}),n("div",{staticClass:"u-author"},[n("span",[t._v("作者 : ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.reply_form.user_nickname,expression:"reply_form.user_nickname"}],attrs:{type:"text"},domProps:{value:t.reply_form.user_nickname},on:{input:function(e){e.target.composing||t.$set(t.reply_form,"user_nickname",e.target.value)}}})]),n("button",{staticClass:"u-submit",on:{click:function(e){return t.create_comment(t.reply_form)}}},[t._v("✔️ 提交")])])],1)])])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-title",attrs:{id:"title"}},[n("span",{staticClass:"u-label"},[t._v("💖 评论")])])}],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"comments"},t._l(t.comments,(function(e,s){return n("li",{key:s,staticClass:"c-comment"},[n("div",{staticClass:"comment"},[n("div",{staticClass:"m-nickname"},[n("span",{staticClass:"u-nickname",domProps:{textContent:t._s(e.user_nickname)}}),e.parent_id?[n("span",[t._v(" 回复 ")]),n("span",{staticClass:"u-nickname",domProps:{textContent:t._s(e.parent.user_nickname)}})]:t._e()],2),n("p",{staticClass:"u-content",domProps:{innerHTML:t._s(e.content)}}),n("div",{staticClass:"m-reply"},[n("button",{staticClass:"u-reply",class:{show:e.reply_form.show},domProps:{textContent:t._s(e.reply_form.show?"收起 ↩":"💬 回复")},on:{click:function(t){e.reply_form.show=!e.reply_form.show}}}),n("span",{staticClass:"u-time"},[t._v(t._s(t._f("dateFormat")(e.updated)))])]),e.reply_form.show?n("div",{staticClass:"m-reply-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reply_form.content,expression:"comment.reply_form.content"}],staticClass:"u-reply-content",staticStyle:{resize:"vertical"},domProps:{value:e.reply_form.content},on:{input:function(n){n.target.composing||t.$set(e.reply_form,"content",n.target.value)}}}),n("div",{staticClass:"u-author"},[n("span",[t._v("作者 : ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.reply_form.user_nickname,expression:"comment.reply_form.user_nickname"}],attrs:{type:"text"},domProps:{value:e.reply_form.user_nickname},on:{input:function(n){n.target.composing||t.$set(e.reply_form,"user_nickname",n.target.value)}}})]),n("button",{staticClass:"u-submit",on:{click:function(n){return t.create_comment(e.reply_form,e.id)}}},[t._v("✔️ 提交")])]):t._e()]),e.children.length?n("CommentItem",{attrs:{comments:e.children,query:t.query}}):t._e()],1)})),0)},Q=[],Y={name:"CommentItem",props:["comments","query"],methods:{create_comment:function(t,e){this.$parent.create_comment(t,e)}}},K=Y,Z=Object(S["a"])(K,G,Q,!1,null,null,null),tt=Z.exports,et=n("ee8f"),nt=et.JX3BOX,st=n("bc3a"),at=n("4328"),it={name:"Comment",props:["query"],data:function(){return{comments:null,reply_form:{content:"",user_nickname:this.$options.filters.playerName(this.query.player)}}},computed:{},methods:{get_comments:function(){var t=this;st({method:"GET",url:"".concat(nt.__helperUrl,"api/achievement/").concat(this.query.id,"/comments"),headers:{Accept:"application/prs.helper.v2+json"}}).then((function(e){if(e=e.data,200===e.code){for(var n=e.data.comments,s=0;s<n.length;s++)n[s]["reply_form"]={show:!1,content:"",user_nickname:t.$options.filters.playerName(t.query.player)};t.comments=rt(n,0)}}),(function(){t.comments=!1}))},create_comment:function(t,e){"undefined"===typeof e&&(e=0),t.content?st({method:"POST",url:"".concat(nt.__helperUrl,"api/achievement/").concat(this.query.id,"/comment"),headers:{Accept:"application/prs.helper.v2+json"},crossDomain:!0,data:at.stringify({comment:{achievement_id:this.query.id,parent_id:e,user_nickname:this.$options.filters.playerName(t.user_nickname),content:t.content}})}).then((function(e){e=e.data,200===e.code?(t.content="",alert("✔️ 提交成功,请等待审核")):alert("⚠️ ".concat(e.message))})).catch((function(t){alert("⚠️ 网络异常,提交失败")})).finally((function(){t.show=!1})):alert("请先填写评论内容再尝试提交")}},mounted:function(){var t=this;t.get_comments()},components:{CommentItem:tt}};function rt(t,e){var n=[];for(var s in t){var a=t[s];if(a&&a.parent_id===e){t[s]=null;var i=rt(t,a.id);a.children=i||[],n.push(a)}}return n}var ot=it,ct=(n("fbba"),Object(S["a"])(ot,F,z,!1,null,null,null)),lt=ct.exports,ut=n("c909"),mt={name:"App",data:function(){return{query:ut(location.href).query(!0)}},computed:{},methods:{setPostId:function(t){this.$refs.content.post_id=t,this.$refs.revision.post_id=t}},mounted:function(){},components:{Content:I,Revision:T,Relation:V,Comment:lt}},pt=mt,dt=(n("7c55"),Object(S["a"])(pt,o,c,!1,null,null,null)),vt=dt.exports;function _t(t){return t||"匿名"}var ht=_t;s["default"].config.productionTip=!1,s["default"].use(i.a),s["default"].component("Article",r["a"]),s["default"].filter("dateFormat",d),s["default"].filter("playerName",ht),new s["default"]({render:function(t){return t(vt)}}).$mount("#app")},"60cd":function(t,e,n){},"73b0":function(t,e,n){},"7c55":function(t,e,n){"use strict";var s=n("a8fc"),a=n.n(s);a.a},"7db0":function(t,e,n){},"81af":function(t,e,n){"use strict";var s=n("60cd"),a=n.n(s);a.a},a8fc:function(t,e,n){},bb51:function(t,e,n){"use strict";var s=n("7db0"),a=n.n(s);a.a},d239:function(t){t.exports=JSON.parse('{"cn":"皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调迭谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞国爱赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄","tw":"皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調叠諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐國愛賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩"}')},fbba:function(t,e,n){"use strict";var s=n("73b0"),a=n.n(s);a.a}});
//# sourceMappingURL=app.dbfbca30.js.map