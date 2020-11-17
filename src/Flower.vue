<template>
    <div id="app">
        
    </div>
</template>

<script>
const URI = require("urijs");
const _ = require("lodash");
export default {
    name: "App",
    data: function() {
        return {
            query : URI(location.href).query(true),
        };
    },
    computed: {
        item: function (){
            return this.query && this.query.item || '红玫瑰'
        },
        server : function (){
            return this.query && this.query.server || '梦江南'
        }
    },
    methods: {
    },
    mounted: function() {
    },
    components: {
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


@import './assets/css/flower.less';
</style>