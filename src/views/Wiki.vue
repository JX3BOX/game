<template>
    <div class="m-wiki-view" v-if="wikiPost">
        <!-- Warning -->
        <div class="m-warning" :class="{ none: !warning }">❌ 您的浏览器版本太低,将无法正常使用本应用</div>

        <WikiContent :wiki-post="wikiPost" :compatible="compatible" />
        <PriceTabs
            v-if="type == 'item' && wikiPost && wikiPost.source && wikiPost.source.BindType != 3"
            :source-id="source_id"
        />
        <Relations :source-id="source_id" v-if="type == 'achievement'" />
        <!-- <RelationPlans :source-id="id" v-if="type == 'item'" /> -->
        <WikiRevisions v-if="wikiPost && wikiPost.post" :type="source_type" :source-id="source_id" :isGame="true" />
        <WikiComments v-if="wikiPost && wikiPost.post" :type="source_type" :source-id="source_id" />
    </div>
</template>

<script>
const URI = require("urijs");
import UA from "../utils/ua";
import star from "../utils/star";
// import player_name from "../utils/PlayerName";
import WikiContent from "../components/WikiContent";
import WikiRevisions from "@jx3box/jx3box-common-ui/src/wiki/WikiRevisions";
import WikiComments from "@jx3box/jx3box-common-ui/src/wiki/WikiComments";
import Relations from "@/components/achievement/Relations.vue";
// import RelationPlans from "@/components/item/RelationPlans.vue";
import PriceTabs from "@/components/item/PriceTabs.vue";
import { WikiPost } from "@jx3box/jx3box-common/js/helper";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
import { postStat } from "@jx3box/jx3box-common/js/stat";
import { getPet } from "../service/pet";

export default {
    name: "Wiki",
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
            if (this.client === "std") {
                WikiPost.newest(source_type, source_id, 1, "std").then((res) => {
                    this.wikiPost = res.data.data;
                    console.log("获取重制攻略");
                });
            } else {
                WikiPost.newest(source_type, source_id, 1, "origin")
                    .then((res) => {
                        this.wikiPost = res.data.data;
                        console.log("获取缘起攻略");
                        return !!res.data.data.post;
                    })
                    .then((data) => {
                        if (!data) {
                            console.log("兼容：获取重制攻略");
                            WikiPost.newest(source_type, source_id, 1, "std").then((res) => {
                                this.wikiPost.post = res.data.data.post;
                                this.compatible = true;
                            });
                        }
                    });
            }
        },
    },
    watch: {
        id: {
            immediate: true,
            handler(id) {
                // fix source_type
                if (this.type == "cj") {
                    this.source_type = "achievement";
                } else if (this.type == "pet") {
                    this.source_type = "item";
                } else {
                    this.source_type = this.type || "achievement";
                }

                // 获取最新攻略
                if (id) {
                    this.source_id = id;

                    if (this.type === "pet") {
                        getPet(id).then((res) => {
                            let pet = res.data;
                            let source_id = pet?.ItemTabType + "_" + pet?.ItemTabIndex;
                            this.source_id = source_id;
                            this.loadWiki("item", source_id);
                        });
                    } else {
                        this.loadWiki(this.source_type, this.source_id);
                    }
                }
            },
        },
        "$route.query.post_id": {
            immediate: true,
            handler() {
                // 获取攻略
                if (this.$route.query.post_id) {
                    WikiPost.view(this.$route.query.post_id).then((res) => {
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
    components: {
        WikiContent,
        WikiRevisions,
        WikiComments,
        Relations,
        // RelationPlans,
        PriceTabs,
    },
};
</script>

<style lang="less">
@import "../assets/css/views/wiki.less";
</style>
