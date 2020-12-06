<template>
    <div id="app">
        <Content :query="query" ref="content" @setPostId="setPostId"/>
        <Relation :query="query" ref="relation" v-if="type=='achievement'"/>
        <relation-plans :item_id="query.id" v-if="type=='item'"/>
        <Revision :query="query" ref="revision" @setPostId="setPostId"/>
        <Comment :query="query" ref="comment"/>
    </div>
</template>

<script>
const URI = require("urijs");
const _ = require("lodash");
import Content from '@/components/Content.vue';
import Revision from '@/components/Revision.vue';
import Relation from '@/components/achievement/Relation.vue';
import RelationPlans from '@/components/item/RelationPlans.vue';
import Comment from '@/components/Comment.vue';

export default {
    name: "App",
    data: function() {
        return {
            query : URI(location.href).query(true),
        };
    },
    computed: {
        type() {
            return this.$options.filters.source_type();
        }
    },
    methods: {
        setPostId(post_id){
            this.$refs.content.post_id = post_id;
            this.$refs.revision.post_id = post_id;
        }
    },
    components: {
        Content,
        Revision,
        Relation,
        'relation-plans' : RelationPlans,
        Comment,
    }
};
</script>

<style lang="less">
//------ ⚠️预览用,发布前请注释 ------//
// html{
//     background:url('./assets/img/view.jpg') no-repeat 0 0;
//     width:802px;
//     height:572px;
//     padding:67px 3px 3px 4px;
//     box-sizing: border-box;
// }
// body{
//     height:100%;
//     background-color: rgba(255,255,255,1);
// }
//------ ⚠️预览用,发布前请注释 ------ //


@import './assets/css/common.less';
@import './assets/css/header.less';
@import './assets/css/meta.less';
@import './assets/css/block.less';
@import './assets/css/footer.less';
</style>