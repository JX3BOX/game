<template>
    <Fragment>
        <!-- 头部导航 -->
        <header class="m-header">
            <a class="m-header-logo" :href="rootPath">
                <img class="u-logo" src="/img/logo.png" alt="JX3BOX" />
                <span class="u-title">JX3BOX魔盒</span>
            </a>
            <ul class="m-header-list">
                <li><a :href="`${rootPath}macro/`">宏库</a></li>
                <li><a :href="`${rootPath}bps/`">职业</a></li>
                <li><a :href="`${rootPath}pvp/`">竞技</a></li>
                <li><a :href="`${rootPath}fb/`">副本</a></li>
                <li><a :href="`${rootPath}cj/`">百科</a></li>
                <li><a :href="`${rootPath}pvx/`">休闲</a></li>
                <li><a :href="`${rootPath}tool/`">工具</a></li>
                <li><a :href="`${rootPath}bbs/`">茶馆</a></li>
            </ul>
        </header>

        <!-- 主体区域 -->
        <main class="m-main">
            <div id="app">
                <Wiki></Wiki>
            </div>
        </main>

        <!-- 底部链接 -->
        <div class="m-footer">
            &copy; <a :href="rootPath">剑三魔盒</a> [ <a class="u-link" :href="rootPath">{{ rootDomain }}</a> ]
        </div>
    </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { __Root, __OriginRoot } from "@jx3box/jx3box-common/data/jx3box.json";

import Wiki from "./wiki.vue";

export default {
    name: "App",
    data: function () {
        return {
            params: new URLSearchParams(location.search),
        };
    },
    computed: {
        client: function () {
            let client = this.params.get("L") == "classic_yq" ? "origin" : "std";
            return client;
        },
        rootPath: function () {
            return this.client == "origin" ? __OriginRoot : __Root;
        },
        rootDomain: function () {
            return this.rootPath.replace(/^https?:\/\//iu, "").replace(/\/.*$/iu, "");
        },
    },
    components: {
        Fragment,
        Wiki,
    },
};
</script>

<style lang="less">
//------ ⚠️预览用,发布前请注释 ------//
// html{
//     background:url('./assets/img/view.jpg') no-repeat 0 0;
//     width:802px;
//     height:572px;
//     padding:67px 3px 3px 4px;
//     box-sizing: border-box;
// }
// body{
//     height:100%;
//     background-color: rgba(255,255,255,1);
// }
//------ ⚠️预览用,发布前请注释 ------ //

@import "../assets/css/common.less";
@import "../assets/css/header.less";
@import "../assets/css/block.less";
@import "../assets/css/footer.less";
</style>
