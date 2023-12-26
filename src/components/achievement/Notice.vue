<template>
    <div class="m-wiki-top">
        <div class="m-wiki-top__header">
            <h3 class="u-title"><i class="el-icon-news"></i>公告</h3>
        </div>
        <div class="m-wiki-top__content">
            <div class="m-wiki-top__item" v-for="item in data" :key="item.id">
                <div class="m-item_left">
                    <div class="u-title" v-html="item"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBreadcrumb } from "@/service/achievement";
export default {
    name: "WikiNotice",
    data() {
        return {
            data: [],
        };
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            try {
                const data = sessionStorage.getItem("wiki_cj_ac");

                if (data) {
                    this.data = JSON.parse(data);
                } else {
                    getBreadcrumb("wiki_cj_ac").then((res) => {
                        this.data = res.split("\n");

                        sessionStorage.setItem("wiki_cj_ac", JSON.stringify(this.data));
                    });
                }
            } catch (e) {
                this.data = [];
            }
        },
    },
};
</script>

<style lang="less">
@import "~@/assets/css/components/achievement/notice.less";
</style>
