<template>
    <WikiPanel class="m-relations-panel" scene="detail" v-if="(relations && relations.length) || npc">
        <template slot="head-title">
            <i class="el-icon-link"></i>
            <span>关联成就</span>
            <em class="u-remark">同BOSS下的其它成就</em>
        </template>
        <template slot="head-actions">
            <el-button type="primary" class="u-boss" :class="{ on: show_npc }" @click="show_npc = !show_npc"
                >BOSS属性参考
            </el-button>
        </template>
        <template slot="body">
            <div class="m-section">
                <div class="u-empty" v-if="!relations || !relations.length">
                    <span v-if="relations === null">🎉 数据加载中...</span>
                    <span v-if="relations === false">⚠️ 数据加载异常</span>
                    <span v-if="relations && !relations.length">💧 暂无相关成就</span>
                </div>
                <div class="m-relations" v-if="relations && relations.length">
                    <router-link
                        class="u-title"
                        v-for="(relation, key) in relations"
                        :key="key"
                        :to="{
                            name: 'view',
                            params: { source_id: relation.ID },
                        }"
                    >
                        <img
                            class="u-icon"
                            :src="icon_url(relation.IconID)"
                            @error.once="
                                () => {
                                    $event.target.src = icon_url();
                                }
                            "
                        />
                        <span class="u-text" v-text="relation.Name"></span>
                    </router-link>
                </div>
            </div>
            <div class="m-section m-bossinfos" v-show="show_npc" v-if="npc">
                <ul class="m-bossinfo">
                    <li class="u-id">ID:<em></em>{{ npc.ID }}</li>
                    <li class="u-name">首领:<em></em>{{ npc.Name }}</li>
                    <li v-for="item in bossInfo.base" :key="item.key" class="u-desc" :title="item.title">
                        {{ item.zh }}
                        <em>{{ item.key }}</em>
                        {{ npc[item.key] }}
                    </li>
                </ul>

                <ul class="m-bossinfo">
                    <li v-for="item in bossInfo.shield" :key="item.key" class="u-desc" :title="item.title">
                        {{ item.zh }}
                        <em>{{ item.key }}</em>
                        {{ npc[item.key] }}
                    </li>
                </ul>

                <ul class="m-bossinfo">
                    <li v-for="item in bossInfo.strike" :key="item.key" class="u-desc" :title="item.title">
                        {{ item.zh }}
                        <em>{{ item.key }}</em>
                        {{ npc[item.key] }}
                    </li>
                </ul>

                <ul class="m-bossinfo">
                    <li v-for="item in bossInfo.hit" :key="item.key" class="u-desc" :title="item.title">
                        {{ item.zh }}
                        <em>{{ item.key }}</em>
                        {{ npc[item.key] }}
                    </li>
                </ul>

                <ul class="m-bossinfo">
                    <li v-for="item in bossInfo.other" :key="item.key" class="u-desc" :title="item.title">
                        {{ item.zh }}
                        <em>{{ item.key }}</em>
                        {{ npc[item.key] }}
                    </li>
                </ul>
            </div>
        </template>
    </WikiPanel>
</template>

<script>
import WikiPanel from "@jx3box/jx3box-common-ui/src/wiki/WikiPanel";
import { get_relation_achievements } from "@/service/achievement";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
import { getBossInfo } from "@/service/relations";
import bossInfo from "@/assets/data/boss.json";

export default {
    name: "Relation",
    props: ["sourceId"],
    data() {
        return {
            relations: null,
            npc: null,
            show_npc: false,

            bossInfo,
        };
    },
    methods: {
        icon_url: iconLink,
        // 获取boss信息
        getBossInfo(npcid) {
            npcid &&
                getBossInfo(npcid).then((res) => {
                    res = res.data;
                    if (res.list && res.list.length) this.npc = res.list[0];
                });
        },
    },
    components: {
        WikiPanel,
    },
    watch: {
        sourceId: {
            immediate: true,
            handler() {
                if (this.sourceId) {
                    get_relation_achievements(this.sourceId).then((res) => {
                        console.log(res);
                        res = res.data;
                        let result = res.data;
                        this.relations = result.relations;

                        // 获取boss信息
                        this.getBossInfo(result.boss_id);
                    });
                }
            },
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/components/achievement/relations.less";
</style>
