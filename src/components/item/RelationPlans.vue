<template>
    <div class="m-block" v-if="relation_plans.length">
        <div class="m-title">
            <span class="u-label">📜 相关物品清单</span>
        </div>
        <div class="m-section">
            <div class="m-relation-plans">
                <el-row :gutter="20">
                    <el-col
                        :span="12"
                        v-for="(plan, key) in relation_plans"
                        :key="key"
                    >
                        <div class="u-plan">
                            <span
                                v-if="plan.type == 1"
                                class="u-type"
                                :class="'u-type-' + plan.type"
                            >
                                <img :src="plan_1_icon" />
                            </span>
                            <span
                                v-if="plan.type == 2"
                                class="u-type"
                                :class="'u-type-' + plan.type"
                            >
                                <img :src="plan_2_icon" />
                            </span>
                            <a
                                class="u-name"
                                v-text="plan.title"
                                :href="
                                    `https://www.jx3box.com/item/#/plan_view/${plan.id}`
                                "
                            ></a>
                            <span
                                class="u-desc"
                                v-text="plan.description"
                            ></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
const { JX3BOX } = require("@jx3box/jx3box-common");
import { get_item_relation_plans } from "../../service/item";

export default {
    name: "RelationPlans",
    props: ["sourceId"],
    data() {
        return {
            relation_plans: [],
            plan_2_icon: JX3BOX.__iconPath + "icon/2410.png",
            plan_1_icon: JX3BOX.__iconPath + "icon/3089.png",
        };
    },
    watch: {
        sourceId: {
            immediate: true,
            handler() {
                if (this.sourceId) {
                    get_item_relation_plans(this.sourceId, { limit: 6 }).then(
                        (data) => {
                            data = data.data;
                            if (data.code === 200)
                                this.relation_plans = data.data.data;
                        },
                        (err) => {
                            this.relation_plans = [];
                        }
                    );
                }
            },
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/components/item/relation-plans.less";
</style>
