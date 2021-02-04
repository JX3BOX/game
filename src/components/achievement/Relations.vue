<template>
  <WikiPanel class="m-relations-panel" scene="detail"
             v-if="relations && relations.length || npc">
    <template slot="head-title">
      <i class="el-icon-link"></i>
      <span>关联成就</span>
      <em class="u-remark">同BOSS下的其它成就</em>
    </template>
    <template slot="head-actions">
      <el-button type="primary" class="u-boss" :class="{ on: show_npc }"
                 @click="show_npc = !show_npc">BOSS属性参考
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
          <router-link class="u-title" v-for="(relation, key) in relations" :key="key"
                       :to="{ name: 'view', params: { source_id: relation.ID } }">
            <img class="u-icon" :src="icon_url(relation.IconID)"
                 @error.once="() => {$event.target.src = icon_url()}" />
            <span class="u-text" v-text="relation.Name"></span>
          </router-link>
        </div>
      </div>
      <div class="m-section m-bossinfos" v-show="show_npc" v-if="npc">
        <ul class="m-bossinfo">
          <li class="u-id">ID:<em></em>{{ npc.ID }}</li>
          <li class="u-name">首领:<em></em>{{ npc.Name }}</li>
          <li class="u-desc">称谓<em>Title</em>{{ npc.Title }}</li>
          <li class="u-desc">等级<em>Level:</em>{{ npc.Level }}</li>
          <li class="u-desc">
            强度<em>Intensity</em>{{ npc.Intensity }}
          </li>
          <li class="u-desc">地图<em>MapName</em>{{ npc.MapName }}</li>
          <li class="u-desc">
            备注<em>_Notation</em>{{ npc._Notation }}
          </li>

          <li class="u-desc">血量<em>MaxLife</em>{{ npc.MaxLife }}</li>
          <li class="u-desc">蓝量<em>MaxMana</em>{{ npc.MaxMana }}</li>
          <li class="u-desc">跑速<em>RunSpeed</em>{{ npc.RunSpeed }}</li>
          <li class="u-desc">
            移速<em>WalkSpeed</em>{{ npc.WalkSpeed }}
          </li>
          <li class="u-desc" title="攻击补偿距离/64">
            体积<em>TouchRange</em>{{ npc.TouchRange }}
          </li>
        </ul>

        <ul class="m-bossinfo">
          <li class="u-desc">识破<em>Sense</em>{{ npc.Sense }}</li>
          <li class="u-desc">闪避<em>Dodge</em>{{ npc.Dodge }}</li>
          <li class="u-desc">
            外功防御<em>PhysicsShieldBase</em
          >{{ npc.PhysicsShieldBase }}
          </li>
          <li class="u-desc">
            混元防御<em>NeutralMagicDefence</em
          >{{ npc.NeutralMagicDefence }}
          </li>
          <li class="u-desc">
            阳性防御<em>SolarMagicDefence</em
          >{{ npc.SolarMagicDefence }}
          </li>
          <li class="u-desc">
            阴性防御<em>LunarMagicDefence</em
          >{{ npc.LunarMagicDefence }}
          </li>
          <li class="u-desc">
            毒性防御<em>PoisonMagicDefence</em
          >{{ npc.PoisonMagicDefence }}
          </li>
        </ul>

        <ul class="m-bossinfo">
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
        </ul>

        <ul class="m-bossinfo">
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
        </ul>

        <ul class="m-bossinfo">
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
  </WikiPanel>
</template>

<script>
const {JX3BOX} = require("@jx3box/jx3box-common");
import WikiPanel from "@jx3box/jx3box-common-ui/src/WikiPanel";
import {get_relation_achievements} from "@/service/achievement";
import {iconLink} from '@jx3box/jx3box-common/js/utils';

export default {
  name: "Relation",
  props: ["sourceId"],
  data() {
    return {
      relations: null,
      npc: null,
      show_npc: false,
    };
  },
  methods: {
    icon_url: iconLink,
    // 获取boss信息
    getBossInfo(npcid) {
      npcid && this.$http.get(`${JX3BOX.__node}npc/id/${npcid}`).then(
          (res) => {
            res = res.data;
            if (res.list && res.list.length) this.npc = res.list[0];
          }
      );
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
          get_relation_achievements(this.sourceId).then(
              (res) => {
                res = res.data;
                if (res.code === 200) {
                  let result = res.data;
                  this.relations = result.relations;

                  // 获取boss信息
                  this.getBossInfo(result.boss_id);
                }
              }
          );
        }
      },
    },
  },
};
</script>

<style lang="less">
@import '../../assets/css/components/achievement/relations.less';
</style>
