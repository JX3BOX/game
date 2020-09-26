<template>
    <div class="m-block m-boss" id="relation" v-if="hasRelations">
        <div class="m-title" id="title">
            <span class="u-label">🔗 相关成就 <em>同BOSS其它成就</em></span>
            <span
                class="u-boss"
                @click="bossHandler"
                :class="{ on: !isPrimary }"
                >BOSS属性参考</span
            >
        </div>
        <div class="m-section" :class="{ hide: !isPrimary }">
            <span v-if="relations === null">Loading...</span>
            <span v-if="relations === false">⚠️ 数据加载异常</span>
            <span v-if="relations && !relations.length">💧 无相关数据</span>
            <ul class="m-relations" v-if="relations && relations.length">
                <li v-for="(cj, key) in relations" :key="key">
                    <a
                        class="u-title"
                        :href="resolveCjLink(cj.ID)"
                    >
                    <img
                        class="u-icon"
                        :src="resolveIconPath(cj.IconID)"
                        @error.once="iconErrorHandler($event)"
                    />
                    <span class="u-text">{{cj.Name}}</span>
                    </a>
                </li>
            </ul>
        </div>
        <ul class="m-section m-bossinfo" :class="{ hide: isPrimary }">
            <li class="u-id">ID:{{ npc.ID }}</li>
            <li class="u-name">{{ npc.Name }}</li>
            <li class="u-desc">称谓<em>Title</em>{{ npc.Title }}</li>
            <li class="u-desc">等级<em>Level:</em>{{ npc.Level }}</li>
            <li class="u-desc">强度<em>Intensity</em>{{ npc.Intensity }}</li>
            <li class="u-desc">地图<em>MapName</em>{{ npc.MapName }}</li>
            <li class="u-desc">备注<em>_Notation</em>{{ npc._Notation }}</li>

            <li class="u-desc">血量<em>MaxLife</em>{{ npc.MaxLife }}</li>
            <li class="u-desc">蓝量<em>MaxMana</em>{{ npc.MaxMana }}</li>
            <li class="u-desc">跑速<em>RunSpeed</em>{{ npc.RunSpeed }}</li>
            <li class="u-desc">移速<em>WalkSpeed</em>{{ npc.WalkSpeed }}</li>
            <li class="u-desc" title="攻击补偿距离/64">
                体积<em>TouchRange</em>{{ npc.TouchRange }}
            </li>

            <li class="u-desc">识破<em>Sense</em>{{ npc.Sense }}</li>
            <li class="u-desc">闪避<em>Dodge</em>{{ npc.Dodge }}</li>
            <li class="u-desc">
                外功防御<em>PhysicsShieldBase</em>{{ npc.PhysicsShieldBase }}
            </li>
            <li class="u-desc">
                混元防御<em>NeutralMagicDefence</em
                >{{ npc.NeutralMagicDefence }}
            </li>
            <li class="u-desc">
                阳性防御<em>SolarMagicDefence</em>{{ npc.SolarMagicDefence }}
            </li>
            <li class="u-desc">
                阴性防御<em>LunarMagicDefence</em>{{ npc.LunarMagicDefence }}
            </li>
            <li class="u-desc">
                毒性防御<em>PoisonMagicDefence</em>{{ npc.PoisonMagicDefence }}
            </li>

            <li class="u-desc">
                外功会心<em>PhysicsCriticalStrike</em
                >{{ npc.PhysicsCriticalStrike }}
            </li>
            <li class="u-desc">
                混元会心<em>NeutralCriticalStrike</em
                >{{ npc.NeutralCriticalStrike }}
            </li>
            <li class="u-desc">
                阳性会心<em>SolarCriticalStrike</em
                >{{ npc.SolarCriticalStrike }}
            </li>
            <li class="u-desc">
                阴性会心<em>LunarCriticalStrike</em
                >{{ npc.LunarCriticalStrike }}
            </li>
            <li class="u-desc">
                毒性会心<em>PoisonCriticalStrike</em
                >{{ npc.PoisonCriticalStrike }}
            </li>

            <li class="u-desc">
                外功命中<em>PhysicsAttackHit</em>{{ npc.PhysicsAttackHit }}
            </li>
            <li class="u-desc">
                混元命中<em>NeutralMagicHit</em>{{ npc.NeutralMagicHit }}
            </li>
            <li class="u-desc">
                阳性命中<em>SolarMagicHit</em>{{ npc.SolarMagicHit }}
            </li>
            <li class="u-desc">
                阴性命中<em>LunarMagicHit</em>{{ npc.LunarMagicHit }}
            </li>
            <li class="u-desc">
                毒性命中<em>PoisonMagicHit</em>{{ npc.PoisonMagicHit }}
            </li>

            <li class="u-desc">
                血条是否可见<em>CanSeeLifeBar</em>{{ npc.CanSeeLifeBar }}
            </li>
            <li class="u-desc">
                是否可被选择<em>IsSelectable</em>{{ npc.IsSelectable }}
            </li>

            <li class="u-desc">
                复活时间<em>ReviveTime</em>{{ npc.ReviveTime }}
            </li>
        </ul>
    </div>
</template>

<script>
const { JX3BOX } = require("@jx3box/jx3box-common");
const axios = require("axios");
const _ = require("lodash");
import {__ossMirror,__iconPath,__imgPath} from '@jx3box/jx3box-common/js/jx3box.json'
export default {
    name: "Relation",
    props: ["query"],
    data: function() {
        return {
            relations: {},
            isPrimary: true,
            npcid: 0,
            dungeon_id: null,
            npc: {},
            hasRelations: true
        };
    },
    computed: {},
    methods: {
        getRelationList() {
            let that = this;
            axios({
                method: "GET",
                url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/relations`,
                headers: { Accept: "application/prs.helper.v2+json" }
            }).then(
                res => {
                    if (
                        res.data.code !== 200 ||
                        !res.data.data.relations.length
                    ) {
                        this.hasRelations = false;
                        return;
                    }

                    let result = res.data.data;
                    that.npcid = result.boss_id;
                    that.dungeon_id = result.dungeon_id;
                    that.relations = result.relations;

                    this.getBossInfo(that.npcid);
                },
                () => {
                    that.relations = false;
                }
            );
        },
        resolveIconPath(id) {
            return id
                ? __iconPath + 'icon/' + id + ".png"
                : __imgPath + "image/common/nullicon.png";
        },
        iconErrorHandler(e){
            e.target.src = __imgPath + "image/common/nullicon.png"
        },
        resolveCjLink(id){
            let cjid = id || 0;
            let player = this.query.player || '';
            return `/?id=${cjid}` + (player ? `&player=${player}` : '');
        },
        bossHandler: function() {
            this.isPrimary = !this.isPrimary;
        },
        getBossInfo(npcid) {
            npcid &&
                axios.get(`${JX3BOX.__node}npc/id/${npcid}`).then(res => {
                    this.npc = (res.data.length && res.data[0]) || {};
                });
        }
    },
    mounted: function() {
        this.getRelationList();
    }
};
</script>

<style lang="less">
.m-relations {
    margin: 0;
    padding: 0;
    list-style: none;

    .u-icon {
        display: inline-block;
        .w(16px);
        .h(16px);
        .y(top);
        // background-color: #000;
        margin-right: 6px;
        border-radius: 2px;
    }

    li {
        display: inline-block;
        margin: 5px;
        border-radius: 3px;
        background-color: #eeeeee;
        line-height: 1em;
        &:hover {
            a {
                color: #fff;
            }
            background-color: @theme;
        }
    }

    a {
        padding: 8px 10px;
        display: inline-block;
        color: @theme-border;
        .fz(14px,16px);
    }
}

.m-boss {
    .u-boss {
        .fr;
        .fz(13px);
        background-color: @theme-shadow;
        color: #fff;
        font-weight: normal;
        padding: 2px 5px;
        .r(2px);
        letter-spacing: 0.5px;
        .pointer;
        user-select: none;

        // &.on {
        //     background-color: @theme-shadow;
        // }

        &:before {
            content: "▶";
            margin-right:3px;
        }

        &.on {
            &::before {
                content: "▼";
            }
        }
    }
}

.m-bossinfo {
    list-style: none;
    margin: 0;
    padding: 20px;
    li {
        .fz(13px, 2);

        em {
            padding: 0 5px;
            color: #999;
        }
    }
}
</style>
