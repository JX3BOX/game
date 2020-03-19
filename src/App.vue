<template>
    <div id="app">
        <Content :query="query" />
        <Comment :query="query"/>
        <Relation :query="query"/>
        <Revision :query="query"/>
    </div>
</template>

<script>
const URI = require("urijs");

import Content from '@/components/Content.vue';
import Revision from '@/components/Revision.vue';
import Relation from '@/components/Relation.vue';
import Comment from '@/components/Comment.vue';

export default {
    name: "App",
    data: function() {
        return {
            query : URI(location.href).query(true),
        };
    },
    computed: {
    },
    methods: {
    },
    mounted: function() {
        
    },
    components: {
        Content,
        Revision,
        Relation,
        Comment
    }
};
</script>

<style lang="less">
//------ ⚠️预览用,发布前请注释 ------//
html{
    background:url('./assets/img/view.jpg') no-repeat 0 0;
    width:802px;
    height:572px;
    padding:67px 3px 3px 4px;
    box-sizing: border-box;
}
body{
    height:100%;
    background-color: rgba(255,255,255,1);
}
//------ ⚠️预览用,发布前请注释 ------ //


@import './assets/css/common.less';
@import './assets/css/header.less';
@import './assets/css/meta.less';
@import './assets/css/block.less';
@import './assets/css/content.less';
@import './assets/css/footer.less';


</style>