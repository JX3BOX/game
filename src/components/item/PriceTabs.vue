<template>
  <div class="m-item-price-tabs">
    <div class="m-price-server">
      <i class="el-icon-s-shop"></i> 全服价格
      <el-select class="u-server" v-model="server" placeholder="请选择服务器" size="mini">
        <el-option key label="前三低价区服" value></el-option>
        <el-option v-for="serve in servers" :key="serve" :label="serve" :value="serve"></el-option>
      </el-select>
    </div>

    <el-tabs v-model="activeTab" type="border-card" @tab-click="active_tab_handle">
      <el-tab-pane label="📈 价格波动" name="item-price-chart">
        <item-price-chart ref="item_price_chart" :item_id="sourceId" :server="server"/>
      </el-tab-pane>
      <el-tab-pane label="💰 近期价格" name="item-prices">
        <item-prices :item_id="sourceId" :server="server"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import ItemPrices from "@/components/item/Prices.vue";
  import ItemPriceChart from "@/components/item/PriceChart.vue";
  import servers from "@jx3box/jx3box-data/data/server/server_list.json";

  export default {
    name: "PriceTabs",
    props: ['sourceId'],
    data() {
      return {
        server: "",
        servers: servers,
        activeTab: "item-price-chart",
      };
    },
    methods: {
      active_tab_handle(tab) {
        if (tab.name === "item-price-chart") {
          this.$nextTick(() => {
            this.$refs.item_price_chart.render();
          });
        }
      },
    },
    components: {
      "item-prices": ItemPrices,
      "item-price-chart": ItemPriceChart,
    },
  };
</script>

<style lang="less">
  @import '../../assets/css/components/item/price-tabs.less';
</style>
