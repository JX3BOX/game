<template>
    <span class="m-game-price">
        <span v-if="formartPrice(price,'zhuan')">
            {{formartPrice(price,'zhuan')}}
            <img src="../assets/img/price/zhuan.png" alt="砖" />
        </span>
        <span v-if="formartPrice(price,'jin')">
            {{formartPrice(price,'jin')}}
            <img src="../assets/img/price/jin.png" alt="金" />
        </span>
        <span v-if="formartPrice(price,'yin')">
            {{formartPrice(price,'yin')}}
            <img src="../assets/img/price/yin.png" alt="银" />
        </span>
        <span v-if="formartPrice(price,'tong')">
            {{formartPrice(price,'tong')}}
            <img src="../assets/img/price/tong.png" alt="铜" />
        </span>
    </span>
</template>

<script>
export default {
    name: "GamePrice",
    props: ["price"],
    components: {},
    data: function () {
        return {};
    },
    computed: {},
    watch: {},
    methods: {
        formartPrice(price, unit) {
            let result = {
                zhuan: parseInt(price / 100 / 100 / 10000) || 0,
                jin: parseInt((price / 100 / 100) % 10000) || 0,
                yin: parseInt((price / 100) % 100) || 0,
                tong: parseInt(price % 100) || 0,
            };
            return result[unit];
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>

<style scoped lang="less">
    .m-game-price{
        img{
            .y;
        }
    }
    
</style>