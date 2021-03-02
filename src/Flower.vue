<template>
    <div id="app">
        <div class="caption">{{ server }} 丨 {{ item }}</div>

        <template v-if="data">
            <div class="result" v-if="isTraditional">
                <div v-for="(item, map) in data" :key="map">
                    <div class="name">
                        <b>{{ map }}</b>
                        <span class="price"
                            ><!--{{ item.max }}园宅币-->1.5倍率</span
                        >
                    </div>
                    <div class="list">
                        <div
                            class="line"
                            v-for="line in item.maxLine"
                            :key="line"
                            v-clipboard="line.split('线')[0]"
                            v-clipboard:success="onClipboard"
                        >
                            <b>{{ line.split("线")[0] }}</b
                            >线
                        </div>
                    </div>
                </div>
            </div>
            <div class="result" v-else>
                <div v-for="(item, i) in data" :key="i">
                    <div class="name">
                        <b>{{ item.map }}</b>
                        <span class="price">1.5倍率</span>
                    </div>
                    <div class="list">
                        <div
                            class="line"
                            v-for="(branch,j) in item.branch"
                            :key="j"
                            v-clipboard="branch.number"
                            v-clipboard:success="onClipboard"
                        >
                            <b>{{ branch.number }}</b
                            >线
                        </div>
                    </div>
                </div>
            </div>
        </template>

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
import _ from "lodash";
import flowers from "@/assets/data/flowers.json";
import flowers_cn from "@/assets/data/flowers_cn.json";
import flowers_tr from "@/assets/data/flowers_tr.json";
import { getFlower, getFlowerDetail } from "@/service/flower.js";
import traditional_servers from "@jx3box/jx3box-data/data/server/server_international.json";
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
        isTraditional: function() {
            return traditional_servers.includes(this.server);
        },
    },
    methods: {
        onClipboard({ value }) {
            this.$message.success(`${value} 已复制到剪切板！`);
        },
    },
    mounted: function() {
        if (this.isTraditional) {
            let name = flowers_tr[this.item]
            getFlowerDetail({
                flower: name,
                server: this.server,
            }).then((res) => {
                this.data = res.data;
            });
        } else {
            let name = this.item;
            let level = flowers[this.item];
            let type = flowers_cn[this.item];

            getFlower({
                type: type,
                server: this.server,
            }).then((res) => {
                let data = []
                res.data.data.forEach((item) => {
                    let hasColor = item.name.indexOf("(");
                    if (hasColor >= 0) {
                        item["_name"] = item.name.slice(0, hasColor);
                    } else {
                        item._name = item.name;
                    }
                    if(item._name == level){
                        data.push(item)
                    }
                });
                this.data = data
            });
        }
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
