import Vue from "vue";
import VueRouter from "vue-router";
const profile = () => import("@/components/profile/Profile");
const signUp = () => import("@/components/auth/sign-up");
const signIn = () => import("@/components/auth/sign-in");
Vue.use(VueRouter);


const routes = [
    {
        path: "/auth/sign-up",
        component: signUp,
    },
    {
        path: "/auth/sign-in",
        component: signIn,
    },
    {
        name: "profile",
        path: "/profile/:username",
        component: profile,
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});


export default router;