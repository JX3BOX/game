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
                    <textarea class="u-reply-content" style="resize:vertical" v-model="comment.reply_form.content"></textarea>
                    <div class="u-author">
                        <span>作者 : </span>
                        <input v-model="comment.reply_form.user_nickname" type="text">
                    </div>
                    <button class="u-submit" @click="create_comment(comment.reply_form, comment.id)">✔️ 提交</button>
                </div>
            </div>
            <CommentItem v-if="comment.children.length" :comments="comment.children" :query="query"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "CommentItem",
        props: ["comments","query"],
        methods: {
            create_comment(form, parent_id){
                this.$parent.create_comment(form, parent_id);
            }
        }
    };
</script>
