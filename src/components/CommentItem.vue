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
                    <button class="u-reply">回复</button>
                    <span class="u-time">{{ comment.updated | dateFormat }}</span>
                </div>
            </div>
            <CommentItem
                    v-if="comment.children.length"
                    :comments="comment.children"
            />
        </li>
    </ul>
</template>

<script>
    export default {
        name: "CommentItem",
        props: ["comments"]
    };
</script>
