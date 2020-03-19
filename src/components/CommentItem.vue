<template>
    <ul class="comments">
        <li class="c-comment" v-for="(comment,key) in comments" :key="key">
            <div class="comment">
                <span class="nickname" v-text="comment.user_nickname"></span>
                <span class="time">{{comment.updated|date_format}}</span>
                <p class="content" v-html="comment.content"></p>
            </div>
            <CommentItem v-if="comment.children.length" :comments="comment.children"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CommentItem',
        props: ['comments']
    }
</script>