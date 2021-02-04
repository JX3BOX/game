<template>
  <div class="m-wiki-view">
    <!-- META -->
    <div class="m-meta">
      <div class="u-title" v-if="wikiPost.source">
        <img class="u-icon" :src="icon_url(wikiPost.source.IconID)"
             @error.once="() => {$event.target.src = icon_url()}"/>
        <span class="u-text" v-text="wikiPost.source.Name"></span>
      </div>
      <div class="u-star">
        <span>难度</span>
        <span id="stars" v-text="star(post.level)"></span>
      </div>
      <div class="u-group">
        <em>【意见反馈QQ群】</em>
        <b>614370825</b>
      </div>
    </div>

    <!-- Warning -->
    <div class="m-warning" :class="{ hide: !warning }">
      ❌ 您的浏览器版本太低,将无法正常使用本应用
    </div>

    <WikiContent :wiki-post="wikiPost"/>
    <Relations :source-id="id" v-if="type=='achievement'"/>
    <RelationPlans :source-id="id" v-if="type=='item'"/>
    <WikiRevisions :type="type" :source-id="id"/>
    <WikiComments :type="type" :source-id="id"/>
  </div>
</template>

<script>
import UA from "../utils/ua";
import WikiContent from '../components/achievement/WikiContent';
import WikiRevisions from '@jx3box/jx3box-common-ui/src/WikiRevisions';
import WikiComments from '@jx3box/jx3box-common-ui/src/WikiComments';
import Relations from '@/components/achievement/Relations.vue';
import RelationPlans from '@/components/item/RelationPlans.vue';
import {WikiPost} from "@jx3box/jx3box-common/js/helper";
import {iconLink} from "@jx3box/jx3box-common/js/utils";
import {postStat} from "@jx3box/jx3box-common/js/stat";

export default {
  name: "Wiki",
  data() {
    return {
      ua: UA(),
      wikiPost: null
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    type() {
      return this.$route.query.type || 'achievement'
    },
    warning() {
      return this.ua.browser === "ie" && this.ua.version < 9;
    },
  },
  methods: {
    icon_url: iconLink,
  },
  created() {
    // 统计
    if (this.type && this.id) {
      let type = this.type;
      if (type === 'achievement') type = 'cj';
      postStat(type, this.id);
    }
  },
  components: {
    WikiContent,
    WikiRevisions,
    WikiComments,
    Relations,
    RelationPlans,
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        // 获取最新攻略
        if (this.type && this.sourceId) {
          WikiPost.newest(this.type, this.sourceId).then(
              (res) => {
                res = res.data;
                if (res.code === 200) this.wikiPost = res.data;
              }
          )
        }
      }
    },
    "$route.query.post_id": {
      immediate: true,
      handler() {
        // 获取攻略
        if (this.$route.query.post_id) {
          WikiPost.view(this.$route.query.post_id).then(
              (res) => {
                res = res.data;
                if (res.code === 200) this.wikiPost = res.data;
              }
          );
        }
      }
    },
  }
}
</script>

<style lang="less">
@import "../assets/css/views/wiki.less";
</style>