<template>
    <div class="m-block m-comment" id="comment">
        <div class="m-title" id="title">
            <span class="u-label">💖 评论</span>
        </div>
        <div class="m-section">
            <span v-if="comments === null">Loading...</span>
            <span v-if="comments === false">⚠️ 数据加载异常</span>
            <span v-if="comments && !comments.length">💧 暂无评论</span>
            <div class="m-comments">
                <CommentItem :comments="comments" :query="query"/>
                <div class="m-reply-form">
                    <h4 class="u-title">📰 回复</h4>
                    <textarea class="u-reply-content" style="resize:vertical" v-model="reply_form.content"></textarea>
                    <div class="u-author">
                        <span>作者 : </span>
                        <input v-model="reply_form.user_nickname" type="text">
                    </div>
                    <button class="u-submit" @click="create_comment(reply_form)">✔️ 提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CommentItem from "@/components/CommentItem.vue";

    const {JX3BOX} = require("@jx3box/jx3box-common");
    const axios = require("axios");
    const _ = require("lodash");
    const qs = require('qs');

    export default {
        name: "Comment",
        props: ["query"],
        data: function () {
            return {
                type: _.get(this, 'query.type', 'achievement'),
                comments: null,
                reply_form: {
                    content: '',
                    user_nickname: this.$options.filters.playerName(this.query.player)
                }
            };
        },
        computed: {},
        methods: {
            get_comments() {
                let that = this;
                axios({
                    method: "GET",
                    url: `${JX3BOX.__helperUrl}api/wiki/comments`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                    params: {type: this.type, source_id: this.query.id},
                }).then(function (data) {
                    data = data.data;
                    if (data.code === 200) {
                        let comments = data.data.comments;
                        for (var i = 0; i < comments.length; i++) {
                            comments[i]['reply_form'] = {
                                show: false,
                                content: '',
                                user_nickname: that.$options.filters.playerName(that.query.player),
                            }
                        }
                        that.comments = comments_filter(comments, 0);
                    }
                }, function () {
                    that.comments = false;
                });
            },
            create_comment(form, parent_id) {
                // 设置parent_id默认值
                if (typeof parent_id === 'undefined') parent_id = 0;

                // 校验评论内容
                if (!form.content) {
                    alert("请先填写评论内容再尝试提交");
                    return;
                }

                axios({
                    method: "POST",
                    url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/comment`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                    crossDomain: true,
                    data: qs.stringify({
                        comment: {
                            achievement_id: this.query.id,
                            parent_id: parent_id,
                            user_nickname: this.$options.filters.playerName(form.user_nickname),
                            content: form.content,
                        }
                    })
                }).then(data => {
                    data = data.data;
                    if (data.code === 200) {
                        form.content = '';
                        alert("✔️ 提交成功,请等待审核");
                    } else {
                        alert(`⚠️ ${data.message}`);
                    }
                }).catch(err => {
                    alert("⚠️ 网络异常,提交失败");
                }).finally(() => {
                    form.show = false;
                });
            }
        },
        mounted: function () {
            let that = this;

            //数据加载
            that.get_comments();
        },
        components: {
            CommentItem
        }
    };

    function comments_filter(comments, parent) {
        let outputs = [];
        for (let index in comments) {
            let item = comments[index];
            if (!item) continue;
            if (item.parent_id === parent) {
                // 置空当前元素
                comments[index] = null;
                // 递归执行
                let children = comments_filter(comments, item.id);
                item.children = children ? children : [];
                outputs.push(item);
            }
        }
        return outputs;
    }
</script>

<style lang="less">
    .m-comments {
        font-size: 14px;

        .comments {
            padding-left: 0;
            list-style: none;

            .m-nickname {
                .u-nickname {
                    font-weight: 600;
                    color: @theme-shadow;
                }

                span + .u-nickname {
                    color: #888888;
                }
            }

            .comment {
                padding: 5px 0;
                border-bottom: 1px solid #EEEEEE;
                overflow: hidden;
            }

            .u-content {
                margin: 10px 0;
                opacity: 0.8;
            }

            .m-reply {
                padding-bottom: 10px;

                .u-reply {
                    padding: 5px 10px;
                    outline: none;
                    border: none;
                    color: #FFFFFF;
                    background-color: @theme-shadow;
                    cursor: pointer;

                    &.show {
                        background-color: @theme;
                    }
                }

                .u-time {
                    float: right;
                    margin-top: 5px;
                    font-size: 12px;
                    opacity: 0.5;
                }
            }
        }

        & > .comments {
            margin: 0;
            padding: 0;
        }

        & > .comments > .c-comment > .comments {
            padding-left: 15px;
        }

        .m-reply-form {
            overflow: hidden;

            .u-title {
                margin-bottom: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid @theme-border;
            }

            .u-reply-content {
                width: 100%;
                height: 4em;
                padding: 5px;
                line-height: 1.5em;
                box-sizing: border-box;
            }

            .u-author {
                .fl;

                input {
                    .fz(14px, 28px);
                    .h(28px);
                    border: 1px solid #DDDDDD;
                    .r(3px);
                    padding: 0 5px;
                }
            }

            .u-submit {
                float: right;
                padding: 5px 10px;
                outline: none;
                border: none;
                color: #FFFFFF;
                background-color: @theme-border;
                cursor: pointer;
            }
        }
    }
</style>
