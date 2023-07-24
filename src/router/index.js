import {createRouter, createWebHistory } from "vue-router";
// import FrontMain from "@/views/FrontMain";
import Dashboard from "@/views/Dashboard/Dashboard";
import SocialRedirect from "@/views/social/SocialRedirect.vue";

const routes = [
    {path: '/', name: 'Dashboard', component: Dashboard},
    {path: '/redirect', name: 'SocialRedirect', component: SocialRedirect},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router