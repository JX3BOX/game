<template>
    <div class="m-block m-revision" id="revision">
        <div class="m-title" id="title">
            <span class="u-label">📄 历史版本</span>
        </div>
        <div class="m-section">
            <span v-if="versions === null">Loading...</span>
            <span v-if="versions === false">⚠️ 数据加载异常</span>
            <span v-if="versions && !versions.length">💧 暂无数据</span>
            <table v-if="versions && versions.length" id="histories">
                <tr>
                    <th>版本</th>
                    <th>更新时间</th>
                    <th>贡献者</th>
                    <th>修订说明</th>
                </tr>
                <tr class="history" v-for="(ver, key) in versions" :key="key">
                    <td>
                        <span class="u-version" :class="{bold:post_id==ver.id}" @click="setPostId(ver.id)"
                              v-text="'v' + (versions.length - key)"></span>
                    </td>
                    <td>{{ ver.updated | dateFormat }}</td>
                    <td v-text="ver.user_nickname"></td>
                    <td v-text="ver.remark"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    const {JX3BOX} = require("@jx3box/jx3box-common");
    const axios = require("axios");
    export default {
        name: "Revision",
        props: ["query"],
        data: function () {
            return {
                versions: null,
                post_id: null,
            };
        },
        computed: {},
        methods: {
            setPostId(post_id) {
                this.post_id = post_id;
                this.$emit('setPostId', post_id);
            },
            getVersions() {
                let that = this;
                axios({
                    method: "GET",
                    url: `${JX3BOX.__helperUrl}api/achievement/${this.query.id}/versions`,
                    headers: {Accept: "application/prs.helper.v2+json"},
                }).then(function (data) {
                    data = data.data;
                    if (data.code === 200) that.versions = data.data.versions;
                }, function () {
                    that.versions = false;
                });
            }
        },
        mounted: function () {
            this.getVersions();
        }
    };
</script>

<style lang="less">
    #histories {
        width: 100%;
        margin: -5px 0;
        opacity: 0.8;
        font-size: 14px;
        text-align: left;
        border-collapse: collapse;
        border-spacing: 0;

        th,
        td {
            padding: 8px 10px;
            font-weight: normal;
        }

        a {
            color: @theme-shadow;

            &:hover {
                box-shadow: 0 1px 0 @theme-shadow;
            }
        }

        th {
            border-bottom: 2px solid #dddddd;
        }

        td {
            border-bottom: 1px solid #dddddd;
        }

        tr:last-child td {
            border-bottom: none;
        }

        .u-version {
            color: #0366d6;
            cursor: pointer;

            &.bold {
                color: inherit;
                font-weight: bold;
            }
        }
    }
</style>
