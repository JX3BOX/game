<template>
    <ul class="comments">
        <li class="c-comment" v-for="(comment, key) in comments" :key="key">
            <div class="comment">
                <div class="m-nickname">
                    <span class="u-nickname" v-text="comment.user_nickname"></span>
                    <template v-if="comment.parent_id">
                        <span>&nbsp;回复&nbsp;</span>
                        <span class="u-nickname" v-text="comment.parent.user_nickname"></span>
                    </template>
                </div>
                <p class="u-content" v-html="comment.content"></p>
                <div class="m-reply">
                    <button class="u-reply" :class="{show:comment.reply_form.show}"
                            v-text="comment.reply_form.show ? '收起 ↩' : '💬 回复'"
                            @click="comment.reply_form.show=!comment.reply_form.show">
                    </button>
                    <span class="u-time">{{ comment.updated | dateFormat }}</span>
                </div>
                <div class="m-reply-form" v-if="comment.reply_form.show">
                    <textarea class="u-reply-content" v-model="comment.reply_form.content"></textarea>
                    <div class="u-author">
                        <span>作者 : </span>
                        <input v-model="comment.reply_form.user_nickname" type="text">
                    </div>
                    <button class="u-submit" @click="createComment(comment.reply_form, comment.id)">✔️ 提交</button>
                </div>
            </div>
            <CommentItem v-if="comment.children.length" :comments="comment.children" :query="query"/>
        </li>
    </ul>
</template>

<script>
    const { JX3BOX } = require("@jx3box/jx3box-common");
    const axios = require("axios");
    var qs = require('qs');
    export default {
        name: "CommentItem",
        props: ["comments","query"],
        methods: {
            createComment: function (form, parent_id) {
                if (!content) return;
                if (typeof parent_id === 'undefined') parent_id = 0;
                axios({
                    method: "POST",
                    url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/comment`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                    crossDomain: true,
                    data: qs.stringify({
                        comment: {
                            achievement_id: this.query.id,
                            parent_id: parent_id,
                            user_nickname: form.user_nickname || '匿名',
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
        }
    };
</script>
