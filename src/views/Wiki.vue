<template>
    <div class="m-wiki-view" v-if="wikiPost">
        <!-- Warning -->
        <div class="m-warning" :class="{ none: !warning }">❌ 您的浏览器版本太低,将无法正常使用本应用</div>
        <Notice v-if="type === 'achievement'"></Notice>
        <WikiContent v-if="type !== 'price'" :wiki-post="wikiPost" :compatible="compatible" />
        <PriceTabs
            v-if="type == 'item' && wikiPost && wikiPost.source && wikiPost.source.BindType != 3"
            :source-id="source_id"
        />
        <Price v-if="type === 'price'" :source-id="source_id"></Price>
        <!-- <Relations :source-id="source_id" v-if="type == 'achievement'" /> -->
        <!-- <RelationPlans :source-id="id" v-if="type == 'item'" /> -->
        <WikiRevisions v-if="wikiPost && wikiPost.post" :type="source_type" :source-id="source_id" :isGame="true" />
        <WikiComments v-if="wikiPost && wikiPost.post" :type="source_type" :source-id="source_id" />
    </div>
</template>

<script>
const URI = require("urijs");
import UA from "../utils/ua";
import star from "../utils/star";
import WikiContent from "../components/WikiContent";
import WikiRevisions from "@jx3box/jx3box-common-ui/src/wiki/WikiRevisions";
import WikiComments from "@jx3box/jx3box-common-ui/src/wiki/WikiComments";
// import Relations from "@/components/achievement/Relations.vue";
import PriceTabs from "@/components/item/PriceTabs.vue";
import Price from "@/components/item/Price.vue";
import Notice from "@/components/achievement/Notice.vue";
import { wiki } from "@jx3box/jx3box-common/js/wiki_v2.js";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
import { postStat } from "@jx3box/jx3box-common/js/stat";

export default {
    name: "Wiki",
    components: {
        WikiContent,
        WikiRevisions,
        WikiComments,
        // Relations,
        // RelationPlans,
        PriceTabs,
        Price,
        Notice,
    },
    data() {
        return {
            ua: UA(),
            query: URI(location.href).query(true),
            wikiPost: null,
            compatible: false,

            source_id: "",
            source_type: "",
        };
    },
    provide: function () {
        return {
            client: this.client,
        };
    },
    computed: {
        client: function () {
            let params = new URLSearchParams(location.search);
            let client = params.get("L") == "classic_yq" ? "origin" : "std";
            return client;
        },
        id() {
            return this.query.id;
        },
        type() {
            return this.query.type;
        },
        warning() {
            return this.ua.browser === "ie" && this.ua.version < 9;
        },
    },
    methods: {
        icon_url: iconLink,
        star,
        loadWiki: function (source_type, source_id) {
            wiki.mix({ type: source_type, id: source_id, client: this.client })
                .then((res) => {
                    const { post, source, compatible, type, source_id, users } = res;
                    this.wikiPost = {
                        post,
                        source,
                        type,
                        source_id,
                        users,
                    };
                    this.compatible = compatible;
                    this.source_id = source_id;
                })
                .catch((err) => {
                    console.log(err, "err");
                });
        },
    },
    watch: {
        id: {
            immediate: true,
            handler(id) {
                let source_type = "";
                // fix source_type
                if (this.type == "cj") {
                    this.source_type = source_type = "achievement";
                } else if (this.type == "pet" || this.type == "horse") {
                    this.source_type = "item";
                    source_type = this.type == "pet" ? "pet" : "item";
                } else {
                    this.source_type = source_type = this.type || "achievement";
                }

                // 获取最新攻略
                if (id) {
                    this.loadWiki(source_type, this.id);
                }
            },
        },
        "$route.query.post_id": {
            immediate: true,
            handler() {
                // 获取攻略
                if (this.$route.query.post_id) {
                    wiki.getById(this.$route.query.post_id).then((res) => {
                        res = res.data;
                        this.wikiPost = res.data;
                    });
                }
            },
        },
    },
    created() {
        // 统计
        if (this.type && this.id) {
            let type = this.type;
            if (type === "achievement") type = "cj";
            postStat(type, this.id);
        }
    },
};
</script>

<style lang="less">
@import "../assets/css/views/wiki.less";
</style>
