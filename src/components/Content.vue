<template>
    <div class="m-content-wrapper">
        <!-- META -->
        <div class="m-meta">
            <span class="u-title">
                <img
                    class="u-icon"
                    :src="resolveIconPath(achievement.IconID)"
                    @error.once="iconErrorHandler($event)"
                />
                <span class="u-text">{{ achievement.Name }}</span>
            </span>
            <span class="u-group">
                <em>【意见反馈QQ群】</em>
                <b>614370825</b>
            </span>
        </div>
        <div class="m-block m-content">
            <!-- Warning -->
            <div class="m-warning" :class="{ hide: !warning }">
                ❌ 您的浏览器版本太低,将无法正常使用本应用
            </div>

            <!-- Panel -->
            <div class="m-title" id="title">
                <span class="u-label">✔️ 成就攻略</span>
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
                <span class="u-star">
                    <span>难度</span>
                    <span id="stars">{{ this.stars }}</span>
                </span>
                <span class="u-date">
                    <span>最后更新于</span>
                    <em id="updatetime">{{ this.updatetime }}</em>
                </span>
                <a
                    class="u-edit"
                    :class="{ on: isEditMode }"
                    id="edit"
                    @click="editHandler($event)"
                    >📝编辑修订</a
                >
            </div>
            <!-- Article -->
            <div
                class="m-section u-content"
                :class="{
                    'u-null': isnull,
                    isEditable: isEditMode,
                    hide: isTW,
                }"
                :contenteditable="isEditMode ? true : false"
                @input.once="changeHandler"
                id="content"
            >
                <Article :content="content" />
            </div>
            <div
                class="m-section u-content"
                :class="{ hide: !isTW }"
                id="content-tw"
                v-html="content_tw"
            ></div>
            <!-- Tips -->
            <div class="m-tips" :class="{ hide: !isEditMode }">
                游戏内仅支持简易文本修订,如需上传图片等,请至<a
                    href="https://www.jx3box.com"
                    >JX3BOX网站</a
                >操作
            </div>
            <!-- Author -->
            <div class="m-author isEditable" :class="{ hide: !isEditMode }">
                <div class="u-level">
                    难度<span>(1-5)</span> :
                    <input
                        type="number"
                        id="level"
                        min="1"
                        max="5"
                        v-model="publish.level"
                    />
                </div>
                <div class="u-author">
                    作者 :
                    <input
                        type="text"
                        id="author"
                        v-model="publish.author"
                        autocomplete="off"
                    />
                </div>
                <div class="u-remark">
                    修订说明 :
                    <input
                        type="text"
                        id="remark"
                        v-model="publish.remark"
                        autocomplete="off"
                    />
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
        </div>
    </div>
</template>

<script>
const { JX3BOX, Utils } = require("@jx3box/jx3box-common");
const axios = require("axios");
const _ = require("lodash");
let qs = require("qs");
import dataFormat from "../utils/dateFormat";
import UA from "../utils/ua";
import cn2tw from "../utils/cn2tw";

    export default {
        name: "Content",
        props: ["query"],
        data: function () {
            return {
                achievement: {},
                post_id: null,
                post: {},
                isEditMode: false,
                isChanged: false,
                isTW: false,
                publish: {
                    level: 1,
                    author: this.$options.filters.playerName(this.query.player),
                    remark: "",
                },
                ua: {},
                content_tw: "",
            };
        },
        computed: {
            stars: function () {
                return this.post
                    ? this.renderStars(this.post.level)
                    : "⭐️⭐️⭐️⭐️⭐️";
            },
            updatetime: function () {
                return this.post ? dataFormat(this.post.updated) : "0000-00-00";
            },
            content: function () {
                return (
                    (this.post &&
                        _.get(this.post, "content") &&
                        Utils.resolveImagePath(_.get(this.post, "content"))) ||
                    "💧 暂无攻略"
                );
            },
            isnull: function () {
                return this.post.content ? false : true;
            },
            warning: function () {
                return this.ua.browser == "ie" && this.ua.version < 9
                    ? true
                    : false;
            },
        },
        methods: {
            setPostId(post_id) {
                this.post_id = post_id;
                this.$emit('setPostId', post_id);
            },
            renderStars: function (val) {
                return "⭐️".repeat(this.resolveLevelValue(val));
            },
            editHandler: function (e) {
                e.preventDefault();
                this.isTW = false;
                this.isEditMode = true;
            },
            cancelHandler: function (e) {
                e.preventDefault();
                this.isEditMode = false;
            },
            submitHanlder: function (e) {
                e.preventDefault();

                if (!this.isChanged) {
                    alert("没有任何改动，请勿滥提交");
                    return;
                }

                if (!this.publish.remark) {
                    alert("请简单描述本次修订说明");
                    return;
                }

                // Level校验
                let level = this.resolveLevelValue(
                    this.publish.level ? this.publish.level : this.post.level
                );

                // 用户名
                let author = this.$options.filters.playerName(this.publish.author);

                axios({
                    method: "POST",
                    url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/post`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                    data: qs.stringify({
                        post: {
                            level: level,
                            user_nickname: author,
                            content: document.getElementById("content").innerHTML,
                            remark: this.publish.remark,
                        },
                    }),
                })
                    .then((data) => {
                        data = data.data;
                        if (data.code === 200) {
                            alert("✔️ 提交成功,请等待审核");
                        } else {
                            alert(`⚠️ ${data.message}`);
                        }
                    })
                    .catch((err) => {
                        alert("⚠️ 网络异常,提交失败");
                    })
                    .finally(() => {
                        this.isEditMode = false;
                    });
            },
            changeHandler: function (e) {
                this.isChanged = true;
            },
            translateHandler: function (e) {
                e.preventDefault();
                this.isTW = !this.isTW;
            },
            translateTrigger: function () {
                this.content_tw = cn2tw(this.content);
            },
            stat: function (cj_id, cj_title) {
                axios.post(`${JX3BOX.__spider}jx3stat/cj`, {
                    cjid: cj_id,
                    title: cj_title || "----",
                    ua: JSON.stringify(this.ua),
                });
            },
            resolveLevelValue: function (val) {
                return Math.min(Math.max(1, parseInt(val)), 5);
            },
            // 获取成就最新攻略
            get_achievement_newest_post() {
                axios({
                    url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/post`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                })
                    .then((res) => {
                        this.post = res.data.data.post || {};
                        this.publish.level = this.resolveLevelValue(
                            _.get(this.post, "level")
                        );
                        this.achievement = res.data.data.achievement;
                        this.setPostId(this.post.id);
                    })
                    .catch((err) => {
                        this.isnull = true;
                        this.post.content = "⚠️ 数据加载异常";
                    })
                    .finally(() => {
                        // $("#content img").length && Utils.checkImageLoad($("#content img"));
                        this.stat(this.query.id, this.achievement.Name);
                    });
            },
            // 获取成就攻略
            get_achievement_post() {
                if (!this.post_id) return;
                axios({
                    url: `${JX3BOX.__helperUrl}api/achievement/post/${this.post_id}`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                })
                    .then(res => {
                        this.post = res.data.data.post || {};
                        this.publish.level = this.resolveLevelValue(
                            _.get(this.post, "level")
                        );
                    })
                    .catch(err => {
                        this.isnull = true;
                        this.post.content = "⚠️ 数据加载异常";
                    })
                    // .finally(() => {
                    //     $("#content img").length && Utils.checkImageLoad($("#content img"));
                    // });
            },
            resolveIconPath(id) {
                return id
                    ? JX3BOX.__iconPath + 'icon/' + id + ".png"
                    : JX3BOX.__imgPath + "image/common/nullicon.png";
            },
            iconErrorHandler(e) {
                e.target.src = JX3BOX.__imgPath + "image/common/nullicon.png";
            },
        },
        mounted: function () {
            this.ua = UA();

            // 获取成就最新攻略
            if (this.query.id) this.get_achievement_newest_post();
        },
        watch: {
            post_id() {
                this.get_achievement_post();
            }
        }
    };
</script>
