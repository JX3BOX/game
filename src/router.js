import Vue from "vue";
import VueRouter from "vue-router";

// 组件懒加载
const Wiki = () => import("./views/Wiki.vue");

Vue.use(VueRouter);

const routes = [
    // 百科详情
    {name: 'wiki', path: '/', component: Wiki},

    // 默认页重定向
    {path: '*', redirect: 'wiki'}
];

const router = new VueRouter({
    routes
});

export default router;
