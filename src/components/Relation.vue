<template>
    <div class="m-block m-boss" id="boss">
        <div class="m-title" id="title">
            <span class="u-label">🔗 相关成就 <em>同BOSS其它成就</em></span>
        </div>
        <div class="m-section">
            <span v-if="relations===null">Loading...</span>
            <span v-if="relations===false">⚠ 数据加载异常</span>
            <span v-if="relations&&!relations.length">No Datas</span>
            <ul class="m-relations" v-if="relations&&relations.length">
                <li v-for="(cj,key) in relations" :key="key">
                    <!--<img class="u-icon" :src="'https://oss.jx3box.com/icon/'+cj.IconID+'.png'"
                         onerror="javascript:this.src='https://oss.jx3box.com/image/common/nullicon.png';">-->
                    <a class="u-title" href="javascript::void(0)" v-text="cj.Name"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const {JX3BOX} = require("@jx3box/jx3box-common");
    const URI = require("urijs");

    //解析查询参数
    let query = URI(location.href).query(true);

    export default {
        name: 'Relation',
        data: function () {
            return {
                relations: null
            }
        },
        computed: {},
        methods: {
            get_relations() {
                let that = this;
                $.ajax({
                    url: `${JX3BOX.__helperUrl}api/achievement/${query.id}/relations`,
                    headers: {Accept: 'application/prs.helper.v2+json'},
                    type: "GET",
                    success: function (data) {
                        if (data.code === 200) that.relations = data.data.relations;
                    },
                    error: function () {
                        that.relations = false;
                    }
                });
            }
        },
        mounted: function () {
            let that = this;

            //数据加载
            that.get_relations();
        },
    }
</script>

<style lang="less">
    .m-relations {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            display: inline-block;
            margin: 5px;
            padding: 5px 10px;
            border-radius: 3px;
            background-color: #EEEEEE;
        }
    }
</style>