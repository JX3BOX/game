<template>
    <div class="m-item-prices">
        <table v-if="prices.length">
            <tr>
                <th>物品</th>
                <th>等级</th>
                <th>上传时间</th>
                <th>服务器</th>
                <th style="text-align:right">一口价 (总价)</th>
                <th style="text-align:right">一口价 (单价)</th>
            </tr>
            <tr v-for="(price, key) in prices" :key="key">
                <td>
                    <div class="m-item-icon">
                        <img class="u-icon" :src="icon_url(item.IconID)">
                        <span class="u-count" v-if="price.n_count>1" v-text="price.n_count"></span>
                    </div>
                    <span class="u-name" v-text="item.Name" :class="{white:item.Quality==1}"
                          :style="{color:item_color(item.Quality)}"></span>
                </td>
                <td v-text="item && item.RequireLevel?item.RequireLevel:1"></td>
                <td v-text="date_format(price.created)"></td>
                <td v-text="price.server"></td>
                <td style="text-align:right" v-text="item_price(price.n_money)"></td>
                <td style="text-align:right" v-text="item_price(price.unit_price)"></td>
            </tr>
        </table>
        <div v-else style="text-align:center">🐖 暂无记录</div>
    </div>
</template>

<script>
    import {get_item_prices} from '../../service/item';
    import {iconLink} from "@jx3box/jx3box-common/js/utils";
    import item_color from "@jx3box/jx3box-editor/assets/js/item/color.js";
    import item_price from "../../utils/ItemPrice.js";
    import date_format from "../../utils/DateFormat.js";

    export default {
        name: "ItemPrices",
        props: ['item_id', 'server'],
        data() {
            return {
                item: null,
                prices: [],
            };
        },
        methods: {
            item_color,
            item_price,
            date_format,
            icon_url: iconLink,
            get_data() {
                if (this.item_id) {
                    get_item_prices(this.item_id, {server: this.server, limit: 15}).then((data) => {
                        data = data.data;
                        if (data.code === 200) {
                            this.item = data.data.item;
                            this.prices = data.data.prices;
                        }
                    });
                }
            }
        },
        watch: {
            item_id() {
                this.get_data();
            },
            server: {
                immediate: true,
                handler() {
                    this.get_data();
                }
            },
        },
    };
</script>

<style lang="less">
    @import '../../assets/css/components/item/prices.less';
</style>
