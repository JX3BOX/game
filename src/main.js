// import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);

Vue.config.productionTip = false;
const { JX3BOX } = require("@jx3box/jx3box-common");

import App from "./App.vue";
new Vue({
    render: h => h(App),
    data:{JX3BOX}
}).$mount("#app");

