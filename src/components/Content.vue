<template>
    <div class="m-content-wrapper">
        <!-- META -->
        <div class="m-meta">
            <span class="u-group">
                <em>【意见反馈QQ群】</em>
                <b>614370825</b>
            </span>
            <span class="u-date">
                <span>最后更新于</span>
                <em id="updatetime">{{ this.updatetime }}</em>
            </span>
            <span class="u-star">
                <span>难度</span>
                <span id="stars">{{ this.stars }}</span>
            </span>
        </div>
        <div class="m-block m-content">
            <!-- Warning -->
            <div class="m-warning" :class="{ hide: !warning }">
                ❌ 您的浏览器版本太低,将无法正常使用本功能
            </div>

            <!-- Panel -->
            <div class="m-title" id="title">
                <span class="u-label">✔️ 成就攻略</span>
                <a
                    class="u-zhtr"
                    :class="{ on: isTW }"
                    @click="translateHandler"
                    id="translator"
                >
                    🌸[
                    <span class="u-tr">台灣正體</span>
                    <span class="u-cn">简体中文</span>
                    ]
                </a>
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
                    hide: isTW
                }"
                :contenteditable="isEditMode ? true : false"
                @input.once="changeHandler"
                id="content"
                v-html="content"
            ></div>
            <div
                class="m-section u-content"
                :class="{ hide: !isTW }"
                id="content-tw"
            >
                云函数接口处理的繁体结果,免得游戏里浏览器卡死
            </div>
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
                        v-model="publish.star"
                    />
                </div>
                <div class="u-author">
                    作者 :
                    <input
                        type="text"
                        id="author"
                        disabled
                        v-model="publish.author"
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
import dataFormat from '../utils/dateFormat';
import UA from "../utils/ua";
import "../utils/hash";

export default {
    name: "Content",
    props: ["query"],
    data: function() {
        return {
            post: {},
            isEditMode: false,
            isChanged: false,
            isTW: false,
            publish: {
                stars: 1, //TODO:等待修改
                author: this.query.player //TODO:插件传递,解密或传递方式
            },
            ua: {}
        };
    },
    computed: {
        stars: function() {
            //TODO:
            // return this.post ? this.renderStars(this.post.stars) : '⭐️⭐️⭐️⭐️⭐️'
            return "⭐️⭐️⭐️⭐️⭐️";
        },
        updatetime: function() {
            return this.post ? dataFormat(this.post.updated) : "0000-00-00";
        },
        content: function() {
            return (
                Utils.resolveImagePath(_.get(this.post, "content")) ||
                "💧 暂无攻略"
            );
        },
        isnull: function() {
            return this.post.content ? false : true;
        },
        warning: function() {
            return this.ua.browser == "ie" && this.ua.version < 9
                ? true
                : false;
        }
    },
    methods: {
        renderStars: function(val) {
            return "⭐️".repeat(Math.min(Math.max(1, parseInt(val)), 5));
        },
        editHandler: function(e) {
            e.preventDefault();
            this.isTW = false;
            this.isEditMode = true;
        },
        cancelHandler: function(e) {
            e.preventDefault();
            this.isEditMode = false;
        },
        submitHanlder: function(e) {
            e.preventDefault();

            if (!this.isChanged) {
                alert("没有任何改动,请勿滥提交");
                this.isEditMode = false;
                return;
            }

            // TODO:提交post请求至接口
            // axios
            //     .post(``)
            //     .then(res => {
            //         alert("✔️ 提交成功,请等待审核");
            //     })
            //     .catch(err => {
            //         alert("⚠️ 网络异常,提交失败");
            //     })
            //     .finally(() => {
            //         this.isEditMode = false;
            //     });
        },
        changeHandler: function(e) {
            this.isChanged = true;
        },
        translateHandler: function(e) {
            e.preventDefault();
            this.isTW = !this.isTW;

            // TODO:增加翻译
        },
        stat: function() {
            axios.post(`${JX3BOX.__spider}jx3stat/cj`, {
                cjid: this.query.id,
                title: this.post.title || "----",
                ua: JSON.stringify(this.ua)
            });
        }
    },
    mounted: function() {
        this.ua = UA();

        if (this.query.id) {
            axios({
                url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/post`,
                headers: { Accept: "application/prs.helper.v2+json" }
            })
                .then(res => {
                    this.post = res.data.data.post || {};
                })
                .catch(err => {
                    this.isnull = true;
                    this.post.content = "⚠️ 数据加载异常";
                })
                .finally(() => {
                    this.stat();
                    //图片备用CDN
                    $("#content img").length &&
                        Utils.checkImageLoad($("#content img"));
                });
        }
    }
};
</script>
