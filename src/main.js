// import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);

Vue.config.productionTip = false;

import App from "./App.vue";
import dateFormat from "./utils/dateFormat";
import playerName from "./utils/playerName";

Vue.filter('dateFormat', dateFormat);
Vue.filter('playerName', playerName);

new Vue({
    render: h => h(App),
}).$mount("#app");
