import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/edit/:page_id",
        name: "page_edit",
        component: () => import("./pages/editor/index.vue"),
    }, {
        path: "/edit/preview/:page_id",
        name: "page_edit_preview",
        component: () => import("./pages/editor-preview/index.vue"),
    },{
        path: "/preview/:page_id",
        name: "page_preview",
        component: () => import("./pages/editor/index.vue"),
    },{
        path: "/view/:page_id",
        name: "page_view",
        component: () => import("./pages/editor/index.vue"),
    }]
});