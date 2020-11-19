<template>
    <div id="app">
        <div class="caption">{{server}} 丨 {{item}}</div>

        <div class="result" v-if="data">
            <div v-for="(item, map) in data" :key="map">
                <div class="name"><b>{{ map }}</b> <span class="price">{{ item.max }}园宅币</span></div>
                <div class="list">
                    <div class="line" v-for="line in item.maxLine" :key="line" v-clipboard="line.split('线')[0]" v-clipboard:success="onClipboard">
                        <b>{{ line.split('线')[0] }}</b>线
                    </div>
                </div>
            </div>
        </div>

        <div class="no-data" v-else>
            <a-empty :description="false" />
            <div class="no-data__label">暂时还没有数据</div>
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
    methods: {
        onClipboard({ value }) {
            this.$message.success(`${value} 已复制到剪切板！`);
        }
    },
    mounted: function() {
        $next
            .get("api/flower/price/group-by-map", {
                params: {
                    flower: flowers[this.item],
                    server: this.server,
                },
            })
            .then((res) => {
                this.data = res.data && Object.keys(res.data).length > 0
                    && res.data
                    || void 0;
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
