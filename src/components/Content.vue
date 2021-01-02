<template>
    <div class="m-content-wrapper">
        <!-- META -->
        <div class="m-meta">
            <span class="u-title">
                <img class="u-icon" :src="$options.filters.iconUrl(source.IconID)"
                     @error.once="$options.filters.iconError($event)"/>
                <span class="u-text">{{ source.Name }}</span>
            </span>
            <span class="u-star">
                <span>难度</span>
                &nbsp;
                <span id="stars" v-text="$options.filters.star(post.level)"></span>
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
                <span class="u-label">📋 {{type|moduleName}}攻略</span>
                <a class="u-zhtr" :class="{ on: isTW }" @click="translateHandler" @click.once="translateTrigger"
                   id="translator">
                    🌸[
                    <span class="u-tr">繁體</span>
                    <span class="u-cn">简体</span>
                    ]
                </a>
                <span class="u-date" v-if="post.updated">
                    <span>最后更新于</span>
                    <em id="updated" v-text="$options.filters.dateFormat(post.updated)"></em>
                </span>
                <a class="u-edit" :class="{ on: isEditMode }" id="edit" @click="editHandler($event)">📝编辑修订</a>
            </div>
            <!-- Article -->
            <div class="m-section u-content" style="padding:0">
                <div v-show="content.trim() || isEditMode" :contenteditable="isEditMode ? true : false"
                     @input.once="changeHandler" id="content" :class="{
                        isEditable: isEditMode,
                        hide: isTW,
                    }"
                >
                    <Article :content="content" :pageable="false" />
                </div>
                <div v-show="!content.trim() && !isEditMode" class="u-null">
                    💧 暂无攻略 , <a class="u-edit" @click="editHandler($event)">我来写</a>
                </div>
            </div>
            <div class="m-section u-content" :class="{ hide: !isTW }" id="content-tw" v-html="content_tw"></div>
            <!-- Tips -->
            <div class="m-tips" :class="{ hide: !isEditMode }">
                游戏内仅支持简易文本修订,如需上传图片等,请至<a href="https://www.jx3box.com">JX3BOX网站</a>操作
            </div>
            <!-- Author -->
            <div class="m-author isEditable" :class="{ hide: !isEditMode }">
                <div class="m-other-fields">
                    <div class="u-level">
                        <span>难度(1-5)： </span>
                        <input type="number" id="level" min="1" max="5" v-model="publish.level"/>
                    </div>
                    <div class="u-author">
                        <span>作者： </span>
                        <input type="text" id="author" v-model="publish.author" autocomplete="off"/>
                    </div>
                    <div class="u-remark">
                        <span>修订说明： </span>
                        <input type="text" id="remark" v-model="publish.remark" autocomplete="off"/>
                    </div>
                </div>
                <div class="u-btn">
                    <a class="u-btn-cancel" id="cancel" @click="cancelHandler($event)">取消</a>
                    <a class="u-btn-submit" id="submit" @click="submitHanlder($event)">提交</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const {JX3BOX, Utils} = require("@jx3box/jx3box-common");
    const axios = require("axios");
    const _ = require("lodash");
    let qs = require("qs");
    import {ua as UA} from "../utils";
    import cn2tw from "../utils/cn2tw";
    import Article from "@jx3box/jx3box-editor/src/Article.vue";
    import {get_wiki_newest_post, get_wiki_post} from '../service/wiki_post';
    import {postStat} from '../service/stat';

    export default {
        name: "Content",
        props: ["query"],
        data() {
            return {
                type: this.$options.filters.source_type(),
                source: {},
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
            content: function () {
                let content = this.post &&
                    _.get(this, "post.content", '') &&
                    Utils.resolveImagePath(_.get(this, "post.content", ''));
                content = content.replace(/(<p>)?\s*◆成就难度 [★]+\s*(<\/p>)?/ig, '');
                content = content.replace(/(<p>)?\s*◆花费时长 [★]+\s*(<\/p>)?/ig, '');
                content = content.replace(/(<p>)?\s*◆成就攻略\s*(<\/p>)?/ig, '');
                return content ? content : ' ';
            },
            warning: function () {
                return this.ua.browser == "ie" && this.ua.version < 9 ? true : false;
            },
        },
        methods: {
            setPostId(post_id) {
                this.post_id = post_id;
                this.$emit("setPostId", post_id);
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
                let level = this.publish.level ? this.publish.level : this.post.level;

                // 用户名
                let author = this.$options.filters.playerName(this.publish.author);

                axios({
                    method: "POST",
                    url: `${JX3BOX.__helperUrl}api/wiki/post`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                    data: qs.stringify({
                        post: {
                            type: this.type,
                            source_id: this.query.id,
                            level: level,
                            user_nickname: author,
                            content: document.getElementById("c-article").innerHTML,
                            remark: this.publish.remark,
                        },
                    }),
                }).then((data) => {
                    data = data.data;
                    if (data.code === 200) {
                        alert("✔️ 提交成功,请等待审核");
                    } else {
                        alert(`⚠️ ${data.message}`);
                    }
                }).catch((err) => {
                    alert("⚠️ 网络异常,提交失败");
                }).finally(() => {
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
        },
        mounted: function () {
            this.ua = UA();

            // 获取最新攻略
            if (this.query.id) {
                let source_id = this.query.id;
                let $http = null;
                switch (this.type) {
                    case 'achievement':
                    case 'item':
                        $http = get_wiki_newest_post(this.type, source_id);
                        break;
                }
                $http && $http.then((res) => {
                    this.post = res.data.data.post || {};
                    this.publish.level = _.get(this.post, "level");
                    this.source = res.data.data.source;
                    this.setPostId(this.post.id);
                }).catch((err) => {
                    this.post.content = "⚠️ 数据加载异常";
                }).finally(() => {
                    postStat(source_id);
                });
            }
        },
        watch: {
            post_id() {
                // 获取攻略
                if (this.post_id) {
                    get_wiki_post(this.post_id).then((res) => {
                        this.post = res.data.data.post || {};
                        this.publish.level = _.get(this.post, "level");
                    }).catch((err) => {
                        this.post.content = "⚠️ 数据加载异常";
                    });
                }
            },
        },
        components: {
            Article
        }
    };
</script>

<style lang="less">
    @import '../assets/css/content.less';
</style>