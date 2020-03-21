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
            </div>
        </div>
    </div>
</template>

<script>
import CommentItem from "@/components/CommentItem.vue";
const { JX3BOX } = require("@jx3box/jx3box-common");
const axios = require("axios");
export default {
    name: "Comment",
    props: ["query"],
    data: function() {
        return {
            comments: null
        };
    },
    computed: {},
    methods: {
        get_comments() {
            let that = this;
            axios({
                method: "GET",
                url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/comments`,
                headers: {Accept: "application/prs.helper.v2+json"}
            }).then(function (data) {
                data = data.data;
                if (data.code === 200) {
                    let comments = data.data.comments;
                    for(var i = 0; i<comments.length;i++){
                        comments[i]['reply_form'] = {
                            show: false,
                            content: '',
                            user_nickname: that.query.player || '匿名',
                        }
                    }
                    that.comments = comments_filter(comments, 0);
                }
            }, function () {
                that.comments = false;
            });
        }
    },
    mounted: function() {
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
    $.each(comments, function(index, item) {
        if (!item) return true;
        if (item.parent_id === parent) {
            // 置空当前元素
            comments[index] = null;
            // 递归执行
            let children = comments_filter(comments, item.id);
            item.children = children ? children : [];
            outputs.push(item);
        }
    });
    return outputs;
}
</script>

<style lang="less">
.m-comments {
    font-size: 14px;

    .comments {
        padding-left: 0;
        list-style: none;

        .m-nickname{
            .u-nickname { font-weight: 600; color: @theme-shadow; }
            span + .u-nickname{ color: #888; }
        }

        .comment {
            padding: 5px 0;
            border-bottom: 1px solid #eeeeee;
            overflow: hidden;
        }

        .u-content {
            margin: 10px 0;
            opacity: 0.8;
        }

        .m-reply {
            padding-bottom:10px;

            .u-reply {
                padding:5px 10px;
                outline: none;
                border: none;
                color: #FFFFFF;
                background-color: @theme-shadow;
                cursor: pointer;

                &.show{
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

        .m-reply-form {
            .u-reply-content {
                width: 100%;
                height: 4em;
                padding: 5px;
                line-height: 1.5em;
                box-sizing: border-box;
            }
            .u-author {
                .fl;

                input{
                    .fz(14px,28px);
                    .h(28px);
                    border:1px solid #ddd;
                    .r(3px);
                    padding:0 5px;
                }
            }
            .u-submit {
                float: right;
                padding:5px 10px;
                outline: none;
                border: none;
                color: #FFFFFF;
                background-color: @theme-border;
                cursor: pointer;
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
}
</style>
