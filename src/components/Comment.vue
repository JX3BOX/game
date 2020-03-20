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
                <CommentItem :comments="comments" />
            </div>
        </div>
    </div>
</template>

<script>
import CommentItem from "@/components/CommentItem.vue";
const { JX3BOX } = require("@jx3box/jx3box-common");

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
            $.ajax({
                url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/comments`,
                headers: { Accept: "application/prs.helper.v2+json" },
                type: "GET",
                success: function(data) {
                    if (data.code === 200)
                        that.comments = comments_filter(data.data.comments, 0);
                },
                error: function() {
                    that.comments = false;
                }
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
            .u-nickname { font-weight: 600; color: #d31765; }
            span + .u-nickname{ color: #548379; }
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
                background-color: #1E9FFF;
                cursor: pointer;
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
}
</style>
