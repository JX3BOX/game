// 第三方UI组件
import Vue from "vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);

import Clipboard from 'v-clipboard';
Vue.use(Clipboard);

// 通用UI模块
// import JX3BOX_UI from '@jx3box/jx3box-common-ui'
// import "@jx3box/jx3box-common/css/element.css";
// import "@jx3box/jx3box-common/css/normalize.css";
// Vue.use(JX3BOX_UI);

import App from "./Flower.vue";

new Vue({
    render: h => h(App),
}).$mount("#app");
