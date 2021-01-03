import Vue from "vue";
import Router from "vue-router";
import Action from "./views/action/action.vue";
import Drama from "./views/drama/drama.vue"
import Popular from "./views/popular/popular.vue"
import Scifi from '@/views/scifi/scifi.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: "/action",
            name:"action",
            component: Action
        },
        {
            path: "/drama",
            name:"drama",
            component: Drama
        },
        {
            path: "/popular",
            name:"popular",
            component: Popular
        },
        {
            path: "/scifi",
            name:"scifi",
            component: Scifi
        }
    ]
});