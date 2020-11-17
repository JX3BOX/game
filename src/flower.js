// 第三方UI组件
import Vue from "vue";
Vue.config.productionTip = false;

// 通用UI模块
// import JX3BOX_UI from '@jx3box/jx3box-common-ui'
// import "@jx3box/jx3box-common/css/element.css";
// import "@jx3box/jx3box-common/css/normalize.css";
// Vue.use(JX3BOX_UI);

import App from "./Flower.vue";

new Vue({
    render: h => h(App),
}).$mount("#app");