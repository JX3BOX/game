<template>
  <div class="m-wiki-content">
    <!-- Panel -->
    <WikiPanel>
      <template slot="head-title">
        <div class="u-label" v-text="`📋 ${getTypeLabel(type)}攻略`"></div>
        <a
            class="u-zhtr"
            :class="{ on: isTW }"
            @click="translateHandler"
            @click.once="translateTrigger"
            id="translator"
        >
          🌸[
          <span class="u-tr">繁體</span>
          <span class="u-cn">简体</span>
          ]
        </a>
        <div class="u-date" v-if="post.updated">
          <span>最后更新于</span>
          <em id="updated" v-text="ts2str(post.updated)"></em>
        </div>
      </template>
      <template slot="head-actions">
        <a
            class="u-edit"
            :class="{ on: isEditMode }"
            id="edit"
            @click="editHandler($event)"
        >📝编辑修订</a>
      </template>
      <template slot="body">
        <!-- Article -->
        <div class="m-section u-content">
          <div
              v-show="content.trim() || isEditMode"
              :contenteditable="isEditMode"
              id="content"
              :class="{isEditable: isEditMode, hide: isTW}"
          >
            <Article :content="content" :pageable="false"/>
          </div>
          <div v-show="!content.trim() && !isEditMode" class="u-null">
            💧 暂无攻略 ,
            <a class="u-edit" @click="editHandler($event)">我来写</a>
          </div>
        </div>
        <div
            class="m-section u-content"
            :class="{ hide: !isTW }"
            id="content-tw"
            v-html="content_tw"
        ></div>

        <!-- Tips -->
        <div class="m-tips" :class="{ hide: !isEditMode }">
          游戏内仅支持简易文本修订,如需上传图片等,请至
          <a href="https://www.jx3box.com">JX3BOX网站</a>
          操作
        </div>
        <!-- Author -->
        <div class="m-author isEditable" :class="{ hide: !isEditMode }">
          <div class="m-other-fields">
            <div class="u-level">
              <span>难度(1-5)： </span>
              <input
                  type="number"
                  id="level"
                  min="1"
                  max="5"
                  v-model="publish.level"
              />
            </div>
            <div class="u-author">
              <span>作者： </span>
              <input
                  type="text"
                  id="author"
                  v-model="publish.author"
                  autocomplete="off"
              />
            </div>
            <div class="u-remark">
              <span>修订说明： </span>
              <input
                  type="text"
                  id="remark"
                  v-model="publish.remark"
                  autocomplete="off"
              />
            </div>
          </div>
          <div class="u-btn">
            <a
                class="u-btn-cancel"
                id="cancel"
                @click="cancelHandler($event)"
            >取消</a
            >
            <a
                class="u-btn-submit"
                id="submit"
                @click="submitHanlder($event)"
            >提交</a
            >
          </div>
        </div>
      </template>
    </WikiPanel>
  </div>
</template>

<script>
const {Utils} = require("@jx3box/jx3box-common");
const _ = require("lodash");
import cn2tw from "../../utils/cn2tw";
import player_name from "../../utils/PlayerName";
import star from "../../utils/star";
import Article from "@jx3box/jx3box-editor/src/Article.vue";
import WikiPanel from "@jx3box/jx3box-common-ui/src/WikiPanel";
import {WikiPost} from "@jx3box/jx3box-common/js/helper";
import {getTypeLabel, ts2str} from "@jx3box/jx3box-common/js/utils";

export default {
  name: "WikiContent",
  props: ['wikiPost'],
  data() {
    return {
      wiki_post: this.wikiPost,
      isEditMode: false,
      isTW: false,
      content_tw: "",

      publish: {
        level: 1,
        author: player_name(),
        remark: "",
      },
    };
  },
  computed: {
    content() {
      let content = this.post && _.get(this, "post.content", "") &&
          Utils.resolveImagePath(_.get(this, "post.content", ""));
      content = content.replace(/(<p>)?\s*◆成就难度 [★]+\s*(<\/p>)?/gi, "");
      content = content.replace(/(<p>)?\s*◆花费时长 [★]+\s*(<\/p>)?/gi, "");
      content = content.replace(/(<p>)?\s*◆成就攻略\s*(<\/p>)?/gi, "");
      return content ? content : " ";
    },
  },
  methods: {
    star,
    getTypeLabel,
    ts2str,
    editHandler(e) {
      e.preventDefault();
      this.isTW = false;
      this.isEditMode = true;
    },
    cancelHandler(e) {
      e.preventDefault();
      this.isEditMode = false;
    },
    submitHanlder(e) {
      e.preventDefault();

      if (!this.publish.remark) {
        this.$message({message: '请简单描述本次修订说明', type: "warning"});
        return;
      }

      WikiPost.save({
        type: this.type,
        source_id: this.sourceId,
        level: this.publish.level,
        user_nickname: player_name(),
        content: document.getElementById("c-article").innerHTML,
        remark: this.publish.remark,
      }).then(
          (res) => {
            res = res.data;
            if (res.code === 200) {
              this.$message({message: '提交成功，请等待审核', type: "success"});
            } else this.$message({message: `${res.message}`, type: "warning"});
          },
          () => {
            this.$message({message: "网络异常，提交失败", type: "warning"});
          }
      ).finally(() => {
        this.isEditMode = false;
      });
    },
    translateHandler(e) {
      e.preventDefault();
      this.isTW = !this.isTW;
    },
    translateTrigger() {
      this.content_tw = cn2tw(this.content);
    },
  },
  watch: {
    isEditMode() {
      // 获取最新攻略
      if (this.type && this.sourceId) {
        WikiPost.newest(
            this.type,
            this.sourceId,
            this.isEditMode ? 0 : 1,
        ).then(
            (res) => {
              res = res.data;
              if (res.code === 200) {
                this.wiki_post = res.data;
                this.publish.level = _.get(this, "wiki_post.post.level");
              }
            }
        )
      }
    },
  },
  components: {
    Article,
    WikiPanel,
  },
};
</script>

<style lang="less">
@import "../../assets/css/components/achievement/wiki-content.less";
</style>
