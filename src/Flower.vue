<template>
    <div id="app">
        <div class="container" v-if="data">
            <div v-for="(item, name) in data" :key="name">
                <div class="name">{{ name }}</div>
                <div class="price">{{ item.max }}园宅币</div>
                <div class="list">
                    <div class="line" v-for="line in item.maxLine" :key="line">
                        {{ line }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            暂时还没有数据
        </div>

        <div class="footer">
            &copy; <a href="https://www.jx3box.com">剑三魔盒</a> [
            <a class="u-link" href="https://www.jx3box.com">www.jx3box.com</a>
            ]
        </div>
    </div>
</template>

<script>
const URI = require("urijs");
const _ = require("lodash");
import flowers from "@/assets/data/flowers.json";
import { $next } from "@jx3box/jx3box-common/js/axios";
export default {
    name: "App",
    data: function() {
        return {
            query: URI(location.href).query(true),
            data: "",
        };
    },
    computed: {
        item: function() {
            return (this.query && this.query.item) || "红玫瑰";
        },
        server: function() {
            return (this.query && this.query.server) || "梦江南";
        },
    },
    methods: {},
    mounted: function() {
        console.log(111);
        $next
            .get("api/flower/price/rank", {
                params: {
                    flower: flowers[this.item],
                    server: this.server,
                },
            })
            .then((res) => {
                this.data = res.data;
            });
    },
    components: {},
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

@import "./assets/css/flower.less";
</style>
