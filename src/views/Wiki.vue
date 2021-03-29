<template>
  <div class="m-wiki-view" v-if="wikiPost">
    <!-- Warning -->
    <div class="m-warning" :class="{ none: !warning }">
      ❌ 您的浏览器版本太低,将无法正常使用本应用
    </div>

    <WikiContent :wiki-post="wikiPost"/>
    <Relations :source-id="id" v-if="type == 'achievement'"/>
    <RelationPlans :source-id="id" v-if="type == 'item'"/>
    <WikiRevisions :type="type" :source-id="id"/>
    <WikiComments :type="type" :source-id="id"/>
  </div>
</template>

<script>
  const URI = require("urijs");
  import UA from "../utils/ua";
  import star from "../utils/star";
  import player_name from "../utils/PlayerName";
  import WikiContent from "../components/WikiContent";
  import WikiRevisions from "@jx3box/jx3box-common-ui/src/WikiRevisions";
  import WikiComments from "@jx3box/jx3box-common-ui/src/WikiComments";
  import Relations from "@/components/achievement/Relations.vue";
  import RelationPlans from "@/components/item/RelationPlans.vue";
  import {WikiPost} from "@jx3box/jx3box-common/js/helper";
  import {iconLink} from "@jx3box/jx3box-common/js/utils";
  import {postStat} from "@jx3box/jx3box-common/js/stat";
  import {get_pet} from "../service/pet";

  export default {
    name: "Wiki",
    data() {
      return {
        ua: UA(),
        query: URI(location.href).query(true),
        wikiPost: null,
      };
    },
    computed: {
      id() {
        return this.$route.query.id || this.query.id;
      },
      type() {
        return this.$route.query.type || this.query.type || "achievement";
      },
      warning() {
        return this.ua.browser === "ie" && this.ua.version < 9;
      },
    },
    methods: {
      icon_url: iconLink,
      star,
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
      RelationPlans,
    },
    watch: {
      id: {
        immediate: true,
        handler() {
          // 获取最新攻略
          if (this.type && this.id) {
            if (this.type === 'pet') {
              get_pet(this.id).then((res) => {
                res = res.data;
                if (res.code === 200) {
                  let pet = res.data.pet;
                  if (pet) {
                    if (pet.achievement_id) {
                      this.$router.push({
                        name: 'wiki',
                        query: {type: 'achievement', id: pet.achievement_id, player: player_name()}
                      })
                    } else if (pet.item_id) {
                      this.$router.push({
                        name: 'wiki',
                        query: {type: 'item', id: pet.item_id, player: player_name()}
                      })
                    }
                  }
                }
              });
            } else {
              WikiPost.newest(this.type, this.id).then((res) => {
                res = res.data;
                if (res.code === 200) {
                  this.wikiPost = res.data;
                  if (this.wikiPost && this.wikiPost.source) {
                    let pet = this.wikiPost.source.pet;
                    if (pet.id) postStat('pet', pet.id);
                  }
                }
              });
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
              if (res.code === 200) this.wikiPost = res.data;
            });
          }
        },
      },
    },
  };
</script>

<style lang="less">
  @import "../assets/css/views/wiki.less";
</style>
