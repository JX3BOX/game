// 第三方UI组件
import Vue from "vue";
Vue.config.productionTip = false;
import ElementUI from "element-ui";
Vue.use(ElementUI);

// 通用UI模块
// import JX3BOX_UI from '@jx3box/jx3box-common-ui'
// import "@jx3box/jx3box-common/css/element.css";
// import "@jx3box/jx3box-common/css/normalize.css";
// Vue.use(JX3BOX_UI);

import router from "../router/wiki";
import App from "./wiki.vue";

new Vue({
    router: router,
    render: h => h(App),
}).$mount("#app");